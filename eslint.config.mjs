import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import eslint from "@eslint/js";
import globals from "globals";

export default typescriptEslint.config(
  { ignores: ["*.d.ts", "**/coverage", "**/dist"] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {},
  },
  eslintConfigPrettier
);
