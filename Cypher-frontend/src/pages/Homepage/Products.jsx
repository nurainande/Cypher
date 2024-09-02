const appleProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    description: "The ultimate iPhone experience with A16 Bionic.",
    price: "$999.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "Light. Speed. MacBook Air, now with the M2 chip.",
    price: "$1,199.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Apple Watch Series 8",
    description: "A healthy leap ahead with new health tracking features.",
    price: "$399.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    description: "Active Noise Cancellation for immersive sound.",
    price: "$249.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: 'iPad Pro 12.9"',
    description: "The ultimate iPad experience with M1 chip.",
    price: "$1,099.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Apple TV 4K",
    description: "4K HDR entertainment with Dolby Atmos sound.",
    price: "$179.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "HomePod Mini",
    description: "Room-filling sound in every space.",
    price: "$99.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Magic Keyboard",
    description: "The perfect typing experience for your iPad.",
    price: "$299.00",
    image: "https://via.placeholder.com/150",
  },
];



const Products = () => {
  return (
    <section className="product py-6 md:px-24">
      <div className="head flex gap-5">
        <span className="font-semibold text-lg">New Arrival</span>
        <span className="font-semibold text-lg">Featured</span>
      </div>
      {/* Product List */}
      <ul className="dynamic-prod-list py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appleProducts.map((product) => (
          <li
            key={product.id}
            className="flex items-center gap-4 bg-white p-4 rounded-md shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div>
              <h2 className="text-sm font-medium">{product.name}</h2>
              <p className="text-gray-600 text-xs">{product.description}</p>
              <div className="flex gap-2 items-center mt-2">
                <span className="text-gray-600 font-semibold">
                  {product.price}
                </span>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
