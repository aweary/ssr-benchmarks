import { h, Component } from 'preact'
import renderToString from 'preact-render-to-string';
import Skeleton from './skeleton'

const App = Skeleton(h, Component)

module.exports = () => renderToString(
	h(App)
);