require( 'svelte/ssr/register' );

const { count } = require('../benchmark');
const App = require('./svelte/App.html');
const items = [];

const lorem = (
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, "  +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
  "nulla pariatur. Excepteur sint occaecat cupidatat non proident" +
  "sunt in culpa qui officia deserunt mollit anim id est laborum."
);

for (var i = 0; i < count; i++) {
  items.push({
    title: `Item #${i}`,
    content: lorem,
    img: `http://lorempixel.com/${i % 2 === 0 ? 200 : 400}/${i % 3 === 0 ? 400 : 600}`,
    key: i
  });
}

module.exports = function() {
  return {
    data: {
      items,
    },
    component: App,
  };
}
