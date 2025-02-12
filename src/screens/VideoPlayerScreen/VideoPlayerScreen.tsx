import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import BackIcon from 'react-native-vector-icons/Ionicons';

type Props = {
    navigation: any;
    route: any;
};

const VideoPlayerScreen: React.FC<Props> = ({ navigation, route }) => {
    const { trailerId } = route.params;
    console.log("trailerId", trailerId)
    const [isPlaying, setIsPlaying] = useState(true);
    const handleVideoEnd = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <YoutubePlayer
                height={300}
                play={isPlaying}
                videoId={trailerId}
                onChangeState={(event) => {
                    if (event === 'ended') {
                        handleVideoEnd();
                    }
                }}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <BackIcon name="close" color={"white"} size={30} />
            </TouchableOpacity>
        </View>
    );
};

export default VideoPlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
    },
});