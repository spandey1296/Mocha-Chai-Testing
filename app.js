const express = require('express');
const app= express();
const userList= require('./controllers/userCtrl')
const port=3000;

app.use('/user',require('./routes/users'));






 app.listen(port, () => {
     console.log(`Server started on port`,port);
 });