# Setup Eslint Prettier

## Editor Config
- Install ext on vscode
- add file .editorconfig
```.editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true 
```

## React - Web
```bash
$ npm install eslint --save-dev
$ npx eslint --init
```

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

## Node
```bash
$ npm install eslint --save-dev
$ npx eslint --init
```

### Prettier
```bash
$ npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
```

### Files
.eslintrc.json
```json
  {
    "env": {
      "es2021": true,
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "standard-with-typescript",
      "prettier"
    ],
    "plugins": ["prettier"],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": ["./tsconfig.json"]
    },
    "rules": {
      "prettier/prettier": "error"
    },
    "overrides": [
      {
        "files": ["*.ts"],
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