/**
 * 
 */

var put = function (path, stone, config, name, grunt, elements, options) {
	'use strict';

	grunt.log.writeln('Checking deps for ', name);
	var module = require('./module-reader.js')(grunt.file.read(path));
	elements [name] = true;
	module.deps.forEach(function (dep) {
		if (dep === 'module') {
			grunt.log.warn('module config');
			
		} else if (!elements [dep]) {
			if (/\.js$/.test(dep)) {
				put(dep, stone, config, dep, grunt, elements, options);
				
			} else {
				if (config.paths [dep]) {
					put(config.paths [dep], stone, config, dep, grunt, elements, options);
					
				} else if (dep.substr(0, 2) === './') {
					put(path.replace(/[^\/]*$/, '') + dep.substr(2) + '.js', stone, config, dep, grunt, elements, options);
					
				} else {
					put(dep + '.js', stone, config, dep, grunt, elements, options);
				}
			}
		}		
	});

	var deps = '';
	stone.src += options.innerContainer + ' [\'' + name + '\'] = (' + module.f + ')(' + deps + ');\n';
	
	return module;
};


module.exports = put;