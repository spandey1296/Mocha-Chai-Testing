const userList= (res,resp) =>
{
     let data={
         list:'hello'
     }
     resp.status(200).json({statusText:'success',data});


}



const newData= ()=>{
    return new Promise((resolve, reject)=>{
        resolve({otp:9000})

    })
}




module.exports={
    userList,
    newData

}