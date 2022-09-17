/* eslint-env node */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint", "react", "react-native", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": "off",
    "@typescript-eslint/explicit-function-return-type": "off",

    // Removed rule "disallow the use of console" from recommended eslint rules
    "no-console": 1,

    // Removed rule "disallow the use of debugger" from recommended eslint rules
    "no-debugger": 1,

    // Removed rule "disallow unused variables" from recommended eslint rules
    "no-unused-vars": 2,
    "no-undef": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
