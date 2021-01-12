// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('it should return true when you give it a yes', (expect) => {

    const expected = true;

    const actual = countsAsAYes('yes');

    expect.equal(actual, expected);
});  



test('it should return false when you give it a yes'), (expect) => {
    const expected = false;

    const actual = countsAsAYes('yes');

    expect.equal(actual, expected);
});




test('it should return false when you give it a yes'), (expect) => {
    const expected = true;
    
    const actual = countsAsAYes('yes');

    expect.equal(actual, expected);
});
