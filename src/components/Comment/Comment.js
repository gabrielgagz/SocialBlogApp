import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CommentForm } from './components/CommentForm';
import './Comment.css';

export const Comment = ( {id} ) => {

    // Filter data by postId
    const postComments = useSelector( state => state.comment.data.filter( data => data.postId === id ) );
    const [countInitialState, setCountInitialState] = useState(0);
    const [countState, setCountState] = useState(0);

    // Set the initial state of comments count
    useEffect(() => {
        setCountInitialState(postComments.length -1)
    }, [ postComments ])


    return (
        <div className='d-grid gap-2' key={ id }>
            <button 
                className='btn fw-light fst-italic text-muted py-0'
                onClick={ () => setCountState( countState < countInitialState ? countState +1 : 0  ) }
            >
                { (countInitialState - countState) || 'No more' } comments ...
            </button>
                {
                    ( postComments && postComments.length > 0 )
                        && postComments.reverse().slice(0, countState +1 ).map( ( data ) => {
                        return (
                            <div className='px-3 animate__animated animate__bounceIn' key={ data.id }>
                                <p className='my-2 fw-lighter fw-bold'>
                                    <span className='fas fa-user-circle me-2 mt-1 comment__user-face'></span>
                                    { data.email }
                                </p>
                                <p className='fs-6'> 
                                    { data.body }
                                </p>
                            </div>
                        )  
                    })
                }
                <CommentForm id={ id } />
        </div>
        
    )
}
