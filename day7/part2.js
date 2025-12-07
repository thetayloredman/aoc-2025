// Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>.
// Advent of Code 2025 - Day 7, Part 2
// This software is licensed under the MIT License. See the LICENSE file for details.

const fs = require("fs");
const {
    Worker,
    isMainThread,
    parentPort,
    workerData,
} = require("worker_threads");

function loadInput() {
    return fs
        .readFileSync("./input.txt", "utf-8")
        .trim()
        .split("\n")
        .map((l) => l.replace("S", "|").split(""));
}

function processJob(grid, startRow, startCol) {
    // Walk straight down until we either exit the grid (universe++),
    // hit a splitter (return child jobs), or leave bounds.
    let r = startRow;
    let c = startCol;

    while (true) {
        if (r >= grid.length) {
            return { universes: 1, jobs: [] };
        }

        const cell = grid[r][c];
        if (cell === "^") {
            const jobs = [];
            if (c - 1 >= 0) jobs.push({ r: r + 1, c: c - 1 });
            if (c + 1 < grid[r].length) jobs.push({ r: r + 1, c: c + 1 });
            return { universes: 0, jobs };
        }

        r += 1; // move straight down
    }
}

async function runWithThirtyWorkers(grid) {
    const startCol = grid[0].indexOf("|");
    if (startCol === -1) return 0;

    const WORKER_COUNT = 30;
    const workers = [];
    const idle = [];
    const queue = [{ r: 0, c: startCol }];
    let universes = 0;
    let active = 0;
    let settled = false;

    console.log(
        `Starting worker pool: ${WORKER_COUNT} workers; initial queue=${queue.length}`
    );

    function maybeFinish(resolve) {
        if (!settled && active === 0 && queue.length === 0) {
            settled = true;
            Promise.allSettled(workers.map((w) => w.terminate())).finally(() =>
                resolve(universes)
            );
        }
    }

    function dispatch(worker, resolve, reject) {
        if (queue.length === 0) {
            idle.push(worker);
            maybeFinish(resolve);
            return;
        }
        const job = queue.pop(); // LIFO to keep stack-like DFS behavior
        active++;
        worker.postMessage(job);
    }

    return new Promise((resolve, reject) => {
        for (let i = 0; i < WORKER_COUNT; i++) {
            const worker = new Worker(__filename, { workerData: { grid } });
            workers.push(worker);

            worker.on("message", ({ universes: u, jobs }) => {
                universes += u;
                if (jobs && jobs.length) queue.push(...jobs);
                active--;
                dispatch(worker, resolve, reject);
            });

            worker.on("error", (err) => {
                settled = true;
                reject(err);
            });

            worker.on("exit", (code) => {
                if (settled) return;
                if (code !== 0) {
                    settled = true;
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });

            dispatch(worker, resolve, reject);
        }
    });
}

if (isMainThread) {
    const input = loadInput();
    runWithThirtyWorkers(input)
        .then((universes) => console.log(`universes=${universes}`))
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
} else {
    const { grid } = workerData;
    parentPort.on("message", ({ r, c }) => {
        const { universes, jobs } = processJob(grid, r, c);
        parentPort.postMessage({ universes, jobs });
    });
}
