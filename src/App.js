import React, { Component } from 'react';
import Section from './Section';
import _ from 'lodash';
import isMobile from 'ismobilejs';

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

    this.state = {sectionId: sections[0].id, navOpen: !isMobile.phone};
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.onScroll, 200));

    // shift down the content to make room for nav header if in phone
    if (isMobile.phone) {
      document.getElementById('content').style['padding-top'] = `${document.getElementById('nav').offsetHeight}px`;
    }
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

  toggleNav = () => {
    this.setState({navOpen: !this.state.navOpen});
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
      height: '100%',
      padding,
    };
    var contentStyle = {
      marginLeft: navWidth + 2 * padding,
      padding,
    };

    var menuButton = null;
    var navLinks = _.map(sections, section => this.renderNav(section));
    var sectionEls = _.map(sections, section => this.renderSection(section));

    if (isMobile.phone) {
      navStyle.width = window.innerWidth - 2 * padding;
      navStyle.paddingTop = 0; // so that header isn't so far down
      navStyle.height = null;
      navStyle.maxHeight = window.innerHeight - padding;

      contentStyle.marginLeft = 0;
      contentStyle.padding /= 2;
      contentStyle.width = window.innerWidth - padding;

      menuButton = (
        <span style={{float: 'right'}} onClick={this.toggleNav}>
          {this.state.navOpen ? '✕' : '☰'}
        </span>
      );

      // if navigation isn't open
      if (!this.state.navOpen) {
        navLinks = null;
        navStyle.paddingBottom = 0;
      }
    }

    return (
      <div className="App">
        <div id='nav' style={navStyle}>
          <h1>Sigil {menuButton}</h1>
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
