/*
 * grunt-clean-comment
 * https://github.com/Administrator/grunt_dev
 *
 * Copyright (c) 2015 li
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*_test.js' 
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jasmine : {
      src : 'tasks/*.js',
      options : {
        specs : 'spec/**/*.js',
        keepRunner: true
      }
    },

    // Before generating any new files, remove any previously-created files.
    // clean: {
    //   tests: ['tmp']
    // },

    // Configuration to be run (and then tested).
    cleancomment: {
      default_options: {
        options: {
        },
        files: {
          'customname': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    },

  //  Unit tests.
   nodeunit: {
     tests: ['test/*_test.js']
   }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('clean', [ 'cleancomment']);   
  grunt.registerTask('test', ['jshint','cleancomment','nodeunit']); 

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean' ]); //  use 'clean', command to remove tmp file. 

};
