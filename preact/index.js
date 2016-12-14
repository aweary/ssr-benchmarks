const { h, Component } = require('preact');
const { count } = require('../benchmark');

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
    img: `foo-${i}.jpg`,
    key: i
  });
}

const Item = ({ title, content, img }) => {
  return h(
    'div',
    { className: "item" },
    h('p', {className: "item-content"}, content),
    h('img', { src: img })
  )
}

const RichItem = ({ title, content, img }) => {
  return h(
    'div',
    { className: `item-${title}`},
    h(
      'div',
      { id: title + Math.random() },
      h(
        'h2',
        null,
        title
      ),
      h(
        'h3',
        { className: 'title' },
        "Subtitle - " + Math.random()
      ),
      h(
        'p',
        { id: `p-${title}` },
        content
      )
    )
  )
}

module.exports = class App extends Component {
  render() {
    const renderedItems = items.map((item, i) => {
      return i % 2 === 0
        ? h(Item, item)
        : h(RichItem, item);
    });
    return (
      h("div", { className: 'app' }, renderedItems)
    );
  }
}