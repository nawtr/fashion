import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../../components";

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

export default function Subslide({
  subtitle,
  description,
  last,
  onPress,
}: SubslideProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get Started" : "Next"}
        variant={last ? "primary" : "default"}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});
