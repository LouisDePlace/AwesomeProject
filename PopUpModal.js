import React, { Component } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Image,
  Text,
  Button
} from "react-native";
import styled from "styled-components";

const Touchable = styled.TouchableOpacity`
  border-width: 2;
  border-color: rgba(0, 0, 0, 1);
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 60;
  height: 60;
  border-radius: 60;
  margin-right: 10;
`;

class PopUpModal extends Component {
  render() {
    if (this.props.mail) {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
        >
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }} />
          <View
            style={{
              flex: 1 / 4,
              backgroundColor: "rgba(255,255,255,1)",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <Text style={{ fontSize: 14 }}>
              Sorry for your experience with us. We would be gratefull to hear
              any feedback from you. Please contact us at:{"\n"}
              louis.de-place@made.com
            </Text>
            <Button title="Close" onPress={this.props.toggleModal} />
          </View>
        </Modal>
      );
    } else {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
        >
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }} />
          <View
            style={{
              flex: 1 / 4,
              backgroundColor: "rgba(255,255,255,1)",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <Text style={{ fontSize: 23 }}>How would you rate us ?</Text>
            <View style={{ flexDirection: "row" }}>
              <Touchable onPress={this.props.displayPopUp}>
                <Image
                  style={{ width: 28, height: 32.6 }}
                  source={{
                    uri:
                      "/Users/lde-place/Master/Native project/Photos/Thumbs up.png"
                  }}
                />
              </Touchable>
              <Touchable onPress={this.props.toggleMail}>
                <Image
                  style={{ width: 28, height: 32.6 }}
                  source={{
                    uri:
                      "/Users/lde-place/Master/Native project/Photos/thumbs down.png"
                  }}
                />
              </Touchable>
            </View>
          </View>
        </Modal>
      );
    }
  }
}

export default PopUpModal;
