import { readFileSync } from "fs";

const text = readFileSync("../../input/Week1/Year2020Day6.sample.txt", "utf-8");
const contents = text.split('\r\n\r\n');

const s1 = contents[0];
const line = s1.split('\r\n');
console.log(line)

let unioSet = new Set();

const solve = () => {
  const groups = contents;
  let total = 0;
  for (let group of groups) {
    const lines = group.split('\r\n');
    let unionSet = new Set();
    for (let line of lines) {
      const lineSet = new Set(line);
      // unionSet = union(unionSet, lineSet);
      // unionSet = union(unionSet, contents[0]);
    }
    total += unionSet.size;
    // console.log(total);
  }
  return total;
};



const union = (set1, set2) => {
  const newSet = new Set();

  for (let item of set1) {
    newSet.add(item);
  }

  for (let item of set2) {
    newSet.add(item);
  }

  console.log(newSet);
  return newSet;
};
// const s2 = new Set('yyzw');

// console.log(union(s1, s2));

console.log(solve())