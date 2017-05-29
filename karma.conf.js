
module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: [ 'jasmine', 'sinon', 'jasmine-sinon' ],

    files: [
      './tests/**/*.spec.js',
    ],

    preprocessors: {
      './tests/**/*.spec.js': [ 'webpack' ],
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: [
                'babel-preset-es2015',
                'babel-preset-stage-0'
              ],
              plugins: [
                'babel-plugin-transform-runtime',
              ]
            }
          }
        ]
      }
    },

    webpackMiddleware: {
      stats: 'errors-only',
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [ 'PhantomJS' ],
    reporters: [ 'spec' ],
    captureTimeout: 60000,
    singleRun: false,

    specReporter: {
      maxLogLines: 5,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false,
    },

    plugins: [
      'karma-jasmine',
      'karma-sinon',
      'karma-jasmine-sinon',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
    ],
  });
};
