const path = require('path');
const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '^@monorepo/([a-zA-Z0-9$_-]+)$': path.join(__dirname, '../$1/src'),
  }
};