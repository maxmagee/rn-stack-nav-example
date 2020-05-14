import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const FirstAidDetailsScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>FirstAidDetailsScreen</Text>
      <Button title="Go To Next" onPress={buttonPressHandler.bind(null, "routeName")} />
    </View>
  );
};

FirstAidDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
FirstAidDetailsScreen.defaultProps = {};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FirstAidDetailsScreen;
