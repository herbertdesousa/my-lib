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

## React Native
```bash
$ npm install eslint --save-dev
$ npx eslint --init
```

### Prettier
```bash
$ npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
```

extends 
```bash
$ npm -D i eslint-config-airbnb eslint-config-airbnb-typescript
$ npm i -D eslint-plugin-import eslint-import-resolver-typescript
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
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["prettier", "import"],
  "rules": {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": ["tsconfig.json", "package/tsconfig.json"]
      }
    }
  }
}
```

.prettierrc
```json
{
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "none"
}
```

<br />

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
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}
```

<br />

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
      "prettier"
    ],
    "plugins": ["prettier"],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": ["./tsconfig.json"]
    },
    "rules": {
      "prettier/prettier": "error",
      "@typescript-eslint/no-throw-literal": "off",
      "@typescript-eslint/no-unused-vars": "warn"
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
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}
```

------

working example

package.json
```json
"devDependencies": {
  "eslint": "^8.33.0",
  "eslint-config-prettier": "^8.6.0",
  "eslint-config-standard-with-typescript": "^33.0.0",
  "eslint-plugin-import": "^2.27.5",
  "eslint-plugin-n": "^15.6.1",
  "eslint-plugin-prettier": "^4.2.1",
  "eslint-plugin-promise": "^6.1.1",
  "@typescript-eslint/eslint-plugin": "^5.50.0",
  "@typescript-eslint/parser": "^5.50.0",
  "prettier": "^2.8.3"
}
```

.eslintrc.json
```json
{
  "env": {
    "es2020": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "prettier",
    "@typescript-eslint"
  ],
  "ignorePatterns": "build",
  "rules": {
    "prettier/prettier": "error"
  }
}
```

prettier.config.js
```js
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
};
```
