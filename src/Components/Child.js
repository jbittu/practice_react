import React from 'react'

const Child = (props) => {
  const n = props.name
  return (
    <div>
      <h1>Child Component {n}</h1>
    </div>
  )
}

export default Child