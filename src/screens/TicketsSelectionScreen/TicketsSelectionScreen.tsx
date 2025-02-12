import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { ticketsSelectionStyles } from './ticketsSelectionStyles';
import DateCard from '../../components/DateCard';
import CineTechHallCard from '../../components/CinetechHallCard';
import { dates, showtimes } from '../../constant/constant';
import { Showtime } from './types';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

type Props = {
    navigation: any;
    route: any;
};

const TicketsSelectionScreen: React.FC<Props> = ({ navigation, route }) => {
    const { title, date } = route?.params
    const [selectedDate, setSelectedDate] = useState(dates[0]);
    const [selectedShowtime, setSelectedShowtime] = useState(showtimes[0]);

    const handleDateSelection = (date: string) => {
        setSelectedDate(date);
        setSelectedShowtime(showtimes[0]);
    };

    const handleShowtimeSelection = (showtime: Showtime) => {
        setSelectedShowtime(showtime);
    };

    const handleSelectSeats = () => {
        navigation.navigate('SeatSelectionScreen', {
            title,
            date,
            selectedShowtime,
        });
    };

    const renderDateItem = ({ item }: { item: string }) => (
        <DateCard date={item} isSelected={selectedDate === item} onPress={handleDateSelection} />
    );

    const renderShowtimeItem = ({ item }: { item: Showtime }) => (
        <CineTechHallCard showtime={item} isSelected={selectedShowtime.id === item.id} onPress={handleShowtimeSelection} />
    );

    return (
        <SafeAreaView style={ticketsSelectionStyles.container}>
            <Header title={title} date={date} />
            <View>
                <View style={ticketsSelectionStyles.dateContainer}>
                    <Text style={ticketsSelectionStyles.sectionTitle}>Date</Text>
                    <FlatList
                        data={dates}
                        renderItem={renderDateItem}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={ticketsSelectionStyles.dateRow}
                    />

                </View>
                <View style={ticketsSelectionStyles.showtimeContainer}>
                    <FlatList
                        data={showtimes}
                        renderItem={renderShowtimeItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={ticketsSelectionStyles.showtimeList}
                    />
                </View>
            </View>
            <View />
            <CustomButton
                onPress={handleSelectSeats}
                title="Select Seats"
            />
        </SafeAreaView>
    )
}
export default TicketsSelectionScreen