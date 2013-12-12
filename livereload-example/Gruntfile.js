module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    watch: {
      css: {
        files: ['index.html','style.css'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);


  
};