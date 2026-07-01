import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  titulo: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.black,
  },
  subtitulo: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
