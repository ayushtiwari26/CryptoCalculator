import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigation.navigate("Home");
    }
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <TextInput
            style={Styles.form_input}
            value={username}
            placeholder={"Username"}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize={"none"}
            keyboardType={"email-address"}
          />
          <TextInput
            style={Styles.form_input}
            value={password}
            placeholder={"Password"}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const Styles = StyleSheet.create({
  login_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  login_header: {
    fontSize: 80,
    fontWeight: "bold",
    width: "80%",
    // borderColor: "black",
    // borderStyle: "solid",
    // borderWidth: 1,
  },
  form_input: {
    display: "flex",
    padding: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
