import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Khôi phục thông tin người dùng khi ứng dụng khởi động
    const restoreUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Lỗi khi khôi phục người dùng:', error);
      }
    };

    restoreUser();
  }, []);

  const login = async (userData) => {
    // Lưu thông tin người dùng vào AsyncStorage khi đăng nhập
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Lỗi khi lưu thông tin người dùng:', error);
    }

    setUser(userData);
  };

  const logout = async () => {
    // Xóa thông tin người dùng khỏi AsyncStorage khi đăng xuất
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error('Lỗi khi xóa thông tin người dùng:', error);
    }

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
