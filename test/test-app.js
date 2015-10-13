'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('seneca-plugin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true, pluginname: 'temp' })
      .inTmpDir(function (dir) {

      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.eslintrc',
      '.travis.yml',
      'package.json',
      'readme.md',
      'test/index.js',
      'lib/index.js'
    ]);
  });
});
