import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/CustomHeaderButton";

const FirstAidListScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>FirstAidListScreen</Text>
      <Button
        title="First Aid Item 1"
        onPress={buttonPressHandler.bind(null, "FirstAidDetails", { firstAidId: 1 })}
      />
    </View>
  );
};

FirstAidListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
FirstAidListScreen.defaultProps = {};

FirstAidListScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const goToAddHandler = () => {
    navigation.navigate("FirstAidAddEdit", { isAdding: true });
  };
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-add" onPress={goToAddHandler} />
        </HeaderButtons>
      );
    },
    headerTitle: "First Aid List",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FirstAidListScreen;
