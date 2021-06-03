import React from "react";
import { Image, Dimensions } from "react-native";

import { Box, theme, Text, Button } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../assets/images/5.png"),
  width: 3383,
  height: 5074,
};

export default function Welcome({
  navigation,
}: StackNavigationProps<Routes, "Welcome">) {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xxl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          resizeMode="contain"
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius="xxl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
        />
        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="xxl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get Started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            variant="default"
            label="Join us, it's Free"
            onPress={() => navigation.navigate("Register")}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </Box>
      </Box>
    </Box>
  );
}
