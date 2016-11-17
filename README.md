# pre-commit-eslint

[![version](https://img.shields.io/github/release/wxiaoming/pre-commmit-eslint.svg?style=flat-square)](https://github.com/wxiaoming/pre-commit-eslint/releases)![downloads](https://img.shields.io/github/downloads/wxiaoming/pre-commit-eslint/total.svg?style=flat-square)

![error screencast](http://7xv1ia.com1.z0.glb.clouddn.com/github/pre-commit-eslintscreenshot-error.png)

**pre-commit-eslint** 使用了 git 的 hook，安装后将在项目的 `.git` 目录下添加一个 `pre-commit` hook 对更改的 JS 文件使用 eslint 检查，你可以使用自己的 `.eslintrc` ，这里也为没有配置的用户提供了一份默认的 `.eslintrc`

## 安装

`npm install pre-commit-eslint --save-dev`

or

`yarn add pre-commit-eslint --dev`

## 默认的 Eslintrc 配置

```json
{
    "rules": {
        "no-with": [ 2 ],
        "no-eval": [ 2 ],
        "no-octal-escape": [ 2 ],
        "no-shadow-restricted-names": [ 2 ],
        "valid-typeof": [ 2 ],
        "no-caller": [ 2 ],
        "no-extend-native": [ 2 ],
        "no-console": [ 1 ],
        "no-debugger": [ 1 ],
        "indent": [ 1, 2, { "SwitchCase": 1 } ],
        "quotes": [ 1, "single" ],
        "linebreak-style": [ 1, "unix" ],
        "semi": [ 1, "always" ],
        "semi-spacing": [ 1 ],
        "one-var": [ 1, { "initialized": "never" } ],
        "no-multi-spaces": [ 1 ],
        "no-empty": [ 1 ],
        "space-infix-ops": [ 1 ],
        "comma-spacing": [ 1 ],
        "spaced-comment": [ 1, "always", { "exceptions": [ "*" ] } ],
        "no-unneeded-ternary": [ 1 ],
        "no-useless-call": [ 1 ],
        "block-scoped-var": [ 1 ],
        "comma-dangle": [ 1, "never" ],
        "comma-style": [ 1, "last" ],
        "space-in-parens": [ 1 ],
        "space-before-keywords": [ 1 ],
        "space-after-keywords": [ 1 ],
        "arrow-spacing": [ 1 ],
        "space-unary-ops": [ 1 ],
        "space-return-throw-case": [ 1 ],
        "new-parens": [ 1 ],
        "key-spacing": [ 1 ],
        "eqeqeq": [ 1 ],
        "eol-last": [ 1 ],
        "dot-location": [ 1, "property" ],
        "func-style": [ 1, "expression" ],
        "no-lone-blocks": [ 1 ],
        "no-native-reassign": [ 1 ],
        "no-nested-ternary": [ 1 ],
        "no-fallthrough": [ 1 ],
        "no-undef": [ 0 ],
        "no-unused-vars": [ 0 ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "eslint:recommended"
}
```

## MIT License

Copyright (c) 2016 @WXiaoming

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

