var exp = require( 'express' );
var router = exp.Router();

var posts = require( '../controllers/posts' )
	, works = require( '../controllers/works' );

router.get( '/', posts.getAll );
router.get( '/post/(:id)', posts.getPost );
router.get( '/works', works.getAll );
router.get( '/work/(:id)', works.getWork );

module.exports = router;
