import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve __filename and __dirname for module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for backward compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define ESLint configuration using flat config
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",  // Next.js best practices
    "next/typescript"         // TypeScript support for Next.js
  ),
  {
    files: ["**/*.ts", "**/*.tsx"], // Targeting TypeScript files
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json", // Point to your tsconfig
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // No `any` type
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" } // Ignore unused vars with `_`
      ],
      "prefer-const": "error", // Enforce `const` for non-reassigned vars
    },
  },
];

export default eslintConfig;
