var sinon=require('sinon');
var chai= require('chai');
var expect= chai.expect;
var Student= require('../controllers/studentCtrl')
var studentObj= new Student();


// will check how many times it has called, with what argument
describe('------MOCK-------', ()=>{
    it('Function argument check',()=>{
        
        var mock=sinon.mock(studentObj);
        var expt=mock.expects('getExternal');
        expt.exactly(1);
        expt.withArgs(40);  //argument should be same
        studentObj.finalMarks(40);
        mock.verify()
    })   
    });


    




