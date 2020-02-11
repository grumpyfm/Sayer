import React, { useState } from "react";
import { Text } from "react-native";
import { ListItem, Item, Body } from "native-base";

import { DETAIL_ROUTE } from "../../constants";
import { styles } from "./MainListStyles";

const MainItem = props => {
  const { removeItem, item, navigation } = props;

  const [removeVisible, setRemoveVisible] = useState(false);

  return (
    <ListItem
      style={styles.itemContainer}
      onLongPress={() => setRemoveVisible(!removeVisible)}
      onPress={() => {
        setRemoveVisible(false);
        navigation.push(DETAIL_ROUTE, {
          itemId: item.item_id,
          title: item.title
        });
      }}
    >
      <Body>
        <Text>{item.title}</Text>
      </Body>

      {!removeVisible ? (
        <Item style={styles.commentsCounterWraper}>
          <Text style={styles.commentsCounter}>{item.comments.length}</Text>
        </Item>
      ) : (
        <Item style={styles.removeBlockWraper}>
          <Text
            onPress={() => removeItem(item.item_id)}
            style={styles.removeBlock}
          >
            Delete
          </Text>
        </Item>
      )}
    </ListItem>
  );
};

export default MainItem;
