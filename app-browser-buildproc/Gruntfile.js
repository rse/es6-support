
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-browserify");

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: "jshint.json"
            },
            "gruntfile": [ "Gruntfile.js" ],
            "src":       [ "src/**/*.js" ]
        },
        browserify: {
            "example": {
                files: {
                    "bld/app.js": [ "src/app.js" ]
                },
                options: {
                    transform: [
                        "babelify",
                        "browserify-shim"
                    ],
                    plugin: [
                        [ "minifyify", { map: "app.map", output: "bld/app.map" } ]
                    ],
                    browserifyOptions: {
                        standalone: "Example",
                        debug: true
                    }
                }
            }
        },
        clean: {
            clean: [],
            distclean: [ "node_modules" ]
        }
    });

    grunt.registerTask("default", [ "jshint", "browserify" ]);
};

