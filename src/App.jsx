import React from 'react';
import HeroImageReveal from './components/HeroImageReveal';

export default function App() {
  return (
    <div className="w-full min-h-screen m-0 p-0 bg-[#f5f7fc] relative overflow-x-hidden font-sans select-none">
      {/* Full Viewport Production Hero Area */}
      <HeroImageReveal 
        duration={1.4}
        stagger={0.12}
      />
    </div>
  );
}
