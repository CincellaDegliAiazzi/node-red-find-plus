"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const file = path.join(__dirname, "..", "advanced-search.html");
const html = fs.readFileSync(file, "utf8");
const match = html.match(/<script type="text\/javascript">([\s\S]*?)<\/script>/);

if (!match) {
    throw new Error("Unable to find the editor plug-in script block.");
}

new vm.Script(match[1], { filename: "advanced-search.html" });
console.log("Find+ JavaScript syntax is valid.");
