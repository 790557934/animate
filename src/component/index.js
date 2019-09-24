import React from 'react';
import './index.css';

const AnimateComponent = (props) => {
    const { oneContent, twoContent } = props;
    return (
        <div class="container-detailed">
            <div class="hover-hidden1" onMouseOver={props.mouseOver} onMouseOut={props.mouseOut}>
                {
                    oneContent
                }
            </div>
            <div class="hover-show1">
                {
                    twoContent
                }
            </div>
        </div>
    )
};
export default AnimateComponent;