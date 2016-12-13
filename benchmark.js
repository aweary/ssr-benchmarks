const timings = {};

const iterations = 20;

const perform = (target, fn) => {

  // Warn the cache
  for (var i = 0; i < 50; i++) {
    fn();
  }
  for (var i = 0; i < iterations; i++) {
    const start = Date.now();
    fn();
    const time = Date.now() - start;
    timings[target]
      ? timings[target].push(time)
      : timings[target] = [time];
  }
}

const report = (target) => {
  const rawTimes = timings[target];
  const sum = rawTimes.reduce((a, b) => a + b);
  const average = sum / rawTimes.length;
  console.log(
    `Average time for ${target} over ${iterations} renders was ${average}ms`
  );
}

module.exports = { perform, report }