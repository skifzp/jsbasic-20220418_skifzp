function camelize(str) {
  let arr = str.split('-');
  let res = [];
  res.push(arr[0]);
  for( let i = 1; i < arr.length ; i++ ){
      res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return res.join("");
}
