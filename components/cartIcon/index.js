import React, { useContext } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import {Container, TextContainer} from './style'
import { CartContext } from '../../context/cartContext';
export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);
  return (
    <Container>
      <TextContainer
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >Cart ({getItemsCount()})</TextContainer>
    </Container>
  );
}
