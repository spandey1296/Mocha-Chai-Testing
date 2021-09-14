var chai= require('chai');
var expect= chai.expect;
var should= chai.should();
var assert= chai.assert;
var Student= require('../controllers/studentCtrl');
var studentCtrl= new Student();
let chaiHttp= require('chai-http');
const { response } = require('express');
chai.use(chaiHttp)

let server= 'https://dummy.restapiexample.com';


describe('Task api check',function(){
    it('get employee',function(){
        chai.request(server)
        .get('/api/v1/employees')
        .end((err,response)=>{
            expect(response.status).to.be.equal(200)
            done();

        })
    })
})