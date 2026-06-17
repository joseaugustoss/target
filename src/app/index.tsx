import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Ola, Expo Router 😁</Text>
      <Button title="Nova meta" onPress={() => router.navigate("/Target")} />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transaction/123")}
      />
    </View>
  );
}
