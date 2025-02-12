import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ticketsSelectionStyles } from '../screens/TicketsSelectionScreen/ticketsSelectionStyles';

type DateItemProps = {
    date: string;
    isSelected: boolean;
    onPress: (date: string) => void;
};

const DateCard: React.FC<DateItemProps> = ({ date, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={[
                ticketsSelectionStyles.dateButton,
                isSelected && ticketsSelectionStyles.selectedDateButton,
            ]}
            onPress={() => onPress(date)}
        >
            <Text
                style={[
                    ticketsSelectionStyles.dateText,
                    isSelected && ticketsSelectionStyles.selectedDateText,
                ]}
            >
                {date}
            </Text>
        </TouchableOpacity>
    );
};

export default DateCard;