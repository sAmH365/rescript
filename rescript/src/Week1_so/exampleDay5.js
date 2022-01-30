import { readFileSync } from 'fs';

const text = readFileSync("../../input/Week1/Year2020Day5.sample.txt", "utf-8");
const contents = text.split('\r\n');

let row = 0;
let column = 0;

let test = "FBFBBFFRLR";

const solve = () => {
  const seatIds = contents.map(line => {
    const rowStr = line.slice(0, 7);
    const colStr = line.slice(7);
    const rowNum = binaryFind(rowStr, 'F', 'B', 128);
    const colNum = binaryFind(colStr, 'L', 'R', 8);
    return (8 * rowNum) + colNum
  });


  return Math.max(...seatIds);
}

const binaryFind = (str, bottomSym, topSym, n) => {
  let lo = 0;
  let hi = n;
  for (let char of str) {
    const mid = Math.floor((lo + hi) / 2);
    if (char === bottomSym) {
      hi = mid;
    } else if (char === topSym) {
      lo = mid
    }
  }

  return lo;
}

console.log(solve())
