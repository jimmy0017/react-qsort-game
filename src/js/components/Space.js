import React, { PropTypes, Component } from 'react';
// import { ItemTypes } from './ItemTypes';
import { DropTarget } from 'react-dnd';
import Card from "./Card";

const squareStyle = {
  float:'left',
  position: 'relative',
  width: '25%',
  paddingBottom : '20%', /* = width for a 1:1 aspect ratio */
  margin :'1.66%',
  backgroundColor:'#FFFFFF',
  overflow :'hidden',
  borderStyle: 'dashed',
};
const contentStyle = {
  position:'absolute',
  height: '90%', /* = 100% - 2*5% padding */
  width: '90%', /* = 100% - 2*5% padding */
  padding: '5%',
};

const insideSquareStyle = {
  float:'left',
  position: 'relative',
  width: '70%',
  paddingBottom : '50%', /* = width for a 1:1 aspect ratio */
  margin :'.3%',
  backgroundColor:'#FFFFFF',
  overflow :'hidden',
  borderStyle: 'solid',
};
const insideContentStyle = {
  position:'absolute',
  height: '90%', /* = 100% - 2*5% padding */
  width: '90%', /* = 100% - 2*5% padding */
  padding: '5%',
};
const insideTextStyle = {
  fontSize: '14px'
};
const insideTextTitleStyle = {
  fontSize: '18px'
};

const spaceTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Space extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired
  };

  render() {
    const { title, accepts, isOver, canDrop, connectDropTarget, lastDroppedItem } = this.props;
    const isActive = isOver && canDrop;

    return connectDropTarget(
      <div class="square" style={squareStyle}>
          <div class="content" style={contentStyle}>
              <h4>{title}</h4>
              {isActive ?
                 'Release to drop' :
                //  'This space accepts: ' + accepts.join(', ')
                 'Drop statement here'
              }

              {lastDroppedItem &&
                <div>
                  {/* <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p> */}
                  {/* <Card title={lastDroppedItem.title}
                        statement={lastDroppedItem.statement}
                       /> */}
                   <div class="square" style={insideSquareStyle}>
                       <div class="content" style={insideContentStyle}>
                           <label style={insideTextTitleStyle}>{lastDroppedItem.title}</label>
                           <p style={insideTextStyle}>{lastDroppedItem.statement}</p>
                       </div>
                   </div>
                </div>
              }
          </div>
      </div>
    );
  }
}

export default DropTarget(props => props.accepts, spaceTarget, collect)(Space);
