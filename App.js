import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsList } from './screens/ProductList';
import { ProductDetails } from './screens/productDetails';
import { Cart } from './screens/cart';
import { CartIcon } from './components/cartIcon';
import { CartProvider } from './context/cartContext'
import { Ionicons } from '@expo/vector-icons'
const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
function App() {
  const StackTabNavigation=()=>{
    return (
      <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
    )
  }
  return (
    <CartProvider>
      <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#101010',
        style: {
          backgroundColor: '#ffd700'
        }
      }}>
        <Tab.Screen name="Home" component={StackTabNavigation} options={{
          headerShown: false,
          tabBarIcon: ({color,size})=>(
            <Ionicons name='ios-home' color={color} size={size}/>
          )
          }}/>
        <Tab.Screen name="Cart" component={Cart} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-cart' size={size} color={color} />
          )
        }}/>
      </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default App;