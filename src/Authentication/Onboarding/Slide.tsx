import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

interface SlideProps {
  label: string;
  right?: boolean;
  picture: number;
}

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

export default function Slide({ label, right, picture }: SlideProps) {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underPLay}>
        <Image source={picture} style={styles.picture} resizeMode="cover" />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}> {label} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  underPLay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});