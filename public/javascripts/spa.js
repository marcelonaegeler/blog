HTMLCollection.prototype.addEvent = function ( e, f ) {
	for ( var i = 0, len = this.length; i < len; i++ ) {
		var element = this[ i ];
		
		( ( el ) => {
			if ( !el[ 'on'+ e ] ) {
				el[ 'on'+ e] = event => f.call( [ event, el ] );
			}
		})( element );
	}
};

let app = (() => {

	var history = window.history
		, navLinks
		, editableFields
		, stateObject = { page: '' };

	let changePage = ( url ) => {

		window.sideNav.action( 'hide' ); // Hide sideNav
		template.setTemplate( 'loading' );

		ajax.request({
			url: url
			, method: 'GET'
			, success: function ( response ) {
				response = JSON.parse( response );

				template.setTemplate( 'post', response.posts );

				updateEventListeners();
			}
			, error: function () {
				template.setTemplate( 'notFound' );
			}
		});

	};

	let updateEventListeners = () => {
		
		navLinks = document.getElementsByClassName( 'navigation' );
		editableFields = document.getElementsByClassName( 'input-editable' );

		navLinks.addEvent( 'click', function () {
			let event = this[ 0 ];
			event.preventDefault();

			let self = this[ 1 ];

			history.pushState( { page: self.href }, '', self.href );
			changePage( self.href );
		});

		editableFields.addEvent( 'keyup', function () {
			let self = this[ 1 ];

			self.parentNode.getElementsByClassName( 'editable-content' )[0].innerHTML = self.value;
		});

	};

	window.onpopstate = function ( event ) {
		changePage( event.state.page );
	};

	history.pushState({}, '');

	updateEventListeners();

	return {
		changePage: changePage
	};
})();
