var exp = require( 'express' );
var router = exp.Router();
var posts = require( '../controllers/posts' );

router.get( '/', posts.getAll );
router.get( '/post/(:id)', posts.getPost );

module.exports = router;
