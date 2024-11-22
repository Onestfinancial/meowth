module.exports = {
  // The root directory that Jest should scan for tests and modules
  rootDir: '.',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The test runner that Jest should use
  testRunner: 'jest-circus/runner',

  // The pattern or array of patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // The module file extensions that Jest should look for
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],

  // The transform configuration for Jest
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  // The coverage configuration for Jest
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  // The list of paths to modules that run some code to configure or set up the testing environment
  setupFiles: ['<rootDir>/jest.setup.js'],
};
