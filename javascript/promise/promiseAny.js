function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let pending = promises.length;

    let errors = [];

    promises.forEach(async (item, index) => {
      try {
        const result = await item;
        resolve(result);
      } catch (error) {
        errors[index] = error;
        pending--;

        if (pending === 0) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}

{
  function myPromiseAny(promises = []) {
    return new Promise((resolve, reject) => {
      let pending = promises.length;
      let errors = [];

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            resolve(value);
          })
          .catch((err) => {
            errors[index] = err;
            pending--;

            if (pending === 0) {
              reject(new AggregateError(errors));
            }
          });
      });
    });
  }
}
