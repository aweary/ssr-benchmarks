let React = require('react')
const ReactProd = require('react/dist/react.min')
const Module = module.constructor;
Module._cache[require.resolve('react')] = ReactProd
React = ReactProd
let ReactDOMServer = require('react-dom/server')
const { perform, report }  = require('./benchmark')

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

for (var i = 0; i < 2500; i++) {
  items.push({
    title: `Item #${i}`,
    content: lorem,
    img: `foo-${i}.jpg`,
    key: i
  });
}

const Item = ({ title, content, img }) => {
  return React.createElement(
    'div',
    { className: "item" },
    React.createElement('p', {className: "item-content"}, content),
    React.createElement('img', { src: img })
  )
}

const RichItem = ({ title, content, img }) => {
  return React.createElement(
    'div',
    { className: `item-${title}`},
    React.createElement(
      'div',
      { id: title + Math.random() },
      React.createElement(
        'h2',
        null,
        title
      ),
      React.createElement(
        'h3',
        { className: 'title' },
        "Subtitle - " + Math.random()
      ),
      React.createElement(
        'p',
        { id: `p-${title}` },
        content
      )
    )
  )
}

class App extends React.Component {
  render() {
    const renderedItems = items.map((item, i) => {
      return i % 2 === 0
        ? React.createElement(Item, item)
        : React.createElement(RichItem, item);
    });
    return (
      React.createElement("div", { className: 'app' }, renderedItems)
    )
  }
}

perform('react', () => {
  ReactDOMServer.renderToString(
    React.createElement(App)
  );
})

React = require('preact-compat/dist/preact-compat.min')
ReactDOMServer = require('preact-compat/server')

perform('preact', () => {
  ReactDOMServer.renderToString(
    React.createElement(App)
  );
})

report('react');
report('preact', true);
