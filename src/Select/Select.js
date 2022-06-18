import React from 'react'

const Select = ({sort}) => {
  return (
    <div>
        <h2>sort by:</h2>
        <select className='select'  onChange={sort}>
        <option value="" ></option>
        <option value='name'>NAME</option>
        <option value='date'>DATE</option>
        <option value='repositories'>REPOSITORIES</option>
        
        </select>
        </div>
  )
}

export default Select
