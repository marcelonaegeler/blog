var exp = require( 'express' )
	, app = exp();

app.use( exp.static( './public' ) );
app.use( '/vendor', exp.static( './node_modules' ) );

app.set( 'view engine', 'jade' );
app.set( 'views', './views' );


app.use( function ( req, res, next ) {
	
	req.ajax = ( typeof req.headers[ 'x-request-with' ] !== 'undefined' );

	req.isAdmin = true;

	next();

});

app.use( '/', require( './routes/blog' ) );
// app.use( '/admin', require( './routes/admin' ) );

app.listen( 3000, () => {
	console.log( 'App running at :3000' );
});
