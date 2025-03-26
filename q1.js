function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  let classAvreg = sum / classPoints.length;
  console.log(sum);
  console.log(classAvreg);
  return yourPoints > classAvreg;
}

const point = [2, 3];
console.log(betterThanAverage(point, 5));
// __________________________________________________________________________________________________

// !other way:

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}
// ___________________________________________________________________________________________________
