# babel-record

##### 需要安装的依赖

* `@babel/core`, `@babel/cli`, 
* 预设： `@babel/preset-env` 
* `@babel/plugin-transform-runtime` `@babel/runtime-corejs3`
* `babel-loader`,`babel-eslint`
* 一篇非常全面的配置教程
* 前提是babel7.4以上

##### 下面分为两种配置方式(基于babel7.4以后)

1. 第一种polyfill垫片方案

> 建议使用在application里面，不建议在library或者tool里面使用

需要安装的依赖有
 * 基础:`@babel/core @babel/cli @babel/preset-env` `babel-loader@8`
 * 区别 `core-js@3` `regenerator-runtime`

配置如下
```js
// .babelrc
// The `corejs` option only has an effect when the `useBuiltIns` option is not `false`
{
    "presets": [
        ["@babel/preset-env", {
            "corejs": 3,
            "useBuiltIns": "usage",
            "modules": false // 对ES6的，模块不做转化
        }]
    ],
    "plugins": [

    ]
}
// 入口文件顶部加如下代码
//import "core-js/stable"; // polyfill ES features
//import "regenerator-runtime/runtime"; // 转化 generator function 
```
2. 第二种方案 transform-runtime

需要安装的依赖有
 * 基础:`@babel/core @babel/cli @babel/preset-env` `babel-loader@8`
 * 区别 `@babel/plugin-transform-runtime` `@babel/runtime-corejs3`

```js
{
    "presets": [
        ["@babel/preset-env", {
            "modules": false
        }]
    ],
    "plugins": [
        ["@babel/plugin-transform-runtime", {
            "corejs": 3
        }]
    ]
}
```

1. plugin

这个插件是解决深层嵌套问题
```js
const obj = {
    a: {
        b: {
            c: 312
        }
    }
}
obj?.a?.b?.c
```
```s
npm install --save-dev @babel/plugin-proposal-optional-chaining
{
    "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```
2. browserslist 

> [测试网站](https://browserl.ist/)

3. corejs3 

[corejs3 的更新](https://segmentfault.com/a/1190000020237817)
这篇文章讲的特别好，两种配置方案

4. polyfill 还是 transform-runtime

[polyfill 还是 transform-runtime](https://segmentfault.com/a/1190000020237790)

5. [babel中的runtime-corejs和plugin-transform-runtime](https://jsweibo.github.io/2019/08/10/babel%E4%B8%AD%E7%9A%84runtime-corejs%E5%92%8Cplugin-transform-runtime/)

