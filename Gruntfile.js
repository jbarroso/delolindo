module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.config.init({
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        },
        copy: {
            dist: {
                files: [{
                    src: './index.html',
                    dest: 'dist/index.html'
                }, {
                    expand: true,
                    src: './img/**',
                    dest: 'dist/'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'vendor/bower/fontawesome/fonts/*',
                    dest: 'dist/fonts'
                }, {
                    expand: true,
                    src: './vendor/rs-plugin/**',
                    dest: 'dist/'
                }, {
                    src: './CNAME',
                    dest: 'dist/CNAME'
                }]
            }


        }
    });

    grunt.registerTask('default', [
        'copy:dist',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);
};
