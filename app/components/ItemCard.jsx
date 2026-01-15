import Link from "next/link";
import Image from "next/image";

export default function ItemCard({ item }) {
  // Use either id or _id
  const itemId = item.id || item._id;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Item Image */}
      <div className="h-48 overflow-hidden bg-gray-100">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-green-50">
            <div className="text-4xl text-green-300">🌱</div>
          </div>
        )}
      </div>
      
      {/* Item Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 mb-1 truncate">
          {item.name}
        </h2>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">
          {item.description || "No description available"}
        </p>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold text-green-700">
            ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
          </span>
          {item.co2 && (
            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
              Saves {item.co2}
            </span>
          )}
        </div>
        
        {/* Environmental Impact */}
        {item.co2 && (
          <div className="mb-4 p-2 bg-green-50 rounded">
            <div className="flex items-center text-sm text-green-700">
              <span className="mr-1">🌍</span>
              <span>CO₂ Saved: {item.co2}</span>
            </div>
          </div>
        )}
        
        {/* View Details Button */}
        <Link 
          href={`/items/${itemId}`}
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}