import * as Mock from '../MockEnvironment';
import { MissingTerms } from '../../src/ui/MissingTerm/MissingTerms';
import { $$ } from '../../src/Core';
import { FakeResults } from '../Fake';
import { IQueryResult } from '../../src/rest/QueryResult';

export function MissingTermsTest() {
  describe('MissingTerm', () => {
    let test: Mock.IBasicComponentSetup<MissingTerms>;
    let fakeResult: IQueryResult;

    const mockComponent = (query: string, option = {}) => {
      const test = Mock.advancedResultComponentSetup<MissingTerms>(
        MissingTerms,
        fakeResult,
        new Mock.AdvancedComponentSetupOptions(null, option, (env: Mock.MockEnvironmentBuilder): Mock.MockEnvironmentBuilder => {
          env.withLiveQueryStateModel().queryStateModel.set('q', query);
          return env;
        })
      );
      const analyticsElement = $$('div', {
        className: 'CoveoAnalytics'
      }).el;
      test.env.root.appendChild(analyticsElement);
      return test;
    };

    beforeEach(() => {
      fakeResult = FakeResults.createFakeResult();
    });
    describe('exposes options', () => {
      describe("when the 'clickable' option is set to", () => {
        let missingTermsClickableSpy: jasmine.Spy;
        const clickFirstMissingTerm = () => {
          test.cmp.addTermForcedToAppear = missingTermsClickableSpy;
          const missingTermElement = $$(test.cmp.element).find('.coveo-missing-term');
          missingTermElement.click();
        };

        beforeEach(() => {
          missingTermsClickableSpy = jasmine.createSpy('MissingTermsClickableSpy');
        });

        it('true should allow the user to click on the missingTerm', () => {
          const termPresent = 'my';
          const query = 'This is my query';
          fakeResult.absentTerms = [termPresent];
          test = mockComponent(query, { clickable: true });
          clickFirstMissingTerm();
          expect(missingTermsClickableSpy).toHaveBeenCalled();
        });

        it(`true,
        it should log a addMissingTerm event when it is clicked`, function() {
          const query = 'This is my query';
          fakeResult.absentTerms = ['This'];
          test = mockComponent(query);
          clickFirstMissingTerm();
          expect(test.env.usageAnalytics.logSearchEvent).toHaveBeenCalledWith(
            jasmine.objectContaining({
              name: 'addMissingTerm',
              type: 'missingTerm'
            }),
            jasmine.objectContaining({
              missingTerm: 'This'
            })
          );
        });

        it('false should not allow the user to click on the missingTerm', () => {
          const termPresent = 'my';
          const query = 'This is my query';
          fakeResult.absentTerms = [termPresent];
          test = mockComponent(query, { clickable: false });
          clickFirstMissingTerm();
          expect(missingTermsClickableSpy).not.toHaveBeenCalled();
        });
      });

      it('caption allows the user to change the title for the missing terms', () => {
        const termPresent = 'my';
        const query = 'This is my query';
        const caption = 'The missing term';
        fakeResult.absentTerms = [termPresent];
        test = mockComponent(query, { caption });
        const missingTermsElement = $$(test.cmp.element).find('.coveo-field-caption');
        expect(missingTermsElement.innerText).toBe(caption);
      });

      describe('numberOfTerms', () => {
        beforeEach(() => {
          const query = 'This is my query';
          const numberOfTerms = 1;
          fakeResult.absentTerms = ['This', 'is'];
          test = mockComponent(query, { numberOfTerms });
        });

        it('allows the user to set the maximum number of MissingTerm to be displayed', () => {
          const visibleMissingTerm = $$(test.cmp.element)
            .findAll('.coveo-missing-term')
            .filter(element => {
              return element.style.display === '';
            });
          expect(visibleMissingTerm.length).toBe(1);
        });

        it('when the show more button is clicked, show all the missing terms', () => {
          $$(test.cmp.element)
            .find('.coveo-missing-term-show-more')
            .click();
          const visibleMissingTerm = $$(test.cmp.element)
            .findAll('.coveo-missing-term')
            .filter(element => {
              return element.style.display === '';
            });
          expect(visibleMissingTerm.length).toBe(2);
        });
      });
    });
    describe('when the langage is', () => {
      const getMissingTerms = () => {
        return test.cmp.queryStateModel.get('missingTerms');
      };

      const getWordBoudaryChars = () => {
        return [`-`, `'`, `?`, `*`, `’`, `.`, `~`, `=`, `,`, `/`, `\\`, `:`, `\``, `;`, `_`, `!`, `&`, `(`, `)`];
      };

      describe('English', () => {
        describe('when a words contains words boundary character', () => {
          it(`when the missing term is part of the words,
          it will not be displayed as a missing term.`, () => {
            const wordBoundarysCharacter = getWordBoudaryChars();
            wordBoundarysCharacter.forEach(character => {
              const boundaryCharacter = `\\${character}s`;
              const query = `efile${boundaryCharacter} `;
              fakeResult.absentTerms = [`${boundaryCharacter}`];
              test = mockComponent(query);
              expect(test.cmp.element.childElementCount).toEqual(0);
              expect(test.cmp.missingTerms).toEqual([`${boundaryCharacter}`]);
            });
          });
        });

        describe('when fetching the missing terms from a query', () => {
          let expectedResult: string[];
          beforeEach(() => {
            const query = 'This is my query';
            test = mockComponent(query);
            expectedResult = [];
          });

          it('return all the missing term present in the query', () => {
            const termIsSubWord = 'is';
            fakeResult.absentTerms = [termIsSubWord];
            expectedResult.push(termIsSubWord);
            expect(test.cmp.missingTerms.toString()).toBe(expectedResult.toString());
          });

          it('return only the missing term present in the query', () => {
            const termNotInQuery = 'foo';
            fakeResult.absentTerms = [termNotInQuery];
            expect(test.cmp.missingTerms.toString()).toBe(expectedResult.toString());
          });
        });

        describe('when re-injecting a term', () => {
          let query: string;

          it('and the term is present in the query, the term is added to the url', () => {
            const termPresent = 'my';
            query = 'This is my query';
            fakeResult.absentTerms = [termPresent];
            test = mockComponent(query);
            test.cmp.queryController.executeQuery();
            test.cmp.addTermForcedToAppear(termPresent);
            expect(getMissingTerms()).toEqual([termPresent]);
          });

          it('and the term is the first word in the query, the term is added to the url', () => {
            const firstWord = 'This';
            query = 'This is my query';
            fakeResult.absentTerms = [firstWord];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(firstWord);
            test.cmp.queryController.executeQuery();
            expect(getMissingTerms()).toEqual([firstWord]);
          });

          it('and the term is the last word in the query, the term is added to the url', () => {
            const lastWord = 'query';
            query = 'This is my query';
            fakeResult.absentTerms = [lastWord];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(lastWord);
            expect(getMissingTerms()).toEqual([lastWord]);
          });

          it('and the term is not present, queryStateModel.set is never called', () => {
            const termNotInQuery = 'foo';
            query = 'This is my query';
            test = mockComponent(query);
            test.cmp.queryStateModel.set = jasmine.createSpy('setSpy');
            test.cmp.addTermForcedToAppear(termNotInQuery);
            expect(test.cmp.queryStateModel.set).not.toHaveBeenCalled();
          });

          it('and the term present contains hyphens, the term is added to the url', () => {
            const hyphensWord = 'really-really';
            query = 'This is really-really my query';
            fakeResult.absentTerms = [hyphensWord];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(hyphensWord);
            expect(getMissingTerms()).toEqual([hyphensWord]);
          });

          it('and the term present is surrounded by special character, the term is added to the url', () => {
            const specialCharacter = 'query';
            query = 'This is really my !!!query!!!';
            fakeResult.absentTerms = [specialCharacter];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(specialCharacter);
            expect(getMissingTerms()).toEqual([specialCharacter]);
          });
        });
      });

      describe('Korean', () => {
        describe('when re-injecting a term', () => {
          it('and the term is present in the query, the term is added to the url', () => {
            const koreanWordPresent = '쿼리가';
            const query = '긴 쿼리가 될';
            fakeResult.absentTerms = [koreanWordPresent];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(koreanWordPresent);
            expect(getMissingTerms()).toEqual([koreanWordPresent]);
          });

          it('and the term is the first word in the query, the term is added to the url', () => {
            const koreanFirstWord = '이것은';
            const query = '이것은 정말';
            fakeResult.absentTerms = [koreanFirstWord];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(koreanFirstWord);
            expect(getMissingTerms()).toEqual([koreanFirstWord]);
          });

          it('and the term is the last word in the query, the term is added to the url', () => {
            const KoreanlastWord = '정말';
            const query = '이것은 정말';
            fakeResult.absentTerms = [KoreanlastWord];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(KoreanlastWord);
            expect(getMissingTerms()).toEqual([KoreanlastWord]);
          });

          it('and the term is a single character surronded by other character, the term is added to the url', () => {
            const KoreanWordPresentMultipleTimes = '것';
            const query = '이것은 정말 정말 긴';
            fakeResult.absentTerms = [KoreanWordPresentMultipleTimes];
            test = mockComponent(query);
            test.cmp.addTermForcedToAppear(KoreanWordPresentMultipleTimes);
            expect(getMissingTerms()).toEqual([KoreanWordPresentMultipleTimes]);
          });
        });
        describe('when a words contains words boundary character', () => {
          it(`when the missing term is part of the words,
          it will not be displayed as a missing term.`, () => {
            const wordBoundarysCharacter = getWordBoudaryChars();
            wordBoundarysCharacter.forEach(character => {
              const boundaryCharacter = `\\${character}이것은`;
              const query = `쿼리가${boundaryCharacter} `;
              fakeResult.absentTerms = [`${boundaryCharacter}`];
              test = mockComponent(query);
              expect(test.cmp.element.childElementCount).toEqual(0);
              expect(test.cmp.missingTerms).toEqual([`${boundaryCharacter}`]);
            });
          });
        });
      });
    });
  });
}
