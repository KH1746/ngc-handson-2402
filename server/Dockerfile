# 参考 https://github.com/GoogleCloudPlatform/cloud-run-microservice-template-nodejs/blob/main/Dockerfile

# ローカルで実行しているのと同じバージョンの Node.js 実行環境を使う
FROM node:20.11.1-slim

# 自分のアプリのインストール先
WORKDIR /usr/src/app

# インストール先へ必要なファイルをコピー
COPY ./server ./

# 依存関係のインストール
RUN npm ci --only=production

# サーバープログラムの実行
ENTRYPOINT [ "npm", "run", "start" ]
