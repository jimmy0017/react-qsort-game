import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


import Space from './Space';
import Card from "./Card";

class FirstStep extends Component {
  render() {
    const Spaces = [
      "Disagree",
      "Neutral",
      "Agree",
    ].map((title, i) => <Space key={i} title={title}/> );

    const Cards = [
      {title:'Q1',statement:'Leaders get diverse groups to work together toward a common goal.'},
      {title:'Q2',statement:'Leaders are born with certain leadership traits.'},
    ].map((card, i) => <Card key={i} title={card.title} statement={card.statement}/> );

    return (
      <div>
        <div class="row">
            {Spaces}
        </div>
        <div class="row">
          {Cards}
        </div>
      </div>

    );
  }
}

export default DragDropContext(HTML5Backend)(FirstStep);
