var exp = require( 'express' )
	, app = exp();

app.use( '/build', exp.static( './public/build' ) );
app.use( '/images', exp.static( './public/images' ) );
app.use( '/vendor', exp.static( './node_modules' ) );

app.set( 'view engine', 'jade' );
app.set( 'views', './views' );

app.use( '/', require( './routes/blog' ) );
app.use( '/admin', require( './routes/admin' ) );

app.listen( 3000, () => {
	console.log( 'App running at :3000' );
});
