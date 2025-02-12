import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { ticketsSelectionStyles } from '../screens/TicketsSelectionScreen/ticketsSelectionStyles';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
    title: string;
    date?: string;
};
const Header: React.FC<HeaderProps> = ({ title, date }) => {
    const navigation = useNavigation()
    const onBackPress = () => {
        navigation.goBack()
    }
    return (
        <View style={ticketsSelectionStyles.headerContainer}>
            <TouchableOpacity style={ticketsSelectionStyles.backIcon} onPress={onBackPress}>
                <BackIcon name="chevron-back" color={"black"} size={30} />
            </TouchableOpacity>
            <View style={ticketsSelectionStyles.titleDateContainer}>
                <Text style={ticketsSelectionStyles.headerTxt}>{title}</Text>
                {date && <Text style={ticketsSelectionStyles.dateTxt}>In Theaters {date}</Text>}
            </View>
            <View />
        </View>
    );
};
export default Header;