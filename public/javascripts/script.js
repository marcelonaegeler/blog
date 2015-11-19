( function () {

	var sideNav = ( function () {

		var animating = false
			, nav = document.getElementById( 'menu' ) 
			, btn = document.getElementById( 'show-menu' )
			, bg = null
			, body = document.body
			;

		bg = nav.children[ 'menu-bg' ];
	
		var action = function ( onlyAction ) {
			if ( animating ) {
				return false;
			}

			if ( onlyAction ) {

				if ( onlyAction === 'hide' ) {
					hide();
				} else if ( onlyAction === 'show' ) {
					show();
				}
				return;
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

		return {
			action: action
		};
	}() );


	window.sideNav = sideNav;


	var windowScroll = ( function () {
		var body = document.body.classList;

		window.addEventListener( 'scroll', function () {
			
			if ( window.scrollY > 5 ) {
				body.add( 'scrolled' );
			} else {
				body.remove( 'scrolled' );
			}

		}, true );

	}() );

}() );
