import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@typescript-eslint/eslint-plugin"; // Replace with the correct plugin package name


// Resolve __filename and __dirname for module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for backward compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname, // Required to resolve legacy configs
});

// Define ESLint configuration using flat config
const eslintConfig = [
  // Extend legacy configurations for Next.js and TypeScript
  ...compat.extends(
    "next/core-web-vitals", // Next.js recommended rules
    "plugin:@typescript-eslint/recommended" // TypeScript recommended rules
  ),
  {
    // Apply to all TypeScript files
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json", // Ensure `tsconfig.json` is correctly referenced
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      plugins: [eslintPlugin], // ReferenceError
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      // Customize rules
      "@typescript-eslint/no-explicit-any": "error", // Disallow `any` type
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }, // Ignore vars prefixed with `_`
      ],
      "prefer-const": "error", // Enforce `const` for variables that are not reassigned
      "no-console": "warn", // Warn on console usage
      "no-debugger": "error", // Disallow debugger statements
    },
  },
];

export default eslintConfig;
