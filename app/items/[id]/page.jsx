async function getItem(id) {
  try {
    
    if (!id || !/^[a-f\d]{24}$/i.test(id)) {
      console.error("Invalid MongoDB ObjectId format:", id);
      return null;
    }

    const res = await fetch(`https://green-gadgets-server.vercel.app/items/${id}`, { 
      cache: "no-store" 
    });
    
    console.log("Fetch response status:", res.status);
    
    if (!res.ok) {
      console.error(`Failed to fetch item: ${res.status} ${res.statusText}`);
      return null;
    }
    
    const data = await res.json();
    console.log("Fetched item data:", data);
    return data;
  } 
  catch (err) {
    console.error("Error fetching item:", err);
    return null;
  }
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  
  console.log("Item ID from params:", id);
  
  const item = await getItem(id);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <a 
            href="/items" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Browse All Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-green-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/items" className="hover:text-green-600">Products</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{item.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="w-full h-64 bg-green-50 rounded-lg flex items-center justify-center">
              <div className="text-6xl text-green-300">🌱</div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {item.name}
            </h1>
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Eco-Friendly Product
            </div>
          </div>

          <div className="text-4xl font-bold text-green-700">
            ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
          </div>

          {item.co2 && (
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Environmental Impact</h3>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white">🌍</span>
                </div>
                <div>
                  <div className="font-bold text-green-700">Saves {item.co2} of CO₂</div>
                  <div className="text-sm text-gray-600">
                    Equivalent to {Math.round(parseFloat(item.co2.replace(/[^\d.]/g, '')) / 20)} trees planted
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {item.description || "No description available for this product."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">Material</div>
              <div className="font-medium">Sustainable</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">Shipping</div>
              <div className="font-medium">Carbon Neutral</div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium mb-3">
              Add to Cart
            </button>
            <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-medium">
              Save for Later
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-green-50 rounded-xl">
        <h3 className="font-bold text-gray-900 mb-4">Why This Product is Eco-Friendly</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Made from sustainable or recycled materials
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Reduces carbon footprint compared to conventional alternatives
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Biodegradable or recyclable packaging
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Ethically sourced and manufactured
          </li>
        </ul>
      </div>
    </div>
  );
}