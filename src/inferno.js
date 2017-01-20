import { createVNode } from 'inferno'
import { renderToString } from 'inferno-server';
import Skeleton from './skeleton-inferno'

const App = Skeleton()

module.exports = () => renderToString(
	createVNode(4, App, null, null, null, null, true)
);
