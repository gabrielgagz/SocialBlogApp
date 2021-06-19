import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService';

export const HomePage = () => {

    const [ postState, setPostState] = useState({});

    useEffect(() => {
        
        (async () => {

            const data = await apiService('posts');
            setPostState( data );

        })();

        console.log( postState );

    }, [ postState ]);

    return (
        <>
            
        </>
    )
}
