var sinon=require('sinon');
var chai= require('chai');
var expect= chai.expect;

function testMe(callback){
    callback();

}

describe('test me function',function(){
    it('should call the function',function(){
        let callbackspy=sinon.spy();
        testMe(callbackspy)
        expect(callbackspy.calledOnce).to.be.true;
        

    })
})