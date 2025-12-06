// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>.
// Advent of Code 2025 - Day 6, Part 2
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

let input = fs.readFileSync("./input.txt", "utf-8").split("\n");

// We parse the string into a list of its columns
let cols = [];
for (let i = 0; i < input[0].length; i++) {
    cols.push([]);
    for (let j = 0; j < input.length; j++) {
        cols[i].push(input[j][i]);
    }
}

// Now we split it by 'empty' columns which are [' ', ' ', ' ', ...]
let finalCols = [];
let currentCol = [];
for (let col of cols) {
    if (col.every((c) => c === " ")) {
        if (currentCol.length > 0) {
            finalCols.push(currentCol);
            currentCol = [];
        }
    } else {
        currentCol.push(col);
    }
}
if (currentCol.length > 0) {
    finalCols.push(currentCol);
}

// now, finalCols is of this structure
// [['6', '2', '3', '+'],
//  ['4', '3', '1', ' '],
//  [' ', ' ', '4', ' '], ...]
// extract the operator which is definitively in the last element of the first column
for (let i = 0; i < finalCols.length; i++) {
    let col = finalCols[i];
    let operator = col[0][col[0].length - 1];
    finalCols[i] = {
        operator: operator,
        values: col
            .map((r) => r.slice(0, -1).join(""))
            .filter((v) => v.trim() !== "")
            .map(Number),
    };
}

// Now apply similar math from part1
let tot = 0;
for (let { values: v, operator: op } of finalCols) {
    let f = (a, b) => {
        if (op === "+") return a + b;
        if (op === "*") return a * b;
    };

    let res = v.reduce(f, op === "+" ? 0 : 1);

    tot += res;
}

console.log(tot);
