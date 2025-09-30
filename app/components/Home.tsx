// app/components/Home.tsx
"use client";

export default function Home() {
  return (
    <div className="p-4 space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center p-10 rounded-b-3xl shadow-md">
        <h1 className="text-4xl font-bold leading-snug">Go Solar & Save Big 🌞</h1>
        <p className="mt-3 text-lg max-w-xl mx-auto">
          Power your <strong>home, shop, or office</strong> with clean energy.
          Get subsidy under <strong>PM Surya Ghar Yojna</strong> & cut your
          electricity bills by up to 90%.
        </p>

        {/* Quick Highlights */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
          <div className="bg-white/20 p-3 rounded-lg">✅ Govt Subsidy up to ₹78,000</div>
          <div className="bg-white/20 p-3 rounded-lg">✅ ROI in 4–5 Years</div>
          <div className="bg-white/20 p-3 rounded-lg">✅ 25+ Years Panel Life</div>
          <div className="bg-white/20 p-3 rounded-lg">✅ No Cost EMI Options</div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
            Get Free Quote
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700">
            Chat on WhatsApp
          </button>
        </div>

        {/* Bottom Note */}
        <p className="mt-4 text-sm opacity-90">
          One-time investment • Save up to ₹10 Lakhs over 25 years
        </p>
      </section>

      {/* Expertise & Installations */}
      <section className="p-4 space-y-4">
        <h2 className="text-2xl font-semibold mb-3 text-center">Our Expertise & Installations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Types of Installation */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Types of Installation</h3>
            <ul className="space-y-1 text-gray-700">
              <li>✅ On-Grid – Connected to electricity grid</li>
              <li>✅ Off-Grid – Battery backup included</li>
              <li>✅ Hybrid – Grid + Battery combination</li>
            </ul>
          </div>

          {/* Projects Completed */}
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-lg mb-2">Projects Completed</h3>
            <p className="text-3xl font-bold text-orange-600">+350</p>
            <p className="text-gray-600">Happy customers across India</p>
          </div>

          {/* Years of Experience */}
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-lg mb-2">Years of Experience</h3>
            <p className="text-3xl font-bold text-orange-600">12</p>
            <p className="text-gray-600">Years in solar installation</p>
          </div>
        </div>

        {/* Panels Installed */}
        <div className="mt-4 p-4 border rounded-lg shadow-sm text-center bg-yellow-50">
          <h3 className="font-semibold text-lg mb-2">Solar Panels Installed</h3>
          <p className="text-3xl font-bold text-orange-600">+1200 kW</p>
          <p className="text-gray-700">Cumulative capacity for homes & businesses</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Upfront Pricing</h2>
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <p className="text-lg">✅ Example: 3kW Solar Setup</p>
          <p className="text-xl font-bold">₹2,00,000*</p>
          <p className="text-sm text-gray-600">*Before subsidy</p>
        </div>
      </section>

      {/* Subsidy Info */}
      <section className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">PM Surya Ghar Yojna Subsidy</h2>
        <p className="text-lg">Get up to <strong>₹78,000 subsidy</strong> directly in your account.</p>
        <p className="text-gray-700 mt-1">Final cost after subsidy: <strong>₹1,22,000</strong></p>
      </section>

      {/* Finance Options */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Easy Finance Options</h2>
        <ul className="space-y-2">
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>No-Cost EMI</strong> – Pay in easy monthly installments with 0% interest
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>Solar Loans</strong> – Tie-ups with banks & NBFCs for quick approval
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>Govt Subsidy Support</strong> – We help you apply & claim benefits
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

      {/* One-time Investment */}
      <section className="p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">One-Time Investment</h2>
        <p className="text-lg">Lifetime savings up to <strong>₹10 Lakhs</strong> over 25 years.</p>
        <p className="text-sm text-gray-600">ROI in just 4–5 years.</p>
      </section>

      {/* Why Solar? */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Why Choose Solar?</h2>
        <ul className="space-y-2">
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>For Homes 🏠</strong> – Cut electricity bills & enjoy 24x7 power
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>For Commercial Spaces 🏢</strong> – Reduce operating costs & boost profits
          </li>
          <li className="p-3 border rounded-lg shadow-sm">
            <strong>For Shops & Businesses 🛍️</strong> – Reliable power & lower monthly expenses
          </li>
        </ul>
      </section>

      {/* After Sales Support */}
      <section className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">After-Sales Support</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>✅ Free installation & setup</li>
          <li>✅ Regular cleaning & maintenance packages</li>
          <li>✅ 24x7 Customer Support via WhatsApp</li>
        </ul>
      </section>
    </div>
  );
}
