import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import DataTable from '../components/DataTable'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import { articles } from '../data/articles'

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [filteredData, setFilteredData] = useState(articles)
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleFilter = (searchTerm, category) => {
    const filtered = articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !category || article.category.includes(category)
      return matchesSearch && matchesCategory
    })
    setFilteredData(filtered)
    setCurrentPage(1)
  }

  // Pagination logic
  const indexOfLastItem = currentPage * entriesPerPage
  const indexOfFirstItem = indexOfLastItem - entriesPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredData.length / entriesPerPage)

  // Mobile sidebar toggle
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle button */}
      <button 
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`${mobileSidebarOpen ? 'block' : 'hidden'} lg:block fixed lg:static inset-0 z-40`}>
        <Sidebar />
        {mobileSidebarOpen && (
          <button 
            onClick={() => setMobileSidebarOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-md bg-gray-100"
          >
            ✕
          </button>
        )}
      </div>

      {/* Overlay for mobile sidebar */}
      {mobileSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-64 p-4 lg:p-8 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Articles</h1>
        
        <Filters onFilter={handleFilter} />
        
        <div className="flex justify-between items-center mb-4 flex-col sm:flex-row gap-4">
          <h2 className="text-lg font-semibold">Article List</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select 
              className="border border-gray-300 rounded px-3 py-1 text-sm"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value))
                setCurrentPage(1)
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="text-sm text-gray-600">entries</span>
          </div>
        </div>
        
        <DataTable data={currentItems} isLoading={isLoading} />
        
        {!isLoading && filteredData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No articles found matching your criteria
          </div>
        )}
        
        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  )
}