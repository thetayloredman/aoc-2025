// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>
// Advent of Code 2025 - Day 1, Part 1
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

const input = fs
    .readFileSync("input.txt", "utf8")
    .trim()
    .split("\n")
    .map((l) => [l[0], parseInt(l.slice(1))]);

const signForDir = (dir) => (dir === "L" ? -1 : 1);

let currentPosition = 50;
let solution = 0;
for (const [dir, val] of input) {
    // stupid iterative mess
    for (let i = 0; i < val; i++) {
        currentPosition += signForDir(dir);

        currentPosition = (currentPosition + 100) % 100;

        if (currentPosition === 0) solution++;
    }
}

console.log("Solution:", solution);
