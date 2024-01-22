import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions,Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Header = ({ onSearch }) => {

  const { user, logout } = useAuth();

  const navigation = useNavigation();

  const goToLogin = () => {
    // Chuyển đến trang đăng nhập khi người dùng click vào biểu tượng user
    navigation.navigate('Login');
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Hùng Store</Text>
        <TouchableOpacity>
          <Icon name="cart-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View>
        {user ? (
        <View style={styles.header1}>
          <Text>Xin chào, {user.name}!</Text>
            <TouchableOpacity onPress={logout}>
              <Text>Đăng Xuất!</Text>
            </TouchableOpacity>
        </View>
        ) : (
            <TouchableOpacity onPress={goToLogin}>
              <Text>Đăng Nhập!</Text>
            </TouchableOpacity>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#98FB98',
    padding: 10,
    width: width,
    position: 'absolute',
    top: 35,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  input: {
    height: 40,
    paddingLeft: 10,
  },
});

export default Header;
