//设置baseurl 不同环境下面
let baseUrl;
switch(process.env.NODE_ENV) {
    case  'development':
        baseUrl= 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseUrl = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev' :
        baseUrl = 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'prod' :
        baseUrl = 'http://mall-pre.springboot.cn/api';
        break;
    default :
    baseUrl  = 'http://mall-pre.springboot.cn/api';
    break;
}

export default{
    baseUrl
}