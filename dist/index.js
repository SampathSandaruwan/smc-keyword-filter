"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    /**
     * check whether any value given contains some value itself. If the values passes is undefined or null or
     * an empty ('') value, a false may be returned. Otherwise true.
     *
     * @param value the value we going to check
     */
    CommonService.prototype.isNonEmpty = function (value) {
        return (value !== undefined &&
            value !== null &&
            value.toString().trim() !== '' &&
            value.toString().trim() !== NaN.toString());
    };
    /**
     * this method check whether a given larger string (mainString) contains a smaller string (subString) given.
     * if mainString contains subSting, true will be returned and otherwise false.
     *
     * @param mainString the larger string. Most probably the value we considering to filter
     * @param subString the smaller string. Most probably thr keyword we going to filter by
     */
    CommonService.prototype.includes = function (mainString, subString) {
        return !!mainString.trim() && subString !== NaN.toString() && mainString.toLowerCase().includes(subString.toLowerCase());
    };
    /**
     * filter a given array of objects according to a filter given as an array of key value pairs
     *
     * @param allData any type of object array. return type also may this type of array
     * @param filters set of filters
     */
    CommonService.prototype.keywordFilter = function (allData, filters) {
        var _this = this;
        // allData should be an arrays which it's length is greater than 0
        // Otherwise an empty array may be returned
        if (allData && allData !== null && allData.length > 0) {
            // filters should be an arrays which it's length is greater than 0
            // Otherwise allData array may be returned without filtering
            if (filters && filters !== null && filters.length > 0) {
                // Remove undefined, null, and empty filters
                filters = filters.filter(function (filter) { return _this.isNonEmpty(filter.value); });
                // Again check whether is there any useful filter or not. If not, original array may be returned.
                if (filters.length > 0) {
                    // allData array may be analyzed one by one, and elements which satisfy conditions may be
                    // pushed into this array. finally it may be returned.
                    var payload = allData.filter(function (data) {
                        if (data && data !== null) {
                            // The data object considering this loop cycle may be broken down into key value
                            // pairs (two separated arrays with corresponding indices) for further calculations.
                            var dataKeys_1 = Object.keys(data);
                            var dataValues_1 = Object.values(data);
                            // consider filters one by one.
                            var matches = filters.filter(function (filter) {
                                // first have to find the corresponding index of key, in data object. It should be
                                // higher than -1 if the filter is a valid one.
                                var dataKeyIndex = dataKeys_1.indexOf(filter.key);
                                return ((
                                // the index found is valid,
                                dataKeyIndex > -1) && (
                                // all the filters above are non-empty. Hence the corresponding values
                                // also may non-empty.
                                _this.isNonEmpty(dataValues_1[dataKeyIndex]) &&
                                    // the data value is agree with given filter value.
                                    _this.includes(dataValues_1[dataKeyIndex].toString(), filter.value.toString())));
                            });
                            return matches.length === filters.length;
                        }
                        else {
                            return false;
                        }
                    });
                    // finally return the array of filtered data objects
                    return payload;
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
    return CommonService;
}());
exports.default = new CommonService();
