//header
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Header = () => {
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
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder="What do you want to buy?"
                />
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
        top: 35, // Thay đổi từ 35 thành 0 để header nằm ngay trên đỉnh màn hình
        zIndex: 1, // Đặt header trên cùng
    },
    header: {
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
        padding: 5, // Thêm padding cho ô tìm kiếm
    },
    input: {
        height: 40,
        paddingLeft: 10,
    },
});

export default Header;
