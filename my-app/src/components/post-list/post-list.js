import React from 'react'
import './post-list.css'

import PostListItem from '../post-list-item'



const PostList = (props) => {
    
    let postListArr = props.data.map(el => {
        const {key, ...itemProps} = el
    return (       
    <li key={el.id} className='list-group-item'>
       <PostListItem 
       {...itemProps} 
       onDelete={() => props.onDelete(el.id)}
       onToggleImportant={() => props.onToggleImportant(el.id)}
       onToggleLiked={() => props.onToggleLiked(el.id)}/>
    </li>
       )
    })
    return (
        <ul className="app-list list-group">
             
            {postListArr}

        </ul>
        
    )
}

export default PostList