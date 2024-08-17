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
