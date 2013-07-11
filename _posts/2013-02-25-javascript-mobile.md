---
layout: post
title: "JavaScript识别移动设备系统和浏览器类型"
description: ""
category : frontend
tags: [JavaScript]
---
{% include JB/setup %}

在实习期间，一直在移动设备上做开发，现在实习已经结束了，最近也比较闲，所以，想把实习期间，用到的一些比较细的JavaScript知识点记录总结一下。

今天要记录的知识点是，如何用JavaScript识别移动设备的系统类型和移动设备中的浏览器类型。要说的是，识别移动设备的系统类型和识别移动设备中的浏览器类型是两个不同的概念。

识别代码如下，为给更好的模块花，这里我把它放进一个对象里去：

``` js
Check = {
    //以下三句代码识别浏览器类型
    isWebkit = (/webkit/i).test(navigator.appVersion), //识别webkit
    isFirefox = (/firefox/i).test(navigator.userAgent), //识别moz
    isTrident = (/trident/i).test(navigator.userAgent), //识别ms

    //以下三句识别操作系统类型
    isAndroid = (/android/gi).test(navigator.appVersion), //识别Android os
    isIos = (/iphone|ipad/gi).test(navigator.appVersion), //识别ios
    isPlaybook = (/playbook/gi).test(navigator.appVersion); //识别Playbook os
}
```

识别返回值是boolean类型，用法如下：

``` js
if(Check.isAndroid) {
    alert("this is android");
}
```
