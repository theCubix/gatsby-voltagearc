import React from 'react';
import {Component} from 'react';

class Heading extends React.Component {
  TrimString(string) {
    return string.charAt(0);
  };
  render() {
    return (
      <div className="heading__wrapper">
        <h1 className="heading heading--level-1 heading--margin-top-large z-1">{this.props.title}</h1>
        <span className="heading heading--letter">{this.TrimString(this.props.title)}</span>
      </div>
    );
  }
};

export default Heading;