module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/tests/**/*.test.(ts|tsx|js)',
  ],
  setupFiles: [
    'raf/polyfill',
    './tests/setup/enzyme.ts',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  clearMocks: true,
  preset: 'ts-jest',
}