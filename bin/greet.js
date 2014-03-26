#!/usr/bin/env node
var greet = require("../lib/index.js");
var parseArgs = require("minimist");
var name = process.argv[2] || "what's your name?";
var drunk = parseArgs(process.argv)["drunk"];
console.log(greet(name, drunk));
