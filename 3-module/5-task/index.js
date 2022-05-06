function getMinMax(str) {
  let arr = str.split(" ");
  let numbers = arr.filter(item => !Number.isNaN(Number(item))).map(item => Number(item))
    .sort( (a,b) => a-b);
  return {
    min: numbers[0],
    max: numbers[numbers.length-1],
  }
}
