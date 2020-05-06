import React, { Component } from 'react'
import ViewNav from './components/ViewNav.js'
import BoardView from './components/BoardView.js'
import List from './components/List.js'
import Card from './components/Card.js'

class App extends Component {
  constructor () {
    super()
    this.state =
    {
      view: 'board',
      listComponents: null
    }

    this.handleView = this.handleView.bind(this)
    this.moveCard = this.moveCard.bind(this)
    this.getListComponents = this.getListComponents.bind(this)
  }

  componentDidMount () {
    fetch('https://gist.githubusercontent.com/jtn7/f16c35ea85fdc9ff143bee256e2c7dcb/raw/72b9eed56475c4bd81f1a56cf627921ffa900591/listData.json')
      .then(resp => resp.json())
      .then(listData => {
        this.setState(
          {
            listJSON: listData,
            listComponents: this.getListComponents(listData)
          })
      })
  }

  moveCard (id, origin, destination) {
    const cardsState = JSON.parse(JSON.stringify(this.state.listJSON))

    const cardIndex = cardsState.lists[origin].cards.findIndex(card => card.id === id)
    const cardRemoved = cardsState.lists[origin].cards.splice(cardIndex, 1)[0]
    cardsState.lists[destination].cards.push(cardRemoved)

    this.setState({
      listJSON: cardsState,
      listComponents: this.getListComponents(cardsState)
    }
    )
  }

  getListComponents (listJSON) {
    return listJSON.lists.map(list => {
      let moveButtons
      if (list.id === 1) {
        moveButtons = 'right'
      } else if (list.id === listJSON.lists.length) {
        moveButtons = 'left'
      } else {
        moveButtons = 'both'
      }
      const cards = list.cards.map(card =>
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          type={card.type}
          parentList={list.id}
          move={this.moveCard}
          moveButtons={moveButtons}
        />)
      return (
        <List
          key={list.id}
          listTitle={list.listTitle}
          cardComponents={cards}
        />
      )
    })
  }

  handleView () {
    this.state.view === 'board'
      ? this.setState({ view: 'list' })
      : this.setState({ view: 'board' })
  }

  render () {
    const boardView = <BoardView listComponents={this.state.listComponents}/>

    return (
      <div className="App">
        <ViewNav currentView={this.state.view} handler={this.handleView}/>
        <hr/>
        {boardView}
      </div>
    )
  }
}

export default App
