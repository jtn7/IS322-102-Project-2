/* eslint-disable react/prop-types */
import React, { Component } from 'react'

class Card extends Component {
  constructor () {
    super()

    this.moveCard = this.moveCard.bind(this)
  }

  moveCard (destination) {
    this.props.move(this.props.id, this.props.parentList - 1, destination)
  }

  render () {
    const leftButton =
    <div className="buttons">
      <div className="button leftButton" onClick={e => this.moveCard(this.props.parentList - 2)}>&lt;</div>
    </div>
    const rightButton =
    <div className="buttons">
      <div className="button rightButton" onClick={e => this.moveCard(this.props.parentList)}> &gt;</div>
    </div>
    const bothButtons =
    <div className="buttons">
      <div className="button leftButton" onClick={e => this.moveCard(this.props.parentList - 2)}> &lt;</div>
      <div className="button rightButton" onClick={e => this.moveCard(this.props.parentList)}> &gt;</div>
    </div>

    let moveButtons
    if (this.props.moveButtons === 'right') {
      moveButtons = rightButton
    } else if (this.props.moveButtons === 'left') {
      moveButtons = leftButton
    } else {
      moveButtons = bothButtons
    }

    return (
      <div className="card">
        <div className="text">
          {this.props.text.substring(0, 75)}
          {this.props.text.length > 75 ? '...' : ''}
        </div>
        <div className="type">type: {this.props.type}</div>
        {moveButtons}
      </div>
    )
  }
}

export default Card
