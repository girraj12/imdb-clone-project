import axios from 'axios';

export const getCategoryMovies = async (API_URL) => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
        // console.log(response.json());
        // return data;
    } catch (error) {
        console.log('Error while getting popular movies data ', error.message);
        // console.log("i am here");
        return error.response.data;
    }
}