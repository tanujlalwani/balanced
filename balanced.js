module.exports = function balanced(str) {
  let stack = [];
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(brackets[str[i]]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      let popped = stack.pop();
      if (popped !== str[i]) return false;
    }
  }

  return stack.length === 0 ? true : false;
};
