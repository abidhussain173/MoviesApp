import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import seatSelectionStyles from './seatSelectionStyles';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

type Props = {
    navigation: any;
    route: any;
};


const SeatSelectionScreen: React.FC<Props> = ({ navigation, route }) => {
    const { title, date, selectedShowtime } = route?.params

    return (
        <SafeAreaView style={seatSelectionStyles.container}>
            <Header title={title} date={date} />
            <View style={seatSelectionStyles.showtimeCard}>
                <View style={seatSelectionStyles.numContainer}>
                    {[...Array(10)].map((_, i) => (
                        <Text key={i} style={seatSelectionStyles.numbers}>{i + 1}</Text>
                    ))}
                </View>
                <Image source={require('../../assests/images/ticketsGroup_image.png')} style={seatSelectionStyles.showtimeImage} resizeMode="contain" />
            </View>
            <View style={seatSelectionStyles.btnsContainer}>
                <View style={seatSelectionStyles.plusBtn}>
                    <AntDesign name="plus" color={"black"} size={30} />
                </View>
                <View style={seatSelectionStyles.plusBtn}>
                    <AntDesign name="minus" color={"black"} size={30} />
                </View>
            </View>
            <View style={seatSelectionStyles.indicator} />
            <View style={seatSelectionStyles.seatViewContainer}>
                <View style={seatSelectionStyles.seatsImgMainContainer}>
                    <View style={seatSelectionStyles.seatImgContainer}>
                        <Image source={require('../../assests/images/seatImg.png')} tintColor={'#CD9D0F'} />
                        <Text style={seatSelectionStyles.seatTxt}>Selected</Text>
                    </View>
                    <View style={seatSelectionStyles.seatImgContainer}>
                        <Image source={require('../../assests/images/seatImg.png')} tintColor={'#A6A6A6'} />
                        <Text style={seatSelectionStyles.seatTxt}>Not available</Text>
                    </View>
                    <View />
                </View>
                <View style={seatSelectionStyles.seatsImgMainContainer}>
                    <View style={seatSelectionStyles.seatImgContainer}>
                        <Image source={require('../../assests/images/seatImg.png')} tintColor={'#564CA3'} />
                        <Text style={seatSelectionStyles.seatTxt}>VIP (150$)</Text>
                    </View>
                    <View style={seatSelectionStyles.seatImgContainer}>
                        <Image source={require('../../assests/images/seatImg.png')} tintColor={'#61C3F2'} />
                        <Text style={seatSelectionStyles.seatTxt}>Regular (50 $)</Text>
                    </View>
                    <View />
                </View>
                <View style={seatSelectionStyles.crossContainer}>
                    <Text style={seatSelectionStyles.crossTxt}>4 / 3 row</Text>
                    <Entypo name="cross" color={"black"} size={25} />
                </View>
            </View>
            <View style={seatSelectionStyles.btnContainer}>
                <View style={seatSelectionStyles.priceContainer}>
                    <Text style={seatSelectionStyles.totalPriceTxt}>Total Price</Text>
                    <Text style={seatSelectionStyles.price}>$ 50</Text>
                </View>
                <CustomButton
                    title='Proceed to pay'
                    buttonStyle={{ width: '60%' }}
                />
            </View>
        </SafeAreaView>
    )
}

export default SeatSelectionScreen