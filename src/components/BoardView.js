/* eslint-disable react/prop-types */
import React from 'react'

function BoardView (props) {
  return (
    <div className="BoardView">
      {props.listComponents}
    </div>
  )
}

export default BoardView
