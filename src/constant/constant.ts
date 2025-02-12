import { Showtime } from "../screens/TicketsSelectionScreen/types";

export const image_base_url = 'https://image.tmdb.org/t/p/w500';
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const API_KEY = '936d022da92f1ded78958d964aee6d67';


export const dates = [
    '5 Mar', '6 Mar', '7 Mar', '8 Mar', '9 Mar',
    '10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar',
    '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar'
];
export const showtimes: Showtime[] = [
    {
        id: '1',
        cinema: 'Cinetech + Hall 1',
        time: '12:30',
        price: '50$',
        bonus: '2500 bonus',
        image: require('../assests/images/ticket_img.png'),
    },
    {
        id: '2',
        cinema: 'Cinetech + Hall 2',
        time: '13:30',
        price: '75$',
        bonus: '300 bonus',
        image: require('../assests/images/ticket_img.png'),
    },
];


export const genres = ['Action', 'Thriller', 'Science', 'Fiction'];
export const genreColors = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'];