import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import { theme } from "./components";
import { AuthenticationNavigator } from "./Authentication";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
