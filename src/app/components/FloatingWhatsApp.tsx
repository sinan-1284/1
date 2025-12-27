import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const handleClick = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/7907787086?text=Hi!%20I%20have%20a%20question%20about%20NextBot%20Labs', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Button */}
        <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-card border border-primary/20 rounded-lg px-4 py-2 shadow-lg backdrop-blur-sm whitespace-nowrap">
            <p className="text-sm">Chat with us on WhatsApp</p>
          </div>
        </div>
      </div>
    </button>
  );
}
