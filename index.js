// EXAMPLE 1 - Get a Random Float in a Range in JavaScript

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(
    decimals,
  );

  return parseFloat(str);
}

console.log(getRandomFloat(1.5, 3.5, 2)); // 👉️ 2.18
console.log(getRandomFloat(1.5, 3.5, 3)); // 👉️ 1.648
console.log(getRandomFloat(1.5, 3.5, 4)); // 👉️ 2.334

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get a Random Float in a Range using `lodash`

// import _ from 'lodash';

// console.log(_.random(1.5, 3.5, true)); // 👉️ 1.6857339558747713
// console.log(_.random(1.5, 3.5, true)); // 👉️ 2.955297568340108
// console.log(_.random(1.5, 3.5, true)); // 👉️ 3.0891939168066593
