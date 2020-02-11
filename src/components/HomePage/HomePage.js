import React, { useEffect } from "react";
import { Image, ActivityIndicator } from "react-native";
import { Container, Item, Content } from "native-base";

import { styles } from "./HomePageStyles";
import plusIcon from "../../../assets/plusIcon.png";
import MainList from "../MainList/MainList";
import { NEW_ITEM_ROUTE } from "../../constants";

const HomePage = props => {
  const { listItems, navigation, actions, loadingItems } = props;

  useEffect(() => actions.getMiddleware(), []);

  return (
    <Container style={styles.container}>
      <Content>
        {!loadingItems ? (
          <>
            {listItems.length ? (
              <MainList
                items={listItems}
                navigation={navigation}
                removeItem={actions.removeItem}
              />
            ) : null}
            <Item
              style={styles.addItemIconWraper}
              onPress={() => {
                navigation.push(NEW_ITEM_ROUTE);
              }}
            >
              <Image style={styles.addItemIcon} source={plusIcon} />
            </Item>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </Content>
    </Container>
  );
};

export default HomePage;
