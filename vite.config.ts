import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin, type ResolvedConfig } from "vite";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));

function syncManifestVersion(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "sync-manifest-version",
    apply: "build",
    configResolved(resolved) {
      config = resolved;
    },
    closeBundle() {
      const manifestPath = resolve(config.build.outDir, "manifest.json");
      const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
      manifest.version = pkg.version;
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

      // Rollup drops empty CSS output, but the manifest requires style.css to exist.
      const stylePath = resolve(config.build.outDir, "style.css");
      if (!existsSync(stylePath)) writeFileSync(stylePath, "");

      // fonts.css is injected via the manifest, unbundled: Vite would try to
      // inline its chrome-extension:// URLs, and Chrome only substitutes
      // __MSG_@@extension_id__ in raw content-script CSS.
      copyFileSync(
        resolve("src/fonts.css"),
        resolve(config.build.outDir, "fonts.css"),
      );
    },
  };
}

export default defineConfig({
  plugins: [syncManifestVersion()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/main.ts",
      output: {
        entryFileNames: "script.js",
        assetFileNames: (asset) =>
          asset.names.some((name) => name.endsWith(".css"))
            ? "style.css"
            : "[name][extname]",
      },
    },
  },
});
