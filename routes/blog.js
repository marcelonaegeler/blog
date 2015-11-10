var exp = require('express');
var router = exp.Router();

router.get('/', function ( req, res ) {
	res.render('blog');
});

module.exports = router;
