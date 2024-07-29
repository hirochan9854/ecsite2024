import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [preact(), tailwind()],

  // サイトのベースURLを設定
  base: "/03_ecsite",

  // ビルド出力ディレクトリを設定（デフォルトは 'dist'）
  outDir: "./dist/03_ecsite",
});
