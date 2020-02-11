import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeTitleContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "column",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: "#0e1d3c",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  homeTitleTopic: {
    maxWidth: "85%",
    color: "#fff",
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontSize: 40
  },
  homeTitleText: {
    maxWidth: "85%",
    color: "#fff",
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontSize: 10
  },
  detailsTitleContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: "#0e1d3c",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  detailsTitleText: {
    maxWidth: "85%",
    color: "#fff",
    alignSelf: "center",
    paddingLeft: 15,
    fontSize: 20
  },
  backArrow: {
    width: 25,
    height: 25,
    tintColor: "#fff"
  },
  titleWraper: { backgroundColor: "red", paddingRight: 35 },
  backArrowWraper: {
    backgroundColor: "#313464",
    borderRadius: 60,
    width: 40,
    height: 40,
    borderBottomWidth: 0,
    justifyContent: "center"
  }
});
