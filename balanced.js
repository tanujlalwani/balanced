module.exports = function balanced(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(')');
    } else {
      let popped = stack.pop();
      if (popped !== str[i]) return false;
    }
  }

  return stack.length === 0 ? true : false;
};
