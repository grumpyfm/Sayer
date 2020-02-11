import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./src/navigation/appNavigation";
import Store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
