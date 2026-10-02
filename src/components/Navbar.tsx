import React, { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-uht-blue font-bold text-xl">UHT Hub</div>

        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="text-gray-700 hover:text-uht-blue">Home</a>
          <a href="#about" className="text-gray-700 hover:text-uht-blue">About</a>
          <a href="#courses" className="text-gray-700 hover:text-uht-blue">Courses</a>
          <a href="#pricing" className="text-gray-700 hover:text-uht-blue">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-uht-blue">Contact</a>
        </nav>

        <div className="hidden md:flex items-center">
          <a href="#contact" className="bg-uht-blue text-white px-4 py-2 rounded shadow-sm hover:shadow-md transition">Register</a>
        </div>

        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-uht-blue"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transform transition-transform duration-200 ${open ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="bg-white border-t">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#home" onClick={() => setOpen(false)} className="block text-gray-800 font-medium">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="block text-gray-800 font-medium">About</a>
            <a href="#courses" onClick={() => setOpen(false)} className="block text-gray-800 font-medium">Courses</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="block text-gray-800 font-medium">Pricing</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-gray-800 font-medium">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 bg-uht-blue text-white text-center px-4 py-2 rounded">Register</a>
          </div>
        </div>
      </div>
    </header>
  )
}
