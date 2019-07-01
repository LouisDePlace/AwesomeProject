import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleMessage = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.welcome}>Welcome to PVPro - Photo Viewer Pro!</Text>
      <Text style={styles.instructions}>To get started, select an image.</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default TitleMessage;
