//导入jquery es6
import $ from 'jquery';
//这是node写法
//const $ =require('jquery');
import '../css/index.css'
//webpack默认只能打包js文件 处理不了其他非js类型文件
//如果要处理非js类型文件 我们需要手动安装一些第三方的loader加载器
//在webpack.config.js中有个module对象下面的rules属性的test用于存放第三方插件的匹配规则,匹配规则从右到左执行第三方插件
import '../css/test.less'
import '../css/test2.scss'
$(function(){
   $('li:odd').css('backgroundColor','red');
    $('li:even').css('backgroundColor','blue');
});
