"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const installations = [
  {
    type: "On-Grid Solar System",
    description:
      "Best for homes connected to the main power grid. Save bills and earn via net metering.",
    variants: [
      { kw: "3 KW", price: "₹1,55,000" },
      { kw: "5 KW", price: "₹2,35,000" },
      { kw: "10 KW", price: "₹4,50,000" },
    ],
  },
  {
    type: "Off-Grid Solar System",
    description:
      "Ideal for remote areas or backup setups. Works independently of government supply.",
    variants: [
      { kw: "3 KW", price: "₹1,80,000" },
      { kw: "5 KW", price: "₹2,80,000" },
      { kw: "10 KW", price: "₹5,25,000" },
    ],
  },
  {
    type: "Hybrid Solar System",
    description:
      "A mix of On-grid and Off-grid for the best of both worlds — backup + savings.",
    variants: [
      { kw: "3 KW", price: "₹1,95,000" },
      { kw: "5 KW", price: "₹2,95,000" },
      { kw: "10 KW", price: "₹5,50,000" },
    ],
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKW, setSelectedKW] = useState("3 KW");

  const currentInstall = installations[currentIndex];
  const selectedVariant = currentInstall.variants.find(v => v.kw === selectedKW);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % installations.length);
  const goPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? installations.length - 1 : prev - 1
    );

  return (
    <div className="p-4 space-y-8">
      {/* Search Section */}
      <SearchBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center p-10 rounded-b-3xl shadow-md">
        <h1 className="text-4xl font-bold leading-snug">
          Switch to Solar, Save Smart 🌞
        </h1>
        <p className="mt-3 text-lg max-w-xl mx-auto">
          Power your <strong>home, shop, or office</strong> with clean, affordable
          energy. Avail subsidy under{" "}
          <strong>PM Surya Ghar: Muft Bijli Yojna</strong> & reduce bills up to
          90%.
        </p>

        {/* Highlights */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
          <div className="bg-white/20 p-3 rounded-lg">✅ Govt Subsidy ₹78,000+</div>
          <div className="bg-white/20 p-3 rounded-lg">✅ ROI in 4–5 Years</div>
          <div className="bg-white/20 p-3 rounded-lg">✅ 25+ Years Panel Life</div>
          <div className="bg-white/20 p-3 rounded-lg">✅ No Cost EMI Available</div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
            Get Free Quote
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700">
            Chat on WhatsApp
          </button>
        </div>

        <p className="mt-4 text-sm opacity-90">
          One-time investment • Save ₹10L+ over 25 years
        </p>
      </section>

      {/* Enhanced Types of Installation */}
    <section className="py-10 px-5 bg-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Types of Solar Installation
      </h2>

      <div className="relative flex items-center justify-between">
        <button
          onClick={goPrev}
          className="absolute left-0 bg-gray-100 px-3 py-2 rounded-full shadow-md"
        >
          ‹
        </button>

        <motion.div
          key={currentInstall.type}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="p-6 bg-gray-50 rounded-2xl shadow-md text-center w-full"
        >
          <h3 className="text-xl font-bold mb-2">{currentInstall.type}</h3>
          <p className="text-gray-600 mb-4">{currentInstall.description}</p>

          <div className="flex justify-center gap-3 mb-4">
            {currentInstall.variants.map((v) => (
              <button
                key={v.kw}
                onClick={() => setSelectedKW(v.kw)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  selectedKW === v.kw
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {v.kw}
              </button>
            ))}
          </div>

          <div className="text-lg font-semibold mb-4">
            Price: <span className="text-green-600">{selectedVariant?.price}</span>
          </div>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/${
                  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999"
                }?text=Hi, I'm interested in ${selectedKW} ${currentInstall.type}`,
                "_blank"
              )
            }
            className="bg-green-600 text-white py-3 px-6 rounded-xl w-full font-medium shadow-md hover:bg-green-700 transition"
          >
            Get Quote on WhatsApp
          </button>
        </motion.div>

        <button
          onClick={goNext}
          className="absolute right-0 bg-gray-100 px-3 py-2 rounded-full shadow-md"
        >
          ›
        </button>
      </div>
    </section>

      {/* Subsidy Info */}
      <section className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">
          PM Surya Ghar Yojna Subsidy
        </h2>
        <p className="text-lg">
          Get up to <strong>₹78,000 subsidy</strong> directly in your account.
        </p>
        <p className="text-gray-700 mt-1">
          Final cost after subsidy: <strong>₹1,22,000</strong>
        </p>
      </section>

      {/* Finance Options */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Easy Finance Options</h2>
        <ul className="space-y-2">
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>No-Cost EMI</strong> – Pay in easy monthly installments with
            0% interest
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>Solar Loans</strong> – Tie-ups with banks & NBFCs for quick
            approval
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>Govt Subsidy Support</strong> – We help you apply & claim
            benefits
          </li>
        </ul>
      </section>

      {/* Savings Comparison */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Bill Savings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-red-100 rounded-lg text-center shadow-sm">
            <p className="text-sm text-gray-700">Before Solar</p>
            <p className="text-xl font-bold">₹4,000/month</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg text-center shadow-sm">
            <p className="text-sm text-gray-700">After Solar</p>
            <p className="text-xl font-bold">₹500/month</p>
          </div>
        </div>
      </section>

      {/* Why Solar */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Why Choose Solar?</h2>
        <ul className="space-y-2">
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>For Homes 🏠</strong> – Cut electricity bills & enjoy 24x7
            power
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>For Commercial Spaces 🏢</strong> – Reduce costs & boost
            profits
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>For Shops & Businesses 🛍️</strong> – Reliable power & lower
            monthly expenses
          </li>
        </ul>
      </section>

      {/* After Sales Support */}
      <section className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">After-Sales Support</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>✅ Free installation & setup</li>
          <li>✅ Regular cleaning & maintenance</li>
          <li>✅ 24x7 Customer Support via WhatsApp</li>
        </ul>
      </section>
    </div>
  );
}
