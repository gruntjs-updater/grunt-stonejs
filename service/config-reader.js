/**
 * 
 */

module.exports = function (src) {
	'use strict';

	var config;
	var require = function (foo) {};
	require.config = function (configuration) {
		config = configuration;
	};
	
	eval(src);
	
	return config;
};