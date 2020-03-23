import keywordFilter from './index';

console.log('\x1B[33mTest isNonEmpty() method\x1B[37m');
if (keywordFilter.isNonEmpty(' ')) {
    console.log('Test \'<whitespace>\': Non empty');
} else {
    console.log('Test \'<whitespace>\': Empty');
}
if (keywordFilter.isNonEmpty('smc keyword filter')) {
    console.log('Test \'smc keyword filter\': Non empty');
} else {
    console.log('Test \'smc keyword filter\': Empty');
}

console.log('\x1B[33m\nTest includes() method\x1B[37m');
if (keywordFilter.includes('smc keyword filter', 'test')) {
    console.log('Test \'smc keyword filter\' with \'test\': Includes');
} else {
    console.log('Test \'smc keyword filter\' with \'test\': Not includes');
}
if (keywordFilter.includes('smc keyword filter', 'smc')) {
    console.log('Test \'smc keyword filter\' with \'smc\': Includes');
} else {
    console.log('Test \'smc keyword filter\' with \'smc\': Not includes');
}

const dataSet = [
    {
        name: 'sampath',
        age: 25
    },
    {
        name: 'sandaruwan',
        age: 24
    },
];
const filtersOne = [
    { key: 'name', value: 'samp' },
    { key: 'age', value: '25' }
];
const filtersTwo = [
    { key: 'name', value: 'samp' },
    { key: 'age', value: '24' }
];

console.log('\x1B[33m\nTest keywordFilter() method\x1B[37m');
console.log('Dataset: ' + JSON.stringify(dataSet));
console.log('Filter filters set: ' + JSON.stringify(filtersOne));
console.log('Second filters set: ' + JSON.stringify(filtersTwo));
console.log('\nFilter dataSet using first filter: ' + JSON.stringify(keywordFilter.keywordFilter(dataSet, filtersOne)));
console.log('Filter dataSet using second filter: ' + JSON.stringify(keywordFilter.keywordFilter(dataSet, filtersTwo)));
