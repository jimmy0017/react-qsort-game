import React from "react";

export default class Space extends React.Component {
  render() {
    const { title } = this.props;
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

    return (
      <div class="square" style={squareStyle}>
          <div class="content" style={contentStyle}>
              <h4>{title}</h4>
          </div>
      </div>
    );
  }
}
