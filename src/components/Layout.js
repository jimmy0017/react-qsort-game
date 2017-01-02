import React from "react";

import Footer from "./containers/Footer";
import Header from "./containers/Header";
import FirstStep from "./containers/FirstStep";

export default class Layout extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Header  />
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

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>
