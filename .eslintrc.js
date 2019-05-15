// npm install --save-dev babel-eslint eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier

module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "prettier",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "bracketSpacing": true,
        "arrowParens": "avoid"
      }
    ],
    "indent": [
      2,
      2
    ],
    "semi": 2,
    "quotes": [
      "error",
      "single",
      "avoid-escape"
    ],
    "no-else-return": 1,
    "no-unreachable": 1,
    "no-empty": 1,
    "no-duplicate-case": 1,
    "block-scoped-var": 2,
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 3,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase"
    ],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    "vue/no-v-html": 0
  }
}
