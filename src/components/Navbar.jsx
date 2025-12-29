import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className="absolute top-0 z-50 w-full flex justify-between items-center py-5 px-4 sm:px-20 xl:px-32 bg-transparent">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img
          src={assets.logo}
          alt="logo"
          className="w-44 sm:w-56 cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate('/')}
        />
      </div>

      {/* RIGHT SIDE */}
      {user ? (
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
            <UserButton 
              afterSignOutUrl="/" 
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12 ring-2 ring-blue-100 hover:ring-blue-400 transition-all duration-300"
                }
              }}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => openSignIn()}
          className="group relative flex items-center gap-2.5 rounded-full text-base font-semibold cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2.5">
            Get started 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      )}
    </div>
  )
}

export default Navbar