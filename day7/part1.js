// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>.
// Advent of Code 2025 - Day 7, Part 1
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

let input = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n")
    .map((l) => l.replace("S", "|").split(""));

function runTick(grid) {
    // move all `|`s  down one row, if it hits a '^' splitter then it moves left and right from the splitter
    let newGrid = grid.map((row) => row.slice());
    let splitCount = 0;

    for (let r = grid.length - 1; r >= 0; r--) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === "|") {
                if (r + 1 < grid.length) {
                    if (grid[r + 1][c] === "^") {
                        // move left and right
                        splitCount++;
                        if (c - 1 >= 0 && newGrid[r + 1][c - 1] === ".") {
                            newGrid[r + 1][c - 1] = "|";
                        }
                        if (
                            c + 1 < grid[r].length &&
                            newGrid[r + 1][c + 1] === "."
                        ) {
                            newGrid[r + 1][c + 1] = "|";
                        }
                        newGrid[r][c] = ".";
                    } else if (grid[r + 1][c] === ".") {
                        newGrid[r + 1][c] = "|";
                        newGrid[r][c] = ".";
                    }
                } else {
                    // out of bounds, just remove it
                    newGrid[r][c] = ".";
                }
            }
        }
    }

    return [newGrid, splitCount];
}

let tot = 0;
while (true) {
    let [newGrid, splits] = runTick(input);
    input = newGrid;
    tot += splits;
    if (newGrid.every((row) => row.every((cell) => cell !== "|"))) {
        break;
    }
}

console.log(tot);
