/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  testPathIgnorePatterns: [
    "/node_modules/", // Exclude any tests in the node_modules directory
    "/src/", // Exclude any tests in the src directory
  ],
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".\\.test.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  moduleNameMapper: {
    "^caip/dist/utils$": "<rootDir>/src/utils.ts",
  },
};
