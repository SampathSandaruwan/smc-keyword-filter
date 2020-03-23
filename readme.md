# SMC KEYWORD FILTER
A Node.js module that consist of several commonly useful methods. 
### isNonEmpty(value: String | Number): boolean
> Check whether the value provided is a non-empty value.
> If it is an empty value (undefined one, null one or an empty one) provided,
> a boolean false may returned.

### includes(mainString: string, subString: string): boolean
> Check whether a given larger string (mainString) contains a smaller string (subString) given.
> if mainString contains subSting, true will be returned and otherwise false.

### keywordFilter(allData: any[],filters: KeyValuePair[]): any[]
> A filter, that filters an given array of data objects according to a filter given as an array of key value pairs
## Installation 
```sh
npm install smc-keyword-filter --save
```
## Usage
### Javascript
```javascript
var keywordFilter = require('smc-keyword-filter');

var testVariable = \<Assignment Statement\>;
var keyword = 'your keyword'
var dataSet = [
    {
        name: 'sampath',
        age: 25
    },
    {
        name: 'sandaruwan',
        age: 24
    },
];
var filter = [
    // in case of application, if user don't want to filter using name, this element may undefined
    { key: 'name', value: name_filter_keyword },
    // in case of application, if user don't want to filter using age, this element may undefined
    { key: 'age', value: age_filter_keyword }
];
```

#### inNonEmpty() method
```sh
if (keywordFilter.isNonEmpty(testVariable)) {
    // next statement if non empty
} else {
    // next statement if the testVariable is empty
}
```

### includes() method
```sh
if (keywordFilter.includes(testVariable, keyword) {
    // next statement if $testVariable contains $keyword
} else {
    // next statement if $testVariable does not contains $keyword
}
```

### keywordFilter() method
```sh
var filteredUsers = keywordFilter.keywordFilter(dataSet, filter);
// next statement using filtered users
```
