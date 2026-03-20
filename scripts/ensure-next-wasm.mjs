/**
 * Next.js on Windows may fail to load the native SWC binary (e.g. OneDrive / AV).
 * Next then looks for WASM under node_modules/next/wasm/@next/swc-wasm-nodejs — copy from the hoisted package.
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const src = path.join(root, "node_modules", "@next", "swc-wasm-nodejs")
const dst = path.join(root, "node_modules", "next", "wasm", "@next", "swc-wasm-nodejs")

if (!fs.existsSync(path.join(src, "wasm.js"))) {
  process.exit(0)
}

fs.mkdirSync(dst, { recursive: true })
for (const name of fs.readdirSync(src)) {
  fs.cpSync(path.join(src, name), path.join(dst, name), { recursive: true })
}
