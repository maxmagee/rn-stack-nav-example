import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const CrewMemberListScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>CrewMemberListScreen</Text>
      <Button
        title="CREW MEMBER 1"
        onPress={buttonPressHandler.bind(null, "CrewMemberDetails", { memberId: 1 })}
      />
    </View>
  );
};

CrewMemberListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
CrewMemberListScreen.defaultProps = {};

CrewMemberListScreen.navigationOptions = {
  headerTitle: "Crew List",
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default CrewMemberListScreen;
