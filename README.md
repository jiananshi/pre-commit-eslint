# pre-commit-eslint

[![version](https://img.shields.io/github/release/wxiaoming/pre-commmit-eslint.svg?style=flat-square)](https://github.com/wxiaoming/pre-commit-eslint/releases)![downloads](https://img.shields.io/github/downloads/wxiaoming/pre-commit-eslint/total.svg?style=flat-square)

![error screencast](http://7xv1ia.com1.z0.glb.clouddn.com/github/pre-commit-eslintscreenshot-error.png)

**pre-commit-eslint** 使用了 git 的 hook，安装后将在项目的 `.git` 目录下添加一个 `pre-commit` hook 对更改的 JS 文件使用 eslint 检查，可以使用自定义的 `.eslintrc` ，默认的用的是 [elemefe-eslint](https://github.com/ElemeFE/eslint-config-elemefe)

## 安装
`yarn add pre-commit-eslint --dev`

## License
MIT &copy;
