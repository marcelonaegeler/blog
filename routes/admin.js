var exp = require('express');
var router = exp.Router();

router.get('/', (req, res) => {
	res.render('admin');
});

module.exports = router;
