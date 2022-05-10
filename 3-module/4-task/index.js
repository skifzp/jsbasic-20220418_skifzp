function showSalary(users, age) {
  let res = users.filter(item => item.age <= age).map(item => item.name + ", " + item.balance);
  return res.join("\n");
}
