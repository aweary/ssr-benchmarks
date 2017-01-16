import { createElement, Component } from 'react';
import { renderToString } from 'react-dom/server';
import Skeleton from './skeleton';

const App = Skeleton(createElement, Component);

module.exports = () => renderToString(
  createElement(App)
);