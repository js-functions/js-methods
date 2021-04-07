module.exports = {
  include: ['src/**/*.js'],
  exclude: [
    'coverage',
    'node_modules',
    '.nyc_output',
    '.scannerwork',
    'package.json',
    'package-lock.json',
    'README.md',
    'LICENSE',
  ],
  extension: ['.js'],
  'report-dir': './coverage',
  'temp-dir': './.nyc_output',
};
