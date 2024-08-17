const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 50, "bar")
);

function promiseAllSettled(promises = []) {
  let results = [];
  let pending = promises.length;

  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = {
            status: "fullfilled",
            value,
          };
        })
        .catch((err) => {
          results[index] = {
            status: "rejected",
            reason: err,
          };
        })
        .finally(() => {
          pending -= 1;
          if (pending === 0) {
            resolve(results);
          }
        });
    });
  });
}

promiseAllSettled([promise1, promise2, promise3]).then((val) =>
  console.log(val)
);
