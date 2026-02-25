const express = require('express')
const authRoute=require('./routes/auth.route.js')
const app=express();
app.use('/auth/',authRoute);
app.listen(5001,()=>{
    console.log('Server is running on the port 5001');
})
