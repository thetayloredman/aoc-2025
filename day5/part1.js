// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev> and charmines <char@char.systems>.
// Advent of Code 2025 - Day 5, Part 1
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

let [fresh, spoiled] = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n\n")
    .map((l) => l.trim().split("\n"));
fresh = fresh.map((l) => l.split("-").map(Number));
spoiled = spoiled.map(Number);

let tot = 0;
for (let s of spoiled) {
    let isFresh = false;
    for (let i = 0; i < fresh.length; i++) {
        let [low, high] = fresh[i];
        if (s >= low && s <= high) {
            isFresh = true;
            break;
        }
    }
    if (isFresh) tot++;
}

console.log(tot);
