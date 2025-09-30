"use client";

import { useState } from "react";

const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Pune",
  "Hyderabad",
  "Jaipur",
  "Ahmedabad",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Patna",
  "Surat",
  "Nagpur",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="w-full bg-gray-100 p-4 shadow-md">
      <div className="max-w-xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-2 text-center">
          Check Solar Availability in Your City
        </h2>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Enter your city..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {results.length > 0 && (
          <ul className="bg-white border border-gray-200 rounded-lg mt-2 shadow">
            {results.map((city, index) => (
              <li
                key={index}
                className="p-2 hover:bg-orange-100 cursor-pointer rounded"
                onClick={() => {
                  setQuery(city);
                  setResults([]);
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
