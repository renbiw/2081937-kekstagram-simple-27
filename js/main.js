// основа функции getRandomInRange(min, max) из источников https://myrusakov.ru/js-random-numbers.html

function getRandomInRange(min, max) {
  if ((min < 0) || (max < 0))  {
    return NaN;
  }
  if (min > max) {
    let a = min;
    min = max;
    max = a;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateLength (a, len) {
  if ( a.length <= len ) {
    return true;
  }
  return false;
}

getRandomInRange(1, 12);
calculateLength('HTML', 3);
