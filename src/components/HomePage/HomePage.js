import React, { useEffect, useState } from 'react';
import apiGetService from '../../services/apiGetService';
import { Post } from '../Post/Post';
import { useDispatch } from 'react-redux';
import { storeAllComments } from '../../features/comment/commentSlice';
import './HomePage.css';

export const HomePage = () => {

    const [ postState, setPostState ] = useState({});
    const [loadedPosts, setLoadedPosts] = useState(3);
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
                    (postState && postState.length > 0) && postState.slice(0, loadedPosts).map( ( postData ) => {
                        return <Post data={ postData } key={ postData.id }/>
                    }) 
                }
            </div>
            <button 
            className='btn HomePage__btn-more mt-3 mb-5 p-3 mx-auto d-block'
            onClick={ ()  => setLoadedPosts( loadedPosts + 3 ) }
            >
                VER MORE POSTS
            </button>
        </div>
    )
}
