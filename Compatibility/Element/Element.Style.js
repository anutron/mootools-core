Element.implement({

	setOpacity: function(op){
		MooCompat.log('1.1 > 1.2: Element.setOpacity is deprecated; use Element.setStyle("opacity", value).');
		return this.set('opacity', op);
	}

});

Element.Properties.styles = {
	
	set: function(styles){
		if ($type(styles) == 'string'){
			styles.split(";").each(function(style){
				this.setStyle(style.split(":")[0], style.split(":")[1]);
			}, this);
		} else {
			this.setStyles(styles);
		}
	}
	
};