/// <reference path='../Facet/Facet.ts' />

import { IFacetOptions, Facet } from '../Facet/Facet';
import { IRangeValue } from '../../rest/RangeValue';
import { ComponentOptions } from '../Base/ComponentOptions';
import { IComponentBindings } from '../Base/ComponentBindings';
import { Utils } from '../../utils/Utils';
import { TemplateHelpers } from '../Templates/TemplateHelpers';
import { IDateToStringOptions, DateUtils } from '../../utils/DateUtils';
import { FacetRangeQueryController } from '../../controllers/FacetRangeQueryController';
import { IGroupByResult } from '../../rest/GroupByResult';
import { Initialization } from '../Base/Initialization';
import * as Globalize from 'globalize';
import { exportGlobally } from '../../GlobalExports';
import { IIndexFieldValue } from '../../rest/FieldValue';
import { IGroupByValue } from '../../rest/GroupByValue';
import { ResponsiveFacetOptions } from '../ResponsiveComponents/ResponsiveFacetOptions';
import { ResponsiveFacets } from '../ResponsiveComponents/ResponsiveFacets';

export interface IFacetRangeOptions extends IFacetOptions {
  ranges?: IRangeValue[];
  dateField?: boolean;
}
/**
 * The FacetRange component displays a {@link Facet} whose values are expressed as ranges. These ranges are computed
 * from the results of the current query.
 *
 * This component inherits from the Facet component. This implies that you must specify a valid
 * [field]{@link Facet.options.field} value for this component to work.
 *
 * Most of the options available for a Facet component are also available for a FacetRange component. There are some
 * exceptions, however.
 *
 * Here is the list of Facet options which the FacetRange component does not support.
 * - The **Settings** menu options:
 *   - [enableSettings]{@link Facet.options.enableSettings}
 *   - [enableSettingsFacetState]{@link Facet.options.enableSettingsFacetState}
 *   - [enableCollapse]{@link Facet.options.enableCollapse}
 *   - [availableSorts]{@link Facet.options.availableSorts}
 *   - [customSort]{@link Facet.options.customSort}
 *   - [computedFieldCaption]{@link Facet.options.computedFieldCaption}
 * - The **Facet Search** options:
 *   - [enableFacetSearch]{@link Facet.options.enableFacetSearch}
 *   - [facetSearchDelay]{@link Facet.options.facetSearchDelay}
 *   - [facetSearchIgnoreAccents]{@link Facet.options.facetSearchIgnoreAccents}
 *   - [numberOfValuesInFacetSearch]{@link Facet.options.numberOfValuesInFacetSearch}
 * - The **More and Less** options:
 *   - [enableMoreLess]{@link Facet.options.enableMoreLess}
 *   - [pageSize]{@link Facet.options.pageSize}
 *
 *
 *  Moreover, while the [numberOfValues]{@link Facet.options.numberOfValues} option still allows you to specify the
 *  maximum number of values to display in a FacetRange component, it is not possible for the end to display additional
 *  values, since the component does not support the **More** button.
 *
 *  @notSupportedIn salesforcefree
 */
export class FacetRange extends Facet implements IComponentBindings {
  static ID = 'FacetRange';
  static parent = Facet;

  static doExport = () => {
    exportGlobally({
      FacetRange: FacetRange
    });
  };

  /**
   * The options for the component
   * @componentOptions
   */
  static options: IFacetRangeOptions = {
    /**
     * Specifies whether the field for which you require ranges is a date field.
     *
     * This allows the component to correctly build the outgoing {@link IGroupByRequest}.
     *
     * Default value is `false`.
     */
    dateField: ComponentOptions.buildBooleanOption({ defaultValue: false }),

    /**
     * Specifies an array of {@link IRangeValue} to use as Facet values.
     *
     *
     * **Examples:**
     *
     * You can set the option in the ['init']{@link init} call:
     * ```javascript
     * var myRanges = [
     *   {
     *      start: 0,
     *      end: 100,
     *      label: "0 - 100",
     *      endInclusive: false
     *    },
     *    {
     *      start: 100,
     *      end: 200,
     *      label: "100 - 200",
     *      endInclusive: false
     *    },
     *    {
     *      start: 200,
     *      end: 300,
     *      label: "200 - 300",
     *      endInclusive: false
     *    }
     * ]
     *
     * Coveo.init(document.querySelector('#search'), {
     *    FacetRange : {
     *        ranges : myRanges
     *    }
     * })
     * ```
     *
     * Or directly in the markup:
     * ```html
     * <!-- Ensure that the double quotes are properly handled in data-ranges. -->
     * <div class='CoveoFacetRange' data-field='@myotherfield' data-ranges='[{"start": 0, "end": 100, "label": "0 - 100", "endInclusive": false}, {"start": 100, "end": 200, "label": "100 - 200", "endInclusive": false}]'></div>
     * ```
     *
     * **Note:**
     * > Ranges can overlap.
     *
     * By default, the index automatically generates the ranges. However, the index cannot automatically generate the
     * ranges if the [field]{@link Facet.options.field} you specify for the FacetRange component is generated by a query
     * function (see [Query Function](https://developers.coveo.com/x/XQCq)). When this is the case, you must specify the
     * ranges at query time.
     */
    ranges: ComponentOptions.buildJsonOption<IRangeValue[]>(),
    ...ResponsiveFacetOptions
  };

  public options: IFacetRangeOptions;

  /**
   * Creates a new FacetRange component.
   * @param element The HTMLElement on which to instantiate the component.
   * @param options The options for the FacetRange component.
   * @param bindings The bindings that the component requires to function normally. If not set, these will be
   * automatically resolved (with a slower execution time).
   */
  constructor(public element: HTMLElement, options: IFacetRangeOptions, bindings?: IComponentBindings) {
    super(element, ComponentOptions.initComponentOptions(element, FacetRange, options), bindings, FacetRange.ID);

    this.options.enableFacetSearch = false;
    this.options.enableSettings = false;
    this.options.includeInOmnibox = false;
    this.options.enableMoreLess = false;
    ResponsiveFacets.init(this.root, this, this.options);
  }

  public getValueCaption(facetValue: any): string {
    if (Utils.exists(this.options.valueCaption) && typeof this.options.valueCaption == 'string') {
      return this.translateValueCaptionFromFunctionName(facetValue);
    }
    if (!Utils.exists(this.options.valueCaption) && this.options.dateField) {
      return this.translateValueCaptionFromDate(facetValue);
    }
    return super.getValueCaption(facetValue);
  }

  protected initFacetQueryController() {
    this.facetQueryController = new FacetRangeQueryController(this);
  }

  protected processNewGroupByResults(groupByResults: IGroupByResult) {
    if (groupByResults != null && this.options.ranges == null) {
      groupByResults.values.sort((valueA, valueB) => this.sortRangeGroupByResults(valueA, valueB));
    }
    super.processNewGroupByResults(groupByResults);
  }

  private sortRangeGroupByResults(valueA: IGroupByValue, valueB: IGroupByValue) {
    const startEndA = this.extractStartAndEndValue(valueA);
    const startEndB = this.extractStartAndEndValue(valueB);
    let firstValue: string;
    let secondValue: string;

    if (!startEndA) {
      firstValue = valueA.value;
    } else {
      firstValue = startEndA.start;
    }

    if (!startEndB) {
      secondValue = valueB.value;
    } else {
      secondValue = startEndB.start;
    }

    if (this.options.dateField) {
      return Date.parse(firstValue) - Date.parse(secondValue);
    }
    return Number(firstValue) - Number(secondValue);
  }

  private translateValueCaptionFromFunctionName(facetValue: IIndexFieldValue) {
    const { start, end } = this.extractStartAndEndValue(facetValue);
    if (start == null || end == null) {
      return null;
    }

    const helper = TemplateHelpers.getHelper(this.options.valueCaption);

    if (helper != null) {
      return `${helper.call(this, start)} - ${helper.call(this, end)}`;
    } else {
      const startConverted = start.match(/^[\+\-]?[0-9]+(\.[0-9]+)?$/) ? Number(start) : DateUtils.convertFromJsonDateIfNeeded(start);

      const endConverted = end.match(/^[\+\-]?[0-9]+(\.[0-9]+)?$/) ? Number(end) : DateUtils.convertFromJsonDateIfNeeded(end);

      return `${Globalize.format(startConverted, this.options.valueCaption)} - ${Globalize.format(
        endConverted,
        this.options.valueCaption
      )}`;
    }
  }

  private extractStartAndEndValue(facetValue: IIndexFieldValue) {
    const startAndEnd = /^(.*)\.\.(.*)$/.exec(facetValue.value);

    if (startAndEnd == null) {
      return null;
    }

    return {
      start: startAndEnd[1],
      end: startAndEnd[2]
    };
  }

  private translateValueCaptionFromDate(facetValue: IIndexFieldValue) {
    const helper = TemplateHelpers.getHelper('dateTime');
    const { start, end } = this.extractStartAndEndValue(facetValue);
    const helperOptions: IDateToStringOptions = {
      alwaysIncludeTime: false,
      includeTimeIfThisWeek: false,
      includeTimeIfToday: false,
      omitYearIfCurrentOne: false,
      useTodayYesterdayAndTomorrow: false,
      useWeekdayIfThisWeek: false
    };
    return `${helper(start, helperOptions)} - ${helper(end, helperOptions)}`;
  }
}
Initialization.registerAutoCreateComponent(FacetRange);
