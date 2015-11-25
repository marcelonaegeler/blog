( function () {

	var works = [
		{
			name: 'Auto center'
			, image: '/images/works/auto-center.jpg'
			, slug: 'auto-center'
			, links: {
				github: 'https://github.com/marcelonaegeler/stock-control'
				, url: 'http://autocenter.mnaegeler.space'
			}
		}
		, {
			name: 'Biblioteca'
			, image: '/images/works/biblioteca.jpg'
			, slug: 'biblioteca'
			, links: {
				github: 'https://github.com/marcelonaegeler/vue-app'
				, url: 'http://biblioteca.mnaegeler.space'
			}
		}
	];

	var getAll = function ( req, res ) {

		var query = {
			works: works
			, page: 'works-all'
		};
		
		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'blog', query )
		}
			
	};

	var getWork = function ( req, res ) {

		var id = req.params.id;
		if ( !id ) {
			return false;
		}

		var query = {
			work: works[ +id - 1 ]
			, page: 'works-single'
		};

		if ( req.ajax ) {
			return res.send( query );
		} else {
			return res.render( 'blog', query );
		}
	};


	var response = {
		getAll: getAll
		, getWork: getWork
	};

	return module.exports = response;

})();
