import './SearchBar.css'
import React, { useState } from 'react'


function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')

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
        <input value={term} onChange={handleChange} />
      </form>

      <p>The term searched is {term}</p>
    </div>
  )
}

export default SearchBar