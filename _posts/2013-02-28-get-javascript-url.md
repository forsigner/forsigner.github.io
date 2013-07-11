---
layout: post
title: "Javascript获取url的参数"
description: ""
category : frontend
tags: [JavaScript]
---
{% include JB/setup %}

在Web开发中，经常会用url传递一些参数，用Javascript获取url参数很简单，主要使用split()把url分割成数组，然后就可以使用参数了。方法为了方便快速的获取url中的参数，也为了以后代码的重用，我把它写成一个函数，把获取的参数集合存在一个对象里。

实现代码如下：

``` js
var UrlParameters = function() {
    var url = window.location.search,// 获取url中"?"和"?"后面的字符串
        args, arg,
        back = {}; // 定义一个对象用来储存获取参数
    if(url == '') return 0; //如果url没有任何参数，返回0
    if(url.indexOf('?') != -1) { // 如果url存在参数 
        args = url.substr(1).split('&amp;'); // 分割各个参数
        for (var i = 0,; i &lt; args.length; i++) {
            arg = args[i].split('=');
            back[arg[0]] = arg[1];// 把每对参数都存在对象中
        };
    }
    return back;
};
```

使用方法很简短，只要在Javascript中直接调用就行了，如下：

``` js
var myUrlParameters  =  getUrlParameters();
alert(myUrlParameters.a); // alert出123
// 假设url为 http://www.hello.com?a=123
```

