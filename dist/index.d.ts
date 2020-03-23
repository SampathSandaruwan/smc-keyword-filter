declare class CommonService {
    /**
     * check whether any value given contains some value itself. If the values passes is undefined or null or
     * an empty ('') value, a false may be returned. Otherwise true.
     *
     * @param value {String or Number} the value we going to check
     */
    isNonEmpty(value: String | Number): boolean;
    /**
     * this method check whether a given larger string (mainString) contains a smaller string (subString) given.
     * if mainString contains subSting, true will be returned and otherwise false.
     *
     * @param mainString {string} the larger string. Most probably the value we considering to filter
     * @param subString  {string} the smaller string. Most probably thr keyword we going to filter by
     */
    isIncludes(mainString: string, subString: string): boolean;
    /**
     * filter a given array of objects according to a filter given as an array of kry value pairs
     *
     * @param allData {any[]} any king of object array. return type also may this type.
     * @param filters {KeyValuePair[]} set of filters
     */
    keywordFilter(allData: any[], filters: KeyValuePair[]): any[];
    titleCase(input: string): string;
}
interface KeyValuePair {
    key: String;
    value: String;
}
declare const _default: CommonService;
export default _default;
