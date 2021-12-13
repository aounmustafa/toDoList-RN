import React from "react";
import { StyleSheet, Text, View } from "react-native";
const AddScreen = () => {
  return (
    <View Style={styles.container}>
      <Text>Hello this is Add Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddScreen;
