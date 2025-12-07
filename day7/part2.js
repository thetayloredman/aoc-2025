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
    // Memoized with a cache keyed on (row, col).
    const memo = {};

    function dfs(r, c) {
        if (r >= grid.length) {
            return 1;
        }

        const key = `${r},${c}`;
        if (key in memo) {
            return memo[key];
        }

        let result = 0;
        if (grid[r][c] === "^") {
            // split
            if (c - 1 >= 0) result += dfs(r + 1, c - 1);
            if (c + 1 < grid[r].length) result += dfs(r + 1, c + 1);
        } else {
            // move down
            result = dfs(r + 1, c);
        }

        memo[key] = result;
        return result;
    }

    let universes = 0;
    for (let c = 0; c < grid[0].length; c++) {
        if (grid[0][c] === "|") {
            universes += dfs(0, c);
        }
    }

    return universes;
}

console.log(countUniverses(input));
