import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <div className="text-xl font-bold">UHT Hub</div>
            <div className="mt-2 text-sm">Practical tech training and coworking for Nigeria's next builders.</div>
          </div>
          <div className="mt-6 md:mt-0 text-sm">
            <div>Contact</div>
            <div className="mt-2">hello@uhthub.ng</div>
            <div>Lagos, Nigeria</div>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} UHT Hub. All rights reserved.</div>
      </div>
    </footer>
  )
}
