import { fontFamily } from "@/theme/fontFamily";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: fontFamily.bold, fontSize: 24 }}>
        Ola, Expo Router 😁
      </Text>
      <View style={{ gap: 12, marginTop: 20 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/Target")} />
        <Button
          title="Transação"
          onPress={() => router.navigate("/transaction/123")}
        />
        <Button
          title="In Progress"
          onPress={() => router.navigate("/in-progress/12")}
        />
      </View>
    </View>
  );
}
