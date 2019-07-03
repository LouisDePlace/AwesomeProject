import React, { Component } from "react";
import CarouselModal from "./CarouselModal";
import Homepage from "./Homepage";

class FrontPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      index: 0
    };
  }

  handlePress = index => {
    this.setState({ pressed: true, index });
  };

  swipeDown = () => {
    this.setState({ pressed: false });
  };

  render() {
    return (
      <>
        {this.state.pressed ? (
          <CarouselModal
            swipeDown={this.swipeDown}
            pressed={this.state.pressed}
            index={this.state.index}
            handlePress={this.handlePress}
          />
        ) : (
          <Homepage handlePress={this.handlePress} />
        )}
      </>
    );
  }
}
export default FrontPage;
