// RegisterComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const RegisterComponent = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Đây là nơi để bạn xử lý logic đăng ký, lưu tài khoản và mật khẩu
    // Sau khi đăng ký thành công, bạn có thể chuyển đến trang đăng nhập hoặc thực hiện các thao tác khác
    Alert.alert('Thông báo', 'Đăng ký thành công!');
    // Chuyển đến màn hình đăng nhập
    navigation.navigate('Login');
  };

  const handleAlreadyHaveAccount = () => {
    // Chuyển đến màn hình đăng nhập khi đã có tài khoản
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên người dùng:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Nhập tên người dùng"
      />
      <Text style={styles.label}>Mật khẩu:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Nhập mật khẩu"
        secureTextEntry
      />
      <Button title="Đăng ký" onPress={handleRegister} />
      <TouchableOpacity onPress={handleAlreadyHaveAccount}>
        <Text style={styles.linkText}>Đã có tài khoản? Đăng nhập ngay!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  linkText: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default RegisterComponent;
