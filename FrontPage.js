import React, { Component } from "react";
import { View } from "react-native";
import TitleMessage from "./TitleMessage";
import CarouselObject from "./CarouselObject";
import CarouselModal from "./CarouselModal";

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

class FrontPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      index: 0
    };
  }

  handlePress = index => {
    this.setState({ pressed: true, index });
    console.log(index);
  };

  swipeDown = () => {
    this.setState({ pressed: false });
  };

  render() {
    if (this.state.pressed) {
      return (
        <CarouselModal
          images={images}
          swipeDown={this.swipeDown}
          pressed={this.state.pressed}
          index={this.state.index}
        />
      );
    } else {
      return (
        <View style={{ flex: 1, height: "100%", width: "100%" }}>
          <TitleMessage />
          <CarouselObject images={images} handlePress={this.handlePress} />
        </View>
      );
    }
  }
}

export default FrontPage;
