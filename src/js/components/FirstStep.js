import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

import {ItemTypes} from './ItemTypes';
import Space from './Space';
import Card from "./Card";

class FirstStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: [
        { title: "Disagree", accepts: [ItemTypes.CARD],  lastDroppedItem: null },//accepts: [ItemTypes.CARD],
        { title: "Neutral",accepts: [ItemTypes.CARD], lastDroppedItem: null }, // accepts: [ItemTypes.CARD],
        { title: "Agree", accepts: [ ItemTypes.CARD, NativeTypes.URL], lastDroppedItem: null },
      ],
      cards: [
        { title:'Q1',statement:'Leaders get diverse groups to work together toward a common goal.' },
        { title:'Q2',statement:'Leaders are born with certain leadership traits.'},
      ],
      droppedBoxNames: []
    };
  }

  isDropped(cardName) {
    // return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {

    const { spaces, cards } = this.state;
    return (
      <div>
        <div class="row">
          {spaces.map(({ title, accepts, lastDroppedItem }, index) =>
            <Space  title={title}
                     accepts={accepts}
                     lastDroppedItem={lastDroppedItem}
                     onDrop={(item) => this.handleDrop(index, item)}
                     key={index} />
          )}
        </div>
        <div class="row">
          {cards.map(({ title,statement, type }, index) =>
            <Card title={title}
                  statement={statement}
                  type={type}
                  isDropped={this.isDropped(name)}
                  key={index} />
          )}
        </div>
      </div>

    );
  }
}

export default DragDropContext(HTML5Backend)(FirstStep);
