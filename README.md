## 起動方法

- docker-compose -d
- yarn hasura console --project hasura
- yarn dev

## 構成

- TypeScript
- next.js(React フレームワーク)
- apollo/client(graphql クライアント)
- graphql-codegen(graphqlAPI を呼び出すコードを生成する)
- hasura(graphql サーバー)
- PostgresSQL(DB、graphql バックエンドとして使用)
- eslint(lint)
- prettier(コードフォーマッター)

## セットアップメモ

#### next.js

- npx create-next-app@latest --ts
- tsconfig.json に baseUrl="."と paths={"@/_":["src/_"]}を設定
- pages ディレクトリを削除し、src/pages と src/components を追加

#### prettier

- vs code の設定( https://fwywd.com/tech/next-eslint-prettier )( 他の設定は無視 )
- yarn add -D prettier eslint-config-prettier
  - vs code の prettier extension は local に prettier がインストールされていなければ extension に bundle された prettier を使う
- prettier の設定は package.json に書く
- ↓ vs code の prettier extension の設定

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

- eslint の設定は next の初期状態の物を使う(core-web-vitals)

#### hasura

- hasura の docker-compose.yml を引っ張ってくる
- docker-compose.yml の PG_DATABSE_URL を HASURA_GRAPHQL_DATABSE_URL に変更する
- docker-compose.yml の volume 名を変更する
- yarn add -D hasura-cli
- yarn hasura init hasura

#### graphql

- yarn add @apollo/react-hooks @apollo/client graphql
- yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-react-apollo @graphql-codegen/typescript-operations
- codegen.yml を引っ張ってくる
- .eslintignore と.prettierignore に src/generated を追記
- \_app.js を引っ張ってくる
