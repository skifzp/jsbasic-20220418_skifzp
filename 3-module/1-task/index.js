function namify(users) {
  let res = [];
  for (const key in users) {
    res.push(users[key]["name"]);
  }
  return res;
}
