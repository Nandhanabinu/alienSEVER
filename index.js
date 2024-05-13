require('dotenv').config()
const express = require('express')
const cors = require ('cors')
const alienMern = express ()
const router =  require ('./Routes/router')
require('./DB/connection')
alienMern.use(cors())
alienMern.use(express.json())

alienMern.use(router)
const PORT = 5000 || process.env.PORT
alienMern.listen(PORT,()=>{
    console.log(`alienMern server started at PORT': ${PORT}`);
})
alienMern.get('/',(req,res)=>{
    res.status(200).send('<h1 style="color:red">Alien project started and ready to port ')
})
