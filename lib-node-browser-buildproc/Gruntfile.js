
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-eslint");

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: "jshint.json"
            },
            "gruntfile":  [ "Gruntfile.js" ],
            "example": [ "src/**/*.js", "tst/**/*.js" ]
        },
        eslint: {
            options: {
                config: "eslint.json"
            },
            target: [ "src/**/*.js", "tst/**/*.js" ]
        },
        browserify: {
            "example": {
                files: {
                    "lib/example.js": [ "src/**/*.js" ]
                },
                options: {
                    transform: [ "babelify" ],
                    plugin: [
                        [ "minifyify", { map: "example.map", output: "lib/example.map" } ],
                        [ "browserify-derequire" ]
                    ],
                    browserifyOptions: {
                        standalone: "Example",
                        debug: true
                    }
                }
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd:    "tst",
                        src:    [ "*.js" ],
                        dest:   "tst-bld"
                    }
                ]
            }
        },
        mochaTest: {
            "example": {
                src: [ "tst-bld/*.js", "!tst-bld/common.js" ]
            },
            options: {
                reporter: "spec",
                require: "tst-bld/common.js"
            }
        },
        clean: {
            clean:     [ "lib", "tst-bld" ],
            distclean: [ "node_modules" ]
        }
    });

    grunt.registerTask("default", [ "jshint", "eslint", "browserify", "babel", "mochaTest" ]);
};

