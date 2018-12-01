module.exports = {
  preset: "react-native",
  moduleFileExtensions: [
    "ts",
    "tsx"
  ],
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testRegex: "(/__tests__/.*|\\.spec)\\.(ts|tsx)$",
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  cacheDirectory: ".jest/cache",
  verbose: true,
};
