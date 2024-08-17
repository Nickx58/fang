function promiseRace(promises = []) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return;
    }

    promises.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
}
