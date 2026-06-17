import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Target() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28 }}>Target</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
