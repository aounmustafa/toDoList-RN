import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

import { CheckBox, FAB, Icon } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />

        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
      <FAB
        buttonStyle={{ borderRadius: 15 }}
        icon={<Icon name="plus" type="font-awesome" color="white" />}
        placement="right"
        color="green"
        onPress={() => navigation.navigate("AddScreen")}
      />
    </View>
  );
};

const TaskCard = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <CheckBox />
        <Text>Buy a dedorant and cat food</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
  },
  outer: {
    borderWidth: 0.5,
    borderColor: "green",
    borderRadius: 10,
    margin: 10,
  },
  input: {
    borderRadius: 8,
    borderWidth: 0.5,
    width: "80%",
    height: "100%",
    marginRight: 10,
  },
  AddBtnWrapper: {
    flexDirection: "row",
    margin: 30,
    alignItems: "center",
    justifyContent: "flex-end",
    height: "10%",
    // width: "20%",
    borderWidth: 1,
  },
});
export default MainScreen;
