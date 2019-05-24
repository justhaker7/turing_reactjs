import React from 'react'

function Box(props){
  return(
    <div className={props.clsName}>
      <span>{props.value}</span>
    </div>
  )
}

export default Box

