//导入jquery es6
import $ from 'jquery';
//这是node写法
//const $ =require('jquery');
import '../css/index.css'
//webpack默认只能打包js文件 处理不了其他非js类型文件
//如果要处理非js类型文件 我们需要手动安装一些第三方的loader加载器
//在webpack.config.js中有个module对象下面的rules属性的test用于存放第三方插件的匹配规则,匹配规则从右到左执行第三方插件
//webpack处理不了css中url地址>url-loader\file-loader  转换成base64 url-loader?limit=7000 文件大小最大限制 超过转成base64 name=[name].[ext]
// 照片名称不会被改变 但是如果有相同的名字存只会显示第一张的 因为打包了的静态资源存放在了根目录 解决:name=[hash:8]-[name].[ext]
import '../css/test.less'
import '../css/test2.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'red');
    $('li:even').css('backgroundColor', 'blue');
});
