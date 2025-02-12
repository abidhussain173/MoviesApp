import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../screens/MoviesList/dataTypes';
import { moviesListStyles } from '../screens/MoviesList/moviesListStyles';
import { image_base_url } from '../constant/constant';

type MovieListCardProps = {
    item: Movie;
    navigation: any;
};

const MovieListCard: React.FC<MovieListCardProps> = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            style={moviesListStyles.imgCard}
            onPress={() => navigation.navigate('MovieDetail', { itemData: item })}
        >
            <Image
                source={{ uri: `${image_base_url}${item?.backdrop_path}` }}
                style={moviesListStyles.image}
                resizeMode='cover'
            />
            <View style={moviesListStyles.titleContainer}>
                <Text style={moviesListStyles.title}>{item?.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieListCard;
