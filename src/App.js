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
      Winnie: [
        'Col 1',
        'Col 1',
      ],
      Bob: [
        'Col 2',
        'Col 2',
      ],
      Thomas: [
        'Col 3',
        'Col 3',
      ],
      George: [
        'Col 4',
        'Col 4',
      ],
    }
  }

  handleNewCard = (title) => {
    const input = window.prompt('Add a card with new content:', 'Default card');
    const newCards = this.state[title];
    newCards.push(input);
    this.setState({
      title: newCards,
    })
  }

  getNewRightColumn = col => {
    if (col === 'Winnie') {
      return 'Bob';
    } else if (col === 'Bob') {
      return 'Thomas';
    } else if (col === 'Thomas') {
      return 'George';
    } else {
      return '';
    }
  }

  getNewLeftColumn = col => {
    if (col === 'George') {
      return 'Thomas';
    } else if (col === 'Thomas') {
      return 'Bob';
    } else if (col === 'Bob') {
      return 'Winnie';
    } else {
      return '';
    }
  }

  handleMoveRight = (column, key) => {
    const newCol = this.getNewRightColumn(column);
    this.setState({

    })
  }

  handleMoveLeft = (column, key) => {
    const newCol = this.getNewLeftColumn(column);
    this.setState({

    })
  }

  render() {
    return (
      <FlexContainer>
        <Column moveLeft={this.handleMoveLeft} moveRight={this.handleMoveRight} add={this.handleNewCard} cards={this.state.Winnie} title={'Winnie'}/>
        <Column moveLeft={this.handleMoveLeft} moveRight={this.handleMoveRight} add={this.handleNewCard} cards={this.state.Bob} title={'Bob'}/>
        <Column moveLeft={this.handleMoveLeft} moveRight={this.handleMoveRight} add={this.handleNewCard} cards={this.state.Thomas} title={'Thomas'}/>
        <Column moveLeft={this.handleMoveLeft} moveRight={this.handleMoveRight} add={this.handleNewCard} cards={this.state.George} title={'George'}/>
      </FlexContainer>
    );
  }
}

export default App;
