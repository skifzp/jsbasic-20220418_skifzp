function factorial(n) {
  let result=1;
  while(n>=0){
    if(n!=0){
      result *= n;
    }
    n--;
  }
  return result;
}
