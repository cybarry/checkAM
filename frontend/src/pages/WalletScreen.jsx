// src/pages/WalletScreen.jsx
import { useState } from "react";
import { Wallet, Phone, Signal } from "lucide-react";
import BottomNav from "../components/BottomNav.jsx";

export default function WalletScreen() {
  const [activeTab, setActiveTab] = useState("airtime"); // 'airtime' or 'data'
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isRedeeming, setIsRedeeming] = useState(false);

  const user = { name: "Raji Abdulfatai Ridwan", balance: 5234.84 };

  const airtimeAmounts = [1000, 2000, 3000, 5000, 10000, 20000, 20000, 20000];
  const dataAmounts = [
    "1gig",
    "2gig",
    "3gig",
    "4gig",
    "5gig",
    "6gig",
    "7gig",
    "8gig",
  ];

  const handleRedeem = () => {
    if (!phoneNumber || !selectedAmount) return;
    setIsRedeeming(true);
    setTimeout(() => {
      alert(
        `${activeTab === "airtime" ? "Airtime" : "Data"} redeemed successfully!`
      );
      setIsRedeeming(false);
      setPhoneNumber("");
      setSelectedAmount(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-brand-blue">Wallet</h1>
          <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="px-6">
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-3xl shadow-sm">
          <p className="text-sm text-gray-600">{user.name}</p>
          <p className="text-xs text-gray-500 mt-1">Your CheckIt Balance</p>
          <p className="text-4xl font-bold text-brand-blue mt-2">
            C {user.balance.toLocaleString()}
          </p>
          <div className="h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mt-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("airtime")}
            className={`flex-1 py-3 text-center font-medium transition ${
              activeTab === "airtime"
                ? "text-brand-blue border-b-2 border-brand-blue"
                : "text-gray-500"
            }`}
          >
            <Phone className="w-5 h-5 mx-auto mb-1" />
            Airtime
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={`flex-1 py-3 text-center font-medium transition ${
              activeTab === "data"
                ? "text-brand-blue border-b-2 border-brand-blue"
                : "text-gray-500"
            }`}
          >
            <Signal className="w-5 h-5 mx-auto mb-1" />
            Data
          </button>
        </div>
      </div>

      {/* Amount Section */}
      <div className="px-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Amount to top up
        </h3>

        {/* Phone Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="w-full px-4 py-3 bg-gray-100 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>

        {/* Amount Grid */}
        <div className="grid grid-cols-4 gap-3">
          {(activeTab === "airtime" ? airtimeAmounts : dataAmounts).map(
            (amount, i) => (
              <button
                key={i}
                onClick={() => setSelectedAmount(amount)}
                className={`py-3 rounded-2xl font-medium transition ${
                  selectedAmount === amount
                    ? "bg-brand-blue text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {amount}
              </button>
            )
          )}
        </div>

        {/* Redeem Button */}
        <button
          onClick={handleRedeem}
          disabled={!phoneNumber || !selectedAmount || isRedeeming}
          className="mt-8 w-full bg-brand-blue text-white py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 transition"
        >
          {isRedeeming ? (
            <span>Redeeming...</span>
          ) : (
            <>
              <span>
                Redeem Your {activeTab === "airtime" ? "Airtime" : "Data"}
              </span>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </>
          )}
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
