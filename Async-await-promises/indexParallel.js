const { taskOne, taskTwo } =  require('./task');

async function test2() {
  try {
    console.time("Measuring...");
    const results = await Promise.all([ taskOne(), taskTwo() ]);
    console.timeEnd("Measuring...");
    console.log("Task One: ", results[0]);
    console.log("Task Two: ", results[1]);
  } catch(e) {
    console.log(e);
  }
}

test2();