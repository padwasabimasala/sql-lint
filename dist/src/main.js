#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const process = require("process");
const version = "0.0.1";
function increaseVerbosity(v, total) {
    return total + 1;
}
program
    .version(version)
    .option("-f, --file <path>", "The .sql file to lint")
    .option("-q, --query <string>", "The query to lint")
    .parse(process.argv);
console.log("working");
//# sourceMappingURL=main.js.map