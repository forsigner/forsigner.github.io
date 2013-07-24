---
layout: post
title: "JavaScript location 用法备忘"
description: ""
category: frontend
tags: [JavaScript]
---
{% include JB/setup %}

因为最近工作上一直会使用到JavaScript的location对象，今天要好好温习一下基础，系统地认识一下loaction。

location是BOM中最重要的对象之一，用于获取或设置窗体的URL，并且可以用于解析URL。

###location属性

- JavaScript hash 属性	--	返回URL中#符号后面的内容
- JavaScript host 属性	--	返回域名
- JavaScript hostname 属性	--	返回主域名
- JavaScript href 属性	--	返回当前文档的完整URL或设置当前文档的URL
- JavaScript pathname 属性	--	返回URL中域名后的部分
- JavaScript port 属性	--	返回URL中的端口
- JavaScript protocol 属性	--	返回URL中的协议
- JavaScript search 属性	--	返回URL中的查询字符串
- JavaScript assign()	函数 --	设置当前文档的URL
- JavaScript replace() 函数 --	设置当前文档的URL，并在history对象的地址列表中删除这个URL
- JavaScript reload()	函数 --	重新载入当前文档(从server服务器端)
