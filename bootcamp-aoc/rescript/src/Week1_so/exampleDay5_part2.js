import { readFileSync } from 'fs';

const text = readFileSync("../../input/Week1/Year2020Day5.sample.txt", "utf-8");
const contents = text.split('\r\n');

const solve = () => {
  const ids = contents.map(getSeatIds);
  const sortedIds = ids.sort((a, b) => a - b);
  for (let i = 1; i < sortedIds.length - 1; i++) {
    const curr = sortedIds[i];
    const next = sortedIds[i + 1];
    if (curr + 1 !== next) {
      return curr + 1;
    }
  }
  // console.log(sortedIds)
}


const getSeatIds = (str) => {
  const rowInfo = str.slice(0, 7);
  const colInfo = str.slice(7);
  const row = binaryFind(rowInfo, 'F', 'B', 128);
  const col = binaryFind(colInfo, 'L', 'R', 8);
  return (8 * row) + col
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
// console.log(binaryFind('FBFBBFF', 'F', 'B', 128));
// console.log(binaryFind('RLR', 'L', 'R', 8));
