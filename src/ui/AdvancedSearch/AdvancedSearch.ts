import {Component} from '../Base/Component';
import {ComponentOptions} from '../Base/ComponentOptions';
import {IComponentBindings} from '../Base/ComponentBindings';
import {QueryEvents, IBuildingQueryEventArgs} from '../../events/QueryEvents';
import {AdvancedSearchEvents} from '../../events/AdvancedSearchEvents';
import {SettingsEvents} from '../../events/SettingsEvents';
import {ISettingsPopulateMenuArgs} from '../Settings/Settings';
import {Initialization} from '../Base/Initialization';
import {l} from '../../strings/Strings';
import {$$} from '../../utils/Dom';
import {IAdvancedSearchInput, IAdvancedSearchPrebuiltInput, IAdvancedSearchSection, IExternalAdvancedSearchSection} from './AdvancedSearchInput';
import {AdvancedSearchInputFactory} from './AdvancedSearchInputFactory';
import {IQueryOptions} from '../../controllers/QueryController';
import {IAnalyticsNoMeta, analyticsActionCauseList} from '../Analytics/AnalyticsActionListMeta';
import {QuerySummaryEvents} from '../../events/QuerySummaryEvents';


export interface IAdvancedSearchOptions {
  includeKeywords?: boolean;
  includeDate?: boolean;
  includeDocument?: boolean;
}

/**
 * The AdvancedSearch component is meant to render a section in the {@link Settings} menu to allow the user to easily
 * create complex queries to send to the index.
 *
 * You can create custom code that adds new sections in the **Advanced Search** panel generated by this component by
 * attaching a handler to the {@link AdvancedSearchEvents.buildingAdvancedSearch} event.
 */
export class AdvancedSearch extends Component {
  static ID = 'AdvancedSearch';

  /**
   * @componentOptions
   */
  static options: IAdvancedSearchOptions = {

    /**
     * Specifies whether to include the built-in **Keywords** section.
     *
     * Default value is `true`.
     */
    includeKeywords: ComponentOptions.buildBooleanOption({ defaultValue: true }),

    /**
     * Specifies whether to include the built-in **Date** section.
     *
     * Default value is `true`.
     */
    includeDate: ComponentOptions.buildBooleanOption({ defaultValue: true }),

    /**
     * Specifies whether to include the built-in **Document** section.
     *
     * Default value is `true`.
     */
    includeDocument: ComponentOptions.buildBooleanOption({ defaultValue: true })
  };

  public inputs: IAdvancedSearchInput[] = [];
  private inputFactory = new AdvancedSearchInputFactory(this.queryController.getEndpoint());
  private externalSections: IExternalAdvancedSearchSection[] = [];

  /**
   * Creates a new AdvancedSearch component.
   *
   * Triggers the {@link AdvancedSearchEvents.buildingAdvancedSearch} event.
   * @param element The HTMLElement on which to instantiate the component.
   * @param options The options for the AdvancedSearch component.
   * @param bindings The bindings that the component requires to function normally. If not set, these will be
   * automatically resolved (with a slower execution time).
   */
  constructor(public element: HTMLElement, public options?: IAdvancedSearchOptions, bindings?: IComponentBindings) {
    super(element, AdvancedSearch.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, AdvancedSearch, options);
    this.bindEvents();
    this.buildComponent();
  }

  /**
   * Launches the advanced search query.
   * If query returns successfully, also logs an `advancedSearch` event in the usage analytics (see
   * {@link Analytics.logSearchEvent}).
   */
  public executeAdvancedSearch() {
    this.usageAnalytics.logSearchEvent<IAnalyticsNoMeta>(analyticsActionCauseList.advancedSearch, {});
    this.queryController.executeQuery();
  }

  /**
   * Resets the state of all form inputs inside the AdvancedSearch component.
   */
  public reset() {
    _.each(this.inputs, (input) => {
      input.reset();
    });
  }

  private buildComponent() {
    this.buildTitle();
    this.buildCloseButton();
    this.buildContent();
    $$(this.element).hide();
  }

  private buildTitle() {
    var title = $$('div', { className: 'coveo-advanced-search-panel-title' }, l('AdvancedSearch')).el;
    $$(this.element).append(title);
  }

  private buildCloseButton() {
    var closeButton = $$('div', { className: 'coveo-advanced-search-panel-close' }, $$('span', { className: 'coveo-icon' }).el);
    closeButton.on('click', () => this.close());
    $$(this.element).append(closeButton.el);
  }

  private buildContent() {
    let component = $$('div');
    let inputSections: IAdvancedSearchSection[] = [];
    if (this.options.includeKeywords) {
      inputSections.push(this.getKeywordsSection());
    }
    if (this.options.includeDate) {
      inputSections.push(this.getDateSection());
    }
    if (this.options.includeDocument) {
      inputSections.push(this.getDocumentSection());
    }

    this.externalSections = [];
    $$(this.root).trigger(AdvancedSearchEvents.buildingAdvancedSearch, {
      sections: this.externalSections,
      executeQuery: (options: IQueryOptions) => {
        return this.queryController.executeQuery(options);
      }
    });


    _.each(this.externalSections, (section: IExternalAdvancedSearchSection) => {
      component.append(this.buildExternalSection(section));
    });

    _.each(inputSections, (section) => {
      component.append(this.buildInternalSection(section));
    });

    $$(this.element).append(component.el);
  }

  private open() {
    $$(this.element).show();
  }

  private close() {
    $$(this.element).hide();
  }

  private getKeywordsSection(): IAdvancedSearchSection {
    let sectionName = l('Keywords');
    let keywordsInputs = [];
    keywordsInputs.push(this.inputFactory.createAllKeywordsInput());
    keywordsInputs.push(this.inputFactory.createExactKeywordsInput());
    keywordsInputs.push(this.inputFactory.createAnyKeywordsInput());
    keywordsInputs.push(this.inputFactory.createNoneKeywordsInput());
    return { name: sectionName, inputs: keywordsInputs };
  }

  private getDateSection(): IAdvancedSearchSection {
    let sectionName = l('Date');
    let dateInputs = [];
    dateInputs.push(this.inputFactory.createAnytimeDateInput());
    dateInputs.push(this.inputFactory.createInTheLastDateInput());
    dateInputs.push(this.inputFactory.createBetweenDateInput());
    return { name: sectionName, inputs: dateInputs };
  }

  private getDocumentSection(): IAdvancedSearchSection {
    let sectionName = l('Document');
    let documentInputs = [];
    documentInputs.push(this.inputFactory.createSimpleFieldInput(l('FileType'), '@filetype'));
    documentInputs.push(this.inputFactory.createSimpleFieldInput(l('Language'), '@language'));
    documentInputs.push(this.inputFactory.createSizeInput());
    documentInputs.push(this.inputFactory.createAdvancedFieldInput(l('Title'), '@title'));
    documentInputs.push(this.inputFactory.createAdvancedFieldInput(l('Author'), '@author'));
    return { name: sectionName, inputs: documentInputs };
  }

  private buildExternalSection(section: IExternalAdvancedSearchSection): HTMLElement {
    let sectionHTML = this.buildSectionTitle(section);
    this.inputs = _.union(this.inputs, <any>section.inputs);
    sectionHTML.appendChild(section.content);
    return sectionHTML;
  }

  private buildInternalSection(section: IAdvancedSearchSection): HTMLElement {
    let sectionHTML = this.buildSectionTitle(section);
    let sectionInputs = [];
    _.each(section.inputs, (input) => {
      sectionInputs.push(this.buildDefaultInput(input));
    });
    this.inputs = _.union(this.inputs, sectionInputs);
    _.each(sectionInputs, (input) => {
      $$(sectionHTML).append(input.build());
    });

    return sectionHTML;
  }

  private buildSectionTitle(section: IAdvancedSearchSection): HTMLElement {
    let sectionHTML = $$('div', { className: 'coveo-advanced-search-section' });
    let title = $$('div', { className: 'coveo-advanced-search-section-title' });
    title.text(section.name);
    sectionHTML.append(title.el);
    return sectionHTML.el;
  }

  private buildDefaultInput(input: IAdvancedSearchInput | IAdvancedSearchPrebuiltInput): IAdvancedSearchInput {
    if (this.isPrebuiltInput(input)) {
      return this.inputFactory.create(input.name, input.parameters);
    } else {
      return input;
    }
  }

  private isPrebuiltInput(input: IAdvancedSearchInput | IAdvancedSearchPrebuiltInput): input is IAdvancedSearchPrebuiltInput {
    return (<IAdvancedSearchPrebuiltInput>input).name !== undefined;
  }

  private bindEvents() {
    this.bind.onRootElement(SettingsEvents.settingsPopulateMenu, (args: ISettingsPopulateMenuArgs) => {
      args.menuData.push({
        text: l('AdvancedSearch'),
        className: 'coveo-advanced-search',
        onOpen: () => this.open(),
        onClose: () => this.close()
      });
    });

    this.bind.onRootElement(QueryEvents.buildingQuery, (data: IBuildingQueryEventArgs) => {
      _.each(this.externalSections, (section: IExternalAdvancedSearchSection) => {
        if (section.updateQuery) {
          section.updateQuery(<any>section.inputs, data.queryBuilder);
        }
      });
      _.each(this.inputs, (input) => {
        if (input.updateQuery) {
          input.updateQuery(data.queryBuilder);
        }
      });
    });

    this.bind.onRootElement(AdvancedSearchEvents.executeAdvancedSearch, () => {
      this.executeAdvancedSearch();
    });

    this.bind.onRootElement(QuerySummaryEvents.cancelLastAction, () => {
      this.reset();
    });
  }

}

Initialization.registerAutoCreateComponent(AdvancedSearch);