var sinon=require('sinon');
var chai= require('chai');
var expect= chai.expect;
var Student= require('../controllers/studentCtrl')
var studentObj= new Student();

describe('------SPY-------', ()=>{
    it('test user function',()=>{
        expect(studentObj.userId()).to.be.equal(12);

    })
    
    

    it(' function count',()=>{
        var spyobj=sinon.spy(studentObj,'getInfo')
        studentObj.home(12);
        expect(spyobj.calledOnce).to.be.true;


    })

    // it(' function argument check',()=>{
    //     var spyobj=sinon.spy(studentObj,'getInfo')
    //     studentObj.home(12);
    //    // expect(spyobj.calledWith(12,1)).to.be.true;
    //    expect(spyobj.calledOnce()).to.be.true;




    // })








});