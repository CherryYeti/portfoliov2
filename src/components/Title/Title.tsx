import './Title.css';
import * as React from 'react';
function Title(props: {text: string} ){
    return(
        <div className="title">
            <h1>{props.text}</h1>
        </div>
    )
}
export default Title