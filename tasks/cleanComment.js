/*
 * grunt-clean-comment
 * https://github.com/Administrator/grunt_dev
 *
 * Copyright (c) 2015 li
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cleancomment', 'Grunt plugin.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
    var replaceComment = function (text) {
          var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))|([\r\n]|\s)*/mg;
          var newText = text.toString().replace(STRIP_COMMENTS, '');
          return newText;
    };
    var writeFile = function (str,path) {
        // Write the destination file.
        grunt.file.write(path,str);
        // Print a success message.
        grunt.log.writeln('File "' + path  + '" comments is clean ');
    };


    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        /*
        * Syntax
         arr.filter(callback[, thisArg])
         Parameters
         callback
         Function to test each element of the array. Invoked with arguments (element, index, array).
        * */
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('file:"' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var data =  grunt.file.read(filepath);
        var result =  replaceComment(data);
        writeFile(result,filepath);
        return;
      });




      //.join(grunt.util.normalizelf(options.separator));
      // grunt.util.normalizelf
      // 对于一个给定的字符串，将其所有换行符转换为当前系统所采用的形式，然后返回一个新的字符串



    });
  });

};
