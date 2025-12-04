// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev> and charmines <char@char.systems>.
// Advent of Code 2025 - Day 4, Part 2
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

const input = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n")
    .map((l) => l.split(""));

class Grid {
    constructor(lines) {
        this.lines = lines;
    }

    get(x, y) {
        return this.lines[y][x];
    }

    getNeighbors(x, y) {
        let deltas = [
            [-1, -1],
            [0, -1],
            [1, -1],
            [-1, 0],
            [1, 0],
            [-1, 1],
            [0, 1],
            [1, 1],
        ];
        let neighbors = [];
        for (let [dx, dy] of deltas) {
            let nx = x + dx;
            let ny = y + dy;
            if (
                ny >= 0 &&
                ny < this.lines.length &&
                nx >= 0 &&
                nx < this.lines[0].length
            ) {
                neighbors.push(this.get(nx, ny));
            }
        }
        return neighbors;
    }
}

let g = new Grid(input);

function runStep() {
    let accessible = [];

    for (let y = 0; y < g.lines.length; y++) {
        for (let x = 0; x < g.lines[0].length; x++) {
            if (g.lines[y][x] === "@") {
                let neighbors = g.getNeighbors(x, y);
                let count = neighbors.filter((n) => n === "@").length;
                if (count < 4) accessible.push([x, y]);
            }
        }
    }

    // remove all accessible
    for (let [x, y] of accessible) {
        g.lines[y][x] = ".";
    }

    return accessible.length;
}

let tot = 0;
let c = Infinity;
while (c > 0) {
    tot += c = runStep();
}

console.log(tot);
// console.log(g);

// console.log(g.getNeighbors(2, 0));
