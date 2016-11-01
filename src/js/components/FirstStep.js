import React, { Component, PropTypes } from 'react';
import Space from './Space';

export default class FirstStep extends Component {
  render() {
    const Spaces = [
      "Disagree",
      "Neutral",
      "Agree",
    ].map((title, i) => <Space key={i} title={title}/> );

    return (
      <div class="row">
          {Spaces}
      </div>
    );
  }
}
