import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text } from ".";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  children?: ReactNode;
  onPress: () => void;
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();

  // @ts-ignore
  const backgroundColor = theme.colors[variant] || "default";
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      {label ? (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      ) : (
        children
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
