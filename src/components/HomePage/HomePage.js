import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import { Post } from '../Post/Post';
import './HomePage.css';

export const HomePage = () => {

    const [ postState, setPostState] = useState({});

    useEffect(() => {
        
        (async () => {

            const data = await apiService('posts');
            setPostState( data );

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
