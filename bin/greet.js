#!/usr/bin/env node
var greet = require("../src/index.coffee");
var parseArgs = require("minimist");
var name = process.argv[2] || "what's your name?";
var drunk = parseArgs(process.argv)["drunk"];
console.log(greet(name, drunk));
