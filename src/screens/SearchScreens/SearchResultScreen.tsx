import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../screensTypes/screensTypes";
import { image_base_url } from "../../constant/constant";
import { Movie } from "../MoviesList/dataTypes";
import Entypo from "react-native-vector-icons/Entypo";
import BackIcon from 'react-native-vector-icons/Ionicons';
import CustomBottomTab from "../../components/CustomBottomTab";

type SearchResultScreenRouteProp = RouteProp<RootStackParamList, "SearchResultScreen">;

type Props = {
    route: SearchResultScreenRouteProp;
    navigation: any
};

const SearchResultScreen: React.FC<Props> = ({ route, navigation }) => {
    const { results } = route.params;

    const handleSearch = () => {
        navigation.navigate('MoviesListContainer')
    }

    const renderItem = ({ item }: { item: Movie }) => (
        <View key={item.id.toString()} style={styles.searchCardItem}>
            <View style={styles.searchImgContainer}>
                <TouchableOpacity
                    style={styles.searchCard}>
                    <Image
                        source={{ uri: `${image_base_url}${item.backdrop_path}` }}
                        style={styles.searchImage}
                    />
                </TouchableOpacity>
                <Text style={styles.searchCardTitle}>{item.title}</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={20} color="#202C43" />
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIconContainer} onPress={handleSearch}>
                <BackIcon name="chevron-back" color={"black"} size={30} />
                <Text style={styles.resultsText}>{results.length} Results Found</Text>
            </TouchableOpacity>
            <FlatList
                data={results}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
            <CustomBottomTab />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    backIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    searchCardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
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
    searchCardTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginStart: 10,
        width: "50%",
        color: '#202C43',
    },
    resultsText: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 10,
        color: "#202C43",
        marginTop: 8
    },
    listContainer: {
        paddingBottom: 20,
    },
    resultItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
    },
    resultImage: {
        width: 100,
        height: 80,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#202C43",
    },
});

export default SearchResultScreen;