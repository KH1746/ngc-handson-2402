# 参考 https://github.com/GoogleCloudPlatform/cloud-run-microservice-template-nodejs/blob/main/Dockerfile

# ローカルで実行しているのと同じバージョンの Node.js 実行環境を使う
FROM node:20.11.1-slim

# 自分のアプリのインストール先
WORKDIR /usr/src/app

# インストール先へ必要なファイルをコピー
COPY . ./

# 依存関係のインストールとビルド
RUN npm i && npm run build;

# サーバープログラムの実行
ENTRYPOINT [ "npm", "run", "start" ]
