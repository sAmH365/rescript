const add = x => y => {
  console.log('#####');
  console.log(x);
  console.log(y);
  console.log('#####');
  x + y
};
// const add = function a1(x) {
//   return function a2(y) {
//     x + y;
//   }
// }

const increment = add(1);
const addTen = add(10);

let a = increment(15);
let b = addTen(2);

console.log(b);
