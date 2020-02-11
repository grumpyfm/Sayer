import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../components/HomePage/HomePageContainer";
import DetailPage from "../components/DetailPage/DetailPageContainer";
import NewItemPage from "../components/NewItemPage/NewItemPageContainer";
import { HomeTitle, DetailsTitle, NewItemTitle } from "./CustomTitles";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          header: () => <HomeTitle />
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailPage}
        options={{
          header: ({ scene, navigation }) => {
            return (
              <DetailsTitle
                qwertyu={scene.route.params.title}
                navigation={navigation}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="NewItem"
        component={NewItemPage}
        options={{
          header: ({ navigation }) => {
            return <NewItemTitle navigation={navigation} />;
          }
        }}
      />
    </Stack.Navigator>
  );
};
