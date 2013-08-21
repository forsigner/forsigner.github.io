---
layout: post
title: "使用JavaScript检测ie版本"
description: ""
category : frontend
tags: [JavaScript]
---
{% include JB/setup %}


## 摘要

使用JavaScript检测IE浏览器的方法。

> **注意**:

>为了保证代码持久可用，如果可以的话，强烈推荐使用功能特点检测，而不是浏览器检测。这里阐述的技术只能在以下情况使用：不希望使用ie的条件注视，无法检测一个特性(feature)或bug，直接检测特性/错误是不可能考虑到所有旧的IE浏览器，除了支持该功能，不久前将是矫枉过正。

>为了保证你的Web程序能在心版本的浏览器中很好的运行，在使用该技术时，强烈建议要完全过滤掉老版本的IE，而不是最新的稳定版(详见“Future-proof usage”章节)。

通过检查IE浏览器中是否存在非标准的document.all对象，可以对IE浏览器进行检测。

通过检查特定版本的IE浏览器版是否存在标准的全局对象，可以准确检测IE浏览器的版本。

下面表格列出现存的各版本IE浏览器所支持的对象:

<table class="table table-bordered">
    <tbody>
        <tr>
            <th scope="col">IE&nbsp;版本</th>
            <th scope="col">支持的标准对象</th>
        </tr>
        <tr>
            <td>10+</td>
            <td><code>window.atob</code></td>
        </tr>
        <tr>
            <td>9+</td>
            <td><code>document.addEventListener</code></td>
        </tr>
        <tr>
            <td>8+</td>
            <td><code>document.querySelector</code></td>
        </tr>
        <tr>
            <td>7+</td>
            <td><code>window.XMLHttpRequest</code></td>
        </tr>
        <tr>
            <td>6+</td>
            <td><code>document.compatMode</code></td>
        </tr>
    </tbody>
</table>

通过检查这些对象的存在，必要时可以把这些检查组合起来使用，可以可靠地检测出特定的版本的IE或IE版本的范围。

这种检测方法安全可靠，在JavaScript代码被压缩时也适用。

## 例子


下面的代码只能在IE7或低于IE7的版本运行：

``` js
if (document.all && !document.querySelector) {
    alert('IE7 or lower');
}
```

下面的代码只能在IE8运行，在IE7或IE9+无效：

``` js
if (document.all && document.querySelector && !document.addEventListener) {
    alert('IE8 only');
}
```

## 使用内部行为(*.htc)

HTML组件（*.htc）的一种特殊HTML文档类型，它是包含了JavaScript脚本的HTML文件。通过使用只支持IE的非标准行为CSS属性，可以把这些文件附加到HTML元素中。要通过检查全局对象对IE浏览器版本的检测，htc文件应包含有效的HTML文档DOCTYPE声明：

``` html
<!DOCTYPE html>
```
否则，所有上面列出的检测对象（除了window.XMLHttpRequest对象）不存在于任何IE版本。

另外，由于行为特征(hehavior feature)仅支持IE，在这种情况下，检查的document.all也是没有效果的。


## 永不过时的用法(Future-proof usage)

为了确保你的Web程序在新版本的浏览器能运行，强烈建议通过检查全局对象是否存来检测IE浏览器的版本，所有浏览器范围分为两部分：

* 现代浏览器(all different from IE and at least latest stable version of IE);
* 旧版本的IE(older than latest stable one).

The technique described here should not be used to apply individual tweaks in latest stable version of IE. We know nothing about these new versions yet, so any individual tweaks can lead to unpredictable results. In general, this rule applies to any methods of detecting versions of any browsers.

例如，你不应该使用下面的代码：

``` js
// This code is WRONG, it should NOT be used.
if (document.all && window.atob) {
    alert('IE10 or higher');
}
```

## 浏览器版本检测及最佳实践

一般来说，功能的可用性可以被直接探测到。例如，方法querySelector（）方法是否可用，querySelector对象是否存在。否则，脚本可能h会认为一个功能不可用，而实际上它是可用的，反之亦然。

然而，某些功能往往只在IE浏览器中不可用，所以它可能是不切实际的正式全功能的，但在这种情况下，在其他浏览器中的检查效率很慢。

例如，要检查浏览器对CSS属性display:table的支持，正式的方法应该如下：

1. 创建一个临时的元素;
2. 把它DOM设置为：style.display=table;
3. 比较真实的style.display值与table中的的字符串。

但是,在很长一段时间，display:table已经被所有IE以外的浏览器所支持支持，但是IE浏览器只在ie8+支持，所以这足以间接检查IE版本：

``` js
if (document.all && !document.querySelector) { // IE7 or lower
    alert('{display: table} is not supported');
}
```

这种检测方法效率会高得多，并且十分future-proof。

## 检测ie版本的其他方法

### 条件编译

有时条件编译可以用来检测IE浏览器版本。条件编译调用一些非标准的条件，这些条件只支持IE浏览器，通常包裹在JavaScript注释中，以确保代码在语法上是正确的，且与其他浏览器兼容。

在这种情况下,IE浏览器版本的检测是基于:特定版本的IE浏览器和所使用的JavaScript引擎之间的对应关系：

<table class="table table-bordered">
    <tbody>
        <tr>
            <th scope="row">IE&nbsp;版本</th>
            <td>10</td>
            <td>9</td>
            <td>8</td>
            <td>7</td>
            <td>6</td>
        </tr>
        <tr>
            <th scope="row">JavaScript 引擎版本</th>
            <td>10</td>
            <td>9</td>
            <td>5.8</td>
            <td>5.7</td>
            <td>5.6</td>
        </tr>
    </tbody>
</table>

例如，下面的代码能够用来检测，ie3-ie10:

``` js
var ieVersion = /*@cc_on (
                  function() {
                      switch(@_jscript_version) {
                          case 1.0:
                              return 3;
                          case 3.0:
                              return 4;
                          case 5.0:
                              return 5;
                          case 5.1:
                              return 5;
                          case 5.5:
                              return 5.5;
                          case 5.6:
                              return 6;
                          case 5.7:
                              return 7;
                          case 5.8: 
                              return 8;
                          case 9:
                              return 9;
                          case 10:
                              return 10;
                  }})()
                  || @*/ 0;
```

不幸的是，使用条件编译时是不安全的,因为压缩JavaScript代码会去掉注释（e. g. with Google Closure Compiler）。

此外，条件编译只能正确检测真正的IE浏览器,在ie浏览器的仿真模式中将会出现各种问题。

## document.documentMode属性

一种比条件编译更有用更有可预见的的方法是使用非标准的document.documentMode属性，在IE浏览器的仿真模式中也可以使用：

``` js
if (document.all && document.documentMode && 8 === document.documentMode) {
    alert('IE8 or IE9+ in IE8 compatibility mode');
}
```

这个属性是只在IE8+中可用，所以这个属性只能区分IE8以上的版本，。要检测的低于8的版本，需要更复杂的条件：

``` js
if (document.all && 
   (!document.documentMode || (document.documentMode && document.documentMode < 8))) {
    alert('IE7 or lower or IE8+ in IE7 compatibility mode');
}
```

应该考虑，因为document.documentMode属性唯一的作用是检测IE浏览器版本，这个属性在未来可能会被弃用，就行条件注释已经被弃用。

## 条件注释

条件注释是基于HTML注释非标准特性，仅在IE9和旧版本中可用。


> **注意**

>在ie10中，条件注释已被弃用，即ie10将不再支持条件注视。


使用JavaScript检测IE浏览器版本，有多中方式使用条件注释。


* 在静态的HTML代码，初始化JavaScript变量：

in HTML file:

``` html
<script>
    var ie = false;
</script>
<!--[if lte IE 7]><script>
    ie = 7;
</script><![endif]-->
```

in JavaScript file:

``` js
if (7 === ie) {
    alert('IE7 or lower');
}
```

在静态的HTML代码中使用条件注释缺乏灵活性，并污染HTML代码，这样的代码糟糕透了。

*动态生成的一个临时HTML元素,内部包含一个拥有条件注释的节点，然后检查条件注释是否已被浏览器处理（如果条件注释是true，IE浏览器在DOM树中自动替换其内容为条件注释）：

Dynamic generation of a temporary HTML element containing a node inside a conditional comment, and then checking if the conditional comment has been processed by browser (if condition inside a conditional comment is true, IE automatically replaces the conditional comment with its content in DOM tree):

``` js
var test = document.createElement('div');
test.innerHTML = '<!--[if lte IE 7]>1<![endif]-->';

if ('1' === test.innerHTML) {
    alert('IE7 or lower');
}
```

相比检查全局对象，这种方法是不太优雅，性能更差。

终于翻译完了，翻译文章真不容易。
原文：[Internet Explorer (IE) version detection in JavaScript](http://tanalin.com/en/articles/ie-version-js/)。
