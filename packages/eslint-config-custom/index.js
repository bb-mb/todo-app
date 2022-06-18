// next 기본 설정 + import order 설정

module.exports = {
  extends: [
    "next",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["import"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "unknown",
          ["internal", "sibling", "parent"],
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
};
