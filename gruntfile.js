module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngtemplates: {
      angularSpinkit: {
        src: ['src/templates/**.html'],
        dest: 'build/templates.js'
      }
    },
    concat: {
      dist: {
        src: ['src/angular-spinkit.js', 'build/templates.js'],
        dest: 'build/angular-spinkit.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['ngtemplates','concat:dist', 'uglify']);

};