Hash.implement({

	keys : function(){
		MooTools.upgradeLog('1.1 > 1.2: Hash.keys is deprecated. Use Hash.getKeys');
		return this.getKeys();
	},

	values : function(){
		MooTools.upgradeLog('1.1 > 1.2: Hash.values is deprecated. Use Hash.getValues');
		return this.getValues();
	},

	hasKey : function(item){
		MooTools.upgradeLog('1.1 > 1.2: Hash.hasKey is deprecated. Use Hash.has');
		return this.has(item);
	},

	merge : function(properties){
		MooTools.upgradeLog('1.1 > 1.2: Hash.merge is deprecated. Use Hash.combine');
		return this.extend(properties);
	},

	remove: function(key){
		MooTools.upgradeLog('1.1 > 1.2: Hash.remove is deprecated. use Hash.erase');
		return this.erase(key);
	}

});

Object.toQueryString = function(obj){
	MooTools.upgradeLog('1.1 > 1.2: Object.toQueryString() is deprecated. use Hash.toQueryString() instead');
	$H(obj).each(function(item, key){
		if ($type(item) == 'object' || $type(item) == 'array'){
			obj[key] = item.toString();
		}
	});
	return Hash.toQueryString(obj);
};

var Abstract = function(obj){
	MooTools.upgradeLog('1.1 > 1.2: Abstract is deprecated. Use Hash');
	return new Hash(obj);
};