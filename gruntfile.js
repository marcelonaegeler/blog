module.exports = function ( grunt ) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' )
		
		, watch: {
			scripts: {
				files: [ 'public/javascripts/*.js', 'public/stylesheets/**/*.styl' ]
				, tasks: [ 'build' ]
			}
		}

		, uglify: {
			blog: {
				files: {
					'public/build/javascripts/script.min.js': [ 'public/javascripts/script.js', 'public/javascripts/touch.js' ]
						, 'public/build/javascripts/babel.min.js': [ 'public/javascripts/babel.js' ]
				}
			}
		}

		, babel: {
			options: {
				presets: [ 'es2015' ]
			}
			, dist: {
				files: {
					'public/build/javascripts/babel.js': 'public/javascripts/babel.js'
				}
			}
		}

		, stylus: {
			compile: {
				files: {
					'public/build/stylesheets/blog.min.css': 'public/stylesheets/blog/theme.styl'
					, 'public/build/stylesheets/admin.min.css': 'public/stylesheets/admin/theme.styl'
				}
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-stylus' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-babel' );

	grunt.registerTask( 'default', [ 'build' ] );

	grunt.registerTask( 'build', [ 'uglify', 'babel','stylus' ] );
};
