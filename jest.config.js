module.exports = {
  roots: ['<rootDir>/tests', '<rootDir>/lib'],
  collectCoverageFrom: ['<rootDir>/lib/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
