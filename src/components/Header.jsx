import React from 'react'

const Header = ({blogData }) => {
  return (
    <div>
      <h1>{blogData.name}</h1>
    </div>
  )
}

export default Header