import React from 'react'

import AppHeader from '../app-header/'
import SearchPanel from '../seacrh-panel/'
import PostStatusFilter from '../post-status-filter/'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'


const App = () => {
    const data = [
        {label: 'going to learn react', important: true, id:'asf'},
        {label: 'its so cool', important: false, id:'wrew'},
        {label: 'i think php is better', important: true, id:'dwerf'},

    ]
    return (
    <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList data={data}/>
        <PostAddForm/>
    </div>    
    )
}

export default App