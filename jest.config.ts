/* eslint-disable import/no-extraneous-dependencies */
import { pathsToModuleNameMapper } from "ts-jest/utils";

import { compilerOptions } from "./tsconfig.json";

export default {
  bail: true,
  clearMocks: true,

  coverageProvider: "v8",

  collectCoverageFrom: ["src/services/**/*.ts"],
  coverageDirectory: "__tests__/coverage",
  coverageReporters: ["json", "lcov"],

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),

  preset: "ts-jest",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.spec.ts"],
};
