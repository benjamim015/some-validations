module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/lib/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
