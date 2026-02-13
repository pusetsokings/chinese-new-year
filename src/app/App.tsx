import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowLeft, Volume2, Maximize, Share2 } from "lucide-react";
import confetti from "canvas-confetti";

/**
 * Constants & Colors - Barloworld corporate palette
 */
const COLORS = {
  deepRed: "#9B1C1C",
  gold: "#D4AF37",
  cream: "#FFF9F0",
};

/** Logo path - Barloworld Equipment logo in public/ */
const LOGO_SRC = "BE logo.png";

/**
 * Header Component (White background with Barloworld Logo)
 */
const Header = () => (
  <header className="absolute top-0 left-0 w-full h-16 bg-white shadow-md z-50 flex items-center justify-between px-6">
    <div className="h-10">
      <img src={LOGO_SRC} alt="Barloworld Equipment" className="h-full object-contain" />
    </div>
    <div className="hidden md:flex items-center gap-4">
      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global Partnership · 2026</span>
    </div>
  </header>
);

/**
 * Red Envelope Experience
 */
const RedEnvelope = ({ onOpen, isOpen, onVideoClick }: { onOpen: () => void, isOpen: boolean, onVideoClick: () => void }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-[#9B1C1C]">
      {/* Background: Solid Red */}
      <div className="absolute inset-0 bg-[#9B1C1C]" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="seal-state"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-20 flex flex-col items-center gap-12"
          >
            {/* Clickable Gold Seal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl relative cursor-pointer group"
              style={{ 
                backgroundColor: COLORS.gold,
                backgroundImage: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(255,220,100,0.3), transparent 40%)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 30px rgba(255,255,255,0.3)'
              }}
            >
              <div className="absolute inset-3 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors" />
              <span className="text-white text-7xl font-serif font-bold drop-shadow-lg">福</span>
            </motion.button>

            <div className="text-center space-y-4">
              <h1 className="text-white font-serif text-5xl tracking-[0.3em] font-bold" style={{ color: COLORS.gold }}>新春快乐</h1>
              <p className="text-white/80 font-serif text-lg uppercase tracking-[0.4em] font-light">Happy Lunar New Year</p>
            </div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-3 opacity-60"
            >
              <p className="text-white text-[10px] uppercase tracking-[0.4em]">Click seal to open</p>
              <div className="w-[1px] h-10 bg-white/40" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="message-state"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.8 }}
            className="relative z-10 w-full max-w-2xl px-6"
          >
            {/* Landscape Envelope/Card */}
            <div 
              className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center p-8 md:p-12"
              style={{ 
                backgroundColor: '#9B1C1C',
                border: '2px solid rgba(212, 175, 55, 0.4)'
              }}
            >
              {/* Inner Decorative Border */}
              <div className="absolute inset-4 border border-[#D4AF37]/20 rounded-lg pointer-events-none" />

              <div className="relative z-10 space-y-8 flex flex-col items-center max-w-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-[1px] bg-[#D4AF37]/40" />
                    <span className="text-white font-serif text-2xl">福</span>
                    <div className="w-12 h-[1px] bg-[#D4AF37]/40" />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="font-serif text-xl italic text-white/90">To our valued Chinese partners,</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">Lunar New Year Message</h2>
                    <p className="text-base text-white/80 max-w-md mx-auto leading-relaxed">
                      Please accept our Lunar New Year wishes and a message from our Head of Sales & Marketing
                    </p>
                  </div>
                </div>

                {/* CTA Button: Solid White */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onVideoClick}
                  className="px-10 py-4 rounded-full bg-white text-[#9B1C1C] font-bold flex items-center gap-4 shadow-2xl transition-all"
                >
                  <Play size={20} fill="#9B1C1C" />
                  <span className="text-sm tracking-[0.2em] uppercase">Watch the Message</span>
                </motion.button>
              </div>
              
              {/* Corner Ornaments */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-lg" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-lg" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-lg" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-lg" />
            </div>

            <div className="mt-8 text-center">
               <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">Barloworld Equipment · 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * Frame 3: Video Message Frame
 */
const VideoMessage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="relative w-full h-screen bg-[#9B1C1C] flex flex-col pt-16">
      {/* Brand Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl space-y-6"
        >
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={16} />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold">Back to Card</span>
          </button>

          {/* Video Player Container */}
          <div className="relative group">
            {/* Glass Background / Shadow */}
            <div className="absolute -inset-4 bg-black/20 rounded-[2rem] blur-2xl opacity-50" />
            
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
              {/* Mock Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <div className="text-center space-y-4">
                  <Play size={64} className="text-white/20 mx-auto" />
                  <p className="text-white/40 text-sm font-serif italic">Leadership Message Video</p>
                </div>
              </div>
              
              {/* Play Button Overlay (Mock) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-100 group-hover:scale-110 transition-transform shadow-2xl">
                  <Play size={32} fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Progress Bar (Mock) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div className="h-full w-1/3 bg-white shadow-[0_0_10px_white]" />
              </div>
            </div>
          </div>

          {/* Leadership Credits - Moved up close to video */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <p className="text-[#D4AF37] text-xs font-serif italic tracking-wide uppercase">Presented by</p>
              <h3 className="text-white text-2xl font-serif font-bold tracking-wide">Mr. Joseph Selaledi</h3>
              <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">Head of Sales & Marketing · Barloworld Equipment</p>
            </div>

            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all">
                <Volume2 size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all">
                <Maximize size={20} />
              </button>
              <div className="w-px h-8 bg-white/10 mx-2" />
              <button className="px-6 h-12 rounded-full bg-white/10 border border-white/20 flex items-center gap-2 text-white hover:bg-white/20 transition-all">
                <Share2 size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Share</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <div className="p-6 text-center">
         <div className="w-20 h-px bg-[#D4AF37]/20 mx-auto mb-4" />
         <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-medium max-w-md mx-auto">Industry-leading machinery, parts, and services for construction, mining, and earthmoving needs.</p>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<"envelope" | "video">("envelope");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Pure gold palette (various shades of gold only)
    const goldColors = ["#D4AF37", "#AA8439", "#FFDF00", "#B8860B"];

    // Slower, more graceful confetti
    const slowConfetti = (originX: number, angle: number) => {
      confetti({
        particleCount: 35,
        angle: angle,
        spread: 55,
        origin: { x: originX, y: 0.6 },
        colors: goldColors,
        ticks: 400, // Lasts longer on screen
        gravity: 0.5, // Lower gravity makes it fall slower
        startVelocity: 25, // Lower initial burst speed
        scalar: 0.9,
        drift: originX === 0 ? 0.5 : -0.5, // Subtle drift towards center
      });
    };

    // Execute bursts
    slowConfetti(0, 60);
    slowConfetti(1, 120);
  };

  const goToVideo = () => setView("video");
  const goToEnvelope = () => setView("envelope");

  return (
    <div className="min-h-screen bg-[#9B1C1C] selection:bg-[#D4AF37] selection:text-white font-sans antialiased">
      {view === "envelope" ? (
        <RedEnvelope onOpen={handleOpen} isOpen={isOpen} onVideoClick={goToVideo} />
      ) : (
        <VideoMessage onBack={goToEnvelope} />
      )}
    </div>
  );
}