import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">Q-sort Game Online</a>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
        </ul>
      </nav>
    );
  }
}
