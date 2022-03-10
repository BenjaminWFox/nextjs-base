// Jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Jest.config.js
const customConfig = {
  // Automatically clear mock calls and instances between every test
  'clearMocks': true,
  // The directory where Jest should output its coverage files
  'coverageDirectory': '.coverage',
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1'
  },
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  'setupFilesAfterEnv': ['./jest.setup.js'],
  // By default jest will use a node environment, so DOM elements (like document) will be undefined without this
  'testEnvironment': 'jsdom'
}

module.exports = createJestConfig(customConfig)
