/*
Implement a mapSeries async function in JavaScript that is similar to the Array.map()
but returns a promise that resolves on the list of output by mapping each input through an asynchronous iteratee function or rejects
it if any error occurs. The inputs are run in a sequence that is one after another.
*/

async function mapSeries(array, asyncFunction) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    try {
      const result = await new Promise((resolve, reject) => {
        asyncFunction(array[i], (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
      results.push(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return results;
}

let numPromise = mapSeries([2, 4, 6, 8, 10], function (num, callback) {
  setTimeout(() => {
    num = num * 2;
    console.log(num);
    if (num % 2 === 0) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 200);
});

numPromise
  .then((result) => console.log("success" + result))
  .catch(() => console.log("no success"));
