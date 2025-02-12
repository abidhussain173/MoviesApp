import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomBottomTab = () => {
    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="grid-outline" size={24} color="#888" />
                <Text style={styles.navText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
                <Ionicons name="play-circle" size={24} color="white" />
                <Text style={styles.activeNavText}>Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="folder-outline" size={24} color="#888" />
                <Text style={styles.navText}>Media Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="menu-outline" size={24} color="#888" />
                <Text style={styles.navText}>More</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#25202D',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    tabButton: {
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        marginTop: 4,
        color: '#A6A6A6',
    },
    navItem: { alignItems: "center" },
    navText: { fontSize: 12, color: "#888", marginTop: 4 },
    activeNavItem: { alignItems: "center" },
    activeNavText: { fontSize: 12, color: "white", marginTop: 4 },
});