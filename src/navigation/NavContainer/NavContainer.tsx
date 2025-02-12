import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '../RootStack/RootStack';

const NavContainer: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    )
}

export default NavContainer