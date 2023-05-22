const findArrayQuadruplet = require('./challenge');
const assert = require('assert');

// eslint-disable-next-line no-undef
describe('return first array of numbers in arr summing up to s', function () {
  // eslint-disable-next-line no-undef
  it('it should return [0, 4, 7, 9]', function () {
    const givenArray = [2, 7, 4, 0, 9, 5, 1, 3];
    const sum = 20;
    const result = [0, 4, 7, 9];
    assert.deepStrictEqual(findArrayQuadruplet(givenArray, sum), result);
  });
});
