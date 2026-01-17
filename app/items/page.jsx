"use client";

import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const res = await fetch("https://green-gadgets-server.onrender.com/items", {
          cache: "no-store",
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch items: ${res.status}`);
        }
        
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching items:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading eco-friendly products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600 bg-red-50 p-6 rounded-lg">
          <p className="font-semibold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Eco-Friendly Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our collection of sustainable products that help reduce environmental impact.
          Each purchase contributes to a greener planet.
        </p>
        <div className="mt-4 inline-flex items-center space-x-2 px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          <span>🌱</span>
          <span>{items.length} products available</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🌍</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No Products Found
          </h2>
          <p className="text-gray-500">
            Check back soon for new eco-friendly products!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id || item._id} item={item} />
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Our Collective Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-700">
                {items.length}
              </div>
              <div className="text-gray-600">Eco Products</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-700">
                {items.reduce((sum, item) => {
                  const co2 = parseFloat(item.co2?.replace(/[^\d.]/g, '') || 0);
                  return sum + co2;
                }, 0).toFixed(0)} kg
              </div>
              <div className="text-gray-600">Total CO₂ Saved</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-700">
                ${items.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(0)}
              </div>
              <div className="text-gray-600">Invested in Sustainability</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}