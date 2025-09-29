// components/BottomNav.tsx
"use client";
import { FaHome, FaSun, FaWallet, FaPhone } from "react-icons/fa";

export default function BottomNav({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (t: string) => void;
}) {
  const items = [
    { key: "home", icon: FaHome, label: "Home" },
    { key: "subsidy", icon: FaSun, label: "Subsidy" },
    { key: "finance", icon: FaWallet, label: "Finance" },
    { key: "contact", icon: FaPhone, label: "Contact" },
  ];

  return (
    <nav className="fixed left-4 right-4 bottom-6 z-40">
      <div className="flex justify-between items-center bg-white border shadow-sm rounded-2xl px-2 py-2">
        {items.map((it) => {
          const Icon = it.icon;
          const active = it.key === activeTab;
          return (
            <button
              key={it.key}
              onClick={() => setActiveTab(it.key)}
              className={
                "flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all " +
                (active ? "bg-green-600 text-white rounded-lg" : "text-gray-600")
              }
            >
              <Icon size={18} />
              <span className="text-xs mt-1">{it.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
