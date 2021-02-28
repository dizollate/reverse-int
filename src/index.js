module.exports = function reverse (n) {
  if (n<0) {n = n*(-1)}
  let number = n.toString().split('').reverse().join('');
  return number;
}
