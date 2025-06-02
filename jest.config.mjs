export default {
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  collectCoverage: true,
  coverageDirectory: "coverage",
  maxWorkers: 1,
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest",
  resolver: "jest-ts-webcompat-resolver",
};
