module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			min : {
				options: {
					sourcemap : false ,
					cssDir: 'css',
					sassDir: 'sass',
					imagesDir : 'img',
					outputStyle: 'compressed',
					environment: 'production'
				}
			},
			dev: {
				options: {
					//config: 'config/config.rb',  // css_dir = 'dev/css'
					sourcemap : true ,
					cssDir: 'css',
					sassDir: 'sass',
					imagesDir : 'img',
					outputStyle: 'nested',
					environment: 'development'//'production'
				}
			}
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'css/app.min.css': 'css/app.css'
		    }
		  }
		},

		// js

		coffee: {
      app: {
        expand: true,
        cwd: 'coffee',
        src: ['*.coffee'],
        dest: 'js',
        ext: '.js'
      }
    },

		uglify:{
			min :{
				options: {
					compress: {
						drop_console: true
					}
				},
				files:{
					'js/all.min.js':[
						'js/vendor/underscore-min.js',
						'js/vendor/jquery-1.11.3.min.js',
						'js/vendor/Simrou/build/simrou.min.js',
						'js/vendor/wow.min.js',
						'js/vendor/bootstrap.min.js',
						'js/app.js']
				}
			},
			dev:{
				options: {
					compress: {
						drop_console: false
					}
				},
				files:{
					'js/app.min.js':[
						"js/vendor/jquery-1.11.3.min.js",
						"js/vendor/jquery-visible.js",
						"js/vendor/bootstrap.min.js",
						"js/TweenMax.min.js",
						"js/vendor/ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js",
						"js/vendor/ScrollMagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js",
						"js/vendor/ScrollMagic/scrollmagic/uncompressed/plugins/animation.gsap.js",
						"js/vendor/ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js",
						"js/app.js"
					]
				}
			},
			app:{
				options: {
					compress: {
						drop_console: true
					}
				},
				files:{
					'js/app.min.js':[
						"js/vendor/jquery-1.11.3.min.js",
						"js/vendor/jquery-visible.js",
						"js/vendor/bootstrap.min.js",
						"js/TweenMax.min.js",
						"js/vendor/ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js",
						"js/vendor/ScrollMagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js",
						"js/vendor/ScrollMagic/scrollmagic/uncompressed/plugins/animation.gsap.js",
						"js/vendor/ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js",
						"js/app.js"
					]
				}
			},
			min_test:{
				options : {
					sourceMap : true
				},
				files:{
					'js/all.min.js':[
						'js/vendor/underscore-min.js',
						'js/vendor/jquery-1.11.3.min.js',
						'js/vendor/Simrou/build/simrou.min.js',
						'js/vendor/wow.min.js',
						'js/vendor/bootstrap.min.js',
						'js/app.js']
				}
			}
		},



    watch: {
      coffee: {
        files: '**/*.coffee',
        tasks: ['coffee:app']
      },
			uglify : {
				files: '**/app.js',
				tasks: ['uglify:min_test']
			},
			compass: {
				files: ['**/*.scss'],
				tasks: ['compass:dev']
			}

    },
		concurrent: {
			options: {
    		logConcurrentOutput: true
  		},
			task1:['watch:coffee','watch:compass']

		}

	});
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['concurrent:task1']);
	grunt.registerTask('production',['coffee:app','compass:dev','cssmin','uglify:app']);
	grunt.registerTask('dev',['coffee:app','uglify:dev']);
	grunt.registerTask('css',['compass:dev','cssmin']);
}
