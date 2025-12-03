// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev> and charmines <char@char.systems>
// Advent of Code 2025 - Day 3, Part 2
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");

const input = fs
    .readFileSync("./input.txt", "utf-8")
    .trim()
    .split("\n")
    .map((l) => l.split("").map((x) => parseInt(x)));

function solve(line) {
    // *** I cheated a little bit because I looked up the algorithm for finding this.
    // *** The idea is to greedily pick the largest digit possible at each step,
    // *** while ensuring that there are enough digits left to complete the 12-digit number.
    // *** This avoids the need for deep nested loops and is much more efficient than the dumb solution.
    //
    // *** Eric, sometimes you are so mean.

    // pick the leftmost largest digit leaving at least 11 digits on the right
    let leavingLeft = line.slice(0, line.length - 11);
    let firstDigit = Math.max(...leavingLeft);
    let firstIndex = leavingLeft.indexOf(firstDigit);

    // pick the next largest digit leaving at least 10 digits on the right
    let leavingSecond = line.slice(firstIndex + 1, line.length - 10);
    let secondDigit = Math.max(...leavingSecond);
    let secondIndex = leavingSecond.indexOf(secondDigit) + firstIndex + 1;

    // pick the next largest digit leaving at least 9 digits on the right
    let leavingThird = line.slice(secondIndex + 1, line.length - 9);
    let thirdDigit = Math.max(...leavingThird);
    let thirdIndex = leavingThird.indexOf(thirdDigit) + secondIndex + 1;

    // pick the next largest digit leaving at least 8 digits on the right
    let leavingFourth = line.slice(thirdIndex + 1, line.length - 8);
    let fourthDigit = Math.max(...leavingFourth);
    let fourthIndex = leavingFourth.indexOf(fourthDigit) + thirdIndex + 1;

    // pick the next largest digit leaving at least 7 digits on the right
    let leavingFifth = line.slice(fourthIndex + 1, line.length - 7);
    let fifthDigit = Math.max(...leavingFifth);
    let fifthIndex = leavingFifth.indexOf(fifthDigit) + fourthIndex + 1;

    // pick the next largest digit leaving at least 6 digits on the right
    let leavingSixth = line.slice(fifthIndex + 1, line.length - 6);
    let sixthDigit = Math.max(...leavingSixth);
    let sixthIndex = leavingSixth.indexOf(sixthDigit) + fifthIndex + 1;

    // pick the next largest digit leaving at least 5 digits on the right
    let leavingSeventh = line.slice(sixthIndex + 1, line.length - 5);
    let seventhDigit = Math.max(...leavingSeventh);
    let seventhIndex = leavingSeventh.indexOf(seventhDigit) + sixthIndex + 1;

    // pick the next largest digit leaving at least 4 digits on the right
    let leavingEighth = line.slice(seventhIndex + 1, line.length - 4);
    let eighthDigit = Math.max(...leavingEighth);
    let eighthIndex = leavingEighth.indexOf(eighthDigit) + seventhIndex + 1;

    // pick the next largest digit leaving at least 3 digits on the right
    let leavingNinth = line.slice(eighthIndex + 1, line.length - 3);
    let ninthDigit = Math.max(...leavingNinth);
    let ninthIndex = leavingNinth.indexOf(ninthDigit) + eighthIndex + 1;

    // pick the next largest digit leaving at least 2 digits on the right
    let leavingTenth = line.slice(ninthIndex + 1, line.length - 2);
    let tenthDigit = Math.max(...leavingTenth);
    let tenthIndex = leavingTenth.indexOf(tenthDigit) + ninthIndex + 1;

    // pick the next largest digit leaving at least 1 digit on the right
    let leavingEleventh = line.slice(tenthIndex + 1, line.length - 1);
    let eleventhDigit = Math.max(...leavingEleventh);
    let eleventhIndex = leavingEleventh.indexOf(eleventhDigit) + tenthIndex + 1;

    // pick the last digit
    let twelfthDigit = Math.max(...line.slice(eleventhIndex + 1));

    return (
        firstDigit * 1e11 +
        secondDigit * 1e10 +
        thirdDigit * 1e9 +
        fourthDigit * 1e8 +
        fifthDigit * 1e7 +
        sixthDigit * 1e6 +
        seventhDigit * 1e5 +
        eighthDigit * 1e4 +
        ninthDigit * 1e3 +
        tenthDigit * 1e2 +
        eleventhDigit * 1e1 +
        twelfthDigit
    );
}

console.log(
    "Solution:",
    input.map(solve).reduce((a, b) => a + b, 0)
);
