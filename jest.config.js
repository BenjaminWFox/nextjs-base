// Jest.config.js
module.exports = {
  // Automatically clear mock calls and instances between every test
  'clearMocks': true,
  // The directory where Jest should output its coverage files
  'coverageDirectory': '.coverage',
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/components$1'
  },
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  'setupFilesAfterEnv': ['./jest.setup.js']
}
