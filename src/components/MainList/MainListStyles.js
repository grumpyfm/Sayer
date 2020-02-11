import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center"
  },
  removeBlockWraper: {
    height: 60,
    width: 60,
    backgroundColor: "#d4145a",
    justifyContent: "center"
  },
  itemContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: "center"
  },
  removeBlock: {
    color: "#fff",
    backgroundColor: "#d4145a"
  },
  commentsCounter: { color: "#fff", fontSize: 20 },
  commentsCounterWraper: {
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 60,
    width: 40,
    height: 40,
    backgroundColor: "#313464"
  }
});
