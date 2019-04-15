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

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardContainer>
                <LeftArrow onClick={() => this.props.moveLeft}>{this.props.left ? '' : '<'}</LeftArrow>
                {this.props.content}
                <RightArrow onClick={() => this.props.moveRight}>{this.props.right ? '' : '>'}</RightArrow>
            </CardContainer>
        )
    }
}

export default Card;