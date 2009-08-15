/*=
name: Request.JSON
description: Extends the Request class with additional methods to interact with JSON responses.
requires: 
  - Request
  - JSON
=*/

Request.JSON = new Class({

	Extends: Request,

	options: {
		secure: true
	},

	'protected initialize': function(options){
		this.parent(options);
		this.getOption('headers')['Accept'] = 'application/json';
		this.getOption('headers')['X-Request'] = 'JSON';
	},

	'protected success': function(text){
		try {
			this.response.json = JSON.decode(text, this.options.secure);
			this.onSuccess(this.response.json, text);
		} catch(error) {
			this.failure();
		}
	}

});
