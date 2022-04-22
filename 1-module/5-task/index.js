function truncate(str, maxlength) {
  let res = str;
  let cut = "…";
  if (typeof (str) === "string") {
    if (str.length > maxlength) {
      res = res.substring(0, maxlength - 1) + cut;
    }
  }
  return res;
}
