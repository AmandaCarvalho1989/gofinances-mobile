import React from "react";
import { View } from "react-native";

import { Container, Category, Icon } from "./styles";

interface CategorySelectButton {
  title: string;
  onPress: () => void;
}
export const CategorySelectButton: React.FC<CategorySelectButton> = ({
  title,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
