//导入jquery es6
import $ from 'jquery';
//这是node写法
//const $ =require('jquery');

$(function(){
   $('li:odd').css('backgroundColor','red');
    $('li:even').css('backgroundColor','blue');
});
