// log the `rnd` result in the console using all three async techniques.
// You can only call console.log inside the `main` function.

const randomNumber = () => {
  return Math.random();
}

// 1. Make it wait for 1 sec. with `setTimeout` and log it on main function
const timeoutRandomNumber = (func) => {
  setTimeout(func, 1000);
}

// 2. Now wrap the timeout version to work with promises
const promiseRandomNumber = (callback) => {
  let promisedRnd = new Promise((rseolve, reject) => {
    setTimeout(callback, 1000);
  });
  promisedRnd.then(() => callback);
};

// 3. Finally, code a final version with async await.
const asyncRandomNumber = async (callback) => {
  await setTimeout(callback, 1000);
}

const rangedRandomNumber = (base, min, max) => {
  return Math.floor((base * (max - min)) + min);
}

const main = () => {
  const rnd = randomNumber()
  console.log(rangedRandomNumber(rnd, 14, 42));

  // log rnd…
  timeoutRandomNumber(() => console.log(rnd));
  promiseRandomNumber(() => console.log(rnd));
  asyncRandomNumber(() => console.log(rnd));
}

main();