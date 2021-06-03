import React from "react";
import { View, StyleSheet } from "react-native";

import { Button, Text } from "../../components";

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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    marginBottom: 12,
  },
  description: {
    textAlign: "center",
    color: "#0C0D34",
    marginBottom: 40,
  },
});
