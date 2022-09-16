module.exports = {
  testTimeout: 30000,
  testMatch: ['**/?(*.)+(spec|test).[t]s'],
  preset: 'jest-puppeteer',
  globals: {
    APP_URL: 'http://localhost:3000/',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
}