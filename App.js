import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { oauth } from "react-native-force";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => {
          oauth.authenticate();
        }}
      ></Button>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
