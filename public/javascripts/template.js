let template = (() => {
	
	let viewBody = document.getElementById( 'view-body' );

	let templateStrings = {
		post: '<div class="post"><h1><a href="{{link}}" class="navigation">{{title}}</a></h1><p class="author">{{author}}</p><div>{{content}}</div></div>'
		, loading: '<div class="post text-center">loading...</div>'
		, notFound: '<div class="post text-center not-found">404 - Not found :(</div>'
	};

	let template = ( type, data ) => {
		let response = [];
		for ( var index = 0, len = data.length; index < len; index++ ) {

			let row = templateStrings[ type ];
			var item = data[ index ];
			for ( var i in item ) {
				row = row.replace( new RegExp('{{'+ i +'}}', 'g'), item[ i ] );
			}
			response.push( row );
		}
		return response.join( '' );
	};

	let setTemplate = ( type, html ) => {
		var show = html ? template( type, html ) : templateStrings[ type ];
		viewBody.innerHTML = show;
	};

	return {
		setTemplate: setTemplate
	};
})();
