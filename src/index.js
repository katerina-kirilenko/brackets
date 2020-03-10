module.exports = function check(str, bracketsConfig) {

  const keys = bracketsConfig.map(item => item[0]);
  const vals = bracketsConfig.map(item => item[1]);

  let mass = str.split("");
  let stack = [];

  let sum = 0;
  for (let i = 0; i < mass.length; i++) {
      if (keys.indexOf(mass[i]) + 1 && vals.indexOf(mass[i]) + 1) {
          mass.splice(i, 1, "");
          sum++;
      }
  }
  if (sum % 2 !== 0) return false;

  for (let i = 0; i < mass.length; i++) {
      const l = mass[i];

      if (keys.indexOf(l) + 1) {
          stack.push(l);
      } else {
          if (vals.indexOf(l) + 1) {
              let v = vals.indexOf(l);
              let k = keys.indexOf(stack.pop());
              if (k !== v) return false;
          }
      }
  }

  if (stack.length) {
      return false;
  }

  return true;

};
