import fs from "fs";

function checkForWord(str) {
  const strNums = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  for (let i = 0; i < strNums.length; i++) {
    if (str.includes(strNums[i])) {
      return i + 1;
    }
  }
  return -1;
}

function partTwo() {
  const lines = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

  const nums = [];

  for (let i = 0; i < lines.length; i++) {
    const lineNum = [];
    let str = "";

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];
      str = str + char;

      const wordCheck = checkForWord(str);

      if (wordCheck >= 0) {
        lineNum.push(wordCheck);
        str = char;
      } else {
        const val = parseInt(char);
        if (!isNaN(val)) {
          lineNum.push(val);
          str = "";
        }
      }
    }

    if (lineNum.length > 1) {
      const num = parseInt(`${lineNum[0]}${lineNum[lineNum.length - 1]}`);
      nums.push(num);
    } else {
      const num = parseInt(`${lineNum[0]}${lineNum[0]}`);
      nums.push(num);
    }
  }

  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], lines[i]);
    answer = answer + nums[i];
  }

  console.log(answer);
}

partTwo();

// Part One

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");

  const values = lines.map((line) => {
    let first = line.split("").find((val) => !Number.isNaN(Number(val)));
    let last = line.split("").findLast((val) => !Number.isNaN(Number(val)));

    return Number(first + last);
  });
  // console.log(values);
  return values.reduce((s, val) => s + val);
}

// console.log(partOne("./input.txt"));
