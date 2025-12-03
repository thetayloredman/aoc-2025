// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev> and charmines <char@char.systems>
// Advent of Code 2025 - Day 3, Part 2
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
    for (let dig1 = 0; dig1 < row.length; i++) {
        console.log(`looping 1: ${dig1}/${row.length}`);
        for (let dig2 = dig1; dig2 < row.length; dig2++) {
            console.log(`looping 2: ${dig2}/${row.length}`);
            for (let dig3 = dig2; dig3 < row.length; dig3++) {
                console.log(`looping 3: ${dig3}/${row.length}`);
                for (let dig4 = dig3; dig4 < row.length; dig4++) {
                    console.log(`looping 4: ${dig4}/${row.length}`);
                    for (let dig5 = dig4; dig5 < row.length; dig5++) {
                        console.log(`looping 5: ${dig5}/${row.length}`);
                        for (let dig6 = dig5; dig6 < row.length; dig6++) {
                            console.log(`looping 6: ${dig6}/${row.length}`);
                            for (let dig7 = dig6; dig7 < row.length; dig7++) {
                                for (
                                    let dig8 = dig7;
                                    dig8 < row.length;
                                    dig8++
                                ) {
                                    for (
                                        let dig9 = dig8;
                                        dig9 < row.length;
                                        dig9++
                                    ) {
                                        for (
                                            let dig10 = dig9;
                                            dig10 < row.length;
                                            dig10++
                                        ) {
                                            for (
                                                let dig11 = dig10;
                                                dig11 < row.length;
                                                dig11++
                                            ) {
                                                for (
                                                    let dig12 = dig11;
                                                    dig12 < row.length;
                                                    dig12++
                                                ) {
                                                    if (
                                                        dig1 === dig2 ||
                                                        dig1 === dig3 ||
                                                        dig1 === dig4 ||
                                                        dig1 === dig5 ||
                                                        dig1 === dig6 ||
                                                        dig1 === dig7 ||
                                                        dig1 === dig8 ||
                                                        dig1 === dig9 ||
                                                        dig1 === dig10 ||
                                                        dig1 === dig11 ||
                                                        dig1 === dig12 ||
                                                        dig2 === dig3 ||
                                                        dig2 === dig4 ||
                                                        dig2 === dig5 ||
                                                        dig2 === dig6 ||
                                                        dig2 === dig7 ||
                                                        dig2 === dig8 ||
                                                        dig2 === dig9 ||
                                                        dig2 === dig10 ||
                                                        dig2 === dig11 ||
                                                        dig2 === dig12 ||
                                                        dig3 === dig4 ||
                                                        dig3 === dig5 ||
                                                        dig3 === dig6 ||
                                                        dig3 === dig7 ||
                                                        dig3 === dig8 ||
                                                        dig3 === dig9 ||
                                                        dig3 === dig10 ||
                                                        dig3 === dig11 ||
                                                        dig3 === dig12 ||
                                                        dig4 === dig5 ||
                                                        dig4 === dig6 ||
                                                        dig4 === dig7 ||
                                                        dig4 === dig8 ||
                                                        dig4 === dig9 ||
                                                        dig4 === dig10 ||
                                                        dig4 === dig11 ||
                                                        dig4 === dig12 ||
                                                        dig5 === dig6 ||
                                                        dig5 === dig7 ||
                                                        dig5 === dig8 ||
                                                        dig5 === dig9 ||
                                                        dig5 === dig10 ||
                                                        dig5 === dig11 ||
                                                        dig5 === dig12 ||
                                                        dig6 === dig7 ||
                                                        dig6 === dig8 ||
                                                        dig6 === dig9 ||
                                                        dig6 === dig10 ||
                                                        dig6 === dig11 ||
                                                        dig6 === dig12 ||
                                                        dig7 === dig8 ||
                                                        dig7 === dig9 ||
                                                        dig7 === dig10 ||
                                                        dig7 === dig11 ||
                                                        dig7 === dig12 ||
                                                        dig8 === dig9 ||
                                                        dig8 === dig10 ||
                                                        dig8 === dig11 ||
                                                        dig8 === dig12 ||
                                                        dig9 === dig10 ||
                                                        dig9 === dig11 ||
                                                        dig9 === dig12 ||
                                                        dig10 === dig11 ||
                                                        dig10 === dig12 ||
                                                        dig11 === dig12
                                                    ) {
                                                        continue;
                                                    }
                                                    solutions.push(
                                                        row[dig1] *
                                                            1000000000000 +
                                                            row[dig2] *
                                                                100000000000 +
                                                            row[dig3] *
                                                                10000000000 +
                                                            row[dig4] *
                                                                1000000000 +
                                                            row[dig5] *
                                                                100000000 +
                                                            row[dig6] *
                                                                10000000 +
                                                            row[dig7] *
                                                                1000000 +
                                                            row[dig8] * 100000 +
                                                            row[dig9] * 10000 +
                                                            row[dig10] * 1000 +
                                                            row[dig11] * 100 +
                                                            row[dig12] * 10
                                                    );
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    solutions.sort((a, b) => b - a);
    answers.push(solutions[0]);
}

console.log(answers.reduce((a, b) => a + b, 0));

// console.log(input);
