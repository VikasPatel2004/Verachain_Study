"use client";

import { useState } from "react";

const cities = ["Canberra", "Tokyo", "Delhi", "Berlin", "New York"];
const transportModes = ["Sea", "Land", "Air"];

export default function ConsumerPage() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = () => {
    if (fromCity && toCity && mode) {
      alert(`Fetching suppliers from ${fromCity} to ${toCity} via ${mode}`);
      // You can route to another page or fetch data here
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="bg-gray-900 p-10 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          VeraChain for Consumers
        </h1>

        <div className="space-y-6">
          {/* From City */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">From City</label>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            >
              <option value="">Select origin</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* To City */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">To City</label>
            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            >
              <option value="">Select destination</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Transport Mode */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Transport Mode</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            >
              <option value="">Select mode</option>
              {transportModes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            disabled={!fromCity || !toCity || !mode}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Get Access
          </button>
        </div>
      </div>
    </div>
  );
}