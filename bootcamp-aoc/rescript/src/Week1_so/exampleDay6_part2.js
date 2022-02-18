import { readFileSync } from "fs";

const text = readFileSync("../../input/Week1/Year2020Day6.sample.txt", "utf-8");
const contents = text.split('\r\n\r\n');


const solve = () => {
  const groups = contents;
  let total = 0;
  for (let group of groups) {
    const lines = group.split('\r\n');
    let interSectionSet = new Set(lines[0]);
    for (let line of lines) {
      const lineSet = new Set(line);
      interSectionSet = interSection(interSectionSet, lineSet);
    }
    total += interSectionSet.size;
  }
  return total;
};

// const union = (set1, set2) => {
//   const newSet = new Set();

//   for (let item of set1) {
//     newSet.add(item);
//   }

//   for (let item of set2) {
//     newSet.add(item);
//   }

//   return newSet;
// };

const interSection = (set1, set2) => {
  const newSet = new Set();

  for (let item of set1) {
    if (set2.has(item)) {
      newSet.add(item);
    }
  }

  return newSet
};

const s1 = new Set('aple');
const s2 = new Set('pol');
console.log(interSection(s1, s2));


console.log(solve())