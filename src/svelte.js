const Skeleton = require('./skeleton-svelte');

const App = Skeleton();

module.exports = () => App.component.render(App.data);
