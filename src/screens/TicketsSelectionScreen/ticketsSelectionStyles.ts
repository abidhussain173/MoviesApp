import { StyleSheet } from "react-native";

export const ticketsSelectionStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 16,
        paddingTop: 20,
    },
    button: {
        backgroundColor: '#61c3f2',
        margin: 10,
        width: "90%",
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "bold",
    },
    backIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: 16,
        color: 'black',
        fontWeight: 500
    },
    titleDateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
    },
    dateTxt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#61C3F2',
    },

    dateContainer: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        color: '#202C43'
    },
    dateRow: {
        flexDirection: 'row',
    },
    dateButton: {
        backgroundColor: '#A6A6A61A',
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 10,
    },
    selectedDateButton: {
        backgroundColor: '#61c3f2',
    },
    dateText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#202C43'
    },
    selectedDateText: {
        color: '#fff',
    },


    showtimeContainer: {
        padding: 16,
    },
    showtimeList: {
        paddingHorizontal: 10,
    },
    selectedShowtimeCard: {
        borderColor: '#61c3f2',
    },
    showtimeCard: {
        width: 220,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: 1.5,
        borderColor: '#8F8F8F'
    },
    showtimeImage: {
        flex: 1,
    },
    cinemaDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    cinemaText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#8F8F8F',
        marginStart: 5,
    },
    timeText: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
    },
    bonusDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginStart: 5,
    },
    bonusText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 5
    },
    fromTxt: {
        fontSize: 12,
        fontWeight: '500',
        color: '#8F8F8F',
    }
});