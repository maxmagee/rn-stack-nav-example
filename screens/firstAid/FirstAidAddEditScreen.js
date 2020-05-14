import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";

const FirstAidAddEditScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>FirstAidAddEditScreen</Text>
      <Button
        title="First Aid Item 1"
        onPress={buttonPressHandler.bind(null, "FirstAidDetails", { firstAidId: 1 })}
      />
    </View>
  );
};

FirstAidAddEditScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
FirstAidAddEditScreen.defaultProps = {};

FirstAidAddEditScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const isAdding = navigation.getParam("isAdding");
  return {
    headerTitle: isAdding ? "Add First Aid" : "Edit First Aid",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FirstAidAddEditScreen;
