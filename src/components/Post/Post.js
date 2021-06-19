import React from 'react';
import './Post.css';
import { Comment } from '../Comment/Comment';
export const Post = ( {data} ) => {

    return (
        <div className='col'>
            <div className='card m-3 shadow border-0 animate__animated animate__fadeIn'>
                
                <img
                    src={ `https://picsum.photos/id/${ Math.floor(Math.random() * 101) + 1 }/400` /* Get random image from PicSum */ }
                    className='card-img-top'
                    alt={ `${ data.id }` }
                />
                <div className='card-body'>
                    <h5 className='card-title my-2'>
                        [ { data.title } ]
                    </h5>
                    <div className='my-3 blockquote-footer'>
                        { data.body }
                    </div>
                    <div className='border-top mb-3 pt-3 text-right'>
                        <span className='span-footer fw-light fst-italic text-muted'>
                            0 comments
                            <Comment id={ data.id }/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
