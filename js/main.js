// основа функции getRandomInRange(min, max) из источников https://myrusakov.ru/js-random-numbers.html

function getRandomInRange(min, max) {
  let isValid = (min < 0) || (max < 0);
  if (isValid) {
    throw new RangeError('Число должно быть из диапазона неотрицательных чисел');
  }
  if (min > max) {
    let a = min;
    let b = max;
    return Math.floor(Math.random() * (a - b + 1)) + b;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareLength (a, len) {
  return len >= a.length
}

getRandomInRange(1, 12);
compareLength('HTML', 3);
