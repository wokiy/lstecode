const express = require('express');
const boom = require('boom');
const userRouter = require('./user');
const {CODE_ERROR} = require('../utils/constant');

// app.use(boom());
//注册路由
const router = express.Router();

router.get('/',function(req,res,next) {
    res.send('welcome to 智慧城市研究院疫情文档中心');
})
//加载user路由 ： 访问路径 /user/info
router.use('/user',userRouter);

//放置在正常请求的后面  集中处理404
router.use((req,res,next) => {
    next(boom.notFound('接口错误！！！'))
})
/**
 * 1.方法参数不能少
 * 2. 由于中间件是顺序执行，必须放置在路由后面
 * 自定义路由错误处理中间件
 * */
router.use((err,req,res,next)=>{
    console.log(err);
    //获取错误码
    const msg = (err && err.message) || '系统错误';
    const statusCode = (err.output && err.output.statusCode) ||500;
    const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message;
    res.status(statusCode).json({
        code:CODE_ERROR,
        msg,
        err:statusCode,
        errorMsg
    })

})


module.exports = router; 