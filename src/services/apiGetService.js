import apiService from './apiService';

// Use 'type' for api sub-route
// id isn't mandatory. Call Example: apiGetService( 'posts' ), apiGetService( 'posts', 1 )
const apiGetService = async ( type, id = '' ) => {

    try {
        const response = await apiService.get(`/${ type }/${ id }`);
        return await response.data;
    } catch (error) {
        return error;
    }

}

export default apiGetService;
