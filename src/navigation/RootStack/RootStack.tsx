import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../screensTypes/screensTypes';
import MoviesListContainer from '../../screens/MoviesList/MoviesListContainer';
import MovieDetailScreen from '../../screens/MovieDetailScreen/MovieDetailScreen';
import TicketsSelectionScreen from '../../screens/TicketsSelectionScreen/TicketsSelectionScreen';
import SeatSelectionScreen from '../../screens/SeatsSelectionScreen/SeatSelectionScreen';
import VideoPlayerScreen from '../../screens/VideoPlayerScreen/VideoPlayerScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="MoviesListContainer" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MoviesListContainer" component={MoviesListContainer} />
            <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
            <Stack.Screen name="TicketsSelection" component={TicketsSelectionScreen} />
            <Stack.Screen name="SeatSelectionScreen" component={SeatSelectionScreen} />
            <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
            {/* <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
            <Stack.Screen name="MovieDetail" component={MovieDetailScreen} /> */}
        </Stack.Navigator>
    )
}

export default RootStack