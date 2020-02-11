import React, { useState } from "react";
import { Image } from "react-native";
import { Container, Item, Input } from "native-base";

import { styles } from "./NewItemPageStyles";
import rightIcon from "../../../assets/rightIcon.png";

const NewItemPage = props => {
  const { actions, navigation } = props;

  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <Item style={styles.container}>
        <Input
          type="text"
          style={styles.addItemInput}
          onSubmitEditing={() => {
            actions.createItem(inputValue);
            navigation.pop();
          }}
          value={inputValue}
          onChangeText={text => setInputValue(text)}
          placeholderTextColor="#333333"
          placeholder="New item title.."
        />
        <Item
          style={styles.confirmIconWraper}
          onPress={() => {
            if (inputValue.trim()) {
              actions.createItem(inputValue.trim());
              navigation.pop();
            }
          }}
        >
          <Image
            style={styles.confirmIcon}
            tintColor="#fff"
            source={rightIcon}
          />
        </Item>
      </Item>
    </Container>
  );
};

export default NewItemPage;
