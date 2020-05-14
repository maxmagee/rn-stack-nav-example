import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/CustomHeaderButton";

const PartsListScreen = (props) => {
  const { navigation } = props;

  const buttonPressHandler = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  return (
    <View style={styles.centeredScreen}>
      <Text>PartsListScreen</Text>
      <Button
        title="PART 1"
        onPress={buttonPressHandler.bind(null, "PartDetails", { partId: 1 })}
      />
    </View>
  );
};

PartsListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
PartsListScreen.defaultProps = {};

PartsListScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const goToAddHandler = () => {
    navigation.navigate("PartsAddEdit", { isAdding: true });
  };
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-add" title="Add" onPress={goToAddHandler} />
        </HeaderButtons>
      );
    },
    headerTitle: "Parts",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default PartsListScreen;
