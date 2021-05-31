import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";

import Dot from "./Dot";
import Slide, { BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");

const sliders = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here",
    picture: require("../../assets/images/1.png"),
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit idea",
    picture: require("../../assets/images/2.png"),
  },
  {
    title: "Excentric",
    color: "#FFE4D9",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    picture: require("../../assets/images/3.png"),
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    picture: require("../../assets/images/4.png"),
  },
];

export default function Onboarding() {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: sliders.map(slider => slider.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sliders, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {sliders.map((slider, index) => (
            <Slide
              key={index}
              label={slider.title}
              picture={slider.picture}
              right={!!(index % 2)}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {sliders.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} index={index} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              width: width * sliders.length,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {sliders.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                {...{ subtitle, description }}
                last={index === sliders.length - 1}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sliders: {
    flex: 0.61,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 0.39,
  },
  footerContent: {
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    backgroundColor: "white",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    width,
    height: BORDER_RADIUS / 1.4,
    justifyContent: "center",
    alignItems: "center",
  },
});
