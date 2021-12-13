import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddScreen = () => {
  const tasksArr = [];

  const storeData = async () => {
    try {
      let newArr = JSON.parse(await AsyncStorage.getItem("@tasks"));
      newArr.push(newTask);
      AsyncStorage.clear();
      await AsyncStorage.setItem("@tasks", JSON.stringify(newArr));
      console.log("done saving");
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const myArr = JSON.parse(await AsyncStorage.getItem("@tasks"));
      console.log(myArr);
    } catch (e) {}
  };

  const [newTask, setNewTask] = React.useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="   Enter task todo!"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="save" onPress={() => storeData()} />
      <Text>-----</Text>
      <Button title="get" onPress={() => getData()} />
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
  input: {
    borderWidth: 0.5,
    borderRadius: 8,
    width: "80%",
    height: "8%",
    borderColor: "#22b07d",
  },
  dateWrapper: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "green",
    padding: 15,
    width: "90%",
  },
});

export default AddScreen;
