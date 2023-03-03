import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    width: "100%",
    flexDirection: "row",
    padding: 12,
    gap: 8,
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    height: 64,
    backgroundColor: colors.gray[500],
  },
  containerText: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
  }
})