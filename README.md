# Pre-commit-ESLint

![error screencast](http://7xv1ia.com1.z0.glb.clouddn.com/github/pre-commit-eslintscreenshot-error.png)

## 原理
**pre-commit-eslint** 利用 [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)，安装后在项目的 `.git` 目录下添加一个 pre-commit-hook 对更改的 JS 文件使用 eslint 检查，可以使用自定义的 `.eslintrc` ，默认的用的是 [elemefe-eslint](https://github.com/ElemeFE/eslint-config-elemefe)

## 安装
`npm install pre-commit-eslint --dev`

## FAQ
**安装后并提交 commit 没有生效**

首先在项目根目录执行 `cat ./git/hooks/pre-commit` 确认 hook 已经存在，不存在的话目前一个常见情况是 yarn 的某些版本并不会在安装后执行 `postinstall` hook。

解决方案：安装后执行 `node ./node_modules/pre-commit-eslint/index.js` 即可。

[Yarn postinstall issue](https://github.com/yarnpkg/yarn/issues/853)

## License
MIT &copy;

