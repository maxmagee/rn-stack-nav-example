import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/CustomHeaderButton";

const JobDetailsScreen = (props) => {
  const { navigation } = props;
  const jobId = navigation.getParam("jobId");

  return (
    <View style={styles.centeredScreen}>
      <Text>Job {jobId} Details</Text>
    </View>
  );
};

JobDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
JobDetailsScreen.defaultProps = {};

JobDetailsScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const goToEditHandler = () => {
    navigation.navigate("JobAddEdit", { isAdding: false });
  };
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-create" onPress={goToEditHandler} />
        </HeaderButtons>
      );
    },
    headerTitle: "Job Details",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default JobDetailsScreen;
