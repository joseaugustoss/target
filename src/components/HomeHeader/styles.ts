import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 324,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamily.regular,
    paddingBottom: 18,
    gap: 24,
  },
});
