import React, { Component } from "react";
import { View } from "react-native";
import TitleMessage from "./TitleMessage";
import CarouselObject from "./CarouselObject";
import CarouselModal from "./CarouselModal";

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
    console.log(index);
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
          />
        ) : (
          <View style={{ flex: 1, height: "100%", width: "100%" }}>
            <TitleMessage />
            <CarouselObject handlePress={this.handlePress} />
          </View>
        )}
      </>
    );
  }
}
export default FrontPage;
