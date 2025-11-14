// src/components/BottomNav.jsx
import { Link, useLocation } from 'react-router-dom'
import { Home, Wallet, Camera, User, History } from 'lucide-react'

function BottomNav() {
  const { pathname } = useLocation()

  const nav = [
    { to: '/dashboard', label: 'Home', icon: Home },
    { to: '/wallet', label: 'Reward', icon: Wallet },
    { to: '/scan', label: 'Scan', icon: Camera },
    { to: '/profile', label: 'Profile', icon: User },
    { to: '/history', label: 'History', icon: History },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 shadow-lg z-50">
      {nav.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className={`flex flex-col items-center px-3 py-2 rounded-lg transition ${
            pathname === to ? 'text-brand-blue' : 'text-gray-500'
          }`}
        >
          <Icon className="w-6 h-6" />
          <span className="text-xs mt-1">{label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default BottomNav  // THIS LINE IS REQUIRED