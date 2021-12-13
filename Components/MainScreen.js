import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox, FAB, Icon } from "react-native-elements";

const MainScreen = ({ navigation }) => {
  const getData = async () => {
    try {
      const myArr = JSON.parse(await AsyncStorage.getItem("@tasks"));
      console.log(myArr);
      setTasks(myArr);
    } catch (e) {}
  };
  const [tasks, setTasks] = React.useState([]);
  return (
    <View style={styles.container}>
      <Button title="loadData" onPress={() => getData()} />
      <ScrollView>
        {tasks.map((element, index) => (
          <TaskCard taskText={element} key={index} />
        ))}
      </ScrollView>

      <FAB
        buttonStyle={{ borderRadius: 15 }}
        icon={<Icon name="plus" type="font-awesome" color="white" />}
        placement="right"
        color="#22b07d"
        onPress={() => navigation.navigate("AddScreen")}
      />
    </View>
  );
};

const TaskCard = (props) => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <CheckBox />
        <Text style={styles.taskDisplay}>{props.taskText}</Text>
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
    //borderWidth: 0.5,
    borderColor: "#22b07d",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#eaf8f2",
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
  taskDisplay: {
    color: "#22b07d",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default MainScreen;
