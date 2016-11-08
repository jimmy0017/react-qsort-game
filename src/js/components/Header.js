import React from "react";


export default class Header extends React.Component {

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
