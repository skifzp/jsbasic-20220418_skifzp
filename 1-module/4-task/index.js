function checkSpam(str) {
  if (typeof (str) === "string") {
    let s = str.toUpperCase();
    if (s.includes("1XBET") || s.includes("XXX")) {
      return true;
    }
  }
  return false;
}
