import { StyleSheet } from 'react-native';

const seatSelectionStyles = StyleSheet.create({
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
    dateButton: {
        backgroundColor: '#A6A6A61A',
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 10,
    },
    showtimeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    showtimeImage: {
        width: "90%",
        height: 300,
    },
    numContainer: {
        marginTop: 33,
        marginEnd: 5
    },
    numbers: {
        fontSize: 9.5,
    },
    btnsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10,
        marginEnd: 10
    },
    plusBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusMinus: {
        fontSize: 30,
        color: 'black'
    },
    indicator: {
        width: "90%",
        height: 6,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: "grey",
        marginTop: 20
    },
    seatViewContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        paddingTop: 20
    },
    seatsImgMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    seatImgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    seatTxt: {
        fontSize: 12,
        color: '#8F8F8F',
        marginStart: 10
    },
    crossContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "35%",
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(166, 166, 166, 0.1)',
        margin: 10
    },
    crossTxt: {
        fontSize: 14,
        color: 'rgba(32, 44, 67, 1)'
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    button: {
        backgroundColor: '#61c3f2',
        margin: 10,
        width: "60%",
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 14,
        fontWeight: "600",
    },
    priceContainer: {
        width: "30%",
        height: 55,
        borderRadius: 10,
        // backgroundColor: '#A6A6A6',
        backgroundColor: 'rgba(166, 166, 166, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalPriceTxt: {
        fontSize: 10,
        color: 'rgba(32, 44, 67, 1)',
        fontWeight: '400'
    },
    price: {
        fontSize: 16,
        color: 'rgba(32, 44, 67, 1)',
        fontWeight: '600'
    }
});

export default seatSelectionStyles;