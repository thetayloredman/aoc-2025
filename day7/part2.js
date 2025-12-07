// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>.
// Advent of Code 2025 - Day 7, Part 2
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

let input = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n")
    .map((l) => l.replace("S", "|").split(""));

function countUniverses(grid) {
    // A particle ('|') will always be in the top row of this grid.
    // If it hits a splitter ('^') below, evaluate the two possible paths recursively.
    let universes = 0;

    function dfs(r, c) {
        if (r >= grid.length) {
            universes++;
            return;
        }
        if (grid[r][c] === "^") {
            // split
            if (c - 1 >= 0) dfs(r + 1, c - 1);
            if (c + 1 < grid[r].length) dfs(r + 1, c + 1);
        } else {
            // move down
            dfs(r + 1, c);
        }
    }

    for (let c = 0; c < grid[0].length; c++) {
        if (grid[0][c] === "|") {
            dfs(0, c);
        }
    }

    return universes;
}

console.log(countUniverses(input));
