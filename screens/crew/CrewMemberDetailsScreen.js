import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const CrewMemberDetailsScreen = (props) => {
  const { navigation } = props;
  const memberId = navigation.getParam("memberId");

  return (
    <View style={styles.centeredScreen}>
      <Text>Crew Member {memberId} Details</Text>
    </View>
  );
};

CrewMemberDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
CrewMemberDetailsScreen.defaultProps = {};

CrewMemberDetailsScreen.navigationOptions = (navigationData) => {
  const memberId = navigationData.navigation.getParam("memberId");
  return {
    headerTitle: `Crew Member ${memberId}`,
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default CrewMemberDetailsScreen;
