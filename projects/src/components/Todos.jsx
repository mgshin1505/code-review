import React from 'react';

const Todos = (props) => {

    console.log('------>', props);

    return(
        <div className="Todos">
            <h2>{props.title}</h2>
            <ul>
                {props.items.map((item, index)=>{
                    return <li key={{}+index}><input type="checkbox"/>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export function x() {
    return 1;
}

export default Todos;
