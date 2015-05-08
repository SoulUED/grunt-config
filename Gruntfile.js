module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			main: {
				files: [
					{
						expand: true,
						cwd: "./js/",
						src: ["*.js"],
						dest: "./build/js/",
						ext: ".module.js"
					},
					{
						expand: true,
						cwd: "./js/",
						src: ["*.js"],
						dest: "./js/",
						ext: ".module.js"
					}	
				]
			}
		},
		compass: {
			main: {
				options: {
					sassDir: "./sass/",
					cssDir: "./build/css/"
					//outputStyle: "compressed",		
				},
				files: [
					{
						expand: true,
						cwd: "./sass/",
						src: ["*.scss"]
					}	
				]
			}
		},
		clean: {
			main: {
				files: [
					{
						expand: true,
						cwd: "./build/",
						src: ["**"]
					}
				]
			}
		},
		copy: {
			html: {
				files: [
					{
						expnad: true,
						src: ["*.html"],
						dest: "./build/"
					}
				]
			}	
		},
		watch: {
			sass: {
				files: ["./sass/*.scss", "./sass/**/*.scss"],
				tasks: ["compass"]
			},
			js: {
				files: ["./js/*.js", "!./js/*.module.js"],
				tasks: ["browserify"]
			},
			html: {
				files: ["./*.html"],
				tasks: ["copy"]
			}
		}	
	});
	
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-copy");
	
	grunt.registerTask("default", ["copy","compass", "browserify", "clean"]);
};