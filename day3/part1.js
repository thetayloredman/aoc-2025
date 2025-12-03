// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev> and charmines <char@char.systems>
// Advent of Code 2025 - Day 3, Part 1
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

const input = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n")
    .map((l) => l.split("").map((x) => parseInt(x)));

let answers = [];
for (let row of input) {
    let solutions = [];
    for (let i = 0; i < row.length; i++) {
        for (let j = i; j < row.length; j++) {
            if (i === j) continue;
            solutions.push(row[i] * 10 + row[j]);
        }
    }
    solutions.sort((a, b) => b - a);
    answers.push(solutions[0]);
}

console.log(answers.reduce((a, b) => a + b, 0));

// console.log(input);
