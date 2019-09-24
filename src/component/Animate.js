import React from 'react';
import Item from './item.js';
import './Animate.css';

export default class Animate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    title: 'Vakmanschap en ambacht',
                    subContent: {
                        subTitle: 'Vakmanschap en ambacht',
                        content: "Ervaring is niet te koop, het is een kwestie van veel doen. Met aandacht en passie.Dat staat bij ons centraal."
                    }
                },
                {
                    title: 'Begeleiding op het werk',
                    subContent: {
                        subTitle: 'Vakmanschap en ambacht',
                        content: "Scholing of diploma’s vormen de basis voor onze collega’s. Het bewijs wordt echter geleverd in de praktijk. Vandaar dat wij onze mensen ook begeleiden tijdens hun"
                    }
                }
            ]
        };
    }
    render() {
        return (
            <ul class="blocks">
                {
                    this.state.list.map( item => {
                        return <Item title={item.title} subTitle={item.subContent.subTitle} content={item.subContent.content}/>;
                    })
                }
            </ul>
        )
    }
}