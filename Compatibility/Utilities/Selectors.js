Native.implement([Element, Document], {

	getElementsByClassName: function(className){
		MooCompat.log('1.1 > 1.2: Element.filterByTag is deprecated.');
		
		return this.getElements('.' + className);
	},

	getElementsBySelector: function(selector){
		MooCompat.log('1.1 > 1.2: Element.getElementsBySelector is deprecated. Use getElements()');
		return this.getElements(selector);
	}

});

Elements.implement({

	filterByTag: function(tag){
		MooCompat.log('1.1 > 1.2: Elements.filterByTag is deprecated. Use Elements.filter.');
		return this.filter(tag);
	},

	filterByClass: function(className){
		MooCompat.log('1.1 > 1.2: Elements.filterByClass is deprecated. Use Elements.filter.');
		return this.filter('.' + className);
	},

	filterById: function(id){
		MooCompat.log('1.1 > 1.2: Elements.filterById is deprecated. Use Elements.filter.');
		return this.filter('#' + id);
	},

	filterByAttribute: function(name, operator, value){
		MooCompat.log('1.1 > 1.2: Elements.filterByAttribute is deprecated. Use Elements.filter.');
		var filtered = this.filter('[' + name + (operator || '') + (value || '') + ']');
		if (value) filtered = filtered.filter('[' + name + ']');
		return filtered;
	}

});

var $E = function(selector, filter){
	MooCompat.log('1.1 > 1.2: $E is deprecated, use document.getElement.');
	return ($(filter) || document).getElement(selector);
};

var $ES = function(selector, filter){
	MooCompat.log('1.1 > 1.2: $ES is deprecated. Use $$.');
	return ($(filter) || document).getElements(selector);
};