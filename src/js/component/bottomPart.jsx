import React from 'react';

const BottomPart = (props) => {


    const footerMessage = (props) => {
        let somethingIsAdded = props.somethingIsAdded
        if(somethingIsAdded){
            return <quantity/>
        }
    }

    return(
        <div className="bottompart">
             {props.todos.length}
        </div>
    )
}

export default BottomPart