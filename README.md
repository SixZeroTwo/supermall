# 项目目录划分

# src

## assets 用来放统一的图片、css等资源

## common 公共的js文件（多个地方都用的常量、工具等）

## components 组件

### common 在多个项目中也可使用的公共组件

### content 当前项目使用的公共组件

## views 界面组件

## router 路由

## store 状态管理

## network 网络

# CSS的引入和预处理

base.css（APP中@import导入）和normalize.css（base中导入）

# vue.config.js和editorconfig

起别名 resolve:{alias:{}}和代码规范

# tabbar引入和项目划分

# 商品列表

## 存储商品的数据结构

goods（Object）：{

​	pop：{page:1（加载到第几页）, list:[]（存放加载好的商品数据）}，

​	new：{}，

​	sell：{}

}
