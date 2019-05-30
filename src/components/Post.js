import React,{Component} from 'react';
import User from './User';
export default class Post extends Component {
    render(){
        return(
            <div className="post">
                <User 
                src="https://images.askmen.com/1080x540/2017/01/06-044621-the_pitfalls_of_dating_a_married_woman.jpg"
                alt="woman"
                name="something_girl"/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    some name
                </div>
                <div className="post__descr">
                    some info about person
                </div>
            </div>
        )
    }
}