// LoginComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAuth  } from './AuthContext';


const LoginComponent = ({ navigation }) => {
  const { login } = useAuth();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    // Chuyển đến màn hình Đăng ký khi người dùng bấm nút đăng ký
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/users');
      const users = await response.json();

      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        // Đăng nhập thành công, lưu thông tin tài khoản
        login(user);
        // Chuyển đến màn hình chính
        navigation.navigate('Home');
      } else {
        Alert.alert('Thông báo', 'Đăng nhập thất bại. Vui lòng kiểm tra lại tên người dùng và mật khẩu.');
      }
    } catch (error) {
      console.error('Lỗi khi thực hiện đăng nhập:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên người dùng:</Text>
      <TextInput
        style={styles.input}
        value={email}
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
      <Button title="Đăng nhập" onPress={handleLogin} />
      <Text style={styles.registerLink} onPress={goToRegister}>
        Chưa có tài khoản? Đăng ký ngay!
      </Text>
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
  registerLink: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginComponent;
