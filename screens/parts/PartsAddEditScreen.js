import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const PartsAddEditScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.centeredScreen}>
      <Text>PartsAddEditScreen</Text>
    </View>
  );
};

PartsAddEditScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
PartsAddEditScreen.defaultProps = {};

PartsAddEditScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const isAdding = navigation.getParam("isAdding");

  return {
    headerTitle: isAdding ? "Add Part" : "Edit Part",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default PartsAddEditScreen;
