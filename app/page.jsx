"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  FiCheck, FiArrowRight, FiShield, FiTruck, 
  FiStar, FiUsers, FiPackage, FiShoppingBag,
  FiFeather, FiGlobe, FiHome, FiHeart
} from "react-icons/fi";
import { FaLeaf, FaRecycle, FaTree, FaSeedling } from "react-icons/fa";

export default function Home() {
  const [stats, setStats] = useState({
    co2Saved: 12500,
    plasticAvoided: 8200,
    happyCustomers: 5300,
    productsListed: 89
  });

  // Animate counting numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        co2Saved: prev.co2Saved + Math.floor(Math.random() * 10),
        plasticAvoided: prev.plasticAvoided + Math.floor(Math.random() * 5),
        happyCustomers: prev.happyCustomers + Math.floor(Math.random() * 2),
        productsListed: prev.productsListed
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      description: "100% biodegradable bamboo toothbrushes",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1581338834647-b1fb2c4d0b7c?w=400&h=300&fit=crop",
      co2: "500g per set"
    },
    {
      id: 2,
      name: "Reusable Shopping Bag",
      description: "Organic cotton reusable grocery bag",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1553545204-5336c0b43414?w=400&h=300&fit=crop",
      co2: "1.2kg per bag"
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      description: "BPA-free, insulated stainless steel bottle",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop",
      co2: "2.5kg per bottle"
    }
  ];

  const categories = [
    { name: "Home & Kitchen", icon: "🏠", count: 23 },
    { name: "Personal Care", icon: "🛁", count: 15 },
    { name: "Fashion", icon: "👕", count: 18 },
    { name: "Food & Drink", icon: "🍎", count: 12 },
    { name: "Office Supplies", icon: "🖋️", count: 9 },
    { name: "Cleaning", icon: "🧹", count: 14 }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Environmental Scientist",
      text: "GreenGadgets Hub has completely changed how I shop. Every purchase feels like a positive contribution to our planet!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Sustainability Consultant",
      text: "The transparency about CO₂ savings is game-changing. Finally, an e-commerce platform that walks the talk.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Conscious Consumer",
      text: "Love the curated selection of products. It's hard to find truly eco-friendly options elsewhere.",
      rating: 5
    }
  ];

  const benefits = [
    { icon: <FaLeaf />, title: "Verified Eco-Friendly", description: "All products are vetted for sustainability" },
    { icon: <FiShield />, title: "Carbon Neutral Shipping", description: "We offset all shipping emissions" },
    { icon: <FiPackage />, title: "Plastic-Free Packaging", description: "100% biodegradable packaging materials" },
    { icon: <FiUsers />, title: "Community Impact", description: "Supporting environmental initiatives" }
  ];

  return (
    <main className="space-y-16 md:space-y-24 pb-16">
      {/* Section 1: Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold text-sm mb-4">
                  <FaLeaf className="mr-2" />
                  Sustainable Shopping Platform
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Shop Green.
                  <span className="block text-green-600">Save the Planet.</span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 max-w-2xl">
                  Discover eco-friendly products that reduce your carbon footprint. 
                  Every purchase helps combat climate change and plastic pollution.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-700">
                    {stats.co2Saved.toLocaleString()} kg
                  </div>
                  <div className="text-sm text-gray-600">CO₂ Saved</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-700">
                    {stats.plasticAvoided.toLocaleString()} kg
                  </div>
                  <div className="text-sm text-gray-600">Plastic Avoided</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-700">
                    {stats.happyCustomers.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-700">
                    {stats.productsListed}+
                  </div>
                  <div className="text-sm text-gray-600">Products Listed</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/items" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
                >
                  <FiShoppingBag className="mr-2" />
                  Browse Products
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/login" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-green-700 font-semibold rounded-lg border-2 border-green-200 transition-all"
                >
                  Sell Your Product
                </Link>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🌍</div>
                    <h3 className="text-2xl font-bold text-white">Make Every Purchase Count</h3>
                  </div>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FiCheck className="text-green-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">Verified Impact</div>
                    <div className="text-sm text-gray-600">Real-time tracking</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Track your personal environmental impact with every purchase
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sustainable Products Showcase */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Sustainable Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked eco-friendly products that make a real difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden bg-gray-100">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {product.id === 1 ? "🪥" : product.id === 2 ? "🛍️" : "💧"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    ${product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-700">
                    <FaLeaf className="mr-2" />
                    <span className="text-sm font-semibold">Saves {product.co2}</span>
                  </div>
                  <Link 
                    href={`/items/${product.id}`}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center"
                  >
                    Learn More
                    <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/items" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg"
          >
            View All Products
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Section 3: Environmental Impact */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Environmental Impact
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              See how our community is making a difference together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-green-800/30 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl mb-4">🌳</div>
              <div className="text-4xl font-bold mb-2">
                Equivalent to {Math.floor(stats.co2Saved / 20)} Trees
              </div>
              <p className="text-green-200">
                CO₂ saved by our community would require this many trees to absorb in one year
              </p>
            </div>

            <div className="text-center p-8 bg-green-800/30 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl mb-4">🐋</div>
              <div className="text-4xl font-bold mb-2">
                Saves {Math.floor(stats.plasticAvoided / 1000)} Marine Animals
              </div>
              <p className="text-green-200">
                Plastic waste avoided prevents harm to ocean life each year
              </p>
            </div>

            <div className="text-center p-8 bg-green-800/30 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl mb-4">🚗</div>
              <div className="text-4xl font-bold mb-2">
                {Math.floor(stats.co2Saved / 200)} Cars Off Road
              </div>
              <p className="text-green-200">
                CO₂ reduction equivalent to taking this many cars off the road for a year
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/impact" 
              className="inline-flex items-center px-6 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50"
            >
              <FaLeaf className="mr-2" />
              Calculate Your Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Categories */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop By Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find eco-friendly alternatives for every aspect of your life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/items?category=${category.name.toLowerCase().replace(' & ', '-')}`}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-green-200 transition-all text-center"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <div className="text-sm text-gray-500">{category.count} products</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose GreenGadgets Hub?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're not just another marketplace. We're a movement towards sustainable consumption with 
              transparency and impact at our core.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-green-600 text-xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Verified Sustainability</h3>
                <p className="text-gray-600 text-sm">
                  Every product undergoes strict environmental impact assessment before listing
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Impact Transparency</h3>
                <p className="text-gray-600 text-sm">
                  See exactly how much CO₂ and plastic you're saving with each purchase
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Community Driven</h3>
                <p className="text-gray-600 text-sm">
                  10% of profits fund environmental conservation projects worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of conscious consumers making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-green-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Call To Action */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of eco-conscious shoppers and start reducing your environmental impact today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all"
            >
              Create Free Account
              <FiArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/items"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-lg transition-all"
            >
              Browse Without Account
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-green-200">
            <div className="flex items-center">
              <FiCheck className="mr-2" />
              No hidden fees
            </div>
            <div className="flex items-center">
              <FiCheck className="mr-2" />
              Free shipping over $50
            </div>
            <div className="flex items-center">
              <FiCheck className="mr-2" />
              30-day returns
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}