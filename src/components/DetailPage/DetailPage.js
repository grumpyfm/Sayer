import React, { useState } from "react";
import { Image } from "react-native";
import { Container, Footer, Item, Input, Content, Body } from "native-base";

import { styles } from "./DetailPageStyles";
import rightIcon from "../../../assets/rightIcon.png";
import CommentsList from "../CommentsList/CommentsList";

const DetailPage = props => {
  const { data, actions, route } = props;

  const [inputValue, setInputValue] = useState("");

  let itemId = route.params.itemId;
  let currentItem = data.filter(item => item.item_id === itemId)[0];

  return (
    <Container>
      <Content>
        <CommentsList comments={currentItem.comments} />
      </Content>
      <Footer style={styles.footer}>
        <Body regular>
          <Input
            style={styles.addCommentInput}
            onSubmitEditing={() => {
              if (inputValue.trim()) {
                actions.addNewComment(inputValue.trim(), itemId),
                  setInputValue("");
              }
            }}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            placeholderStyle={styles.placeholder}
            placeholder="New comment goes here..."
          />
        </Body>
        <Item
          style={styles.confirmIconWraper}
          onPress={() => {
            if (inputValue.trim()) {
              actions.addNewComment(inputValue.trim(), itemId),
                setInputValue("");
            }
          }}
        >
          <Image style={styles.confirmIcon} source={rightIcon} />
        </Item>
      </Footer>
    </Container>
  );
};

export default DetailPage;
