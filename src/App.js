import React, { Component } from 'react';
import Section from './Section';
import _ from 'lodash';

// determines what sections to load and their order
var sections = [
  {
    id: 'intro', title: 'Introduction',
    children: [
      {id: 'intro-scale', title: 'Scale'},
    ],
  },
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
    children: [
      {id: 'compound-paths', title: 'Paths'},
      {id: 'compound-clusters', title: 'Clusters'},
      {id: 'compound-bundles', title: 'Bundles'},
    ],
  },
  {
    id: 'sections', title: 'Sections',
  },
  {
    id: 'appendix', title: 'Appendix',
  }
];

var navWidth = 250;
var padding = 40;
var blue = '#206ca9';

class App extends Component {

  renderNav(section) {
    var children = section.children && _.map(section.children, child => this.renderNav(child));
    return (
      <div key={section.id}>
        <a href={'#' + section.id}>{section.title}</a>
        <div style={{marginLeft: 20, marginBottom: 10}}>
          {children}
        </div>
      </div>
    )
  }

  render() {
    var navStyle = {
      width: navWidth,
      padding,
    };
    var contentStyle = {
      marginLeft: navWidth + 2 * padding,
      padding,
    };

    var navLinks = _.map(sections, section => this.renderNav(section));

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
          <h1>Sigil</h1>
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
