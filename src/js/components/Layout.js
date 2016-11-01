import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import FirstStep from "./FirstStep";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      statement: "test",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div class="container">
          <div class="row">
            <FirstStep />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
