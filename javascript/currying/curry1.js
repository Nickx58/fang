// sum(1,2,3,4)
// const res = sum(1, 2, 3, 4);
// const res2 = sum(1)(2)(3)(4);
// const res3 = sum(1, 2)(3, 4);
// const res4 = sum(1, 2, 3)(4);
// const res5 = sum(1)(2, 3, 4);
// it can take the four argument and call the sum when reach the limit;

function curry(...args) {
  let storage = [...args];
  if (storage.length === 4) {
    return storage.reduce((a, b) => a + b, 0);
  } else {
    function temp(...args2) {
      storage.push(...args2);

      if (storage.length === 4) {
        return storage.reduce((a, b) => a + b, 0);
      } else {
        return temp;
      }
    }
    return temp;
  }
}
