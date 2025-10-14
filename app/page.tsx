"use client";

import Home from "./components/Home";
import BottomNav from "./components/BottomNav";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col pb-28 bg-white">
      {/* Main Home Section */}
      <main className="flex-1 p-0 max-w-xl mx-auto">
        <Home />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
