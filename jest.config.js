module.exports = {
  modulePaths: ['src'],
  roots: ['tests'],
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/enzyme.config.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/__mocks__/styleMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  }
};
