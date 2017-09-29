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

  constructor(props) {
    super(props);

    this.state = {sectionId: sections[0].id};
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.onScroll, 200));
  }

  onScroll = () => {
    // on scroll determine section user is in
    var scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var section;
    _.each(document.getElementsByClassName('Section'), el => {
      var {top, bottom} = el.getBoundingClientRect();
      // console.log(el.id, top, bottom, window.innerHeight)
      // bc bounding client rect gives us position relative to the viewport
      // we're in the section whose top is already visible (top >= 0)
      // but not past the window height
      if ((top >= 0 && top <= window.innerHeight) || (top <= 0 && bottom >= window.innerHeight)) {
        section = el;
      }
    });
    var sectionId = section && section.id;

    // if section is different from previous, set section
    if (sectionId && sectionId !== this.state.sectionId) {
      this.setState({sectionId});
    }
  }

  renderNav(section) {
    var activeClass = this.state.sectionId === section.id ? 'active' : '';
    var children = section.children && _.map(section.children, child => this.renderNav(child));
    return (
      <div key={section.id}>
        <a className={activeClass} href={'#' + section.id}>{section.title}</a>
        <div style={{marginLeft: 20, marginBottom: 10}}>
          {children}
        </div>
      </div>
    )
  }

  renderSection(section) {
    var text = require('./sections/' + section.id + '.md.js');
    text = text && text.default;

    return (
      <Section key={section.id} id={section.id} text={text}>
        {section.children && _.map(section.children, child => this.renderSection(child))}
      </Section>
    );
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
    var sectionEls = _.map(sections, section => this.renderSection(section));

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
