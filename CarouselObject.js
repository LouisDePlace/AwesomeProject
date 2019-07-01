import React, { Component } from "react";
import { View, Dimensions, ScrollView } from "react-native";
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
          <CarouselImages
            images={this.props.images}
            handlePress={this.props.handlePress}
          />
        </ScrollView>
      </View>
    );
  }
}

export default CarouselObject;
