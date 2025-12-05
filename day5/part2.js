// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev> and charmines <char@char.systems>.
// Advent of Code 2025 - Day 5, Part 2
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

let [fresh, _sp] = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n\n")
    .map((l) => l.trim().split("\n"));
let ranges = fresh.map((l) => l.split("-").map(Number));

ranges.sort((a, b) => a[0] - b[0]);

let merged = [];
for (let [st, end] of ranges) {
    if (merged.length === 0) {
        merged.push([st, end]);
        continue;
    }
    let [lst, lend] = merged[merged.length - 1];
    if (st <= lend + 1) {
        merged[merged.length - 1][1] = Math.max(lend, end);
    } else {
        merged.push([st, end]);
    }
}

fresh = merged;

let tot = 0;
for (let [st, end] of fresh) {
    tot += end - st + 1;
}

console.log(tot);
