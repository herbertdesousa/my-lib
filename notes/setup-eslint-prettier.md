# Setup Eslint Prettier

## React - Web
```bash
$ npm install eslint --save-dev
$ npx eslint --init
```

[eslint-steps](https://res.cloudinary.com/practicaldev/image/fetch/s--51MaNypo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1k6lm2nke17wpiys7o84.gif)

### Prettier
```bash
$ npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
```

### Files
.eslintrc.json
```json
  {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "plugin:react/recommended",
      "eslint:recommended",
      "plugin:prettier/recommended",
      "standard-with-typescript",
      "prettier"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": ["./tsconfig.json"]
    },
    "plugins": ["react", "prettier"],
    "rules": {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off"
    },
    "overrides": [
      {
        "files": ["*.jsx", "*.tsx"],
        "rules": {
          "@typescript-eslint/explicit-function-return-type": ["off"]
        }
      }
    ]
  }
```

.prettierrc
```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}
```