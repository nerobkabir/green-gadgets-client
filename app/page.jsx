"use client";

import { useState, useEffect } from "react";
import {
  FiCheck, FiArrowRight, FiShield, FiStar, FiUsers,
  FiPackage, FiShoppingBag, FiMenu, FiX
} from "react-icons/fi";
import { FaLeaf, FaTree } from "react-icons/fa";

export default function LandingPage() {
  const [stats, setStats] = useState({
    co2Saved: 12500,
    plasticAvoided: 8200,
    happyCustomers: 5300,
    productsListed: 89
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      emoji: "🪥",
      co2: "500g per set"
    },
    {
      id: 2,
      name: "Reusable Shopping Bag",
      description: "Organic cotton reusable grocery bag",
      price: 8.99,
      emoji: "🛍️",
      co2: "1.2kg per bag"
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      description: "BPA-free, insulated stainless steel bottle",
      price: 24.99,
      emoji: "💧",
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
    <div className="min-h-screen bg-white">

      <main >
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50  md:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-md text-green-800 font-semibold text-sm">
                  <FaLeaf className="mr-2 text-green-600" />
                  Sustainable Shopping Platform
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                  Shop Green.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Save the Planet.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Discover eco-friendly products that reduce your carbon footprint.
                  Every purchase helps combat climate change and plastic pollution.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-green-700">
                      {stats.co2Saved.toLocaleString()}kg
                    </div>
                    <div className="text-sm text-gray-600 mt-1">CO₂ Saved</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-green-700">
                      {stats.plasticAvoided.toLocaleString()}kg
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Plastic Avoided</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-green-700">
                      {stats.happyCustomers.toLocaleString()}+
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-green-700">
                      {stats.productsListed}+
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Products</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/items"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <FiShoppingBag className="mr-2" />
                    Browse Products
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/login"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-green-700 font-semibold rounded-xl border-2 border-green-200 transition-all shadow-lg"
                  >
                    Sell Your Product
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-9xl mb-6 animate-bounce-slow">🌍</div>
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">Make Every Purchase Count</h3>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-green-100">
                  <div className="flex items-center mb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FiCheck className="text-white text-2xl" />
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-lg">Verified Impact</div>
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

        <section id="products" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold text-sm mb-4">
                FEATURED COLLECTION
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sustainable Products You'll Love
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handpicked eco-friendly products that make a real difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 transform hover:-translate-y-2 duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-56 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                      {product.emoji}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <span className="px-4 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-bold">
                        ${product.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-700">
                        <FaLeaf className="mr-2" />
                        <span className="text-sm font-semibold">Saves {product.co2}</span>
                      </div>
                      <a
                        href={`/items/${product.id}`}
                        className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center group"
                      >
                        Learn More
                        <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/items"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                View All Products
                <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <section id="impact" className="py-16 md:py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-800/50 backdrop-blur-sm rounded-full text-green-200 font-semibold text-sm mb-4">
                REAL IMPACT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Community's Environmental Impact
              </h2>
              <p className="text-xl text-green-200 max-w-3xl mx-auto">
                See how together we're making a measurable difference for our planet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-10 bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-700/50 hover:border-green-500/50 transition-all">
                <div className="text-6xl mb-6">🌳</div>
                <div className="text-5xl font-bold mb-3">
                  {Math.floor(stats.co2Saved / 20).toLocaleString()}
                </div>
                <div className="text-xl font-semibold mb-2">Trees Equivalent</div>
                <p className="text-green-200 text-sm">
                  CO₂ saved requires this many trees to absorb in one year
                </p>
              </div>

              <div className="text-center p-10 bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-700/50 hover:border-green-500/50 transition-all">
                <div className="text-6xl mb-6">🐋</div>
                <div className="text-5xl font-bold mb-3">
                  {Math.floor(stats.plasticAvoided / 1000).toLocaleString()}
                </div>
                <div className="text-xl font-semibold mb-2">Marine Animals Saved</div>
                <p className="text-green-200 text-sm">
                  Plastic waste avoided prevents ocean life harm annually
                </p>
              </div>

              <div className="text-center p-10 bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-700/50 hover:border-green-500/50 transition-all">
                <div className="text-6xl mb-6">🚗</div>
                <div className="text-5xl font-bold mb-3">
                  {Math.floor(stats.co2Saved / 200).toLocaleString()}
                </div>
                <div className="text-xl font-semibold mb-2">Cars Off Road</div>
                <p className="text-green-200 text-sm">
                  Equivalent to removing this many cars for a full year
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="/impact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-xl hover:bg-green-50 shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <FaLeaf className="mr-2" />
                Calculate Your Impact
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold text-sm mb-4">
                BROWSE BY CATEGORY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Eco-Friendly Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find sustainable alternatives for every aspect of your life
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={`/items?category=${category.name.toLowerCase().replace(' & ', '-')}`}
                  className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-green-300 transition-all text-center transform hover:-translate-y-2 duration-300"
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{category.name}</h3>
                  <div className="text-sm text-green-600 font-semibold">{category.count} products</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold text-sm mb-4">
                  WHY US
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  More Than Just a Marketplace
                </h2>
                <p className="text-xl text-gray-600 mb-10">
                  We're a movement towards sustainable consumption with transparency and measurable impact at our core.
                </p>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-green-200 group-hover:to-emerald-200 transition-all shadow-lg">
                        <div className="text-green-600 text-2xl">
                          {benefit.icon}
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="font-bold text-gray-900 text-xl mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 text-lg">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                    <h3 className="font-bold text-gray-900 text-xl mb-3">Verified Sustainability</h3>
                    <p className="text-gray-600">
                      Every product undergoes strict environmental impact assessment before listing
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                    <h3 className="font-bold text-gray-900 text-xl mb-3">Impact Transparency</h3>
                    <p className="text-gray-600">
                      See exactly how much CO₂ and plastic you're saving with each purchase
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                    <h3 className="font-bold text-gray-900 text-xl mb-3">Community Driven</h3>
                    <p className="text-gray-600">
                      10% of profits fund environmental conservation projects worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold text-sm mb-4">
                TESTIMONIALS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Community Says
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of conscious consumers making a real difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-green-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Make a Difference?
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join our community of eco-conscious shoppers and start reducing your environmental impact today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a
                    href="/login"
                    className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
                  >
                    Create Free Account
                    <FiArrowRight className="ml-2" />
                  </a>
                  <a
                    href="/items"
                    className="inline-flex items-center justify-center px-10 py-4 bg-green-800 hover:bg-green-900 text-white font-bold rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-lg"
                  >
                    Browse Without Account
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-green-100">
                  <div className="flex items-center text-lg">
                    <FiCheck className="mr-2 text-2xl" />
                    No hidden fees
                  </div>
                  <div className="flex items-center text-lg">
                    <FiCheck className="mr-2 text-2xl" />
                    Free shipping over $50
                  </div>
                  <div className="flex items-center text-lg">
                    <FiCheck className="mr-2 text-2xl" />
                    30-day returns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}