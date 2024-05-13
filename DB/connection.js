const mongoose = require('mongoose')
mongoose.connect(process.env.COONECTION_STRING).then(
    result=>{
        console.log("mongodb connected ");
    }
).catch(err=>{
    console.log("connection failed");
    console.log(err);
})
