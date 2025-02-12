import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import BackIcon from 'react-native-vector-icons/Ionicons';

type Props = {
    navigation: any;
    route: any;
};

const VideoPlayerScreen: React.FC<Props> = ({ navigation, route }) => {
    const { trailerUrl } = route.params;
    const videoRef = useRef<any>(null);

    // Handle video end event
    const handleVideoEnd = () => {
        navigation.goBack(); // Navigate back to the detail screen
    };

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={{ uri: trailerUrl }}
                style={styles.videoPlayer}
                controls={true}
                fullscreen={true}
                onEnd={handleVideoEnd} // Automatically navigate back when video ends
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
    },
    videoPlayer: {
        width: '100%',
        height: '100%',
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