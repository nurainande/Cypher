import Products from "./Homepage/Products";
const productCategory = [
  { id: 1, label: "Smartphones", value: "smartphones" },
  { id: 2, label: "Laptops", value: "laptops" },
  { id: 3, label: "Airpodes", value: "airpodes" },
  { id: 4, label: "Camera", value: "camera" },
  { id: 5, label: "Earphones", value: "earphones" },
  { id: 6, label: "Games", value: "games" },
  { id: 7, label: "Speakers", value: "speakers" },
  { id: 8, label: "Televisions", value: "televisions" },
  { id: 9, label: "Watches", value: "watches" },
];

const Productpage = () => {
  return (
    <main className="py-24 px-6 sm:px-8 md:px-24 lg:px-24">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="category col-span-1 lg:col-span-1">
          <h1 className="text-black text-2xl font-bold mb-4">PRODUCT PAGE</h1>
          <div className="journey text-sm text-gray-600 mb-6">
            Home &gt; Products
          </div>
          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Product Category</h2>
            {productCategory.map((category) => (
              <label key={category.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={category.value}
                  className="border-2 border-gray-300 rounded-md"
                />
                <span>{category.label}</span>
              </label>
            ))}
          </div>
        </aside>
        <div className="products col-span-3">
          <Products />
        </div>
      </section>
    </main>
  );
};

export default Productpage;

