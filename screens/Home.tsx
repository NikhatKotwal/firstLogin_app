import React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Styles from "../styles/Styles";

type Props = {
  dispatch: Dispatch;
};

const Home = ({ dispatch }: Props) => {
  const handlePress = () => {
    dispatch({ type: "SET_USER", data: false });
  };

  return (
    <View style={Styles.container}>
      <Text>Welcome to Home Screen !!</Text>

      <Button title="Signout" onPress={handlePress} />
    </View>
  );
};

export default connect()(Home);
