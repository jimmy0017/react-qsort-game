import React from "react";

export default class Card extends React.Component {
  render() {
    const { title,statement } = this.props;

    return (
      <div class="card col-md-2">
        <div class="card-block">
          <h4 class="card-title">{this.props.title}</h4>
          <p class="card-text">{this.props.statement}</p>
          <a href="#" class="btn btn-primary">Zoom in (later)</a>
        </div>
      </div>
    );
  }
}
