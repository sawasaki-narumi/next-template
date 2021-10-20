## start
* docker-compose -d
* yarn hasura console --project hasura

## general
* npx create-next-app@latest --ts
* tsconfig.jsonにbaseUrl="."とpaths={"@/*":["src/*"]}を設定
* pagesディレクトリを削除し、src/pagesとsrc/componentsを追加

# prettier
* vs codeの設定( https://fwywd.com/tech/next-eslint-prettier )( 他の設定は無視 )
* yarn add -D prettier eslint-config-prettier
  * vs codeのprettier extensionはlocalにprettierがインストールされていなければextensionにbundleされたprettierを使う
* prettierの設定はpackage.jsonに書く
* ↓ vs codeのprettier extensionの設定
```
  // デフォルトのフォーマッタを prettier に設定
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // ファイル保存時、prettier による自動フォーマット
  "editor.formatOnSave": true,
  // ファイル保存時、ESLint による自動フォーマット
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```
* eslintの設定はnextの初期状態の物を使う(core-web-vitals)

# hasura
* hasuraのdocker-compose.ymlを引っ張ってくる
* docker-compose.ymlのPG_DATABSE_URLをHASURA_GRAPHQL_DATABSE_URLに変更する
* yarn add -D hasura-cli
* yarn hasura init hasura

# graphql
* yarn add @apollo/react-hooks @apollo/client graphql
* yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-react-apollo
* codegen.ymlを引っ張ってくる
* .eslintignoreと.prettierignoreにsrc/generatedを追記
* _app.jsを引っ張ってくる
