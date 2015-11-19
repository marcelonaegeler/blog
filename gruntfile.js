module.exports = function ( grunt ) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' )
		
		, watch: {
			scripts: {
				files: [ 'public/javascripts/*.js', 'public/stylesheets/*.styl' ]
				, tasks: [ 'build' ]
			}
		}

		, clean: [ 'public/javascripts/transpiled', 'public/build/*/' ]

		, uglify: {
			blog: {
				files: {
					'public/build/javascripts/script.min.js': 'public/javascripts/transpiled/*.js'
				}
			}
		}

		, babel: {
			dist: {
				files: [{
					expand: true
					, cwd: 'public/javascripts'
					, src: [ '*.js' ]
					, dest: 'public/javascripts/transpiled'
				}]
			}
		}

		, stylus: {
			compile: {
				files: {
					'public/build/stylesheets/theme.min.css': 'public/stylesheets/theme.styl'
				}
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-stylus' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-babel' );

	grunt.registerTask( 'default', [ 'build', 'watch' ] );
	grunt.registerTask( 'build', [ 'clean', 'stylus', 'babel', 'uglify' ] );
};
