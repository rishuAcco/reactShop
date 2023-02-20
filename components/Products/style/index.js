import styled from "styled-components";
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export const Container=styled.TouchableOpacity`
    background-color: 'white';
    border-radius: 16px;
`

export const ImageContainer=styled.Image`
    height: 260px;
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`
export const InfoContainer=styled.View`
    padding: 16px;
`
export const Name=styled.Text`
    font-size: 22px;
    font-weight: bold;
`
export const Price=styled.Text`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
`