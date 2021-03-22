import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const InfoContainer = styled(View)`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RatingContainer = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const MetaContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

export const OpenIcon = styled(SvgXml)`
  margin-right: 16px;
  margin-left: 16px;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
