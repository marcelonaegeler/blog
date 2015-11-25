( function () {
	var posts = [
		{
			title: 'Post 01'
			, date: new Date()
			, author: 'Marcelo'
			, content: 'Lorem ipsum sit dolor amet'
			, slug: '1'
		}
		, {
			title: 'Post 02'
			, date: new Date()
			, author: 'Autor 02'
			, content: 'Lorem ipsum sit dolor amet'
			, slug: '2'
		}
		, {
			title: 'Post 03'
			, date: new Date()
			, author: 'Autor 03'
			, content: 'Lorem ipsum sit dolor amet'
			, slug: '3'
		}
		, {
			title: 'Post 04'
			, date: new Date()
			, author: 'Autor 04'
			, content: 'Lorem ipsum sit dolor amet'
			, slug: '4'
		}
		, {
			title: 'Post 05'
			, date: new Date()
			, author: 'Autor 05'
			, content: 'Lorem ipsum sit dolor amet'
			, slug: '5'
		}
	];
	
	var getAll = function ( req, res ) {

		var query = {
			posts: posts
			, admin: req.isAdmin
			, page: 'posts-all'
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'blog', query );
		}

	};

	var getPost = function ( req, res ) {
		
		var postId = req.params.id;

		var query = {
			post: posts[ +postId - 1 ]
			, admin: req.isAdmin
			, page: 'posts-single'
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'blog', query );
		}		

	};

	var newPost = function ( req, res ) {

		var data = {
			title: req.params.title
			, content: req.params.content
			, date: new Date()
		};

		var query = {
			admin: req.isAdmin
			, page: 'posts-single'
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'blog', query );
		}
	};

	var editPost = function ( req, res ) {

		var data = {
			title: req.params.title
			, content: req.params.content
			, date: new Date()
		};

		var query = {
			admin: req.isAdmin
			, page: 'posts-single'
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'blog', query );
		}
	};

	var response = {
		getAll: getAll
		, getPost: getPost
		, newPost: newPost
		, editPost: editPost
	};

	return module.exports = response;
})();
