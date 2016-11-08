import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

import {ItemTypes} from './ItemTypes';
import Space from './Space';
import Card from "./Card";

import update from 'react/lib/update';

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
        { id: 1, title:'Q1',statement:'Leaders get diverse groups to work together toward a common goal.',location_id: null },
        { id: 2, title:'Q2',statement:'Leaders are born with certain leadership traits.', location_id:null},
      ],
      droppedCardNames: []
    };
  }

  // isDropped(index,item) {
  //     console.log("Isdropped:");
  //     console.log(item);
  //     console.log(index);
  //    return this.state.cards[index].location_id = item.index - 3;
  // }

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
                  // didDrop={this.isDropped(index, this)}
                  key={index} />
          )}
        </div>
      </div>

    );
  }

  handleDrop(index, item) {
    console.log("Handle Drop");
    console.log(item);
    console.log(index);
    this.setState(update(this.state, {
      spaces: {
        [index]: {
          lastDroppedItem: {
            $set: item
          }
        }
      },
      // cards: {
        // [key]:{
          // location_id: index-3
        // }
      // },
    }));
  }
}

export default DragDropContext(HTML5Backend)(FirstStep);
