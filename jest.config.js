

module.exports = {
  clearMocks: true,
  testRegex: "/*.test.jsx$",
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  moduleFileExtensions: ["js", "jsx",],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    "^.+\\.jsx$": "babel-jest",
  },
};
