# express 

```
    // // 中间件
// function testloader(req,res,next) {
//     console.log('doit');//控制台执行 doit
//     next(); //中间件放行
// }
// app.use(testloader);//中间注册加载 install执行 一个function 

// //异常处理后置函数
// function errorHandler (err,req,res,next) {
//     console.log(err);
//     res.status(500).json({
//         error:1,
//         msg:err.toString()
//     })
// }

```
1. 中间件 【中间件就是一个函数，该函数在请求和响应之间被响应调用】 //中间件在结束前被调用
2. 路由 【应用响应请求的一种机制】
3. 异常处理
4. 把整个路由变为一个中间件