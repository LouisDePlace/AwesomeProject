import React, { Component } from "react";
import { View, Button, Modal } from "react-native";
//  import ImageViewer from "react-native-image-zoom-viewer";
// import PhotoView from "react-native-photo-view";
import PhotoView from "@merryjs/photo-viewer";

class CarouselModal extends Component {
  render() {
    return (
      <Modal visible={this.props.pressed} transparent={true}>
        {/*    <ImageViewer
           imageUrls={this.props.images}
           onSwipeDown={this.props.swipeDown}
           enableSwipeDown
           index={this.props.index}
           renderHeader={() => (
             <View style={{ flexDirection: "row", marginTop: 50 }}>
               <View style={{ flex: 1 }} />
               <Button title="Close" onPress={this.props.togglePress} />
             </View>
           )}
         /> */}
        <PhotoView
          source={{ uri: "https://dummyimage.com/16:9x1080/" }}
          style={{ flex: 1 }}
        />
        ;
      </Modal>
    );
  }
}

export default CarouselModal;
