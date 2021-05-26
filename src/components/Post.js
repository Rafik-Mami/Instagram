import React ,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Post.css'
function Post({caption ,username,imageUrl}) {

    return (
        <div className='post'>
            {/*header_>avatar+username*/}
            <div className='post__header'>
                <Avatar className='post__avatar' alt='RafehQazi' src="/static/images/avatar/jpg" />
            <h1>{username}</h1>
            </div>

            {/*image*/}


            <img className='post__image' src={imageUrl} />
            <h4 className='post__text'><strong> Rafik</strong> {caption} </h4>
        </div>
    )
}

export default Post
