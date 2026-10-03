import { Youtube, Instagram, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/5">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
                RM
              </div>
              <span className="font-bold text-xl text-white">Maths with Ritu Mahajan</span>
            </div>
            <p className="text-sm max-w-sm text-slate-400">
              Making math simple and accessible for everyone. Join me on YouTube or book a personal class today.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Me</a></li>
              <li><a href="#classes" className="hover:text-purple-400 transition-colors">Classes</a></li>
              <li><a href="#youtube" className="hover:text-purple-400 transition-colors">YouTube Channel</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@mathswithritumahajan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/_ritu_mahajan_19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/share/1HxrP3iHMT" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Maths with Ritu Mahajan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Learn Maths Easily!</p>
        </div>
      </div>
    </footer>
  );
}
