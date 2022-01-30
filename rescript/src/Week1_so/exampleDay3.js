import { readFileSync } from 'fs';

const text = readFileSync("../../input/Week1/Year2020Day3.sample.txt", 'utf-8');
const map = text.split("\r\n")


// let x = 0;
// let y = 0;
// let countTrees = 0;
// let bottom = map.length

// while (true) {
//   x += 3
//   y += 1

//   if (y >= bottom) {
//     break;
//   }

//   if (map[y][x % map[y].length] === "#") {
//     countTrees++
//   }
// }

// console.log(countTrees)

function countTreesEncoutered(slopeX, slopeY) {
  let x = 0;
  let y = 0;
  let countTrees = 0;
  let bottom = map.length;

  while (true) {
    x += slopeX;
    y += slopeY;

    if (y >= bottom) {
      break;
    }
    if (map[y][x % map[y].length] === "#") {
      countTrees++;
    }
  }
  return countTrees;
}

console.log(
  countTreesEncoutered(1, 1) *
  countTreesEncoutered(3, 1) *
  countTreesEncoutered(5, 1) *
  countTreesEncoutered(7, 1) *
  countTreesEncoutered(1, 2)
)