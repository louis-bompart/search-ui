import { $$, Dom } from '../../../utils/Dom';
import { DynamicFacet } from '../DynamicFacet';
import { DynamicFacetValue } from './DynamicFacetValue';
import { Checkbox } from '../../FormWidgets/Checkbox';
import { l } from '../../../strings/Strings';
import { analyticsActionCauseList } from '../../Analytics/AnalyticsActionListMeta';
import { FacetValueState } from '../../../rest/Facet/FacetValueState';

export class DynamicFacetValueRenderer {
  private dom: Dom;
  private checkbox: Checkbox;

  constructor(private facetValue: DynamicFacetValue, private facet: DynamicFacet) {}

  public render() {
    this.dom = $$('li', {
      className: 'coveo-dynamic-facet-value coveo-dynamic-facet-selectable',
      dataValue: this.facetValue.value
    });

    this.createCheckbox();
    this.dom.append(this.checkbox.getElement());

    this.addFocusAndBlurEventListeners();

    this.toggleSelectedClass();

    return this.dom.el;
  }

  private toggleSelectedClass() {
    this.dom.toggleClass('coveo-selected', this.facetValue.isSelected);
  }

  private createCheckbox() {
    this.checkbox = new Checkbox(
      () => this.selectAction(),
      this.facetValue.valueCaption,
      this.ariaLabel,
      `(${this.facetValue.formattedCount})`
    );

    const label = $$(this.checkbox.getElement()).find('.coveo-checkbox-span-label');
    const labelSuffix = $$(this.checkbox.getElement()).find('.coveo-checkbox-span-label-suffix');

    if (label && labelSuffix) {
      label.setAttribute('title', this.facetValue.valueCaption);
      label.setAttribute('aria-hidden', 'true');
      labelSuffix.setAttribute('aria-hidden', 'true');
    }

    this.facetValue.isSelected && this.checkbox.select(false);
  }

  private addFocusAndBlurEventListeners() {
    const checkboxButton = $$(this.checkbox.getElement()).find('button');
    $$(checkboxButton).on('focusin', () => this.dom.addClass('coveo-focused'));
    $$(checkboxButton).on('focusout', () => this.dom.removeClass('coveo-focused'));
  }

  private selectAction = () => {
    this.facet.pinFacetPosition();
    this.facet.toggleSelectValue(this.facetValue.value);
    this.toggleSelectedClass();
    this.facet.enableFreezeCurrentValuesFlag();
    this.facet.enableFreezeFacetOrderFlag();
    this.facet.triggerNewQuery(() => this.logActionToAnalytics());
  };

  private logActionToAnalytics() {
    const action =
      this.facetValue.state === FacetValueState.selected
        ? analyticsActionCauseList.dynamicFacetSelect
        : analyticsActionCauseList.dynamicFacetDeselect;

    this.facet.logAnalyticsEvent(action, this.facetValue.analyticsMeta);
  }

  private get ariaLabel() {
    const selectOrUnselect = !this.facetValue.isSelected ? 'SelectValueWithResultCount' : 'UnselectValueWithResultCount';
    const resultCount = l('ResultCount', this.facetValue.formattedCount);

    return `${l(selectOrUnselect, this.facetValue.valueCaption, resultCount)}`;
  }
}