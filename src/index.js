import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import { config, mountinit } from "@masx200/markdown-reader/src/mark-down-reader";
Object.assign(config, {
  github_username: "masx200",
  github_repo: "typescript-tutorial",
   doctitle: "TypeScript 入门教程",
  subtitle:
    "从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript Lightweight Markdown Documentation System",
  index: "README.md",
  summary: "SUMMARY.md"
});
mountinit();
