import React from 'react'

const Components1 = () => {
  const styles = {
    color : "red",
    backgroundColor : "black"
  }
  return (
    <>
    <h1 style ={{color:"red"}}>This is inline styling</h1>
    <h2 style={styles}>this is style by js object</h2>
    </>
  )
}

export default Components1