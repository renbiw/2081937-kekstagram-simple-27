const getRandomInRange = (min, max) => {
  const isNegative = min < 0 || max < 0;
  const trueMax = Math.max(min, max);
  const trueMin = Math.min(min, max);
  if (isNegative) {
    throw new RangeError('Число должно быть из диапазона неотрицательных чисел');
  }
  return Math.floor(Math.random() * (trueMax - trueMin + 1)) + trueMin;
}

const compareLength = (line, len) => {
  return len >= line.length
}

getRandomInRange(1, 12);
compareLength('HTML', 3);

export { getRandomInRange, compareLength };
