import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomBottomTab from "../../components/CustomBottomTab";
import { ApiResponse, Movie } from "../MoviesList/dataTypes";
import axios from "axios";
import { API_KEY, BASE_URL, image_base_url } from "../../constant/constant";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screensTypes/screensTypes";
import { useNavigation } from "@react-navigation/native";

const API_URL = `${BASE_URL}upcoming?api_key=${API_KEY}`;
type SearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SearchScreen">;
const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    const insets = useSafeAreaInsets();
    const [moviesList, setMoviesList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const navigation = useNavigation<SearchScreenNavigationProp>();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get<ApiResponse>(API_URL);
            const moviesListData = response.data.results;
            setMoviesList(moviesListData);
            setFilteredMovies(moviesListData);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };
    const handleSearchSubmit = () => {
        if (searchText.trim().length > 0) {
            const filtered = moviesList.filter((movie) =>
                movie.title.toLowerCase().includes(searchText.toLowerCase())
            );
            navigation.navigate("SearchResultScreen", { results: filtered });
        }
    };

    const handleSearchText = (text: string) => {
        setSearchText(text);
        if (text) {
            const filtered = moviesList.filter((movie) =>
                movie.title.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredMovies(filtered);
        } else {
            setFilteredMovies(moviesList);
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

    const renderSearchCard = () => {
        if (filteredMovies.length === 0) {
            return (
                <View style={styles.noResultsContainer}>
                    <Text style={styles.noResultsText}>No results found</Text>
                </View>
            );
        }

        return (
            <View style={styles.searchCardContainer}>
                <Text style={styles.searchCardText}>Top Results</Text>
                <View style={styles.lineSeparator} />
                {filteredMovies.map((movie) => (
                    <View key={movie.id.toString()} style={styles.searchCardItem}>
                        <View style={styles.searchImgContainer}>
                            <TouchableOpacity style={styles.searchCard}>
                                <Image
                                    source={{ uri: `${image_base_url}${movie.backdrop_path}` }}
                                    style={styles.searchImage}
                                />
                            </TouchableOpacity>
                            <Text style={styles.searchCardTitle}>{movie.title}</Text>
                        </View>
                        <Entypo name="dots-three-horizontal" size={20} color="#202C43" />
                    </View>
                ))}
            </View>
        );
    };

    const renderCategory = ({ item }: { item: Movie }) => (
        <TouchableOpacity style={styles.card}>
            <ImageBackground
                source={{ uri: `${image_base_url}${item.backdrop_path}` }}
                style={styles.image}
                imageStyle={{ borderRadius: 10 }}
            >
                <View style={styles.overlay}>
                    <Text style={styles.categoryText}>{item.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <View style={styles.searchContainer}>
                <Icon
                    name="search-outline"
                    size={20}
                    color="#202C43"
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search movies by title"
                    placeholderTextColor="#888"
                    value={searchText}
                    onChangeText={handleSearchText}
                    onSubmitEditing={handleSearchSubmit}
                    returnKeyType="go"
                />
                {searchText.trim().length > 0 && (
                    <TouchableOpacity onPress={() => handleSearchText("")}>
                        <Icon
                            name="close-circle"
                            size={35}
                            color="#888"
                            style={styles.clearIcon}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {searchText ? (
                renderSearchCard()
            ) : (
                <FlatList
                    data={filteredMovies}
                    renderItem={renderCategory}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                />
            )}

            {searchText.length === 0 && <CustomBottomTab />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8"
    },
    searchContainer: {
        flexDirection: "row",
        backgroundColor: "#EFEFEF",
        margin: 10,
        padding: 10,
        borderRadius: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
    },
    searchIcon: {
        marginStart: 10
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
        color: "black"
    },
    clearIcon: {
        marginLeft: 10
    },
    listContainer: {
        padding: 10
    },
    lineSeparator: {
        width: "100%",
        height: 2,
        backgroundColor: 'grey',
        marginBottom: 10
    },
    card: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: "hidden"
    },
    searchImgContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchCard: {
        width: 120,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    searchImage: {
        width: 120,
        height: 100,
        justifyContent: "flex-end"
    },
    image: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: 10
    },
    categoryText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        color: "red",
        fontSize: 16,
    },
    searchCardContainer: {
        padding: 10,
    },
    searchCardText: {
        fontSize: 12,
        fontWeight: "500",
        marginBottom: 10,
        color: '#202C43'
    },
    searchCardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchCardTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginStart: 10,
        width: "50%",
        color: '#202C43'
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noResultsText: {
        fontSize: 18,
        color: "#888",
    },
});
export default SearchScreen;