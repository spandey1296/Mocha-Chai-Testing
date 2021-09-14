const { default: axios } = require("axios");
const { response } = require("express");

class Student{
    constructor(){
    }

    home(type){
       let data= this.getInfo(type,1);
       return data + 5;
    }

     getInfo(type, status){
        return type

     }

 userId(){
  return 12;

 }


  finalMarks(total){
        let external=this.getExternal(total);
        let internal=this.getInternal(total);
        let final= external+ internal +10;
        return final;
        
  }
  
  getExternal(total){
      return total+1;

  }
  getInternal(total){
      return total-1;

  }
   

tableDataDb(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>
            resolve(10),1000);

        })
    }


thirdpartyApi(){
    return new Promise((resolve, reject) =>{
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
        .then(response =>{
            resolve(response.data)
        })
        .catch(error =>{
            reject(error)
        })
    
    })
}















}
module.exports=Student;
