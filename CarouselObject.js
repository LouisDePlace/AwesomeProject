import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import CarouselImages from "./CarouselImages";

class CarouselObject extends Component {
  render() {
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <CarouselImages handlePress={this.props.handlePress} />
        </ScrollView>
      </View>
    );
  }
}

export default CarouselObject;
