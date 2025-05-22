export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const getPageNumbers = () => {
      const pages = []
      const maxVisible = 5
      
      if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        let start = Math.max(1, currentPage - 2)
        let end = Math.min(totalPages, start + maxVisible - 1)
        
        if (end - start + 1 < maxVisible) {
          start = end - maxVisible + 1
        }
        
        if (start > 1) {
          pages.push(1)
          if (start > 2) {
            pages.push('...')
          }
        }
        
        for (let i = start; i <= end; i++) {
          pages.push(i)
        }
        
        if (end < totalPages) {
          if (end < totalPages - 1) {
            pages.push('...')
          }
          pages.push(totalPages)
        }
      }
      
      return pages
    }
  
    return (
      <div className="flex justify-between items-center mt-4 flex-col sm:flex-row gap-4">
        <div className="text-sm text-gray-600">
          Showing page {currentPage} of {totalPages}
        </div>
        <nav className="flex space-x-1">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={index} className="px-3 py-1">...</span>
            ) : (
              <button
                key={index}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 border ${currentPage === page ? 'bg-primary-DEFAULT text-white border-primary-DEFAULT' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              >
                {page}
              </button>
            )
          ))}
          
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </nav>
      </div>
    )
  }