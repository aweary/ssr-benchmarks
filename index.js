
let React = require('react');
let ReactDOMServer = require('react-dom/server');
const PreactRenderToString = require('preact-render-to-string');
const { h } = require('preact');
const { perform, report, count }  = require('./benchmark');

const PreactApp = require('./preact');
const ReactApp = require('./react')(React);

perform('react', () => {
  ReactDOMServer.renderToString(
    React.createElement(ReactApp)
  );
});

React = require('preact-compat');
ReactDOMServer = require('preact-compat/server');

const PreactCompatApp = require('./react')(React);

perform('preact-compat', () => {
  ReactDOMServer.renderToString(
    React.createElement(PreactCompatApp)
  );
});

perform('preact', () => {
  PreactRenderToString(
    h(PreactApp)
  );
});

report('react');
report('preact');
report('preact-compat', true);