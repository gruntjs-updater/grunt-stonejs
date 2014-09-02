/**
 * 
 */

module.exports = function (path, stone, config, name, grunt) {
	'use strict';

	var module = require('./module-reader.js')(grunt.file.read(path));
	
console.log('put module', module);
	
	return module;
};