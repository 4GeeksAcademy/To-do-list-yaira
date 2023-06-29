import React from 'react';

const BottomPart = (props) => {
    return(
        <div className="bottompart">
            todos {props.todos.length}
        </div>
    )
}

export default BottomPart