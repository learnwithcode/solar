// components/WhatsAppFab.tsx
"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab({ prefill }: { prefill?: string }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const text = encodeURIComponent(prefill || "Hi, I want a rooftop solar quote");
  const href = `https://wa.me/${number}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-24 z-50 p-3 rounded-full shadow-lg bg-green-500 text-white flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={22} />
    </a>
  );
}
