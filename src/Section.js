import React, { Component } from 'react';
import Remarkable from 'remarkable';
var md = new Remarkable({linkTarget: '_new', html: true});

class Section extends Component {
  render() {
    var rawMarkup = { __html: md.render(this.props.text)};

    return (
      <div className="Section" id={this.props.id}>
        <div dangerouslySetInnerHTML={rawMarkup} />
      </div>
    );
  }
}

export default Section;
