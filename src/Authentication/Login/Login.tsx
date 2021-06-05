import React from "react";

import Container from "../../components/Container";
import { SocialLogin } from "../components";
import { Box, Button, Text } from "../../components";
import TextInput from "../components/Form/TextInput";

const emailValidator = (email: string) => {
  const re =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

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
      <Box paddingVertical="m" paddingHorizontal="xl">
        <Text variant="title1" textAlign="center">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginTop="s">
          Use your credentials below and login to your account
        </Text>
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          validator={emailValidator}
        />
      </Box>
    </Container>
  );
}
