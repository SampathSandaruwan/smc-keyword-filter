"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    /**
     * check whether any value given contains some value itself. If the values passes is undefined or null or
     * an empty ('') value, a false may be returned. Otherwise true.
     *
     * @param value {String or Number} the value we going to check
     */
    CommonService.prototype.isNonEmpty = function (value) {
        return (value &&
            value !== null &&
            value.toString().trim() !== '');
    };
    /**
     * this method check whether a given larger string (mainString) contains a smaller string (subString) given.
     * if mainString contains subSting, true will be returned and otherwise false.
     *
     * @param mainString {string} the larger string. Most probably the value we considering to filter
     * @param subString  {string} the smaller string. Most probably thr keyword we going to filter by
     */
    CommonService.prototype.isIncludes = function (mainString, subString) {
        if (mainString.trim() && subString !== NaN.toString()) {
            return mainString.toLowerCase().includes(subString.trim().toLowerCase());
        }
        else {
            return false;
        }
    };
    /**
     * filter a given array of objects according to a filter given as an array of kry value pairs
     *
     * @param allData {any[]} any king of object array. return type also may this type.
     * @param filters {KeyValuePair[]} set of filters
     */
    CommonService.prototype.keywordFilter = function (allData, filters) {
        var _this = this;
        // allData should be an arrays which it's length is greater than 1
        // Otherwise an empty array may be returned
        if (allData && allData !== null && allData.length) {
            // filters should be an arrays which it's length is greater than 1
            // Otherwise allData array may be returned without filtering
            if (filters && filters !== null && filters.length > 0) {
                // Remove undefined, null, and empty filters
                filters = filters.filter(function (filter) { return _this.isNonEmpty(filter.value); });
                // Again check whether is there any useful filter or not. If not, original array may be returned.
                if (filters.length > 0) {
                    // allData array may be analyzed one by one, and elements which satisfy conditions may be
                    // pushed into this array. finally it may be returned.
                    var ret_1 = [];
                    console.log(filters.length);
                    // Filter items one bu one
                    allData.forEach(function (data) {
                        if (data && data !== null) {
                            // Matches count refers to count the number of matched field with given filter.
                            // This count should be equal to length of filters to return that particular data
                            // object as an result. Otherwise that particular data object may be rejected.
                            var matches_1 = 0;
                            // The data object considering this loop cycle may be broken down into key value
                            // pairs (two separated arrays with corresponding indices) for further calculations.
                            var dataKeys_1 = Object.keys(data);
                            var dataValues_1 = Object.values(data);
                            // consider filters one by one.
                            filters.forEach(function (filter) {
                                // first have to find the corresponding index of key, in data object. It should be
                                // higher than -1 if the filter is a valid one.
                                var dataKeyIndex = dataKeys_1.indexOf(filter.key);
                                if ((
                                // the index found is valid,
                                dataKeyIndex > -1) && (
                                // all the filters above are non-empty. Hence the corresponding values
                                // also may non-empty.
                                _this.isNonEmpty(dataValues_1[dataKeyIndex]) &&
                                    // the data value is agree with given filter value.
                                    _this.isIncludes(dataValues_1[dataKeyIndex].toString(), filter.value.toString()))) {
                                    // matched count should be incremented.
                                    matches_1++;
                                }
                            });
                            // as we discussed earlier, is the matches count equals with filter size, that
                            // particular data object may considered as matched
                            if (matches_1 === filters.length) {
                                ret_1.push(data);
                            }
                        }
                    }); // end of dataAll.forEach
                    // finally return the array of filtered data objects
                    return ret_1;
                }
                else {
                    return allData;
                }
            }
            else {
                return allData;
            }
        }
        else {
            return [];
        }
    };
    CommonService.prototype.titleCase = function (input) {
        return input.length === 0 ? '' :
            input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
    };
    return CommonService;
}());
exports.default = new CommonService();
