"use client";

import { useState } from "react";

const cities = [
  "Greater Noida",
  "Ghaziabad",
  "Gautam Buddha Nagar",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Ahmedabad",
];

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setFilteredCities(
      cities.filter((c) => c.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleSelect = (city: string) => {
    setSearch(city);
    setFilteredCities([]);

    // WhatsApp redirect with prefilled message
    const phoneNumber = "919625619508"; // ← replace with your WhatsApp business number
    const message = encodeURIComponent(
      `Hi, I’m interested in installing rooftop solar panels in ${city}. Please share details.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative max-w-xl mx-auto mb-6">
      {/* Headline */}
      <h2 className="text-xl font-semibold mb-2 text-left">
        Check Solar Availability in Your City
      </h2>

      <input
        type="text"
        placeholder="Start typing your city..."
        value={search}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {filteredCities.length > 0 && search && (
        <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow-lg">
          {filteredCities.map((city) => (
            <li
              key={city}
              onClick={() => handleSelect(city)}
              className="px-4 py-2 cursor-pointer hover:bg-orange-100"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
