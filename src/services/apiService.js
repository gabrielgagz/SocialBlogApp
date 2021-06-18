import axios from 'axios';

const apiService = async ( type, id = '', url ) => {

    const apiUrl = axios.create({
        baseURL: ( url ),
    });

    const response = await apiUrl.get(`/${ type }/${ id }`);
    return await response.data;

}

export default apiService;