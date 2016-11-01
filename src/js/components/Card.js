import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const cardSource = {
  beginDrag(props) {
    return {
      title: props.title,
      statement: props.statement,
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Card extends React.Component {
  render() {
    // const { title,statement } = this.props;
    const squareStyle = {
      float:'left',
      position: 'relative',
      width: '9%',
      paddingBottom : '9%', /* = width for a 1:1 aspect ratio */
      margin :'.3%',
      backgroundColor:'#FFFFFF',
      overflow :'hidden',
      borderStyle: 'solid',
    };
    const contentStyle = {
      position:'absolute',
      height: '90%', /* = 100% - 2*5% padding */
      width: '90%', /* = 100% - 2*5% padding */
      padding: '5%',
    };
    const textStyle = {
      fontSize: '9px'
    };
    const textTitleStyle = {
      fontSize: '12px'
    };

    return (
      <div class="square" style={squareStyle}>
          <div class="content" style={contentStyle}>
              <label style={textTitleStyle}>{this.props.title}</label>
              <p style={textStyle}>{this.props.statement}</p>
          </div>
      </div>
    );
  }
}

Card.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
