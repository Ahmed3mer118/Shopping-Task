const Categories = () => {
  const categories = [
    'All',
    'Electronics',
    'Clothing',
    'Home & Kitchen',
    'Beauty',
    'Sports',
    'Books',
    'Toys',
    'Automotive',
    'Garden'
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 p-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${index === 0
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories 