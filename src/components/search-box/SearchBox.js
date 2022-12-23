import React from 'react'
import './SearchBox.css'

export const SearchBox = ({placeholder , handleChange}) => {
  return (
  <div>
    <input type="search"
    className='search'
         placeholder={placeholder}
          onChange={handleChange } 
          />
       
  </div>
  )
}
