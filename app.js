const express = require('express');
const bp = require('body-parser');
const useRouter = require('./user');


const app = express();
app.use(bp.urlencoded({extended:false}))


app.use(useRouter);
app.listen(3000,()=>{
    console.log('server okee')
})