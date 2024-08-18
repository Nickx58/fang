async function promiseParallel(promises = []) {
  try {
    const results = await Promise.all(promises.map((task) => task()));
    return results;
  } catch (error) {
    return error;
  }
}

async function task1() {
  // Simulate asynchronous operation
  return new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000));
}

async function task2() {
  // Simulate asynchronous operation
  return new Promise((resolve) => setTimeout(() => resolve("Task 2"), 2000));
}

async function task3() {
  // Simulate asynchronous operation
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Task 3"), 500)
  );
}

promiseParallel([task1, task2, task3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
