import React from 'react';
import User from './User';
export default function Users()
{
    return(
        <div className="right">
                <User 
                    src="https://wisetoast.com/wp-content/uploads/2015/10/Katherine-Elizabeth-Upton-most-beautiful-woman.jpg"
                    alt="woman"
                    name="woman-2"/>
            <div className="users__block">
                <User 
                    src="https://wisetoast.com/wp-content/uploads/2015/10/Katherine-Elizabeth-Upton-most-beautiful-woman.jpg"
                    alt="woman"
                    name="woman-2"
                    min/>
                <User 
                    src="https://wisetoast.com/wp-content/uploads/2015/10/Katherine-Elizabeth-Upton-most-beautiful-woman.jpg"
                    alt="woman"
                    name="woman-2"
                    min/>
            </div>
        </div>
    )
}