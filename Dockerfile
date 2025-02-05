# 使用 Node.js 官方映像作為基礎映像
FROM node:22.0.0

# 設置工作目錄
WORKDIR /usr/src/app

# 複製 package.json文件
COPY package.json package-lock.json ./

# 安裝依賴
RUN npm install

# 清除緩存
RUN npm cache clean --force

# 複製其餘的專案文件
COPY . .

# 構建專案
RUN npm run build

# 暴露應用程序使用的端口
EXPOSE 5173

# 設置默認的命令來啟動應用
CMD [ "npm", "run", "dev" ]