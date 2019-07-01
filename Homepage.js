import React, { Component } from "react";
import { View } from "react-native";
import TitleMessage from "./TitleMessage";
import CarouselObject from "./CarouselObject";

class Homepage extends Component {
  render() {
    return (
      <View style={{ flex: 1, height: "100%", width: "100%" }}>
        <TitleMessage />
        <CarouselObject handlePress={this.props.handlePress} />
      </View>
    );
  }
}
export default Homepage;
