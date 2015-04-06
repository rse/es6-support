
require("babel/register")({
    extensions: [ ".js" ],
    ignore:     /node_modules/
})

require("./src/app-main.js")

