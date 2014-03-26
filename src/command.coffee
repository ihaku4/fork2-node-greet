command = () ->
    greet = require("../lib/index.js")
    parseArgs = require("minimist")
    name = process.argv[2] ? "what's your name?"
    drunk = parseArgs(process.argv)["drunk"]
    console.log(greet(name, drunk))
module.exports = command;
