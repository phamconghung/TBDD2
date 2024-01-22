// Footer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToUserProfile = () => {
    navigation.navigate('UserProfileComponent');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <Icon name='home' type='font-awesome' color='#007BFF' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToUserProfile}>
        <Icon name='user' type='font-awesome' color='#6C757D' style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCart}>
        <Icon name='shopping-cart' type='font-awesome' color='#6C757D' style={styles.icon} />
      </TouchableOpacity>
      <Icon name='bell' type='font-awesome' color='#6C757D'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 60,
  },
});

export default Footer;
