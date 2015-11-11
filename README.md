# grunt-clean-comment

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-clean-comment --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-clean-comment');
```

## The "cleancomment" task

### Overview
In your project's Gruntfile, add a section named `grunt-clean-comment` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    cleancomment: {
       default_options: { 
         files: {
           'customname': ['test/fixtures/testing', 'test/fixtures/123']
         }
       }
     }
});
```

### Options
```
    cleancomment: {
      default_options: {
        options: {
          type: "css"
        },
        files: {
          'customname': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    }
```
options.type == "css"   Allow reserved spaces

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 
commit 36e0f17fef5dee320a6329ee5bbc709a6a121d6d
    fix options.type undefine bug

commit 9b37b7d95e03b23578c705c016ff1ab265dc9b28
    add option.type for clean  js or css file

commit a696389508287a99a7687139f7cc7fe3845f9bfd
     grunt.loadNpmTasks name is change

