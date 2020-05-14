import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const JobAddEditScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.centeredScreen}>
      <Text>JobAddEditScreen</Text>
    </View>
  );
};

JobAddEditScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
JobAddEditScreen.defaultProps = {};

JobAddEditScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const isAdding = navigation.getParam("isAdding");
  return {
    headerTitle: isAdding ? "Add Job" : "Edit Job",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default JobAddEditScreen;
