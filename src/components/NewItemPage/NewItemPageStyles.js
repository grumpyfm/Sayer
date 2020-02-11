import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderBottomWidth: 0,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  addItemInput: {
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1
  },
  confirmIconWraper: {
    backgroundColor: "#313464",
    borderRadius: 60,
    width: 40,
    height: 40,
    justifyContent: "center",
    borderBottomWidth: 0
  },
  confirmIcon: {
    width: 30,
    height: 30
  }
});
