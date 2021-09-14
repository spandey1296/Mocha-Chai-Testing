var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
      

    });
  });
});


describe('my first test cases',function(){
  it('check value',function(){
    assert.equal([1,2,3].indexOf(3),2);

  })
  it('check value',function(){
    assert.equal([1,2,3].indexOf(2),1);

  })
})
