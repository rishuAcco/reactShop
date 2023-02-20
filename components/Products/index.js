import React from 'react';
import { Container,Name, Price,ImageContainer,InfoContainer } from './style';
export function Product({name, price, image, onPress}) {
  return (
    <Container onPress={onPress}>
      <ImageContainer source={image} />
      <InfoContainer>
        <Name>{name}</Name>
        <Price>$ {price}</Price>
      </InfoContainer>
    </Container>
  );
}