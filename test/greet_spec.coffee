greet = require("greet")

describe('greet', ->
    it("should greet a person by name", ->
        expect(greet("name")).to.contain("hello")
        expect(greet("name")).to.contain("name")
    )
    it("should greet a person flirtatiously if drunk", ->
        expect(greet("name", true)).to.contain("hello")
        expect(greet("name", true)).to.contain("name")
        expect(greet("name", true)).to.contain("you look sexy today")
    )
)
