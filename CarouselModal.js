import React, { Component } from "react";
import { SafeAreaView, Modal, Text, TouchableOpacity } from "react-native";
import PdpImages from "./PdpImages";
import ImageViewer from "react-native-image-zoom-viewer";

class CarouselModal extends Component {
  render() {
    return (
      <Modal visible={true} transparent={true}>
        <SafeAreaView style={{ flex: 1 }}>
          <ImageViewer
            imageUrls={PdpImages}
            onSwipeDown={this.props.swipeDown}
            enableSwipeDown
            index={this.props.index}
            backgroundColor={"white"}
            renderHeader={() => (
              <TouchableOpacity>
                <Text>Close</Text>
              </TouchableOpacity>
            )}
            renderIndicator={() => null}
          />
        </SafeAreaView>
      </Modal>
    );
  }
}

export default CarouselModal;
