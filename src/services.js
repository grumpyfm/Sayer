import { AsyncStorage } from "react-native";

export const getItemList = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    if (keys.length) {
      return items.map(req => {
        return JSON.parse(req[1]);
      });
    } else {
      return false;
    }
  } catch (error) {
    console.log("GetItemList Error", error);
  }
};

export const createItem = item => {
  try {
    AsyncStorage.setItem(item.item_id, JSON.stringify(item));
    return true;
  } catch (error) {
    console.log("CreateItem Error", error);
    return false;
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    console.log("RemoveItem Error", error);
    return false;
  }
};

export const generateId = () => {
  return `f${(~~(Math.random() * 1e8)).toString(16)}`;
};
