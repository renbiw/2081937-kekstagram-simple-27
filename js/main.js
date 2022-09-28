function getRandomInRange(min, max) {
  const isValid = min < 0 || max < 0;
  const revertMax = min;
  const revertMin = max;
  if (isValid) {
    throw new RangeError('Число должно быть из диапазона неотрицательных чисел');
  }
  if (min > max) {
    return Math.floor(Math.random() * (revertMax - revertMin + 1)) + revertMin;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareLength (line, len) {
  return len >= line.length
}

getRandomInRange(1, 12);
compareLength('HTML', 3);
