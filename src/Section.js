import React, { Component } from 'react';
import Remarkable from 'remarkable';
var md = new Remarkable({linkTarget: '_new', html: true});

class Section extends Component {
  render() {
    var style = {
    };
    var rawMarkup = { __html: md.render(this.props.text)};

    return (
      <div className="Section" id={this.props.id} style={style}>
        <div dangerouslySetInnerHTML={rawMarkup} />
      </div>
    );
  }
}

export default Section;
