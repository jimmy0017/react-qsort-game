import React from "react";

export default class Space extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="card col-md-4">
        <div class="card-block">
          <h4 class="card-title">{this.props.title}</h4>
        </div>
      </div>
    );
  }
}
