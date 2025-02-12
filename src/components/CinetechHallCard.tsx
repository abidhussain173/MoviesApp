import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleProp, ViewStyle } from 'react-native';
import { ticketsSelectionStyles } from '../screens/TicketsSelectionScreen/ticketsSelectionStyles';

type Showtime = {
    id: string;
    cinema: string;
    time: string;
    price: string;
    bonus: string;
    image: any;
};

type ShowtimeCardProps = {
    showtime: Showtime;
    isSelected: boolean;
    onPress: (showtime: Showtime) => void;
};

const CineTechHallCard: React.FC<ShowtimeCardProps> = ({ showtime, isSelected, onPress }) => {
    return (
        <View>
            <View style={ticketsSelectionStyles.cinemaDetails}>
                <Text style={ticketsSelectionStyles.timeText}>{showtime.time}</Text>
                <Text style={ticketsSelectionStyles.cinemaText}>{showtime.cinema}</Text>
            </View>
            <TouchableOpacity
                onPress={() => onPress(showtime)}
                style={[
                    ticketsSelectionStyles.showtimeCard,
                    isSelected && ticketsSelectionStyles.selectedShowtimeCard,
                ]}
            >
                <Image source={showtime.image} style={ticketsSelectionStyles.showtimeImage} resizeMode="contain" />
            </TouchableOpacity>
            <View style={ticketsSelectionStyles.bonusDetails}>
                <Text style={ticketsSelectionStyles.fromTxt}>From</Text>
                <Text style={ticketsSelectionStyles.bonusText}>{showtime.price}</Text>
                <Text style={ticketsSelectionStyles.fromTxt}>or</Text>
                <Text style={ticketsSelectionStyles.bonusText}>{showtime.bonus}</Text>
            </View>
        </View>
    );
};

export default CineTechHallCard;