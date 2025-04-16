import { visualizer } from "rollup-plugin-visualizer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { viteStaticCopy } from "vite-plugin-static-copy";

/** @type {import("vite").UserConfig} */
export default {
  root: "src",
  publicDir: false,
  build: {
    outDir: "../build",
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  plugins: [
    visualizer(),
    ViteImageOptimizer({
      avif: {
        lossless: false,
        quality: 90,
      },
      jpeg: {
        quality: 90,
      },
      png: {
        quality: 90,
      },
      webp: {
        lossless: false,
        quality: 90,
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: "robots.txt",
          dest: ".",
        },
        {
          src: "security.txt",
          dest: ".",
        },
        {
          src: "sitemap.xml",
          dest: ".",
        },
      ],
    }),
  ],
};
