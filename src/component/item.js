import React from 'react';
import './Animate.css';

const Item = (props) => {
    return (
        <li>{props.title}
            <div class="popup">
                <span>
                    <h3>{props.subTitle}</h3>
                    {props.content}
                </span>
            </div>
        </li>
    )
};

export default Item;