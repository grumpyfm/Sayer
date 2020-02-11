import React from "react";
import { List } from "native-base";
import { styles } from "./MainListStyles";

import MainItem from "./MainItem";

const MainList = props => {
  const { items, removeItem, navigation } = props;
  return (
    <List style={styles.listContainer}>
      {items.map(item => (
        <MainItem
          key={item.item_id}
          navigation={navigation}
          item={item}
          removeItem={removeItem}
        />
      ))}
    </List>
  );
};

export default MainList;
