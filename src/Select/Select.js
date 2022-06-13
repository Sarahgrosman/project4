import React from 'react'

const Select = () => {
  return (
    <div>
        <h2>sort by:</h2>
        <select className='select'>
        <option value='name'>NAME</option>
        <option value='date'>DATE</option>
        <option value='repositories'>REPOSITORIES</option>
        
        </select>
        </div>
  )
}

export default Select
