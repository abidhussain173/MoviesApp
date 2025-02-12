import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Movie } from './dataTypes';
import { moviesListStyles } from './moviesListStyles';
import MovieListCard from '../../components/MoviesListCard';

type Props = {
    moviesList: Movie[];
    navigation: any;
};

const MoviesListUi: React.FC<Props> = ({ moviesList, navigation }) => {
    return (
        <SafeAreaView style={moviesListStyles.container}>
            <View style={moviesListStyles.headerContainer}>
                <Text style={moviesListStyles.header}>Watch</Text>
                <TouchableOpacity>
                    <AntDesign name="search1" color={"black"} size={25} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={moviesList}
                renderItem={({ item }) => <MovieListCard item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};
export default MoviesListUi;