declare class CommonService {
    /**
     * check whether any value given contains some value itself. If the values passes is undefined or null or
     * an empty ('') value, a false may be returned. Otherwise true.
     *
     * @param value the value we going to check
     */
    isNonEmpty(value: string | number | boolean): boolean;
    /**
     * this method check whether a given larger string (mainString) contains a smaller string (subString) given.
     * if mainString contains subSting, true will be returned and otherwise false.
     *
     * @param mainString the larger string. Most probably the value we considering to filter
     * @param subString the smaller string. Most probably thr keyword we going to filter by
     */
    includes(mainString: string, subString: string): boolean;
    /**
     * filter a given array of objects according to a filter given as an array of key value pairs
     *
     * @param allData any type of object array. return type also may this type of array
     * @param filters set of filters
     */
    keywordFilter(allData: any[], filters: KeyValuePair[]): any[];
}
interface KeyValuePair {
    key: string;
    value: string;
}
declare const _default: CommonService;
export default _default;
