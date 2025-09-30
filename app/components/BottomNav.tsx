// components/BottomNav.tsx
import { TabType } from "../page";

type Props = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

export default function BottomNav({ activeTab, setActiveTab }: Props) {
  const tabs: TabType[] = ["home", "subsidy", "finance", "contact"];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded ${
            activeTab === tab ? "bg-orange-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
}
