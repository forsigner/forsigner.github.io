module.exports = function(grunt) {
    var LIVERELOAD_PORT = 35729;
    // configurable paths
    var pathConfig = {
        st: 'static',
        dist: 'dist',
        site: '../../../_site'
    };

    // 配置
    grunt.initConfig({
        //path
        pkg : grunt.file.readJSON('package.json'),
        fs: pathConfig,

        compass: {
            dist: {                   // Target
                options: {              // Target options
                    sassDir: '<%= fs.st %>/sass',
                    cssDir: '<%= fs.st %>/css',
                    generatedImagesDir: '<%= fs.st %>/imggd',
                    imagesDir: '<%= fs.st %>/img',
                    javascriptsDir: '<%= fs.st %>/js',
                    fontsDir: '<%= fs.st %>/font',
                    importPath: '<%= fs.st %>/bower_components',
                    httpImagesPath: '/img',
                    httpGeneratedImagesPath: '/img/generated',
                    httpFontsPath: '/font',
                    relativeAssets: false,
                    debugInfo: true
                }
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            foo: {
                src: 'static/js/forsigner.js',
                dest: 'static/js/forsigner.min.js'
            }
        },
        cssmin: {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            preview : {
                src: 'static/css/style.css',
                dest: 'static/css/style.min.css'
            }
        },
        watch: {
            compass: {
              files: ['<%= fs.st %>/sass/*.scss'],
              tasks: ['compass']
            },
            livereload: {
                options: {
                    livereload: true,
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= fs.st %>/css/*.css',
                    '<%= fs.st %>/js/*.js'
                ]
            }
        }

    });
    // 载入concat、uglify和watch插件
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 注册任务
    grunt.registerTask('default', ['compass', 'uglify', 'cssmin', 'watch']);
}; 
