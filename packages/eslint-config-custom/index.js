// next 기본 설정 + import order 설정

module.exports = {
  extends: ["next", "prettier", "plugin:import/typescript"],
  plugins: ["import"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external", "unknown"],
          ["internal", "sibling", "parent"],
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          { pattern: "@/**", group: "internal" },
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@nestjs/**",
            group: "builtin",
            position: "before",
          },
        ],
      },
    ],
  },

  settings: {
    "import/resolver": {
      typescript: {}, // 프로젝트 Root의 tsconfig.json을 찾는다.
    },
  },
};
