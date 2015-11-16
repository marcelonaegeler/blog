( function () {
	"use strict";

	var body = document.body
		, touchPosition = undefined
		, dragDistance = 0 // Get the drag distance and direction
		, menuButton = document.getElementById( 'show-menu' )
		;

	var touchEvent = function () {

		if ( body.classList.contains( 'active' ) && dragDistance <= 50 ) {

			menuButton.click();

		} else if ( touchPosition < 40 && !body.classList.contains( 'active' ) && dragDistance >= 50 ) {
			
			menuButton.click();

		}

		touchPosition = undefined;
		
	};

	body.addEventListener( 'touchmove', function ( event ) {
		var position = event.touches[0].clientX;

		if ( typeof touchPosition === 'undefined' ) {

			touchPosition = position;

		}

		dragDistance = position - touchPosition;

	}, true);

	body.addEventListener( 'touchend', function ( event ) {
		touchEvent();
	}, true);

}() );
