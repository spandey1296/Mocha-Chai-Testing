var sinon=require('sinon');
var chai= require('chai');
var expect= chai.expect;
var Student= require('../controllers/studentCtrl');
const { it } = require('mocha');
const nock= require('nock')
var studentCtrl= new Student();



describe('Nock test suit', () => {
 it('api test', function(done){
   var obj={status:'success',message:"Successfully! All records has been fetched."}
    const apihit=nock('https://dummy.restapiexample.com/api/v1/')
    .get('/employees')
    .reply(200,obj);
    studentCtrl.thirdpartyApi()
    .then(function(result){
        expect(result).to.be.eql(obj)
    }).catch((err) => {
        done(new Error('error'+ err))
    });
    done()


 })   
});

        


    




