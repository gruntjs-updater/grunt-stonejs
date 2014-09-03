# grunt-stonejs

> AMD to stone compiler. Best ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stonejs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stonejs');
```

## The "stonejs" task

### Overview
Use this task to compile any of your modules in a typical requirejs project.
You can compile any part or multiple parts of the same project.

Your source code is not concatenated with any loader (like requirejs or almond) so there is basicly zero overhead.
Useful for creating small js libraries while developing them in an AMD environment.

If your code takes say 15kbytes of code then why adding another 15 for almond?
The output can be further minified (f.ex. with uglify).

If you wish to make the output stone AMD compliant you should concatenate the result with some sort of custom code the reach the goal and then remove window.'stoneName'.

```js
grunt.initConfig({
    stonejs: {
          xhr: {
              options: {
                stoneName: 'xhr',
                configFile: 'scripts/app.js',
                baseDir: 'app/'
              },
              files: {
                '.tmp/xhr.js': 'services/xhr.js'
              }
            }           
    },
});
```

### Options

#### options.stoneName
Type: `String`
The output stone name. First line of the generated file will be var 'stoneName'. It should be the same as the target module name in your requirejs config paths.

#### options.configFile
Type: `String`
Default value: `'.'`

requirejs config file for your project.

#### options.baseDir
Type: `String`
Default value: `'.'`

the app (public) directory for your project. this is a brigde between the gruntfile dir and the app that requirejs baseUrl references to. 

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
    stonejs: {
          xhr: {
              options: {
                stoneName: 'xhr',
                configFile: 'scripts/app.js',
                baseDir: 'app/'
              },
              files: {
                '.tmp/xhr.js': 'services/xhr.js'
              }
            }           
    },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
    stonejs: {
          xhr: {
              options: {
                stoneName: 'xhr',
                configFile: 'scripts/app.js',
                baseDir: 'app/'
              },
              files: {
                '.tmp/xhr.js': 'services/xhr.js'
              }
            }           
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
