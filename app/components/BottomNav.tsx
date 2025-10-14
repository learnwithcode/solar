"use client";

import { Phone, Sun, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const phoneNumber = "tel:+919625619508"; // Replace with your business number
  const whatsappLink = "https://wa.me/919625619508"; // Replace with your WhatsApp number

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex justify-between items-center px-8 py-3 z-50">
      {/* Call Button */}
      <motion.a
        href={phoneNumber}
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center text-gray-700 hover:text-green-600"
      >
        <Phone className="h-6 w-6" />
        <span className="text-xs font-medium">Call</span>
      </motion.a>

      {/* Home Button */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center bg-yellow-400 text-white rounded-full p-4 shadow-md -translate-y-4 cursor-pointer"
      >
        <Sun className="h-6 w-6" />
        {/* <span className="text-xs font-semibold mt-1">Home</span> */}
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center text-gray-700 hover:text-green-600"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="text-xs font-medium">WhatsApp</span>
      </motion.a>
    </div>
  );
}
