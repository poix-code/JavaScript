const { taskOne, taskTwo } = require('./task');

async function test() {
  console.time("Measuring");
  const valueOne = await taskOne();
  const valueTwo = await taskTwo();
  console.timeEnd("Measuring");

  console.log("Task One: ", valueOne);
  console.log("Task Two: ", valueTwo);
}

test();