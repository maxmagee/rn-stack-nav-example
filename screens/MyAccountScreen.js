import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const MyAccountScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.centeredScreen}>
      <Text>MyAccountScreen</Text>
    </View>
  );
};

MyAccountScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
MyAccountScreen.defaultProps = {};

MyAccountScreen.navigationOptions = {
  headerTitle: "My Account",
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default MyAccountScreen;
