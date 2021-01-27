const express = require('express');
const app = express();
const router = require('./router'); //全局路由托管加载 
app.use('/',router);
const server = app.listen(5000,function() {
    const {address,port} = server.address();
    console.log("address and port" ,address,port);
})

