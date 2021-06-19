import axios from 'axios';

const apiService = async ( type, id = '' ) => {

    const apiUrl = axios.create({
        baseURL: ( process.env.REACT_APP_API_URL ),
    });

    try {
        const response = await apiUrl.get(`/${ type }/${ id }`);
        return await response.data;
    } catch (error) {
        console.log( error );
    }

}

export default apiService;