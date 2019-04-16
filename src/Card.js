import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    text-align: left;
    height: auto;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-bottom: 12px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LeftArrow = styled.div`
    width: auto;
    padding-left: 8px;
    padding-right: 12px;
`;

const RightArrow = styled.div`
    width: auto;
    padding-left: 12px;
    padding-right: 8px;
`;

const Card = (props) => {
    return (
        <CardContainer>
            <LeftArrow onClick={() => props.moveLeft(props.columnIndex, props.data.key)}>{props.columnIndex === 0 ? '' : '<'}</LeftArrow>
            {props.data.content}
            <RightArrow onClick={() => props.moveRight(props.columnIndex, props.data.key)}>{props.columnIndex === 3 ? '' : '>'}</RightArrow>
        </CardContainer>
    )
}

export default Card;