import "dotenv/config";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const publicPath = "/css-layout-demo/";

  console.log("Computed base:", publicPath);

  return {
    base: mode === "production" ? publicPath : "/",
    plugins: [vue()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      watch: {
        usePolling: true, // 在某些 Docker 和文件系統配置中，這可以幫助改善文件變化檢測
      },
    },
  };
});
