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

git reset --hard HEAD  #回到上次提交的状态(last commited state)
git reset --hard HEAD^(git reset --hard HEAD~1)  #回到上上次（倒数第二次）提交的状态
git reset --hard HEAD~2  #回退两个commit
git reset --hard HEAD~3  #回退三个commit
git reset --hard <hash>  #回滚到指定的版本
```


 









