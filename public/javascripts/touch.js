( function () {
	"use strict";

	var body = document.body
		, touchPosition = undefined
		, dragDistance = 0 // Get the drag distance and direction
		, menuButton = document.getElementById( 'show-menu' )
		, dragBound = 50
		;

	var touchEvent = function () {

		if ( body.classList.contains( 'nav-active' ) && dragDistance <= -(dragBound) ) {

			menuButton.click();

		} else if ( touchPosition < 40 && !body.classList.contains( 'nav-active' ) && dragDistance >= dragBound ) {
			
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
