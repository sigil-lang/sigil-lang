import React, { Component } from 'react';
import Section from './Section';
import _ from 'lodash';

// determines what sections to load and their order
var sections = [
  {
    id: 'atom', title: 'Atomic Units',
    children: [
      {id: 'atom-node', title: 'Node'},
      {id: 'atom-relationship', title: 'Relationship'}
    ],
  },
  {
    id: 'aggregate', title: 'Aggregate Nodes',
  },
  {
    id: 'compound', title: 'Compound Units',
  },
  // {
  //   id: 'sections', title: 'Sections',
  // },
  // {
  //   id: 'appendix', title: 'Appendix',
  // }
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

    var navLinks = _.map(sections, section => {
      return (
        <div>
          <a href={'#' + section.id}>{section.title}</a>
          <ul>
            {_.map(section.children, section =>
              <li><a href={'#' + section.id}>{section.title}</a></li>)}
          </ul>
        </div>
      )
    });

    var sectionEls = _.chain(sections)
      .reduce((array, section) => {
        array.push(section);
        // and also push in children
        _.each(section.children, section => array.push(section));
        return array;
      }, []).map(section => {
        var text = require('./sections/' + section.id + '.md.js');
        text = text && text.default;

        return (<Section key={section.id} id={section.id} text={text} />);
      }).value();

    return (
      <div className="App">
        <div id='nav' style={navStyle}>
          {navLinks}
        </div>
        <div id='content' style={contentStyle}>
          {sectionEls}
        </div>
      </div>
    );
  }
}

export default App;
