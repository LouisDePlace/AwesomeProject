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
<<<<<<< HEAD
          <CarouselImages handlePress={this.props.handlePress} />
=======
          <CarouselImages
            images={this.props.images}
            togglePress={this.props.togglePress}
            setIndex={this.props.setIndex}
          />
>>>>>>> a0f9be465583bee3861a56c76993063a8904412d
        </ScrollView>
      </View>
    );
  }
}

export default CarouselObject;
