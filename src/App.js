import React, { Component } from 'react';
import Section from './Section';

// determines what sections to load and their order
var sectionIds = [
  'atom',
  'compound',
  'aggregate',
  'graph',
  'scale',
];

class App extends Component {
  render() {
    var sections = sectionIds.map(id => {
      var text = require('./sections/' + id + '.md.js');
      text = text && text.default;

      return (<Section key={id} id={id} text={text} />)
    });
    return (
      <div className="App">
        {sections}
      </div>
    );
  }
}

export default App;
