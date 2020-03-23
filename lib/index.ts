class CommonService {
  /**
   * check whether any value given contains some value itself. If the values passes is undefined or null or
   * an empty ('') value, a false may be returned. Otherwise true.
   * 
   * @param value {String or Number} the value we going to check
   */
  public isNonEmpty(value: String | Number) {
    return (
      value &&
      value !== null &&
      value.toString().trim() !== ''
    );
  }

  /**
   * this method check whether a given larger string (mainString) contains a smaller string (subString) given.
   * if mainString contains subSting, true will be returned and otherwise false.
   * 
   * @param mainString {string} the larger string. Most probably the value we considering to filter
   * @param subString  {string} the smaller string. Most probably thr keyword we going to filter by
   */
  public isIncludes(mainString: string, subString: string): boolean {
    if (mainString.trim() && subString !== NaN.toString()) {
      return mainString.toLowerCase().includes(subString.trim().toLowerCase());
    } else {
      return false;
    }
  }

  /**
   * filter a given array of objects according to a filter given as an array of key value pairs
   * 
   * @param allData {any[]} any king of object array. return type also may this type.
   * @param filters {KeyValuePair[]} set of filters
   */
  public keywordFilter(
    allData: any[],
    filters: KeyValuePair[]
  ): any[] {
    // allData should be an arrays which it's length is greater than 1
    // Otherwise an empty array may be returned
    if (allData && allData !== null && allData.length) {
      // filters should be an arrays which it's length is greater than 1
      // Otherwise allData array may be returned without filtering
      if (filters && filters !== null && filters.length > 0) {
        // Remove undefined, null, and empty filters
        filters = filters.filter(filter => this.isNonEmpty(filter.value));

        // Again check whether is there any useful filter or not. If not, original array may be returned.
        if (filters.length > 0) {
          // allData array may be analyzed one by one, and elements which satisfy conditions may be
          // pushed into this array. finally it may be returned.
          const ret: any[] = [];
          console.log(filters.length);

          // Filter items one bu one
          allData.forEach(data => {
            if (data && data !== null) {
              // Matches count refers to count the number of matched field with given filter.
              // This count should be equal to length of filters to return that particular data
              // object as an result. Otherwise that particular data object may be rejected.
              let matches = 0;

              // The data object considering this loop cycle may be broken down into key value
              // pairs (two separated arrays with corresponding indices) for further calculations.
              const dataKeys: String[] = Object.keys(data);
              const dataValues: String[] = Object.values(data);

              // consider filters one by one.
              filters.forEach(filter => {
                // first have to find the corresponding index of key, in data object. It should be
                // higher than -1 if the filter is a valid one.
                const dataKeyIndex = dataKeys.indexOf(filter.key);

                if (
                  (
                    // the index found is valid,
                    dataKeyIndex > -1
                  ) && (
                    // all the filters above are non-empty. Hence the corresponding values
                    // also may non-empty.
                    this.isNonEmpty(dataValues[dataKeyIndex]) &&
                    // the data value is agree with given filter value.
                    this.isIncludes(
                      dataValues[dataKeyIndex].toString(),
                      filter.value.toString()
                    )
                  )
                ) {
                  // matched count should be incremented.
                  matches++;
                }
              });
              // as we discussed earlier, is the matches count equals with filter size, that
              // particular data object may considered as matched
              if (matches === filters.length) {
                ret.push(data);
              }
            }
          }); // end of dataAll.forEach

          // finally return the array of filtered data objects
          return ret;
        } else {
          return allData;
        }
      } else {
        return allData;
      }
    } else {
      return [];
    }
  }

  public titleCase(input: string): string {
    return input.length === 0 ? '' :
      input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
  }
}

interface KeyValuePair {
  key: String;
  value: String;
}

export default new CommonService();