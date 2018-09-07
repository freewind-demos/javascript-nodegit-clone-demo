JavaScript Nodegit Clone Demo
=============================

Mac下需要做一些准备工作
-------------

在Linux下（如Ubuntu）不需要。

1. 使用旧版本的node，比如`v8.11.2`
    1. 可以使用[nvm](https://github.com/creationix/nvm)来管理。
    2. 使用`node -version`检查版本号
1. `brew install libgcrypt`
2. 保证`python2`命令正常工作
    1. `python2 --version`
    2. 可以使用`brew install python2`或者`pyenv`来管理

安装与运行
-----

在Mac下需要保证当前使用的是一个经过测试可以正常运行的node版本（如`v8.11.2`）：

```
$ node -v
v8.11.2
```

可以使用nvm切换：

```
$ nvm use
```

它将使用`.nvmrc`中指定的版本号。

```
npm install
node demo.js
```

它将会把git repo从github下下载到`./local-repo`目录下