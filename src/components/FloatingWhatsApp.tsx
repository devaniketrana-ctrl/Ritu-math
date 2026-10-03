import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://chat.whatsapp.com/DBJG2WAzw5436PSXYIGUTj"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all flex items-center justify-center group"
      aria-label="Join WhatsApp Community"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-[#1A2235] border border-white/10 text-white text-sm font-medium py-1.5 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Join our WhatsApp Community!
      </span>
    </a>
  );
}
