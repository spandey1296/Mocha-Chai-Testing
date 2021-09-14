//promise to fetch data from 3rd party or from database

var sinon=require('sinon');
var chai= require('chai');
var expect= chai.expect;
var Student= require('../controllers/studentCtrl')
var studentObj= new Student();
const userctrl= require('../controllers/userCtrl')
// alterante method

const chaiaspromise= require('chai-as-promised')
chai.use(chaiaspromise)

// will check how many times it has called, with what argument
describe('------Promises-------', ()=>{
    it('Normal value function',function(done){
        
       // expect(studentObj.getExternal(40)).to.be.equal(41)
        // always given you +1 result
         
       // this.timeout(2000);
       this.timeout(0);

        studentObj.tableDataDb().then(function(result){
             expect(result).to.be.equal(10);
            done();

        });
    })


    it('check value function using as chai-as-promised',function(){
       //this.timeout(2000);
       this.timeout(0)
       return expect(studentObj.tableDataDb()).to.eventually.equal(10);

       
     });



     it('Otp',function(){
       
        this.timeout(0)
        return expect(userctrl.newData()).to.eventually.have.deep.property('otp')
        
 
        
      });




});




