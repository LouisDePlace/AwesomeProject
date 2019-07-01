import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import PdpImages from "./PdpImages";

class CarouselImages extends Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        {PdpImages.map((imageUrl, index) => (
          <TouchableOpacity
            onPress={() => this.props.handlePress(index)}
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
