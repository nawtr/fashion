import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  divide,
  Extrapolate,
  interpolateNode,
  multiply,
} from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
  // @ts-ignore
} from "react-native-redash/lib/module/v1";

import { theme } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import Dot from "./Dot";
import Slide from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");

const sliders = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here",
    picture: {
      src: require("../../assets/images/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit idea",
    picture: {
      src: require("../../assets/images/2.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Excentric",
    color: "#FFE4D9",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    picture: {
      src: require("../../assets/images/3.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    picture: {
      src: require("../../assets/images/4.png"),
      width: 2513,
      height: 3583,
    },
  },
];

export default function Onboarding({
  navigation,
}: StackNavigationProps<Routes, "OnBoarding">) {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: sliders.map(slider => slider.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sliders, { backgroundColor }]}>
        {sliders.map(({ picture }, index) => {
          const opacity = interpolateNode(x, {
            inputRange: [
              (index - 0.7) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underPLay, { opacity }]}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}

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
            <Slide key={index} label={slider.title} right={!!(index % 2)} />
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
            {sliders.map(({ subtitle, description }, index) => {
              const last = index === sliders.length - 1;
              return (
                <Subslide
                  key={index}
                  {...{ subtitle, description, last }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      // @ts-ignore
                      scroll.current?.scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                />
              );
            })}
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
    borderBottomRightRadius: theme.borderRadii.xxl,
  },
  footer: {
    flex: 0.39,
  },
  footerContent: {
    flex: 1,
    borderTopLeftRadius: theme.borderRadii.xxl,
    backgroundColor: "white",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    width,
    height: theme.borderRadii.xxl / 1.4,
    justifyContent: "center",
    alignItems: "center",
  },
  underPLay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xxl,
    overflow: "hidden",
  },
});
