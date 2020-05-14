import React from "react";
import { enableScreens } from "react-native-screens";

import MainNavigator from "./navigation/MainNavigator";

enableScreens();

export default function App() {
  return <MainNavigator />;
}
