import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:text-center md:text-center lg:text-left">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              ShopEase is your one-stop destination for all your shopping needs. We offer a wide range of products at competitive prices.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">My Account</a></li>
              <li><a href="#" className="hover:text-white">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white">Wishlist</a></li>
              <li><a href="#" className="hover:text-white">Compare</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Electronics</a></li>
              <li><a href="#" className="hover:text-white">Clothing</a></li>
              <li><a href="#" className="hover:text-white">Home & Kitchen</a></li>
              <li><a href="#" className="hover:text-white">Beauty</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className='sm:text-center md:text-center lg:text-left'>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex  sm:justify-center md:justify-center lg:justify-start space-x-4 ">
              <a href="#" className=" hover:text-white  ">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className=" hover:text-white ">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className=" hover:text-white ">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className=" hover:text-white ">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex items-center flex-wrap">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 m-2 bg-gray-800 text-white rounded-lg focus:outline-none "
              />
              <button className="px-4 py-2  sm:mx-auto md:m-2 lg:md-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shopping. All rights reserved@Ahmed_Amer.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 