import { createVNode } from 'inferno'
import { createElement, Component } from 'inferno-compat';
import { renderToString } from 'inferno-server';
import Skeleton from './skeleton'

const App = Skeleton(createElement, Component)

module.exports = () => renderToString(
	createElement(App)
);