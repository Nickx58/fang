// accepting a func

const sum = (a, b, c, d) => a + b + c + d;

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

let cu = curry(sum);
console.log(cu(10, 20, 30, 40));
console.log(cu(10)(20, 30)(40));
