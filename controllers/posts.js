( function () {
	var posts = [
		{
			title: 'Post 01'
			, date: new Date()
			, author: 'Marcelo'
			, content: 'Lorem ipsum sit dolor amet'
			, link: '/admin/post/1'
		}
		, {
			title: 'Post 02'
			, date: new Date()
			, author: 'Autor 02'
			, content: 'Lorem ipsum sit dolor amet'
			, link: '/post/2'
		}
		, {
			title: 'Post 03'
			, date: new Date()
			, author: 'Autor 03'
			, content: 'Lorem ipsum sit dolor amet'
			, link: '/admin/post/3'
		}
		, {
			title: 'Post 04'
			, date: new Date()
			, author: 'Autor 04'
			, content: 'Lorem ipsum sit dolor amet'
			, link: '/admin/post/4'
		}
		, {
			title: 'Post 05'
			, date: new Date()
			, author: 'Autor 05'
			, content: 'Lorem ipsum sit dolor amet'
			, link: '/admin/post/5'
		}
	];
	
	var getAll = function ( req, res ) {

		var query = {
			posts: posts
			, admin: req.isAdmin
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'admin', query );
		}

	};

	var getPost = function ( req, res ) {
		
		var postId = req.params.id;

		var query = {
			post: posts[ +postId - 1 ]
			, admin: req.isAdmin
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'admin', query );
		}		

	};

	var newPost = function ( req, res ) {

		var data = {
			title: req.params.title
			, content: req.params.content
			, date: new Date()
		};

		console.log( data );

		var query = {
			admin: req.isAdmin
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'admin', query );
		}
	};

	var editPost = function ( req, res ) {

		var data = {
			title: req.params.title
			, content: req.params.content
			, date: new Date()
		};

		console.log( data );

		var query = {
			admin: req.isAdmin
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'admin', query );
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
