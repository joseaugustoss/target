import type { ComponentType } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import * as IconLucide from "lucide-react-native";
import { router } from "expo-router";
import { colors } from "@/theme";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle?: string;
  rightButton?: {
    onPress: () => void;
    icon: keyof typeof IconLucide;
  };
};

export function PageHeader({ title, subtitle, rightButton, ...rest }: Props) {
  const Icon = rightButton
    ? (IconLucide[rightButton.icon] as ComponentType<{
        size?: number;
        color?: string;
      }>)
    : null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          {...rest}
        >
          <IconLucide.ArrowLeft size={32} color={colors.black} />
        </TouchableOpacity>
        {rightButton && Icon && (
          <TouchableOpacity onPress={rightButton.onPress} activeOpacity={0.8}>
            <Icon size={24} color={colors.gray[500]} />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.titulo}>{title}</Text>
      {subtitle && <Text style={styles.subtitulo}>{subtitle}</Text>}
    </View>
  );
}
