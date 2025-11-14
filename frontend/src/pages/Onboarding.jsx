import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between px-6 pt-12 pb-8 text-center">
      {/* Top: Full-width blurred background image */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-gray-100 to-white opacity-70" />
        <img
          src="/onboarding-bg.jpg" // Replace with your actual background image
          alt=""
          className="h-full w-full object-cover blur-sm"
        />
      </div>

      {/* Logo + Text */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        {/* Logo Circle */}
        <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center p-4">
          <div className="relative">
            {/* Eye */}
            <div className="w-20 h-14 bg-brand-blue rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-brand-blue rounded-full" />
              </div>
            </div>
            {/* Checkmark Badge */}
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-2xl text-brand-orange">Checkmark</span>
            </div>
            {/* Sparkle */}
            <div className="absolute -top-1 -left-1 text-brand-orange text-xl">
              Sparkle
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">CheckAm</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xs">
          The crowd source hunter for counterfeit goods
        </p>
      </div>

      {/* Bottom CTA Buttons */}
      <div className="w-full space-y-3">
        <Link
          to="/dashboard"
          className="block w-full bg-brand-blue text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition"
        >
          Get Started
        </Link>
        <button className="flex items-center justify-center w-full border border-gray-300 py-4 rounded-2xl font-medium text-gray-700 space-x-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 6.5c1.61 0 3.05.55 4.18 1.64l3.12-3.12C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.41 6.16-4.41z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
