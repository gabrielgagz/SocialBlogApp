import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeAllComments, commentSelector } from '../../features/comment/commentSlice';
import apiGetService from '../../services/apiGetService';
import './Comment.css';
import { useState } from 'react';

export const Comment = ( {id} ) => {

    const dispatch = useDispatch();
    const postComments = useSelector(commentSelector);
    const [commentState, setCommentState] = useState(0);
    // Set the initial state of comments count
    const [commentInitialState, setCommentInitialState] = useState();

    useEffect(() => {

        (async () => {
            const data = await apiGetService(`posts/${ id }/comments`);
            dispatch( storeAllComments(data) );
            // Set count to data length
            setCommentInitialState( data.length )
        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ dispatch ]);

    return (
        <div className='d-grid gap-2'>
            <button 
                className='btn fw-light fst-italic text-muted py-0'
                onClick={ () => setCommentState( commentState < commentInitialState ? commentState +1 : 0  ) }
            >
                { commentInitialState - commentState } comments ...
            </button>
                {
                    postComments.length > 0 && postComments.slice(0, commentState).map( ( data ) => {
                        return (
                            <div className='px-3 animate__animated animate__bounceIn'>
                                <p className='my-2 fw-lighter fw-bold boder-1'>
                                    <span className="fas fa-user-circle me-2 mt-1 comment__user-face"></span>
                                    {data.email }
                                </p>
                                <p className='fs-6'> 
                                    {data.body }
                                </p>
                            </div>
                        )  
                    })
                }
            <div className="input-group mb-2 pe-2">
                <span className="fas fa-user-circle fa-2x me-3 mt-1 comment__user-face"></span>
                <input type="text" className="form-control border-bottom border-0 " placeholder="Write a comment..." />
            </div>
        </div>
        
    )
}
