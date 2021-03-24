import * as React from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { SafeAreViewContainer } from "../../../components/safe-area/safe-area.component";

import { Search } from "../components/search/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled(View)`
  flex: 1
  align-items: center;
  justify-content: center;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = React.useContext(
    RestaurantsContext
  );

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size={50} animating={true} color={Colors.blue300} />
      </LoadingContainer>
    );
  }

  return (
    <SafeAreViewContainer>
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreViewContainer>
  );
};
