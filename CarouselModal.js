import React, { Component } from "react";
import {
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet
} from "react-native";
import PdpImages from "./PdpImages";
import ImageViewer from "react-native-image-zoom-viewer";

const styles = StyleSheet.create({
  dots: {
    fontSize: 60,
    color: "lightgrey"
  },
  active: {
    color: "black"
  }
});
class CarouselModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  dotsRender = index => {
    let dots = [];
    for (let i = 0; PdpImages.length > i; i++) {
      const dotStyle = [styles.dots];
      if (index == i || (index == -1 && i == 0)) dotStyle.push(styles.active);
      dots.push(
        <Text key={i} style={dotStyle}>
          .
        </Text>
      );
    }
    return dots;
  };

  render() {
    return (
      <Modal visible={true} transparent={true}>
        <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
          <ImageViewer
            style={{ flex: 1 }}
            imageUrls={PdpImages}
            onSwipeDown={this.props.swipeDown}
            enableSwipeDown
            index={this.props.index}
            backgroundColor="white"
            renderHeader={() => (
              <TouchableOpacity
                style={{ position: "absolute", right: 0, zIndex: 10 }}
                onPress={this.props.swipeDown}
              >
                <Text style={{ color: "#000000" }}>Close</Text>
              </TouchableOpacity>
            )}
            renderIndicator={() => null}
            footerContainerStyle
            renderFooter={currentIndex => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  bottom: 50,
                  left: 150
                }}
              >
                {this.dotsRender(currentIndex)}
              </View>
            )}
          />
        </SafeAreaView>
      </Modal>
    );
  }
}

export default CarouselModal;
