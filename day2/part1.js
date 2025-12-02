// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>
// Advent of Code 2025 - Day 2, Part 1
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

const REPEATS = /^(.+)\1$/;

const input = fs
    .readFileSync("input.txt", "utf8")
    .trim()
    .split(",")
    .flatMap((l) => {
        let [start, end] = l.split("-");
        let ps = parseInt(start);
        let pe = parseInt(end);

        let ints = Array.from({ length: pe - ps + 1 })
            .map((_, i) => (i + ps).toString())
            .map((c) => [c, REPEATS.test(c)]);

        return ints;
    })
    .filter(([, hasRepeat]) => hasRepeat)
    .reduce((acc, [c]) => acc + parseInt(c), 0);

console.log(input);
