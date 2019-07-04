import React, { Component } from "react";
<<<<<<< HEAD
import CarouselModal from "./CarouselModal";
import Homepage from "./Homepage";
=======
import { View } from "react-native";
import TitleMessage from "./TitleMessage";
import CarouselObject from "./CarouselObject";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Button } from "react-native";

const images = [
  {
    url:
      "https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/mt-cook1-940x623.jpg"
  },
  {
    url:
      "https://www.newzealand.com/assets/25fcc10a85/PA2788-Milford-Sound-Miles-Holden-1__FocalPointCropWzQyNyw2NDAsNDcsMzgsODUsImpwZyIsNjUsMi41XQ.jpg"
  },
  {
    url:
      "https://img.theculturetrip.com/450x/wp-content/uploads/2017/08/13630333343_696ef8d52c_k.jpg"
  },
  {
    url:
      "https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1142734831/960x0.jpg?fit=scale"
  }
];
>>>>>>> a0f9be465583bee3861a56c76993063a8904412d

class FrontPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      index: 0
    };
  }

<<<<<<< HEAD
  handlePress = index => {
    this.setState({ pressed: true, index });
=======
  togglePress = () => {
    this.setState({ pressed: !this.state.pressed });
  };

  setIndex = newIndex => {
    this.setState({ index: newIndex });
>>>>>>> a0f9be465583bee3861a56c76993063a8904412d
  };

  swipeDown = () => {
    this.setState({ pressed: false });
  };

  render() {
    return (
<<<<<<< HEAD
      <>
        {this.state.pressed ? (
          <CarouselModal
            swipeDown={this.swipeDown}
            pressed={this.state.pressed}
            index={this.state.index}
            handlePress={this.handlePress}
          />
        ) : (
          <Homepage handlePress={this.handlePress} />
        )}
      </>
=======
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 1, marginTop: 30 }}>
          <TitleMessage />
          <CarouselObject
            images={images}
            togglePress={this.togglePress}
            setIndex={this.setIndex}
          />
        </View>
        <Modal
          visible={this.state.pressed}
          transparent={true}
          style={{ zindex: 1 }}
        >
          <ImageViewer
            imageUrls={images}
            onSwipeDown={this.swipeDown}
            enableSwipeDown
            index={this.state.index}
            renderHeader={() => (
              <View style={{ flexDirection: "row", marginTop: 50 }}>
                <View style={{ flex: 1 }} />
                <Button title="Close" onPress={this.togglePress}>
                  Close
                </Button>
              </View>
            )}
          />
        </Modal>
      </View>
>>>>>>> a0f9be465583bee3861a56c76993063a8904412d
    );
  }
}
export default FrontPage;
