import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

import {ItemTypes} from './ItemTypes';
import Space from './Space';
import Card from "./Card";

import update from 'react/lib/update';

import { connect } from "react-redux";
// import { fetchStatement } from "../actions/statementsActions";
import {toggleLocation,fetchLocationNullStatement} from "../../actions/index";

@connect((store) => {
  return {
    cards: store.statements,
  };
})

class FirstStep extends Component {
  componentWillMount() {
    this.props.dispatch(fetchLocationNullStatement())
    console.log("Run first step")
    // console.log(cards)
  }

  constructor(props) {
    super(props);
    this.state = {
      spaces: [
        { title: "Disagree", accepts: [ItemTypes.CARD],  lastDroppedItem: null },//accepts: [ItemTypes.CARD],
        { title: "Neutral",accepts: [ItemTypes.CARD], lastDroppedItem: null }, // accepts: [ItemTypes.CARD],
        { title: "Agree", accepts: [ ItemTypes.CARD, NativeTypes.URL], lastDroppedItem: null },
      ],
      // cards: [
      //   { title:'Q1',statement:'Leaders get diverse groups to work together toward a common goal.' },
      //   { title:'Q2',statement:'Leaders are born with certain leadership traits.'},
      // ],
      // droppedCardNames: []
    };
  }

  // isDropped(cardName) {
  //    return this.state.droppedCardNames.indexOf(cardName) > -1;
  // }

  render() {

    const { spaces } = this.state;
    const { cards } = this.props;
    // console.log(cards)
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
          {cards.filter(t => t.location_id ==null).map(({ title,statement, type }, index) =>
            <Card title={title}
                  statement={statement}
                  type={type}
                  // isDropped={this.isDropped(name)}
                  key={index} />
          )}
        </div>
      </div>

    );
  }

  handleDrop(index, item) {
    const { title } = item;
    console.log("index:"+index);
    console.log("item:"+item);

    this.setState(update(this.state, {
      spaces: {
        [index]: {
          lastDroppedItem: {
            $set: item
          }
        }
      },
    }));
    this.props.dispatch(toggleLocation(item.index,index-3));
  }
}

export default DragDropContext(HTML5Backend)(FirstStep);
