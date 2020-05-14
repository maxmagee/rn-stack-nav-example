import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const VesselDetailsScreen = (props) => {
  const { navigation } = props;
  const vesselId = navigation.getParam("vesselId");

  const buttonPressHandler = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>Vessel {vesselId} Details</Text>
      <Button title="JOBS" onPress={buttonPressHandler.bind(null, "JobList")} />
      <Button title="PARTS" onPress={buttonPressHandler.bind(null, "PartsList")} />
      <Button title="FIRST AID" onPress={buttonPressHandler.bind(null, "FirstAidList")} />
    </View>
  );
};

VesselDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
VesselDetailsScreen.defaultProps = {};

VesselDetailsScreen.navigationOptions = {
  headerTitle: "Vessel Details",
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default VesselDetailsScreen;
