"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
console.log('\x1B[33mTest isNonEmpty() method\x1B[37m');
if (index_1.default.isNonEmpty(' ')) {
    console.log('Test \'<whitespace>\': Non empty');
}
else {
    console.log('Test \'<whitespace>\': Empty');
}
if (index_1.default.isNonEmpty('smc keyword filter')) {
    console.log('Test \'smc keyword filter\': Non empty');
}
else {
    console.log('Test \'smc keyword filter\': Empty');
}
if (index_1.default.isNonEmpty(false)) {
    console.log('Test boolean - false: Non empty');
}
else {
    console.log('Test  boolean - false: Empty');
}
console.log('\x1B[33m\nTest includes() method\x1B[37m');
if (index_1.default.includes('smc keyword filter', 'test')) {
    console.log('Test \'smc keyword filter\' with \'test\': Includes');
}
else {
    console.log('Test \'smc keyword filter\' with \'test\': Not includes');
}
if (index_1.default.includes('smc keyword filter', 'smc')) {
    console.log('Test \'smc keyword filter\' with \'smc\': Includes');
}
else {
    console.log('Test \'smc keyword filter\' with \'smc\': Not includes');
}
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
var filtersOne = [
    { key: 'name', value: 'samp' },
    { key: 'age', value: '25' }
];
var filtersTwo = [
    { key: 'name', value: 'samp' },
    { key: 'age', value: '24' }
];
console.log('\x1B[33m\nTest keywordFilter() method\x1B[37m');
console.log('Dataset: ' + JSON.stringify(dataSet));
console.log('Filter filters set: ' + JSON.stringify(filtersOne));
console.log('Second filters set: ' + JSON.stringify(filtersTwo));
console.log('\nFilter dataSet using first filter: ' + JSON.stringify(index_1.default.keywordFilter(dataSet, filtersOne)));
console.log('Filter dataSet using second filter: ' + JSON.stringify(index_1.default.keywordFilter(dataSet, filtersTwo)));
