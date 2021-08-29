import React, { useState } from "react";
import { Button, Text, View, Alert, TextInput } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Styles from "../styles/Styles";

type Props = {
  dispatch: Dispatch;
  userCred: any;
};

const Login = ({ dispatch, userCred }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (username == userCred.username && password == userCred.password) {
      dispatch({ type: "SET_USER", data: true });
    } else {
      Alert.alert(
        "Invalid Credentials",
        "Enter valid Credential \nusername: abc \npassword: 123",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <View style={Styles.container}>
      <TextInput
        placeholder="Enter username (username:abc)"
        onChangeText={(val) => {
          setUsername(val);
        }}
        style={Styles.input}
      />
      <TextInput
        placeholder="Enter Password (password:123)"
        onChangeText={(val) => {
          setPassword(val);
        }}
        style={Styles.input}
        secureTextEntry
      />
      <Button title="Login" onPress={handlePress} />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  userCred: state.reducer.userCred,
});

export default connect(mapStateToProps)(Login);
