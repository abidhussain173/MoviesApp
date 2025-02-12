import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MoviesListUi from './MoviesListUi'
import axios from 'axios';
import { NavigationProps } from '../../screensTypes/screensTypes';
import { ApiResponse, Movie } from './dataTypes';
import { API_KEY, BASE_URL } from '../../constant/constant';

const API_URL = `${BASE_URL}upcoming?api_key=${API_KEY}`;

type Props = {
    navigation: NavigationProps<'MoviesListContainer'>;
};
const MoviesListContainer: React.FC<Props> = ({ navigation }) => {
    const [moviesList, setMoviesList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get<ApiResponse>(API_URL);
            const moviesListData = response.data.results;
            setMoviesList(moviesListData);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <MoviesListUi
            moviesList={moviesList}
            navigation={navigation}
        />
    )
}

export default MoviesListContainer

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16
    },
})