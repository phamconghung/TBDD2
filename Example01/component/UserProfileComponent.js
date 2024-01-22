import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

const UserProfileComponent = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.infoHeading}>Thông tin người dùng</Text>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
      </View>
      <Text style={styles.userInfo}>Tên: {user.name}</Text>
      <Text style={styles.userInfo}>Email: {user.email}</Text>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 150,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  infoHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userInfo: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default UserProfileComponent;
