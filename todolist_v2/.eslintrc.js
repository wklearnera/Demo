module.exports = {
    // 指定解析器
    // 解析器如果改成 parser: babel-eslint  会出一些意想不到的问题
    "parserOptions": {
        "parser": "babel-eslint"
    },
    // 指定代码运行的环境
    env: {
        browser: true,
        node: true,
        es6: true
    },
    // 配置 ESLint 的规则
    extends: [
        // "eslint:recommended",
        // "standard",
        "plugin:vue/recommended",
        "prettier"
    ],
    // 配置插件
    plugins: [
        "vue",
        "prettier",
        // "html"
    ],
    // 配置解析器选项
    parserOptions: {
        sourceType: "module"
    },
    // 配置规则
    rules: {
        // 如果启用 Prettier，可以在这里添加规则
        "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"], //需要忽略的组件名
      },
    ],
    }
}