import React from "react";
import { View } from "react-native";
import TitleMessage from "./TitleMessage";
import CarouselImages from "./CarouselImages";
import CarouselObject from "./CarouselObject";

const FrontPage = () => {
  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }}>
      <TitleMessage />
      <CarouselObject />
    </View>
  );
};

export default FrontPage;
