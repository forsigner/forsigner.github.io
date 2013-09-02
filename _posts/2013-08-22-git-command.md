---
layout: post
title: "常用git命令"
description: ""
category : tool
tags: [git]
---
{% include JB/setup %}


## 基本命令

``` python
git init  #创建新的 git 仓库
git clone /path/to/repository  #创建一个本地仓库的克隆版本
git clone username@host:/path/to/repository  #克隆远端服务器上的仓库
git status  #查看状态
git add <filename>  #把新文件或修改添加到缓存区(index)
git add .  #添加全部
git commit -m "代码提交信息"  #把改动提交到 HEAD，但还没提交到到的远端仓库
git pull  #从远程获取最新版本并merge到本地
git push  #将改动提交到远端仓库
git log  #查看记录
```

## 分支操作

``` python
git checkout -b <branch>  #新建分支
git checkout <branch>  #切换到某个分支
git diff <nowbranch> <otherbranch>  #查看两个分支的异同
git merge <otherbranch>  #合并当前分支和branchname分支
git branch -d <branch>  #删除分支
```

## 撒销操作

``` python
git revert HEAD  #撤销最近一次提交
git rever HEAD^  #撤销“上上次”提交
git rever HEAD <hash>  #撤销指定的提交


#reset命令把当前分支指向另一个位置，并且有选择的变动工作目录和索引。也用来在从历史仓库中复制文件到索引，而不动工作目录。
git reset HEAD  #回到上次提交的状态(last commited state)
git reset HEAD^(git reset --hard HEAD~1)  #回到上上次（倒数第二次）提交的状态
git reset HEAD~2  #回退两个commit
git reset HEAD~3  #回退三个commit
git reset hard <hash>  #回滚到指定的版本

#如果用--hard选项，那么工作目录也更新。
git reset --hard HEAD  #回到上次提交的状态(last commited state)
git reset --hard HEAD^(git reset --hard HEAD~1)  #回到上上次（倒数第二次）提交的状态
git reset --hard HEAD~2  #回退两个commit
git reset --hard HEAD~3  #回退三个commit
git reset --hard <hash>  #回滚到指定的版本
```

## Checkout的使用

checkout命令用于从历史提交（或者暂存区域）中拷贝文件到工作目录，也可用于切换分支。

``` python
git checkout <filename> (git checkout HEAD  <filename>)  #从暂存区域中拷贝内容
git checkout HEAD~2 foo.c  #将会提交节点HEAD~2中的foo.c复制到工作目录并且加到暂存区域中。

git checkout -b <branchname>  #新建分支
git checkout <branchname>  #切换到某个分支
git checkout <tagname>  #切换到某个版本
```
## rebase的使用


``` python
git rebase <branchname> #衍合是合并命令的另一种选择
```

## 小贴士

``` python
gitk  #内建的图形化git
git config color.ui true  #彩色的git输出
git config format.pretty oneline  #显示历史记录时，只显示一行信息
git add -i  #交互地添加文件至缓存区
```


## 参考资料

* [git - 简易指南](http://rogerdudler.github.io/git-guide/index.zh.html)
* [图解Git](http://marklodato.github.io/visual-git-guide/index-zh-cn.html)
* [Git Community Book 中文版](http://gitbook.liuhui998.com/index.html)
* [git book中文版](http://git-scm.com/book/zh)
* [Everyday GIT With 20 Commands Or So](https://www.kernel.org/pub/software/scm/git/docs/everyday.html)
* [gittutorial](https://www.kernel.org/pub/software/scm/git/docs/gittutorial.html)
* [git Manual Page](https://www.kernel.org/pub/software/scm/git/docs/)
* [Git User’s Manual](https://www.kernel.org/pub/software/scm/git/docs/user-manual.html)









