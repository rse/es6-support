
/* global describe: false */
/* global it: false */
/* global expect: false */
/* global require: false */
/* jshint -W030: false */

var Example = require("../lib/example.js")

describe("Example Library", () => {
    it("should do something important", () => {
        var example = new Example()
        example.msg = "foo"
        expect(example.msg).to.be.equal("foo")
    })
})

