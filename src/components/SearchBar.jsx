import './SearchBar.css'
import React, { useState } from 'react'


function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('cars')

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="term">Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar