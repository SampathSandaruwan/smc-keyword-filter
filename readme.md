# SMC KEYWORD FILTER
A Node.js module that consist of several commonly useful methods. 
> isNonEmpty(value: String | Number): boolean
>> Check whether the value provided is a non-empty value.
>> If it is an empty value (undefined one, null one or an empty one) provided,
>> a boolean false may returned.

> isIncludes(mainString: string, subString: string): boolean
>> Check whether a given larger string (mainString) contains a smaller string (subString) given.
>> if mainString contains subSting, true will be returned and otherwise false.

> keywordFilter(allData: any[],filters: KeyValuePair[]): any[]
>> A filter, that filters an given array of data objects according to a filter given as an array of key value pairs
## Installation 
```sh
npm install smc-keyword-filter --save
```
