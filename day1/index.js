import fs from "fs";

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");

  const values = lines.map((line) => {
    let first = line.split("").find((val) => !Number.isNaN(Number(val)));
    let last = line.split("").findLast((val) => !Number.isNaN(Number(val)));

    return Number(first + last);
  });
  console.log(values);
  return values.reduce((s, val) => s + val);
}

console.log(partOne("./input.txt"));
