import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

class CarouselImages extends Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        {this.props.images.map(imageUrl => (
          <TouchableOpacity onPress={this.props.handlePress}>
            <Image
              key={imageUrl.url}
              source={{ uri: imageUrl.url }}
              style={styles.imageSlider}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1 / 2,
    flexDirection: "row"
  },
  imageSlider: {
    marginTop: 20,
    marginLeft: 5,
    width: 100,
    height: 100,
    borderRadius: 20,
    borderColor: "#fff"
  }
});

export default CarouselImages;
