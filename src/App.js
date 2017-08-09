import React, { Component } from 'react';
import Section from './Section';
import _ from 'lodash';

// determines what sections to load and their order
var sectionIds = [
  'atom',
  'compound',
  'aggregate',
  'graph',
  'scale',
];

var navWidth = 200;
var padding = 20;
class App extends Component {
  render() {
    var navStyle = {
      width: navWidth,
      padding,
      position: 'fixed',
      borderRight: '1px solid',
    };
    var contentStyle = {
      marginLeft: navWidth + 2 * padding,
      padding,
    };

    var navLinks = sectionIds.map(id => {
      return (
        <div>
          <a href={'#' + id}>{_.capitalize(id)}</a>
        </div>
      )
    });
    var sections = sectionIds.map(id => {
      var text = require('./sections/' + id + '.md.js');
      text = text && text.default;

      return (<Section key={id} id={id} text={text} />)
    });
    return (
      <div className="App">
        <div id='nav' style={navStyle}>
          {navLinks}
        </div>
        <div id='content' style={contentStyle}>
          {sections}
        </div>
      </div>
    );
  }
}

export default App;
