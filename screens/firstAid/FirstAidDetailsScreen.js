import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/CustomHeaderButton";

const FirstAidDetailsScreen = (props) => {
  const { navigation } = props;
  const firstAidId = navigation.getParam("firstAidId");

  return (
    <View style={styles.centeredScreen}>
      <Text>First Aid Item {firstAidId} Details</Text>
    </View>
  );
};

FirstAidDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
FirstAidDetailsScreen.defaultProps = {};

FirstAidDetailsScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const goToAddHandler = () => {
    navigation.navigate("FirstAidAddEdit", { isAdding: false });
  };
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-create" onPress={goToAddHandler} />
        </HeaderButtons>
      );
    },
    headerTitle: "First Aid Details",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default FirstAidDetailsScreen;
