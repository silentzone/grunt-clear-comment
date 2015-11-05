'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cleancomment = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  cleanFile123: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/123');
    var expected = grunt.file.read('test/fixtures/123');
    test.equal(actual, expected, 'test/fixtures/123内容等于 tmp/123 中内容');

    test.done();
  },
  cleanFiletesting: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/testing');
    var expected = grunt.file.read('test/fixtures/testing');
    test.equal(actual, expected, 'test/fixtures/testing 内容等于 tmp/testing 中内容 '); 
    test.done();
  },
  ShouldNotPass: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/testing-hascomment');
    var expected = grunt.file.read('test/fixtures/testing');
    test.equal(actual, expected, 'test/fixtures/testing 内容不等于 tmp/testing 中内容 '); 
    test.done();
  },
};
