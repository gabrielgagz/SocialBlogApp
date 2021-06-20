import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeNewComment } from '../../../features/comment/commentSlice';
import { useForm } from '../../../hooks/useForm';

export const CommentForm = ( {id} ) => {

    const dispatch = useDispatch();
    const user = useSelector( state => state.user.data.email );


    // Set the initial values of form
    const initialForm = {
        postId: 0,
        email: '',
        title: '',
        body: ''
    };

    const [ values, handleInputChange, reset ] = useForm(initialForm);
    const { body } = values;

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // Save comment in store
        dispatch(storeNewComment(
            {
                // This simulates an unique id (NOT!) 
                id: Math.random(),
                postId: id,
                name: 'lorem ipsum martin san',
                email: user,
                title: '',
                body
            }
        ));

        // Reset form
        reset();
    }

    return (
        <form onSubmit={ handleSubmit } className='pt-3'>
            <div className='input-group mb-2 pe-2'>
                <span className='fas fa-user-circle fa-2x me-3 mt-1 comment__user-face'></span>
                <input
                    autoComplete='off'
                    type='text' 
                    className='form-control border-bottom border-0' 
                    name='body'
                    placeholder='Write a comment...' 
                    onChange={ handleInputChange }
                    value={ body }
                    required
                />
            </div>
        </form>
    )
}
