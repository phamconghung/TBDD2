// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './component/Footer';
import Header from './component/Header';
import Content from './component/Content';
import LoginComponent from './component/Login';
import Register from './component/Register';
import Productdetail from './component/Productdetail';
import Cart from './component/Cart';
import UserProfileComponent from './component/UserProfileComponent';
import { AuthProvider } from './component/AuthContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Productdetail"
            component={Productdetail}
            options={{
              headerShown: false,
              headerTransparent: true,
              headerBackTitleVisible: false,
              headerLeft: null,
              headerTitleAlign: 'center',
              headerTitle: 'Productdetail',
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UserProfileComponent"
            component={UserProfileComponent}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const HomeScreen = () => (
  <View style={styles.container}>
    <Header />
    <Content />
    <Footer />
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {},
  content: {
    flex: 8,
  },
  footer: {
    flex: 1,
  },
});
