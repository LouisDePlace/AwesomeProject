import React, { Component } from "react";
import { View, Modal } from "react-native";
import images from "./images";
import ImageViewer from "react-native-image-zoom-viewer";

class CarouselModal extends Component {
  render() {
    return (
      <View>
        <Modal visible={true} transparent={true}>
          <ImageViewer
            imageUrls={images}
            onSwipeDown={this.props.swipeDown}
            enableSwipeDown
            index={this.props.index}
            backgroundColor={"white"}
          />
        </Modal>
      </View>
    );
  }
}

export default CarouselModal;
