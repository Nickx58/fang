function debounce(callback, delay) {
  let timer;

  return function (...args) {
    let context = this;

    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}
