/* eslint-disable react/prop-types */
import React from 'react'

function ViewNav (props) {
  return (
    <div className="ViewNav">
      <div
        className=
          {
            props.currentView === 'board'
              ? 'activeView viewSelect'
              : 'nonActiveView viewSelect'
          }>
          Board View
      </div>
      <div
        className=
          {
            props.currentView === 'list'
              ? 'activeView viewSelect'
              : 'nonActiveView viewSelect'
          }>
          List View
      </div>
      <div className="button addTask">+ Add Task</div>
    </div>
  )
}

export default ViewNav
