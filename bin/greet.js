#!/usr/bin/env node
var greet = require("../index.js")
var name = process.argv[2] || "what's your name?";
console.log(greet(name));
