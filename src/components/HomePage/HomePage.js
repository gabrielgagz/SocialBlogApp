import React, { useEffect, useState } from 'react';
import apiGetService from '../../services/apiGetService';
import { Post } from '../Post/Post';
import { useDispatch } from 'react-redux';
import { storeAllComments } from '../../features/comment/commentSlice';
import './HomePage.css';

export const HomePage = () => {

    const [ postState, setPostState ] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        
        (async () => {

            // Store Posts in local state
            const pData = await apiGetService('posts');
            setPostState( pData );

            // Store Comments in Redux
            const cData = await apiGetService('comments');
            dispatch( storeAllComments(cData) );

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='container-fluid container-posts'>
            <div className='row row-cols-1 row-cols-md-3 my-5 justify-content-center'>
                { 
                    postState.length > 0 && postState.map( ( postData ) => {
                        return <Post data={ postData } key={ postData.id }/>
                    }) 
                }
            </div>
        </div>
    )
}
