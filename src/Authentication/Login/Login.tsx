import React from "react";
import { View } from "react-native";

import Container from "../../components/Container";
import { SocialLogin } from "../components";
import { Box, Button, Text } from "../../components";

export default function Login() {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button onPress={() => alert("Signup")}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't Have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container footer={footer}>
      <View />
    </Container>
  );
}
