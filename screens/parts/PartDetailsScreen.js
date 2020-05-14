import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

const PartDetailsScreen = (props) => {
  const { navigation } = props;
  const partId = navigation.getParam("partId");

  return (
    <View style={styles.centeredScreen}>
      <Text>Part {partId} Details</Text>
    </View>
  );
};

PartDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
PartDetailsScreen.defaultProps = {};

PartDetailsScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  const goToEditHandler = () => {
    navigation.navigate("PartsAddEdit", { isAdding: false });
  };
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="ios-create" title="Edit" onPress={goToEditHandler} />
        </HeaderButtons>
      );
    },
    headerTitle: "Part Details",
  };
};

const styles = StyleSheet.create({
  centeredScreen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default PartDetailsScreen;
