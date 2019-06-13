import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import CarouselImages from "./CarouselImages";

const { width } = Dimensions.get("window");
const height = width * 0.8;

class CarouselObject extends Component {
  render() {
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <CarouselImages />
        </ScrollView>
      </View>
    );
  }
}

export default CarouselObject;
