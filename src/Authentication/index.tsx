import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../components/Navigation";

import OnBoarding from "./Onboarding";
import Welcome from "./Welcome";
import Login from "./Login";

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none" initialRouteName="Login">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
