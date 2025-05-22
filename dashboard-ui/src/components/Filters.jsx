import { useState } from 'react'

export default function Filters({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    onFilter(term, category)
  }

  const handleCategoryChange = (e) => {
    const cat = e.target.value
    setCategory(cat)
    onFilter(searchTerm, cat)
  }

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
      <input
        type="text"
        placeholder="Search articles..."
        className="border border-gray-300 rounded px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select 
        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        <option value="Kings of legends">Kings of legends</option>
        <option value="DOR">DOR</option>
        <option value="DRO">DRO</option>
      </select>
    </div>
  )
}