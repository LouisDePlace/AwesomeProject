import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

class CarouselImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          uri:
            "/Users/lde-place/Master/Native project/Photos/landscape-photography-at-every-hour-part-ii-photographing-landscapes-in-rain-or-shine-683x390.jpg"
        },
        {
          uri:
            "/Users/lde-place/Master/Native project/Photos/Key-Summit-walk.jpg"
        },
        {
          uri:
            "/Users/lde-place/Master/Native project/Photos/1126885451_be2eff2eeb_b.jpg"
        },
        {
          uri:
            "/Users/lde-place/Master/Native project/Photos/Lake_Matheson_Morning_xlarge.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.imageContainer}>
        {this.state.images.map(imageUri => (
          <Image
            key={imageUri.uri}
            source={{ uri: imageUri.uri }}
            style={styles.imageSlider}
            onPress={() => {
              <ImagePress />;
            }}
          />
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
