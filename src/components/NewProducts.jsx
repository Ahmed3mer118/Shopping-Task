import { FiStar, FiShoppingCart } from 'react-icons/fi'

const NewProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 49.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      price: 29.99,
      rating: 4.0,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">New Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                 loading="lazy"
                className="w-full h-48 md:object-fill lg:object-cover"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                <FiShoppingCart className="text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-current'
                          : 'stroke-current'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
              </div>
              <div className="flex items-center justify-between flex-wrap md:mt-2">
                <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewProducts 