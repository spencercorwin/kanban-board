import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Column from './Column';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 50px);
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Winnie',
          color: '#8E6E95',
          key: Math.random()*10000,
          cards: [
            {
              content: 'Col 1',
              key: Math.random()*10000,
            },
            {
              content: 'Col 1',
              key: Math.random()*10000,
            },
          ],
        },
        {
          title: 'Bob',
          color: '#39A59C',
          key: Math.random()*10000,
          cards: [
            {
              content: 'Col 2',
              key: Math.random()*10000,
            },
            {
              content: 'Col 2',
              key: Math.random()*10000,
            },
          ],
        },
        {
          title: 'Thomas',
          color: '#344759',
          key: Math.random()*10000,
          cards: [
            {
              content: 'Col 3',
              key: Math.random()*10000,
            },
            {
              content: 'Col 3',
              key: Math.random()*10000,
            },
          ],
        },
        {
          title: 'George',
          color: '#E8741E',
          key: Math.random()*10000,
          cards: [
            {
              content: 'Col 4',
              key: Math.random()*10000,
            },
            {
              content: 'Col 4',
              key: Math.random()*10000,
            },
          ],
        },
      ],
    }
  }

  handleNewCard = (replacementIndex) => {
    const input = window.prompt('Add a card with new content:', '');
    if (input === null) {
      return;
    }
    const newColumn = this.state.columns[replacementIndex];
    newColumn.cards.push({
      content: input,
      key: Math.random()*10000,
    });
    const newColumns = [...this.state.columns.slice(0, replacementIndex), newColumn, ...this.state.columns.slice(replacementIndex + 1)]
    this.setState({
      columns: newColumns,
    })
  }

  handleMoveRight = (columnIndex, key) => {
    if (columnIndex === this.state.columns.length - 1) {
      return;
    }
    const oldColumn = this.state.columns[columnIndex];
    const oldCards = oldColumn.cards;
    const cardToMove = oldCards.filter(e => e.key === key)[0];
    const oldColumnNewCards = oldCards.filter(e => e.key !== key);
    oldColumn.cards = oldColumnNewCards;

    const newColumn = this.state.columns[columnIndex + 1];
    const newCards = newColumn.cards;
    newCards.push(cardToMove);
    newColumn.cards = newCards;

    const newColumns = [...this.state.columns.slice(0, columnIndex), oldColumn, newColumn, ...this.state.columns.slice(columnIndex + 2)];

    this.setState({
      columns: newColumns,
    })

  }

  handleMoveLeft = (columnIndex, key) => {
    if (columnIndex === 0) {
      return;
    }
    const oldColumn = this.state.columns[columnIndex];
    const oldCards = oldColumn.cards;
    const cardToMove = oldCards.filter(e => e.key === key)[0];
    const oldColumnNewCards = oldCards.filter(e => e.key !== key);
    oldColumn.cards = oldColumnNewCards;

    const newColumn = this.state.columns[columnIndex - 1];
    const newCards = newColumn.cards;
    newCards.push(cardToMove);
    newColumn.cards = newCards;

    const newColumns = [...this.state.columns.slice(0, columnIndex - 1), newColumn, oldColumn, ...this.state.columns.slice(columnIndex + 1)];

    this.setState({
      columns: newColumns,
    })

  }

  render() {
    const columns = this.state.columns.map((col, index) => <Column moveLeft={this.handleMoveLeft} moveRight={this.handleMoveRight} add={this.handleNewCard} data={col} index={index} key={col.key} />)
    return (
      <FlexContainer>
        {columns}
      </FlexContainer>
    );
  }
}

export default App;
