import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Login from "../screens/login";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";
import Contact from "../screens/Contact";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Login Screen" }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="name"
        component={Home}
        options={{ title: "Home Screen" }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ title: "About Screen" }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{ title: "Contact Screen" }}
      />
    </Drawer.Navigator>
  );
};

const Navigation = (user: any) => {
  return (
    <NavigationContainer>
      {user.user ? <DrawerStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({ user: state.reducer.user });

export default connect(mapStateToProps)(Navigation);
