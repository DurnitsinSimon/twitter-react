import React from 'react'

import AppHeader from '../app-header/'
import SearchPanel from '../seacrh-panel/'
import PostStatusFilter from '../post-status-filter/'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           data : [
                {label: 'going to learn react', important: true, id:1},
                {label: 'its so cool', important: false, id:2},
                {label: 'i think php is better', important: true, id:3},
        
            ]
        }  
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.maxId = 4

    }

    deleteItem( id ){
        
        this.setState(({data}) => {
            console.log(data);
            const index = data.findIndex( elem => elem.id === id)
            const before = data.slice(0, index)
            const after = data.slice(index + 1)

            const newArr = [...before, ...after]
            console.log(before, after);
            return {
                data: newArr
            }
        })
    }

    addItem(body){
        const newItem = {label: body, important: false, id:this.maxId++}
        this.setState(({data}) => {
            const newArray = [...data, newItem]
            
            return {
                data: newArray
            }
        })
    }
    
    
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList data={this.state.data} onDelete={this.deleteItem}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>    
    )}
}

