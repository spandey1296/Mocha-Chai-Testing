var chai= require('chai')
var assert=chai.assert;
var should=chai.should();
var expect= chai.expect;




// Assert ///

describe('Test using Aspect',function(){
   
   let userName="Shivant";
   let myList={

      items:[{
            id:1,
            name:'demo'
      }],
      title:'user list'
   }
    it('check string',function(){
          assert.typeOf(userName,'String');
    });

    it('check equal match string',function(){
      assert.equal(userName,'Shivant');
});

    it('length check', function(){
          assert.lengthOf(myList.items,1)
    })



});




//// SHOULD

describe('Check using Should', function(){
      let userName="Shivant";
   let myList={

      items:[{
            id:1,
            name:'demo'
      }],
      title:'user list'
   }
 it('check string', function(){
       userName.should.be.a('String')
 })

 it('equal check', function(){
      userName.should.equal('Shivant')

})

it('length check',() => {
      myList.should.have.property('items').with.lengthOf(1);

})


});


//######   Expect #####

describe('check Expect',()=>{
      let userName="Shivant";
   let myList={

      items:[{
            id:1,
            name:'demo'
      }],
      title:'user list',
      password:'password',
      address:{
            country:'India',
            phoneNo:['75845875854','75921587468']
      }

   }
  it('String match',()=>{
        expect(userName).to.be.a('String')

  })
  it('items check with mylist',()=>{
      expect(myList).property('items').with.lengthOf(1);

  })
  
  it('equal match',function(){
        expect(userName).to.equal('Shivant')
  })

  it('length match',function(){
      expect(userName).to.lengthOf(7)
})


it('object length',function(){
      expect(myList).to.have.property('items').with.lengthOf(1);

})

it('api object length',function(){
      expect(myList).to.have.all.keys('items','title','password','address');


})

it('phone number test',function(){
      expect(myList).to.have.nested.property('address.phoneNo[0]');

})

it('country name test',function(){
      //expect(myList).to.have.nested.property('address.country');
      expect(myList).to.have.nested.include({'address.country':'India'});


})





});
