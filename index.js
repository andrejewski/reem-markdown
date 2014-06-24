
var fs = require('fs'),
	marked = require('marked');

module.exports = function(options) {
	marked.setOptions(options || {});
	return function(item, reem, next) {
		fileContents(item, function(error, markdown) {
			if(error) return next(error);
			marked(markdown, function(error, html) {
				if(error) return next(error);
				item.content = html;
				item.extension = '.html';
				next(error, item);
			});
		});
	}

	function fileContents(item, next) {
		if(item.content) return next(null, item.content);
		fs.readFile(item.sourcePath, next);
	}
}