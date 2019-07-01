import React, { Component } from "react";
import { View } from "react-native";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

class CarouselModal extends Component {
  render() {
    return (
      <View>
        <Modal visible={true} transparent={true}>
          <ImageViewer
            imageUrls={this.props.images}
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
