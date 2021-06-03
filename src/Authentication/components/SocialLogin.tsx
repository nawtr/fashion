import React, { ReactNode } from "react";
import { Image } from "react-native";

import { Box, theme } from "../../components";

const SIZE = theme.borderRadii.l;

interface SocialIconProps {
  children: ReactNode;
}
const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      width={SIZE * 2}
      height={SIZE * 2}
      borderRadius="l"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Image
          source={require("../assets/google.png")}
          style={{ width: SIZE, height: SIZE }}
        />
      </SocialIcon>
      <SocialIcon>
        <Image
          source={require("../assets/facebook.png")}
          style={{ width: SIZE, height: SIZE, tintColor: "#1877F2" }}
        />
      </SocialIcon>
      <SocialIcon>
        <Image
          source={require("../assets/apple.png")}
          style={{
            width: SIZE,
            height: SIZE * (93 / 78),
            tintColor: "#000000",
          }}
        />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
