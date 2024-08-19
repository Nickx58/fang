// Implement a function in JavaScript that retries promises N number of
// times with a delay between each call.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retryPromise(promiseFunction, retries, delayTime) {
  let attempt = 0;

  while (attempt < retries) {
    try {
      return await promiseFunction();
    } catch (error) {
      attempt++;
      if (attempt === retries) {
        throw error;
      }
      await delay(delayTime);
    }
  }
}

function unreliableFunction() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7; // 30% chance to succeed
    if (success) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
}

retryPromise(unreliableFunction, 5, 100)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
