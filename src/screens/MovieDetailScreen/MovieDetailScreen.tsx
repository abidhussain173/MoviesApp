import { Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL, genreColors, genres, image_base_url } from '../../constant/constant';
import BackIcon from 'react-native-vector-icons/Ionicons';
import PlayIcon from 'react-native-vector-icons/Octicons';
import axios from 'axios';
import { movieDetailStyles } from './movieDetailStyles';
import CustomButton from '../../components/CustomButton';

type Props = {
    navigation: any;
    route: any;
};

const MovieDetailScreen: React.FC<Props> = ({ navigation, route }) => {
    const { itemData } = route.params
    const { id, poster_path, backdrop_path, overview, release_date, title, genre_ids } = itemData;
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
    const formattedDate = new Date(release_date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    useEffect(() => {
        fetchTrailerUrl();
    }, []);

    const fetchTrailerUrl = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}${id}/videos?api_key=${API_KEY}`
            );
            const data = response?.data
            const trailer = data.results.find((video: any) => video.type === 'Trailer');
            if (trailer) {
                console.log("trailer", trailer?.key)
                setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
            }
        } catch (error) {
            console.error('Error fetching trailer:', error);
        }
    };

    const openTrailer = () => {
        if (trailerUrl) {
            navigation.navigate('VideoPlayerScreen', { trailerUrl });
        } else {
            console.log('No trailer available for this movie.');
        }
    };

    const getTickets = () => {
        navigation.navigate('TicketsSelection', { title: title, date: formattedDate })
    }

    return (
        <ScrollView style={movieDetailStyles.container}>
            <ImageBackground source={{ uri: `${image_base_url}${backdrop_path}` }} style={movieDetailStyles.image}>
                <TouchableOpacity style={movieDetailStyles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon name="chevron-back" color={"white"} size={30} />
                    <Text style={movieDetailStyles.headerTxt}>Watch</Text>
                </TouchableOpacity>
                <View style={movieDetailStyles.btnTitleContainer}>
                    <View style={movieDetailStyles.titleContainer}>
                        <Text style={movieDetailStyles.title}>{title}</Text>
                    </View>
                    <View style={movieDetailStyles.titleContainer}>
                        <Text style={movieDetailStyles.dateTxt}>In Theaters {formattedDate}</Text>
                    </View>
                    <CustomButton
                        title='Get Tickets'
                        onPress={getTickets}
                        buttonStyle={{ width: '65%' }}
                    />
                    <TouchableOpacity
                        onPress={openTrailer}
                        style={[movieDetailStyles.button, movieDetailStyles.trailerButton]}>
                        <PlayIcon name="video" color={"white"} size={25} />
                        <Text style={[movieDetailStyles.buttonText, movieDetailStyles.trailerTxt]}>Watch Trailer</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={movieDetailStyles.genresContainer}>
                <Text style={movieDetailStyles.sectionTitle}>Genres</Text>
                <View style={movieDetailStyles.genres}>
                    {genres.map((genre, index) => (
                        <View
                            key={index}
                            style={[
                                movieDetailStyles.genreContainer,
                                { backgroundColor: genreColors[index % genreColors.length] }
                            ]}
                        >
                            <Text style={movieDetailStyles.genreText}>{genre}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={movieDetailStyles.lineSeparator} />
            <View style={movieDetailStyles.overviewContainer}>
                <Text style={movieDetailStyles.sectionTitle}>Overview</Text>
                <Text style={movieDetailStyles.overview}>{overview}</Text>
            </View>
        </ScrollView>
    );
};

export default MovieDetailScreen;
