import { FiX, FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'


const filterData = {
  priceRanges: [
    { id: 'price1', label: '$0 - $100', value: '0-100' },
    { id: 'price2', label: '$100 - $500', value: '100-500' },
    { id: 'price3', label: '$500- $1000', value: '100-1000' }
  ],
  categories: [
    { id: 'cat1', label: 'Electronics', value: 'electronics' },
    { id: 'cat2', label: 'Clothing', value: 'clothing' },
    { id: 'cat3', label: 'Books', value: 'Book' }
  ],
  brands: [
    { id: 'brand1', label: 'Brand A', value: 'brand-a' },
    { id: 'brand2', label: 'Brand B', value: 'brand-b' },
    { id: 'brand3', label: 'Brand C', value: 'brand-c' }
  ],
  ratings: [
    { id: 'rating1', label: '4 Stars & Up', value: '4' },
    { id: 'rating2', label: '3 Stars & Up', value: '3' },
    { id: 'rating3', label: '2 Stars & Up', value: '2' }
  ]
}


const CheckboxGroup = ({ title, items, selectedItems, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
      >
        <span>{title}</span>
        <FiChevronDown
          className={`transform transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`space-y-2 overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {items.map((item) => (
          <div key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={item.id}
              checked={selectedItems.includes(item.value)}
              onChange={() => onToggle(item.value)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor={item.id}
              className="ml-2 text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

const Sidebar = ({ isOpenSidebar, onClose, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    categories: [],
    brands: [],
    ratings: []
  })

  const handleFilterToggle = (type, value) => {
    const newFilters = { ...selectedFilters }
    const index = newFilters[type].indexOf(value)
    
    if (index === -1) {
      newFilters[type].push(value)
    } else {
      newFilters[type].splice(index, 1)
    }
    
    setSelectedFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <>
 
      {isOpenSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 w-64 h-screen bg-white shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
          isOpenSidebar ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:shadow-none`}
      >
        <div className="p-4 h-full flex flex-col">
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiX className="text-gray-600" />
            </button>
          </div>

          {/* Filters */}
          <div className="flex-1 overflow-y-auto">
            <CheckboxGroup
              title="Price Range"
              items={filterData.priceRanges}
              selectedItems={selectedFilters.price}
              onToggle={(value) => handleFilterToggle('price', value)}
            />
            
            <CheckboxGroup
              title="Categories"
              items={filterData.categories}
              selectedItems={selectedFilters.categories}
              onToggle={(value) => handleFilterToggle('categories', value)}
            />
            
            <CheckboxGroup
              title="Brands"
              items={filterData.brands}
              selectedItems={selectedFilters.brands}
              onToggle={(value) => handleFilterToggle('brands', value)}
            />
            
            <CheckboxGroup
              title="Rating"
              items={filterData.ratings}
              selectedItems={selectedFilters.ratings}
              onToggle={(value) => handleFilterToggle('ratings', value)}
            />
          </div>

  
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                setSelectedFilters({
                  price: [],
                  categories: [],
                  brands: [],
                  ratings: []
                })
                onFilterChange({})
              }}
              className="w-full py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
            </div>
          </div>
        </aside>
      </>
    )
  }

  export default Sidebar 