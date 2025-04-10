const Brands = () => {
  const brands = [
    {
      id: 1,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    {
      id: 2,
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
    },
    {
      id: 3,
      name: 'Sony',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png'
    },
    {
      id: 4,
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    {
      id: 5,
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg'
    },
    {
      id: 6,
      name: 'HP',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg'
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Brands</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map(brand => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands 