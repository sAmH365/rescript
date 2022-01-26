// import { readFileSync } from 'fs';

// const text = readFileSync("../../input/Week1/Year2020Day3.sample.txt", 'utf-8');
// const map = text.split("\r\n")

// let x = 0;
// let y = 0;
// let countTrees = 0;
// let bottom = map.length

// while (true) {
//   x += 3;
//   y += 1;

//   if (y >= bottom) {
//     break;
//   }

//   if (map[y][x % map[y].length] === "#") {
//     countTrees++;
//   }
// }

// console.log(countTrees);

let input = Node.Fs.readFileAsUtf8Sync("../../input/Week1/Year2020Day3.sample.txt")

let map = Js.String2.split(input, "\r\n")

let bottom = map->Belt.Array.size

let countTrees = ref(0)

let rec recFunction = (x: int, y: int) => {
  if y <= bottom {
    recFunction(x + 3, y + 1)
    if y <= bottom - 1 && Js.String2.charAt(map[y], mod(x, map[y]->Js.String2.length)) === "#" {
      countTrees := countTrees.contents + 1
    } else {
      ()
    }
  } else {
    ()
  }
}

recFunction(0, 0)
// Js.log(map[323])

Js.log(countTrees.contents)
