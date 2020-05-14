import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const DashboardScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>DashboardScreen</Text>
      <Button title="VESSELS" onPress={buttonPressHandler.bind(null, "VesselList")} />
      <Button title="CREW" onPress={buttonPressHandler.bind(null, "CrewMemberList")} />
      <Button title="MY ACCOUNT" onPress={buttonPressHandler.bind(null, "MyAccount")} />
    </View>
  );
};

DashboardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
DashboardScreen.defaultProps = {};

DashboardScreen.navigationOptions = {
  headerTitle: "Dashboard",
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default DashboardScreen;
