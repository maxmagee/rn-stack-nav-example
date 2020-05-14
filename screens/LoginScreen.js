import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const LoginScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>LoginScreen</Text>
      <Button title="LOGIN" onPress={buttonPressHandler.bind(null, "Dashboard")} />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
LoginScreen.defaultProps = {};

LoginScreen.navigationOptions = {
  headerTitle: "Welcome",
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginScreen;
