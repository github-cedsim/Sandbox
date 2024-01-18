// TODO: What will the following line of code log?
console.log(window);

// TODO: What will the following line of code log?
console.log(window.document);

// TODO: What will the following line of code log?
console.log(document.documentElement);

// TODO: What will the following line of code log?
console.log(document.head);

// Bonus
// 2 ways

// 1
let length = 0;
for (const property in obj) {
  length++;
}
console.log(length);

// 2
const length2 = Object.keys(obj).length;
console.log(length2);