import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import PdpImages from "./PdpImages";

class CarouselImages extends Component {
  handlePress = index => {
    this.props.togglePress();
    this.props.setIndex(index);
  };

  render() {
    return (
      <View style={styles.imageContainer}>
<<<<<<< HEAD
        {PdpImages.map((imageUrl, index) => (
          <TouchableOpacity
            onPress={() => this.props.handlePress(index)}
=======
        {this.props.images.map((imageUrl, index) => (
          <TouchableOpacity
            onPress={() => this.handlePress(index)}
>>>>>>> a0f9be465583bee3861a56c76993063a8904412d
            key={imageUrl.url}
          >
            <Image source={{ uri: imageUrl.url }} style={styles.imageSlider} />
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
