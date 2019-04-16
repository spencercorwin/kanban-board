import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ColumnContainer = styled.div`
    width: 100%;
    background-color: none;
    margin-left: ${props => props.columnIndex === 0 ? 0 : '12.5px'};
    margin-right: ${props => props.columnIndex === 3 ? 0 : '12.5px'};
`;

const TitleContainer = styled.h2`
    width: 100%;
    text-align: center;
    color: white;
    height: 30px;
    margin-top: 0;
    margin-bottom: 12px;
    background-color: ${props => props.color};
`;

const AddButton = styled.p`
    cursor: pointer;
`;

const Column = (props) => {
    const cards = props.data.cards.map(e => <Card 
                                            moveLeft={props.moveLeft}
                                            moveRight={props.moveRight}
                                            columnIndex={props.index}
                                            data={e}
                                            key={e.key}
                                        />)
    return (
        <ColumnContainer columnIndex={props.index}>
            <TitleContainer color={props.data.color}>{props.data.title}</TitleContainer>
            {cards}
            <AddButton onClick={() => props.add(props.index)}>+ Add a card</AddButton>
        </ColumnContainer>
    )
}

export default Column;