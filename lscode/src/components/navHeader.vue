<template>
    <div class="header">
        <!--顶部容器-->
        <div class="nav-topbar">
            <div class="container">
                <!--左边菜单-->
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username" @click="logout">退出</a>
                    <a href="/#/order/list" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>购物车({{cartCount}})
                    </a>
                </div>
            </div>

        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="menu-item">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="menu-item">
                        <span>小米电脑</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="menu-item">
                        <span>米家电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">xxxx</div>
                                        <div class="pro-price">1999¥</div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            username:'',
            cartCount:0
        }
    },
    methods:{
        login(){
            return
        },
        goToCart() {
            return
        },
        logout() {
            return
        }
    }
}
</script>
<style lang="scss">
    @import "./../assets/scss/base.scss";
    @import "./../assets/scss/mixin.scss";
    @import './../assets/scss/config.scss';
    @import "./../assets/scss/aa.scss";
    .header {
        .nav-topbar {
            height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            line-height: 39px;
            .container {
                a{
                    display: inline-block;
                }
                /*display: flex;*/
                /*justify-content: space-between;
                   mixin的写法 @include functionName(args)
                */
                @include flex();
                .topbar-menu {
                    a{
                        color: #B0B0B0;
                        margin-left: 13px;
                    }
                }
                .topbar-user{
                    a{
                        color: #B0B0B0;
                        margin-right: 13px;
                    }
                    .my-cart {
                        width:110px;
                        background-color:#FF6600;
                        text-align:center;
                        color:#ffffff;
                        margin-right:0;
                        .icon-cart {
                            @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
        .nav-header {
            .container{
                position: relative;
                height: 112px;
                /*background: red;*/
                /*border: 1px solid seagreen;*/
                @include flex();
                .header-menu {
                    display: inline-block;
                    width: 643px;
                    padding-left: 200px;
                    .menu-item {
                        display: inline-block;
                        margin-right: 20px;
                        line-height: 112px;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children {
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            z-index: 10;
                            border-top: 1px solid seagreen;
                            background: #ffffff;
                            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            transition: all .5s;
                            .product {
                                position: relative;
                                float: left;
                                width: 16.2%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img {
                                    height: 137px;

                                }
                                .pro-name {
                                    font-size: 19px;
                                    color: $colorB;
                                    font-weight: bold;
                                    margin-bottom: 8px;
                                }
                                .pro-price {
                                    color: $colorA;
                                }
                                &:before{
                                    content:' ';
                                    position:absolute;
                                    top:28px;
                                    right:0;
                                    border-left:1px solid $colorF;
                                    height:100px;
                                    width:1px;
                                }
                                &:last-child:before {
                                    display: none;
                                }

                            }
                        }
                    }
                }
                .header-search {
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input {
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;

                        }
                        a{
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }

            }
        }
    }
</style>