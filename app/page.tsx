// app/page.tsx
"use client";

import { useState } from "react";
import Home from "./components/Home";
import BottomNav from "./components/BottomNav";

// Central type for tab values
export type TabType = "home" | "subsidy" | "finance" | "contact";

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  return (
    <div className="min-h-screen flex flex-col pb-28 bg-white">
      <main className="flex-1 p-0 max-w-xl mx-auto">
        {/* HOME TAB */}
        {activeTab === "home" && <Home />}

        {/* SUBSIDY TAB */}
        {activeTab === "subsidy" && (
          <section className="p-4">
            <h2 className="text-xl font-semibold mb-2">Subsidy & Govt Schemes</h2>
            <p className="text-gray-600 mb-3">
              Surya Ghar and state subsidies — eligibility, typical % subsidy, and steps to apply.
            </p>
            <ol className="list-decimal pl-5 text-gray-700">
              <li>Site inspection → estimate</li>
              <li>Apply for subsidy (documents, approval)</li>
              <li>Installation & commissioning</li>
            </ol>
            <div className="mt-4">
              <button
                onClick={() => setActiveTab("home")}
                className="py-2 px-3 bg-gray-100 rounded"
              >
                Back Home
              </button>
            </div>
          </section>
        )}

        {/* FINANCE TAB */}
        {activeTab === "finance" && (
          <section className="p-4">
            <h2 className="text-xl font-semibold mb-2">Finance & Payback</h2>
            <p className="text-gray-600 mb-3">
              Use EMI plans, zero-upfront options and view estimated payback time.
            </p>
            <div className="p-3 bg-gray-50 rounded border">
              <strong>Example:</strong> 3 kW system — payback 3–5 years (depending on subsidy & consumption).
            </div>
          </section>
        )}

        {/* CONTACT TAB */}
        {activeTab === "contact" && (
          <section className="p-4">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600 mb-3">Call or WhatsApp for a free site assessment.</p>
            <div className="space-y-2">
              <button
                className="w-full py-3 rounded-lg bg-green-600 text-white font-medium"
              >
                Chat on WhatsApp
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
