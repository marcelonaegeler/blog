( function () {

	var sideNav = ( function () {

		var animating = false
			, nav = document.getElementById( 'menu' ) 
			, btn = document.getElementById( 'show-menu' )
			, bg = null
			, body = document.body
			;

		bg = nav.children[ 'menu-bg' ];
	
		var action = function () {
			if ( animating ) {
				return false;
			}

			if ( body.classList.contains( 'nav-active' ) ) {
				hide();
			} else {
				show();
			}
		};

		var show = function () {
			menu.style.visibility = 'visible';
			body.classList.add( 'nav-active' );
		};

		var hide = function () {
			body.classList.remove( 'nav-active' );
			animating = true;

			setTimeout( function () {
				menu.style.visibility = 'hidden';
				animating = false;
			}, 200 );
		};

		// Handlers
		btn.onclick = function ( event ) {
			event.preventDefault();
			action();
		};

		bg.onclick = function ( event ) {
			event.preventDefault();
			action();
		};

	}() );

}() );
