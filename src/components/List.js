/* eslint-disable react/prop-types */
import React from 'react'

function List (props) {
  return (
    <div className="list">
      <div className="listTitle">{props.listTitle}</div>
      {props.cardComponents}
    </div>
  )
}

export default List
