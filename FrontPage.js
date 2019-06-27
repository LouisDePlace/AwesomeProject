import React, { Component } from "react";
import { View, Button } from "react-native";
import Carousel from "./Carousel";
import CarouselModal from "./CarouselModal";
import PopUpModal from "./PopUpModal";
import * as StoreReview from "react-native-store-review";

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

const newImages = [
  {
    source: {
      uri:
        "https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/mt-cook1-940x623.jpg"
    }
  },
  {
    source: {
      uri:
        "https://www.newzealand.com/assets/25fcc10a85/PA2788-Milford-Sound-Miles-Holden-1__FocalPointCropWzQyNyw2NDAsNDcsMzgsODUsImpwZyIsNjUsMi41XQ.jpg"
    }
  },
  {
    source: {
      uri:
        "https://img.theculturetrip.com/450x/wp-content/uploads/2017/08/13630333343_696ef8d52c_k.jpg"
    }
  },
  {
    source: {
      uri:
        "https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1142734831/960x0.jpg?fit=scale"
    }
  }
];

class FrontPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      index: 0,
      modalVisible: false,
      mail: false,
      enableImageZoom: true
    };
  }

  togglePress = () => {
    this.setState({ pressed: !this.state.pressed });
  };

  swipeDown = () => {
    this.setState({ pressed: false });
  };

  setIndex = newIndex => {
    this.setState({ index: newIndex });
  };

  toggleMail = () => {
    this.setState({ mail: !this.state.mail });
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
    if (this.state.mail) {
      this.setState({ mail: false });
    }
  };

  displayPopUp = () => {
    if (StoreReview.isAvailable) {
      this.toggleModal();
      StoreReview.requestReview();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Carousel
          images={images}
          togglePress={this.togglePress}
          setIndex={this.setIndex}
          toggleModal={this.toggleModal}
        />

        <CarouselModal
          images={images}
          newImages={newImages}
          pressed={this.state.pressed}
          swipeDown={this.swipeDown}
          index={this.state.index}
          togglePress={this.togglePress}
        />
        <PopUpModal
          modalVisible={this.state.modalVisible}
          displayPopUp={this.displayPopUp}
          toggleMail={this.toggleMail}
          mail={this.state.mail}
          toggleModal={this.toggleModal}
        />
      </View>
    );
  }
}

export default FrontPage;
