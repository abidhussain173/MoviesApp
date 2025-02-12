import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { ticketsSelectionStyles } from '../screens/TicketsSelectionScreen/ticketsSelectionStyles';

type CustomButtonProps = {
    title: string;
    onPress?: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[ticketsSelectionStyles.button, buttonStyle]}>
            <Text style={[ticketsSelectionStyles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};
export default CustomButton;