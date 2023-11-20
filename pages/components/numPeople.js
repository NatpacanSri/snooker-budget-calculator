import React from 'react'

export default function NumOfPeople({onChange}) {
  return (
    <div className='border-b mb-3 pb-3'>
      {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label> */}
      <select 
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <p className='text-gray-400 text-xs text-end pr-2'>*Number of people</p>
    </div>
  )
}
