( function () {

	var canvas = document.getElementsByTagName( 'canvas' )[0];
	var context = canvas.getContext( '2d' );

	var touchPosition = undefined
		, dragLength = 0;

	var touchEvent = function () {
		console.log( dragLength );
		if ( touchPosition ) {
			context.fillStyle = '#000';
			context.fillRect( 0, 0, 500, 500 );
		}
	};

	canvas.addEventListener( 'touchstart', function ( event ) {
		var position = event.touches[0].clientX;

		if ( position <= 30 ) {
			touchPosition = position;
		} else {
			touchPosition = undefined;
		}
		dragLength = 0;

	}, true);

	canvas.addEventListener( 'touchmove', function ( event ) {
		var position = event.touches[0].clientX;

		if ( touchPosition !== undefined && position > touchPosition ) {
			touchPosition = position;
		}

		dragLength = dragLength + ( position - touchPosition );

	}, true);

	canvas.addEventListener( 'touchend', function ( event ) {
		touchEvent();
	}, true);
	
}() );
