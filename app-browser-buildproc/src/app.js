
let window = require("window")
let $      = require("jquery")

export default class Example {
    static main () {
        $(window.document).ready(() => {
            $("body").append("Hello World from ES6!")
        })
    }
}

