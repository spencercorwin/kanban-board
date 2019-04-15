import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ColumnContainer = styled.div`
    width: 100%;
    background-color: none;
    margin-left: ${props => props.left ? 0 : '12.5px'};
    margin-right: ${props => props.right ? 0 : '12.5px'};
`;

const TitleContainer = styled.h2`
    width: 100%;
    text-align: center;
    color: white;
    height: 30px;
    margin-top: 0;
    margin-bottom: 12px;
    background-color: ${props => {
        if (props.title === 'Winnie') {
            return '#8E6E95';
        } else if (props.title === 'Bob') {
            return '#39A59C';
        } else if (props.title === 'Thomas') {
            return '#344759';
        } else if (props.title === 'George') {
            return '#E8741E';
        }
    }}
`;


class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cards = this.props.cards.map(e => <Card 
            moveLeft={this.props.moveLeft}
            moveRight={this.props.moveRight}
            left={this.props.title === 'Winnie' ? true : false}
            right={this.props.title === 'George' ? true : false} content={e}/>)
        return (
            <ColumnContainer left={this.props.title === 'Winnie' ? true : false}
                             right={this.props.title === 'George' ? true : false}>
                <TitleContainer title={this.props.title}>{this.props.title}</TitleContainer>
                {cards}
                <p onClick={() => this.props.add(this.props.title)}>+ Add a card</p>
            </ColumnContainer>
        )
    }
}

export default Column;