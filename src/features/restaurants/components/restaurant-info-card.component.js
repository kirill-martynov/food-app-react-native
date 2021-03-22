import * as React from "react";
import { SvgXml } from "react-native-svg";

import {
  RestaurantCard,
  RestaurantCardCover,
  InfoContainer,
  Address,
  RatingContainer,
  MetaContainer,
  OpenIcon,
  Icon,
} from "./restaurant-info-card.styles";
import { ICON_STUB, PHOTO_STUB } from "./restaurant-info-card.constants";
import { Text } from "../../../components/typography/text.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = ICON_STUB,
    photos = [PHOTO_STUB],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ url: photos[0] }} />
      <InfoContainer>
        <Text variant="label">{name}</Text>
        <RatingContainer>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
          <MetaContainer>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORALILY</Text>
            )}
            {isOpenNow && <OpenIcon xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </MetaContainer>
        </RatingContainer>
        <Address>{address}</Address>
      </InfoContainer>
    </RestaurantCard>
  );
};
