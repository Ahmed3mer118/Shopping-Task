import { FiStar, FiShoppingCart } from 'react-icons/fi'

const Recommended = () => {
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 699.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Gaming Laptop',
      price: 1100.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      price: 149.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Smart Speaker',
      price: 79.99,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                 loading="lazy"
                className="w-full h-56 object-fill "
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
              <div className="flex items-center justify-between flex-wrap sm:mt-2 md:mt-2">
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

export default Recommended 