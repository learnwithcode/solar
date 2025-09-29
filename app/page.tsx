// app/page.tsx
"use client";
import { useState } from "react";
import BottomNav from "./components/BottomNav";
// import WhatsAppFab from "./components/WhatsAppFab";
import Home from "./components/Home";

type Lead = {
  name?: string;
  phone?: string;
  city?: string;
  bill?: string;
  prefillText?: string;
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<"home" | "subsidy" | "finance" | "contact">("home");

  async function submitLeadAndOpenWhatsApp(lead: Lead) {
    // 1) POST lead to your server api/lead (non-blocking)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // still open WhatsApp even if the POST fails
      console.error("lead post failed:", err);
    }

    // 2) Trigger Google Ads conversion if gtag present
    try {
      const sendTo = process.env.NEXT_PUBLIC_AW_CONV;
      if (typeof window !== "undefined" && (window as any).gtag && sendTo) {
        (window as any).gtag("event", "conversion", { send_to: sendTo, value: 1.0, currency: "INR" });
      }
    } catch { /* ignore */ }

    // 3) Open WhatsApp with prefilled text
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const text = encodeURIComponent(lead.prefillText || "Hi, I want a rooftop solar quote. My city: ___, monthly bill: ___");
    const url = `https://wa.me/${number}?text=${text}`;
    if (typeof window !== "undefined") window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen flex flex-col pb-28 bg-white">
      <main className="flex-1 p-0 max-w-xl mx-auto">
        {activeTab === "home" && (
          <Home/>
        )}

        {activeTab === "subsidy" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Subsidy & Govt Schemes</h2>
            <p className="text-gray-600 mb-3">Short summary: Surya Ghar & state subsidies — eligibility, typical % subsidy, and steps to apply.</p>
            <ol className="list-decimal pl-5 text-gray-700">
              <li>Site inspection → estimate</li>
              <li>Apply for subsidy (documents, approval)</li>
              <li>Installation & commissioning</li>
            </ol>
            <div className="mt-4">
              <button onClick={() => setActiveTab("home")} className="py-2 px-3 bg-gray-100 rounded">Back Home</button>
            </div>
          </section>
        )}

        {activeTab === "finance" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Finance & Payback</h2>
            <p className="text-gray-600 mb-3">Use EMI plans, zero-upfront options and view estimated payback time.</p>
            <div className="p-3 bg-gray-50 rounded border">
              <strong>Example:</strong> 3 kW system — payback 3–5 years (depending on subsidy & consumption).
            </div>
          </section>
        )}

        {activeTab === "contact" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600 mb-3">Call or WhatsApp for a free site assessment.</p>
            <div className="space-y-2">
              <button
                onClick={() => submitLeadAndOpenWhatsApp({ prefillText: "Hello, I want a site visit. My city: ____ , best time: ____" })}
                className="w-full py-3 rounded-lg bg-green-600 text-white font-medium"
              >
                Chat on WhatsApp
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Nav + WhatsApp are components to keep page clean */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* <WhatsAppFab prefill="Hi, I want a rooftop solar quote. My city: ____" /> */}
    </div>
  );
}
