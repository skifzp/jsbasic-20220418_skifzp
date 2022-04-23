function ucFirst(str) {
  let res = str;
  if (typeof (str) === "string") {
    if (str.length > 0) {
      let s = str.charAt(0).toUpperCase();
      res = s + str.substring(1, str.length);
    }
  }
  return res;
}
