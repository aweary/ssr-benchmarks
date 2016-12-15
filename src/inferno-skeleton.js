"use strict";

const { count } = require('../benchmark');
const { createVNode } = require('inferno');
const Component = require('inferno-component');

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
  const TitleWrapper = ({ title }) => {
    return createVNode(66,
      'div',
      { style: { border: '10px solid green', color: '#FFDDAA', padding: '10px' }}, [
      createVNode(2,
        'div',
        { className: 'dididididid' },
        "FKSDJFLSDJFDLSKFJDSLKFJSLKDFJLSDKFJ",
        null,
        null,
        true
      ),
      createVNode(4, Title, { title: title }, null, null, null, null, true)
    ], null, null, null, true)
  }

  class Title extends Component {
    render() {
      return (
        createVNode(2,
          'div',
          {className: 'title', onClick: () => {}},
          createVNode(2, 'h1', null, this.props.title, null, null, null, true),
          null,
          null,
          null,
          true
        )
      )
    }
  }

  const ItemSectionGroupWrapper  = ({ content, children }) => {
    return createVNode(66,
      'div',
      { style: { backgroundColor: 'lightblue', border: '1px solid #FF44AA'} }, [
      createVNode(2, 'h2', { className: 'wrapper-tile'}, Math.random() + "wrapper title", null, null, null, true),
      createVNode(2,
        'p',
        { style: {fontSize: 15, color: 'red'} },
        createVNode(4, ItemSectionGroup, { children: children }, null, null, null, null, true)
      , null, null, null, true)
    ], null, null, null, true)
  }

  class ItemSectionGroup extends Component {

    constructor() {
      super();
      this.state = {
        aboutToMount: false
      }
    }

    componentWillMount() {
      this.setState({ aboutToMount: true })
    }

    render() {
      return (
        createVNode(2,
          'div',
          { className: 'really-long-and-stupid-class-name'},
          this.props.children,
          null,
          null,
          null,
          true
        )
      )
    }
  }

  const ItemSectionDescription = () => {
    return createVNode(2,
      'div',
      null,
      createVNode(2,
        'p',
        null,
        "This is a description for a section blah blah blah",
        null,
        null,
        null,
        true
      )
    , null, null, null, true)
  }

  class ItemSection extends Component {

    constructor(props) {
      super(props);
      this.state = {
        even: props.id % 2 === 0
      }
    }

    componentWillMount() {
      if (this.state.even) {
        this.setState({ showEven: true });
      }
    }
    render() {
      return (
        createVNode(66,
          'div',
          null, [
          this.state.showEven && createVNode(66, 'h3', null, "This item section is even", null, null, null, true),
          createVNode(2,
            'div',
            { id: 'item-section' + this.props.id, style: { fontWeight: 300, margin: '10px 20px'} },
            this.props.children,
            null,
            null,
            null,
            true
          ),
          createVNode(8, ItemSectionDescription, null, null, null, null, null, true)
        ], null, null, null, true)
      )
    }
  }

  const ImageDescription = ({ content }) => {
    return (
      createVNode(2,
        'span',
        null,
        content,
        null,
        null,
        null,
        true
      )
    )
  }

  const Image = ({src}) => {
    return (
      createVNode(66,
        'div',
        null, [
        createVNode(2, 'img', { 'data-img': src, src }, null, null, null, null, true),
        createVNode(8, ImageDescription, { content: Math.random() + "-content" }, null, null, null, null, true)
      ], null, null, true)
    );
  }

  const Item = ({ title, content, img }) => {
    const todos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
      return createVNode(2, 'li', { id: `todo-${i}`}, i, null, null, null, true);
    });
    return createVNode(66,
      'div',
      { className: "item" }, [
      createVNode(8, TitleWrapper, { title }, null, null, null, null, true),
      createVNode(2, 'p', {className: "item-content"}, content, null, null, null, true),
      createVNode(8, Image, { src: img }, null, null, null, null, true),
      createVNode(66, 'ul', { className: 'list'}, todos, null, null, null, true)
    ], null, null, null, true)
  }

  const RichItemSubTitleWrapper = ({ children }) => {
    return createVNode(2,
      'div',
      { style: { width: 200, height: 200, overflow: 'scroll'} },
      createVNode(2, 'h2', null, children, null, null, null, true)
    , null, null, null, true)
  }

  class RichItemSubtitle extends Component {
    render() {
      return createVNode(2,
        'div',
        { style: { fontSize: 20, id: this.props.id }},
        createVNode(8,
          RichItemSubTitleWrapper,
          { children: this.props.children }
        , null, null, null, null, true)
      , null, null, null, true)
    }
  }

  const RichItem = ({ title, content, img }) => {
    return createVNode(2,
      'div',
      { className: `item-${title}`},
      createVNode(66,
        'div',
        { id: title + Math.random() }, [
        createVNode(2, 
          'h2',
          null,
          title,
          null,
          null,
          null,
          true
        ),
        createVNode(4,
          RichItemSubtitle,
          { id: Math.random() },
          "Subtitle - " + Math.random(),
          null,
          null,
          null,
          true
        ),
        createVNode(2,
          'p',
          { id: `p-${title}` },
          content,
          null,
          null,
          null,
          true
        )
      ], null, null, null, true)
    , null, null, null, true)
  }

  return class App extends Component {
    render() {
      const renderedItems = items.map((item, i) => {
        const el = i % 2 === 0
          ? createVNode(8, Item, item, null, null, null , null, true)
          : createVNode(8, RichItem, item, null, null, null, null, true);
        const section = createVNode(4, ItemSection, { id: i, children: el }, null, null, null, null, true);
        const group = createVNode(4, ItemSectionGroup, { children: section }, null, null, null, null, true);
        return createVNode(8, ItemSectionGroupWrapper, { children: group }, null, null, null, null, true);
      });
      return (
        createVNode(66,
          "div",
          { className: 'app' },
          renderedItems,
          null,
          null,
          null,
          true
        )
      );
    }
  }
}