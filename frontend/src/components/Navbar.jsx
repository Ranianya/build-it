import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-[#c4b199] px-4 py-4">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex items-center text-3xl font-bold">
          <span className="text-[#bf5b00]">O</span>
          <span className="text-black">pportuNet</span>
        </div>

        {/* Navigation Links - Centré */}
        <div className="flex space-x-8">
          <a href="#" className="text-[#bf5b00] font-medium hover:opacity-80 transition-opacity">Home</a>
          <a href="#" className="text-black font-medium hover:opacity-80 transition-opacity">Hackathons</a>
          <a href="#" className="text-black font-medium hover:opacity-80 transition-opacity">Courses</a>
          <a href="#" className="text-black font-medium hover:opacity-80 transition-opacity">Competitions</a>
        </div>

        {/* About Us Button */}
        <button className="flex items-center px-6 py-3 bg-white/10 border border-white/30 rounded-full text-xl font-bold hover:bg-white/20 transition-all group">
          About us
          <svg 
            className="w-6 h-6 ml-2 text-black/40 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;