const Table = require('cli-table');

const timings = {};

const iterations = 100;
const count = 1500;

const ms = time => `${time}ms`

const perform = (target, fn) => {

  // Warn the cache
  for (var i = 0; i < 5; i++) {
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

const table = new Table({
  head: ['Library', 'Average', 'Mean', 'Min', 'Max'],
});

const report = (target, log) => {
  const times = timings[target].sort((a, b) => {
    if (a === b) return 0;
    return a > b ? 1 : -1;
  });
  const sum = times.reduce((a, b) => a + b);
  const average = sum / times.length;
  const end = times.length - 1;
  const mid = Math.round(times.length / 2);
  table.push(
    [target, ms(average), ms(times[mid]), ms(times[0]), ms(times[end])]
  );
  if (log) {
    console.log(`Rendering ${count} components ${iterations} times.`);
    console.log(table.toString());
  }
}

module.exports = { perform, report, count }