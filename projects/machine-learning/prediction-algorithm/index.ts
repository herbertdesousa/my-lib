const INPUT = [1, 2, 3, 4];
const OUTPUT = [3, 6, 9, 12];

const PREDICT = [5, 6, 7, 8];

const arrSum = (arr: number[]) => arr.reduce((acc, cur) => acc + cur, 0);

function linearRegression(
  x: number[],
  y: number[],
  predict: number[]
) {
  const xTotal = arrSum(x);
  const xLength = x.length;
  const xAverage = xTotal / xLength;

  const yTotal = arrSum(y);
  const yAverage = yTotal / x.length;

  const xByY = x.map((x, i) => x * y[i]);
  const xByYTotal = arrSum(xByY);

  const xSquared = x.map(x => x * x);
  const xSquaredTotal = arrSum(xSquared);

  const result1 = xTotal * yTotal / xLength;
  const result2 = xTotal * xTotal / xLength;
  const result3 = xByYTotal - result1;
  const result4 = result3 / (xSquaredTotal - result2);
  const result5 = yAverage - result4 * xAverage;

  predict.map((predict) => {
    const result = result4 * predict + result5;

    console.log('Valor:', predict, 'Predição:', result);
  })
}

linearRegression(INPUT, OUTPUT, PREDICT);