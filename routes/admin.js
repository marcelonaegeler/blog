var exp = require( 'express' );
var router = exp.Router();

router.use( function ( req, res, next ) {
	req.ajax = ( typeof req.headers[ 'x-request-with' ] !== 'undefined' );

	next();
});

router.get( '/', ( req, res ) => {
	
	var posts = [
		{
			title: 'Post 01'
			, date: new Date()
			, author: 'Marcelo'
			, content: 'Lorem ipsum sit dolor amet'
			, link: '/admin/post/01'
		}
		, {
			title: 'Post 02'
			, date: new Date()
			, author: 'Autor 02'
			, content: 'Lorem ipsum sit dolor amet'
			, link: '/post/02'
		}
		, {
			title: 'Post 03'
			, date: new Date()
			, author: 'Autor 03'
			, content: 'Lorem ipsum sit dolor amet'
		}
		, {
			title: 'Post 04'
			, date: new Date()
			, author: 'Autor 04'
			, content: 'Lorem ipsum sit dolor amet'
		}
		, {
			title: 'Post 05'
			, date: new Date()
			, author: 'Autor 05'
			, content: 'Lorem ipsum sit dolor amet'
		}
	];

	var query = {
		posts: posts
		, admin: true
	};

	if ( req.ajax ) {
		return res.send( query );
	} else {
		return res.render( 'admin', query );
	}
});


router.get( '/post', function ( req, res ) {

	var posts = [
		{
			title: ''
			, date: null
			, author: ''
			, content: ''
		}
	];

	var query = {
		posts: posts
		, admin: true
	};

	if ( req.ajax ) {
		return res.send( query );
	} else {
		return res.render( 'admin', query );
	}
});

router.get( '/post/(:slug)', function ( req, res ) {

	var posts = [
		{
			title: 'Post 05'
			, date: new Date()
			, author: 'Autor 05'
			, content: 'Lorem ipsum sit dolor amet marcelo lindão'
		}
	];

	var query = {
		posts: posts
		, admin: true
	};

	if ( req.ajax ) {
		return res.send( query );
	} else {
		return res.render( 'admin', query );
	}
});

module.exports = router;
