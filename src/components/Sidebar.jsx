import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed hidden lg:block">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">abun</h1>
      </div>
      <nav className="p-4">
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Articles</h2>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
                Published Articles
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
                Subsidiário Articles
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
                Affiliated Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}