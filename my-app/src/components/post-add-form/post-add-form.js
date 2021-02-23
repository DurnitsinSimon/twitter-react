import React from 'react'
import './post-add-form.css'
const PostAddForm = ({onAdd}) => {
    const ref = React.createRef()

    return (
        <div className="bottom-panel d-flex">
            <input 
            ref={ref}
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => {
                    onAdd(ref.current.value)
                    ref.current.value = ''
                }}>
                    Добавить</button>
        </div>
    )
}

export default PostAddForm