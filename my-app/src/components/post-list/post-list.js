import React from 'react'
import './post-list.css'

import PostListItem from '../post-list-item'



const PostList = (props) => {
    
    let postListArr = props.data.map(el => {
        const {key, ...itemProps} = el
    return (       
    <li key={key} className='list-group-item'>
       <PostListItem 
       {...itemProps} 
       onDelete={() => {
           props.onDelete(el.id)
       }}/>
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