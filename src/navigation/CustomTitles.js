import React from "react";
import { Item } from "native-base";
import { Text, Image, View } from "react-native";

import { styles } from "./CustomTitlesStyles";
import backArrow from "../../assets/backArrow.png";

export const HomeTitle = props => {
  return (
    <View style={styles.homeTitleContainer}>
      <Text style={styles.homeTitleTopic}>Sayer</Text>
      <Text style={styles.homeTitleText}>World's most used time waster</Text>
    </View>
  );
};

export const DetailsTitle = props => {
  return (
    <View style={styles.detailsTitleContainer}>
      <Item
        style={styles.backArrowWraper}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Image style={styles.backArrow} source={backArrow} />
      </Item>
      <Text style={styles.detailsTitleText}>{props.qwertyu}</Text>
    </View>
  );
};

export const NewItemTitle = props => {
  return (
    <View style={styles.detailsTitleContainer}>
      <Item
        style={styles.backArrowWraper}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Image style={styles.backArrow} source={backArrow} />
      </Item>
      <Text style={styles.detailsTitleText}>Create new item</Text>
    </View>
  );
};
