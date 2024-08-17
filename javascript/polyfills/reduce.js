Array.prototype.myReduce = function (callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no inital value");
  }
  const hasInitialValue = initialValue !== undefined;
  const value = hasInitialValue ? initialValue : this[0];
  let index = hasInitialValue ? 0 : 1;
  let acc = value;
  for (; index < this.length; index++) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
};
