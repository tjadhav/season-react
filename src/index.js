import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  // componentDidUpdate() {
  //   console.log("Component Updated");
  // }

  // componentWillUnmount() {
  //   console.log("Compononet will be unmount");
  // }

  getRenderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }
  render() {
    return <div className="container">{this.getRenderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
