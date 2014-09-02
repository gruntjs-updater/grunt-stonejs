/*
 * grunt-stonejs
 * https://github.com/kodmax/stonejs
 *
 * Copyright (c) 2014 Marcin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('stonejs', 'AMD to stone compiler. Best ever.',	function() {
		var options = this.options({baseDir: '.', innerContainer: '__stone_modules', stoneName: 'stone'});
		grunt.file.setBase(options.baseDir);
		
		var config = require('../service/config-reader.js')(grunt.file.read(options.configFile));
		
		this.files.forEach(function(f) {
			if (f.src.length === 0) {
				grunt.log.error('No source file specified.');
				
			} else if (f.src.length > 1) {
				grunt.log.error('Only one source file per stone is supported.');
				
			} else {
				var stone = 'var ' + options.stoneName + ' = (function () {\nvar ' + options.innerContainer + ' = {};\n';
				
				require('../service/put-stone-module.js')(f.src [0], stone, config, options.stoneName, grunt);
					
				stone += 'return ' + options.innerContainer + ' [' + options.stoneName + '];\n})();';
				grunt.file.write(f.dest, stone);

				grunt.log.writeln('JS Stone "' + f.dest + '" created.');
			}
			
			
			
		});
	});

};
