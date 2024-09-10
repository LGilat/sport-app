import {  Stack } from "expo-router";
import {  View } from "react-native";


export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "grey" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
    </View>
  );
}