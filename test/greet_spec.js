var expect = require("chai").expect;
var greet = require("greet");

describe('greet', function() {
    it("is a dummy success case", function() {
        expect(1).to.eql(1);
    });
});

describe('greet', function() {
    it("should greet a person by name", function() {
        expect(greet("name")).to.contain("hello");
        expect(greet("name")).to.contain("name");
    });
});

describe('greet', function() {
    it("should greet a person flirtatiously if drunk", function() {
        expect(greet("name", true)).to.contain("hello");
        expect(greet("name", true)).to.contain("name");
        expect(greet("name", true)).to.contain("you look sexy today");
    });
});
