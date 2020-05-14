import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/CustomHeaderButton";

const JobListScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>JobListScreen</Text>
      <Button title="JOB 1" onPress={buttonPressHandler.bind(null, "JobDetails", { jobId: 1 })} />
    </View>
  );
};

JobListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
JobListScreen.defaultProps = {};

JobListScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const goToAddHandler = () => {
    navigation.navigate("JobAddEdit", { isAdding: true });
  };
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-add" onPress={goToAddHandler} />
        </HeaderButtons>
      );
    },
    headerTitle: "Jobs",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default JobListScreen;
