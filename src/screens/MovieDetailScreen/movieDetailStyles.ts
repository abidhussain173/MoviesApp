import { StyleSheet } from "react-native";

export const movieDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    headerTxt: {
        fontSize: 16,
        color: 'white',
        marginStart: 10
    },
    btnTitleContainer: {
        alignItems: 'center',
    },
    titleContainer: {
        // padding: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    dateTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#61c3f2',
        margin: 10,
        width: "65%",
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    trailerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 20,
        borderWidth: 1.5,
        borderColor: "#61c3f2"
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "bold",
    },
    trailerTxt: {
        marginStart: 10
    },
    genresContainer: {
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginVertical: 5,
    },
    genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    genreContainer: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 20,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    genreText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
    lineSeparator: {
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: '#8F8F8F',
        marginVertical: 10,
        alignSelf: 'center'
    },
    overviewContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    overview: {
        fontSize: 12,
        color: '#8F8F8F',
        fontWeight: '400',
    },
});