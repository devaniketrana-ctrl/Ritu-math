import { motion } from 'motion/react';
import { Youtube, Play } from 'lucide-react';

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-20 bg-[#121827] text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 font-medium text-sm mb-6 border border-red-500/20">
              <Youtube className="w-4 h-4" />
              839 Subscribers • 367 Videos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Learn for Free on <br/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">"Maths with Ritu Mahajan"</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Not ready for personal tuition yet? No problem! Join my growing community on YouTube where I post regular tutorials, board exam prep, and solve common math doubts.
            </p>
            
            <a
              href="https://www.youtube.com/@mathswithritumahajan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/50"
            >
              Subscribe to Channel
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <a href="https://www.youtube.com/@mathswithritumahajan" target="_blank" rel="noopener noreferrer" className="block aspect-video bg-[#0B0F19] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
              {/* YouTube iframe placeholder - in a real site, embed actual video */}
              <img 
                src="https://images.unsplash.com/photo-1632524458514-6902264c39dc?auto=format&fit=crop&q=80&w=1200" 
                alt="Class 12th Maths — Integration, NCERT Chapter 7" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pt-12">
                <p className="text-white font-medium">Class 12th Maths — Integration, NCERT Chapter 7 (Part 1)</p>
              </div>
            </a>
            
            {/* Small video thumbnails */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a href="https://www.youtube.com/@mathswithritumahajan" target="_blank" rel="noopener noreferrer" className="block aspect-video bg-[#0B0F19] rounded-xl overflow-hidden relative group border border-white/5">
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" alt="Video 2" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white opacity-70 group-hover:opacity-100" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white text-xs font-medium truncate">Class 12th Maths — Sets, NCERT</p>
                </div>
              </a>
              <a href="https://www.youtube.com/@mathswithritumahajan" target="_blank" rel="noopener noreferrer" className="block aspect-video bg-[#0B0F19] rounded-xl overflow-hidden relative group border border-white/5">
                <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" alt="Video 3" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white opacity-70 group-hover:opacity-100" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white text-xs font-medium truncate">More on Maths with Ritu Mahajan...</p>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
