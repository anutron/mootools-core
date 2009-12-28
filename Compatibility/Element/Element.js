(function(){

	var toQueryString = Element.prototype.toQueryString;

	Element.implement({

		getFormElements: function(){
			MooCompat.log('1.1 > 1.2: Element.getFormElements is deprecated, use Element.getElements("input, textarea, select");'); 
			return this.getElements('input, textarea, select');
		},

		replaceWith: function(el){
			MooCompat.log('1.1 > 1.2: Element.replaceWith is deprecated, use Element.replaces instead.'); 
			el = $(el);
			this.parentNode.replaceChild(el, this);
			return el;
		},

		remove: function() {
			MooCompat.log('1.1 > 1.2: Element.remove is deprecated - use Element.dispose.');
			return this.dispose.apply(this, arguments);
		},

		getText: function(){
			MooCompat.log('1.1 > 1.2: Element.getText is deprecated - use Element.get("text").'); 
			return this.get('text');
		},

		setText: function(text){
			MooCompat.log('1.1 > 1.2: Element.setText is deprecated - use Element.set("text", text).'); 
			return this.set('text', text);
		},

		setHTML: function(){
			MooCompat.log('1.1 > 1.2: Element.setHTML is deprecated - use Element.set("html", HTML).'); 
			return this.set('html', arguments);
		},

		getHTML: function(){
			MooCompat.log('1.1 > 1.2: Element.getHTML is deprecated - use Element.get("html").'); 
			return this.get('html');
		},

		getTag: function(){
			MooCompat.log('1.1 > 1.2: Element.getTag is deprecated - use Element.get("tag").'); 
			return this.get('tag');
		},
	
		getValue: function(){
			MooCompat.log('1.1 > 1.2: Element.getValue is deprecated - use Element.get("value").');
			switch(this.getTag()){
				case 'select':
					var values = [];
					$each(this.options, function(option){
						if (option.selected) values.push($pick(option.value, option.text));
					});
					return (this.multiple) ? values : values[0];
				case 'input': if (!(this.checked && ['checkbox', 'radio'].contains(this.type)) && !['hidden', 'text', 'password'].contains(this.type)) break;
				case 'textarea': return this.value;
			}
			return false;
		},

		toQueryString: function(){
			MooCompat.log('1.1 > 1.2: warning Element.toQueryString is slightly different; inputs without names are excluded, inputs with type == submit, reset, and file are excluded, and inputs with undefined values are excluded.');
			return toQueryString.apply(this, arguments);
		}
	});
})();

window.extend = document.extend = function(properties){
	MooCompat.log('1.1 > 1.2: (window||document).extend is deprecated');
	for (var property in properties) this[property] = properties[property];
};

Element.Properties.properties = {
	
	set: function(props){
		MooCompat.log('1.1 > 1.2: Element.set({properties: {}}) is deprecated; instead of properties, just name the values at the root of the object (Element.set({src: url})).');
		$H(props).each(function(value, property){
			this.set(property, value);
		}, this);
	}
	
};
