import React, { Component} from 'react';
import Post from './Post';
export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src ="http://usarest.ru/wp-content/uploads/2012/07/yosemitskiy-nacionalniy-park.jpg"/> 
            </div>
        )
    }
}