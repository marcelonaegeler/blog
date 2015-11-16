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
				}
			}
		}

		, stylus: {
			compile: {
				files: {
					'public/build/stylesheets/blog.min.css': 'public/stylesheets/blog/base.styl'
				}
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-stylus' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'default', [ 'uglify', 'stylus', 'watch' ] );

	grunt.registerTask( 'build', [ 'uglify', 'stylus' ] );
};
