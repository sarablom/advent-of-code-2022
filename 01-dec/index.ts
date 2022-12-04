import * as fs from "fs";
const data = fs.readFileSync("elf-calories.txt", "utf8").split("\n");

// To run
// npx ts-node index.ts
let singleElfCount = 0;
let totalCaloriesSums = [0];

for (let i = 0; i < data.length; i++) {
    if (data[i] === "") {
        singleElfCount++;
        totalCaloriesSums[singleElfCount] = 0;
        continue;
    }

    totalCaloriesSums[singleElfCount] += +data[i];
}

console.log(Math.max(...totalCaloriesSums));

const length = totalCaloriesSums.length;

const sumOfThreeHighestCalorieCounts = totalCaloriesSums
    .sort((a, b) => {
        return a - b;
    })
    .slice(length - 3, length)
    .reduce((acc, curr) => acc + curr, 0);

console.log(sumOfThreeHighestCalorieCounts);
