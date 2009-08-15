/*=
name: JSON
description: JSON encoder and decoder.
requires:
  - Array
  - Function
  - Number
  - String
  - Object
  - Table
=*/

if (!this.JSON) this.JSON = {};

JSON.encode = JSON.stringify || function(obj){
	switch (typeOf(obj)){
		case 'string':
			return '"' + obj.replace(/[\x00-\x1f\\"]/g, function(chr){
				var special = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"' : '\\"', '\\': '\\\\'};
				return special[chr] || '\\u00' + Math.floor(chr.charCodeAt() / 16).toString(16) + (chr.charCodeAt() % 16).toString(16);
			}) + '"';
		case 'array':
			return '[' + String(obj.map(JSON.encode).filter(nil)) + ']';
		case 'object':
			var string = [];
			for (var key in obj){
				var json = JSON.encode(obj[key]);
				if (json) string.push(JSON.encode(key) + ':' + json);
			}
			return '{' + string + '}';
		case 'number': case 'boolean': return '' + obj;
		case false: return 'null';
	}
	
	return null;
};

JSON.decode = function(string, secure){
	if (typeOf(string) != 'string' || !string.length) return null;
	if (secure && !(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(string.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, ''))) 
		throw new Error('JSON could not decode the input; security is enabled and the value is not secure.');
	return eval('(' + string + ')');
};
