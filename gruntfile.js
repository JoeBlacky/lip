module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['js/dev/*.js'],
        dest: 'js/script.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css':'scss/main.scss'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js/<%= pkg.name %>.js' : '<%= concat.dist.dest %>'
        }
      }
    },
    watch: {
      sass: {
        files: ['scss/**/*.scss', 'scss/*.scss'],
        tasks: ['sass'],
      },
      js: {
        files: 'js/dev/main.js',
      },
      files: '<%= concat.dist.src %>',
      tasks: ['concat', 'uglify', 'sass']
    },
    sprite:{
      all: {
        src: 'img/dev/sprites/*.png',
        dest: 'img/sprite.png',
        destCss: 'css/sprites.css',
        padding: 5
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9', '> 1%']
      },
      main: {
        expand: true,
        flatten: true,
        src: 'css/dev/main.css',
        dest: 'css/main.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['concat', 'uglify']);

};