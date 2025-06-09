import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Disable `no-require-imports` in generated Prisma files
  {
    files: ["prisma/generated/**"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // Existing Next.js + TypeScript compatibility config
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
