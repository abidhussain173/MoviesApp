import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    MoviesListContainer: undefined;
    MovieDetail: { itemData: any };
    TicketsSelection: undefined;
    SeatSelectionScreen: undefined;
    VideoPlayerScreen: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>;

export type RouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;
