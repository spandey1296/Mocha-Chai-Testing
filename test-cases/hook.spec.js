var chai= require('chai');
const { after } = require('mocha');
var expect= chai.expect;
var should= chai.should();
var assert= chai.assert;
var sinon=require('sinon')



describe('Hooks test cases',function(){
 
    after(()=>{
        console.log("=====after printing");
    })
    before(()=>{
        console.log("======before priting");

    })
    afterEach(()=>{
        console.log("===after eacj loop will work");
    })

    beforeEach(()=>{
        console.log("======before each llop is printing");
    })
     

    let data= 'code';
    it('check string', function(){
        expect(data).to.be.a('string')

    })
    it('check only string', function(){
        expect(data).to.be.equal('code')

        
    })



})


//skip and only is pending can be used based on requirement



describe('Without using Hooks',function(){
 
    let data= 'code';
    it('check string', function(){
        expect(data).to.be.a('string')

    })
    it('check string', function(){
        expect(data).to.be.equal('code')

        
    })

})