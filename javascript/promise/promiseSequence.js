// execute asyn task in sequence

// approach 1
// for of loop allow using await keyword performing the next iteration only when the previous one is finished

const asynceSequenceTasks = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
};

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

asynceSequenceTasks(promises);
