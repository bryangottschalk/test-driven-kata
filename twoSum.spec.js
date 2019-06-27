const { expect } = require('chai');
const twoSum = require('./twoSum');

console.log(expect);

describe('twoSum function', () => {
  it('returns an array', () => {
    expect(twoSum([], 4)).to.be.an('array');
  });
});
