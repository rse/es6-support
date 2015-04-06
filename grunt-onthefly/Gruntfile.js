
require("babel/register")({
    extensions: [ ".js" ],
    ignore:     /node_modules/
})

module.exports = function (grunt) {
    require("./Gruntfile-main.js")(grunt)
}

