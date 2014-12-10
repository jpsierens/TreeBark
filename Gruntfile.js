// Grunt Wrapper Function ======================/
var grunt_wrap = function (grunt) {  
    // Configurations ==========================/
	grunt.initConfig({  
	    sass: {
	        dist: {
	            expand: true,                   // Dynamic expansion
	            cwd: 'assets/sass/',            // current working directory (cwd)
	            src:[                           // Files to watch and ignore
	                    'TreeBark.scss'
	                ],  
	            dest: 'assets/css',               // Where the output will go
	            ext: '.css',                    // Extension of the output
	            options: {
	                style: "nested"         // Change to "compressed" for nesting
	            }
	        }
	    },
	    watch: {
	        css: {
	          files: 'assets/sass/**/*.scss',
	          tasks: ['sass'],
	          options: {
	              spawn: false,
	          }
	        }
	    }
	})

    // Load Dependent Plugins ==================/
	grunt.loadNpmTasks('grunt-contrib-sass')  
	grunt.loadNpmTasks('grunt-contrib-watch')

	// Tasks ===================================/
	grunt.registerTask('default', ['watch'])  
}

module.exports = grunt_wrap  