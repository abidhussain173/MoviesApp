import { StyleSheet } from "react-native";

export const moviesListStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 16,
        paddingTop: 20,
    },
    header: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(32, 44, 67, 1)',
        marginBottom: 16,
    },
    imgCard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    titleContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
});