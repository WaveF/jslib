# jslib

[中文版本](https://github.com/WaveF/jslib/blob/main/README.md) | [English version](https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https://raw.githubusercontent.com/WaveF/jslib/main/README.md)

## 介绍
此项目旨在为 JS Library 的开发提供一个基础模板，使其能够快速开始开发并基于 [ViteJS](https://vitejs.dev/) 编译出不同格式的库文件，以便在各种 JS 环境中使用和测试。

## 使用说明
1. 修改 `vite.config.js` 中的 `LIBRARY_NAME` 库名称
2. 编辑 `main.js`，并按需要修改 `index.html` 以便于调试时预览效果
3. 将 `main.js` 编译到 `dist` 目录下

## 用作模板
`git clone https://gitee.com/wavef/jslib.git YOUR_LIBRARY_NAME`

## 远程仓库

- ### 移除默认的远程仓库
  `git remote remove origin`

- ### 添加新的远程仓库
  `git remote add gitee https://gitee.com/YOUR_NAME/REPO_URL.git`
  `git remote add github https://github.com/YOUR_NAME/REPO_URL.git`

- ### 设置默认的远程仓库
  `git push -u gitee master`

- ### 初次提交到远程仓库，以后可以去掉 --force 参数
  `git push --force gitee master && git push --force github master:main`


## 安装依赖
`pnpm install`

## 开发调试
`pnpm dev`

## 编译打包
`pnpm build`
