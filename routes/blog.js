var exp = require( 'express' );
var router = exp.Router();

router.get( '/', function ( req, res ) {

	var posts = [
		{
			title: 'Post 01'
			, date: new Date()
			, author: 'Marcelo'
			, content: 'Lorem ipsum sit dolor amet'
		}
		, {
			title: 'Post 02'
			, date: new Date()
			, author: 'Autor 02'
			, content: 'Lorem ipsum sit dolor amet'
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

	return res.render( 'blog', { posts: posts } );

});

module.exports = router;
