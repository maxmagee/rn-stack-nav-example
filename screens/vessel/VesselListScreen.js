import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const VesselListScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>VesselListScreen</Text>
      <Button
        title="VESSEL 1"
        onPress={buttonPressHandler.bind(null, "VesselDetails", { vesselId: 1 })}
      />
    </View>
  );
};

VesselListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
VesselListScreen.defaultProps = {};

VesselListScreen.navigationOptions = {
  headerTitle: "Vessels",
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default VesselListScreen;
