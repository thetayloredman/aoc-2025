// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>.
// Advent of Code 2025 - Day 6, Part 1
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

let input = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n")
    .map((l) => l.split(/\s+/).filter(Boolean));

// transpose the input matrix
let transposed = [];
for (let i = 0; i < input[0].length; i++) {
    transposed.push([]);
    for (let j = 0; j < input.length; j++) {
        transposed[i].push(input[j][i]);
    }
}

let tot = 0;
for (let v of transposed) {
    let op = v.pop();
    v = v.map(Number);

    let f = (a, b) => {
        if (op === "+") return a + b;
        if (op === "*") return a * b;
    };

    let res = v.reduce(f, op === "+" ? 0 : 1);

    tot += res;
}

console.log(tot);
