var exp = require('express');
var router = exp.Router();

router.get('/', (req, res) => {
	res.end('admin /');
});

module.exports = router;
