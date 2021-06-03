import React, { ReactNode } from "react";
import { View, Text } from "react-native";

import { Box } from ".";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Box>{children}</Box>;
};

export default Container;
