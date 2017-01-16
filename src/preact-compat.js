import { createElement, Component } from 'preact-compat';
import { renderToString } from 'preact-compat/server';
import Skeleton from './skeleton'

const App = Skeleton(createElement, Component)

module.exports = () => renderToString(
	createElement(App)
);