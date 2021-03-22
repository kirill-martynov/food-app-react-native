import * as React from "react";
import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + "px" : "0"};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeAreViewContainer>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreViewContainer>
  );
};
