/**
 * 
 */

module.exports = function (src) {
	'use strict';

	var module = {};
	var define = function (deps, f) {
		module.deps = deps;
		module.f = f;
	};
	
	eval(src);
	
	return module;
};