import * as fs from "fs";
const data = fs.readFileSync("elf-calories.txt", "utf8").split("\n");

// To run
// npx ts-node index.ts
let singleElfCount = 0;
let inputSums = [0];

for (let i = 0; i < data.length; i++) {
    if (data[i] === "") {
        singleElfCount++;
        inputSums[singleElfCount] = 0;
        continue;
    }

    inputSums[singleElfCount] += (+data[i]);
}

console.log(Math.max(...inputSums));
