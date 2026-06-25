import { View, Text, ColorValue } from "react-native";
import { styles } from "./styles";
import * as LucideIcons from "lucide-react-native";
export type SummaryProps = {
  label: string;
  value: string;
};

type Props = {
  data: SummaryProps;
  icon: {
    name: keyof typeof LucideIcons;
    color: ColorValue;
  };
  isLeft?: boolean;
};

export function Summary({ data, icon, isLeft = false }: Props) {
  const Icon = LucideIcons[icon.name] as LucideIcons.LucideIcon;
  return (
    <View style={styles.container}>
      <View style={[styles.header, isLeft && { justifyContent: "flex-end" }]}>
        <Icon size={16} color={icon.color} />
        <Text style={styles.label}>{data.label}</Text>
      </View>
      <Text style={styles.value}>{data.value}</Text>
    </View>
  );
}
