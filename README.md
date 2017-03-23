# Pre-commit-ESLint

![error screencast](http://7xv1ia.com1.z0.glb.clouddn.com/github/pre-commit-eslintscreenshot-error.png)

## 原理
**pre-commit-eslint** 利用 [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)，安装后在项目的 `.git` 目录下添加一个 pre-commit-hook 对更改的 JS 文件使用 eslint 检查，可以使用自定义的 `.eslintrc` ，默认的用的是 [elemefe-eslint](https://github.com/ElemeFE/eslint-config-elemefe)

## 安装
`yarn add pre-commit-eslint --dev`

## License
MIT &copy;

