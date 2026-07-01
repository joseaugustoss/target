import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue[500],
    height: 48,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
});
