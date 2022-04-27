function sumSalary(salaries) {
  let res = 0;
  for (const key in salaries) {
    if (typeof(salaries[key]) === "number") {
      if( Number.isFinite(salaries[key]) && salaries[key] != null){
        res += salaries[key];
      }
    }
  }
  return res;
}
