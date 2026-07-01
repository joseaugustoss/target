import { Button } from "@/components/Button";
import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { View, StatusBar } from "react-native";
import { router } from "expo-router";
const summary = {
  total: "R$ 2.800,00",
  input: { label: "Entradas", value: "R$ 6,184,90" },
  output: { label: "Saídas", value: "-R$ 883,65" },
};

const targets = [
  {
    id: "1",
    name: "Apple Watch",
    percentage: "50%",
    current: "R$ 580,00",
    target: "R$ 1.750,00",
  },
  {
    id: "2",
    name: "Comprar uma cadeira ergnômica",
    percentage: "75%",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
  },

  {
    id: "3",
    name: "Fazer uma viagem para o Japão",
    percentage: "75%",
    current: "R$ 1.200,00",
    target: "R$ 3.000,00",
  },
];
export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <HomeHeader data={summary} />

      <List
        title="Metas"
        keyExtractor={(item) => item.id}
        data={targets}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta. clique em nov meta para criar."
        // containerStyle={{ paddingHorizontal: 24 }}
      />
      <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/Target")} />
      </View>
    </View>
  );
}
