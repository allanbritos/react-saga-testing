// jest.config.js
module.exports = {
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': 'babel-jest'
    },
    testEnvironment: 'node', // Optional, specify the test environment
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};