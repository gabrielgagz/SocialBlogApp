import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeAllComments, commentSelector } from '../../features/comment/commentSlice';
import apiGetService from '../../services/apiGetService';
import './Comment.css';

export const Comment = ( {id} ) => {

    const dispatch = useDispatch();
    const postComments = useSelector(commentSelector);

    useEffect(() => {

        (async () => {
            const data = await apiGetService(`posts/${ id }/comments`);
            dispatch( storeAllComments(data) );
        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ dispatch ]);

    return (
        <div>
        </div>
    )
}
