import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import call from "react-native-phone-call";

export default class App extends React.Component {
  makeCall = () => {
    const args = {
      number: "xxxxx-xxxxxx", // String value with the number to call
      prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: "80%",
            height: 80,
            backgroundColor: "rgb(186, 186, 186)",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderBottomColor: "#000000"
          }}
          onPress={() => this.makeCall()}
        >
          <Text>Emergency Call</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
