import React, { Component } from "react";
import { View, Button } from "react-native";
import TitleMessage from "./TitleMessage";
import CarouselObject from "./CarouselObject";

class Carousel extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <TitleMessage />
        <CarouselObject
          images={this.props.images}
          togglePress={this.props.togglePress}
          setIndex={this.props.setIndex}
        />
        <Button
          title="Rate the app"
          onPress={this.props.toggleModal}
          color="#000000"
        />
      </View>
    );
  }
}

export default Carousel;
