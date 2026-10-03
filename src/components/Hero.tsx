import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, Users, Youtube, GraduationCap, Calculator, BookOpen, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 bg-[#0B0F19] relative overflow-hidden">
      {/* Decorative background elements matching channel branding */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Math symbols */}
      <Calculator className="absolute top-32 left-10 w-16 h-16 text-purple-500/10 -rotate-12" />
      <BookOpen className="absolute bottom-40 right-20 w-24 h-24 text-pink-500/10 rotate-12" />
      <Sparkles className="absolute top-1/4 right-1/4 w-12 h-12 text-yellow-500/20 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Accepting students for CBSE | ICSE | PSEB
            </div>
            
            <div className="font-[Caveat] text-4xl sm:text-5xl text-orange-400 mb-2 -rotate-2 inline-block">
              Learn Maths Easily!
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Making Math <br/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text relative inline-block">
                Understandable
                <svg className="absolute -bottom-2 left-0 w-full text-orange-500 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm Ritu Mahajan! I run the "Maths with Ritu Mahajan" YouTube channel and offer 1-on-1 personal tuition for Class 9-12 and College levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-500 hover:to-orange-600 transition-colors shadow-lg shadow-orange-500/25"
              >
                Book a Trial Class
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@mathswithritumahajan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                <Youtube className="w-5 h-5 text-red-500" />
                Subscribe on YouTube
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Youtube className="w-5 h-5 text-red-500" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">839</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Subscribers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <PlayCircle className="w-5 h-5 text-purple-400" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">367</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Videos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Users className="w-5 h-5 text-pink-400" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">49.6K</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Total Views</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2 px-4 sm:px-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-50"></div>
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src="/image.png"
                alt="Ritu Mahajan"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-2 border-white/10"
              />
              
              <div className="absolute -left-4 sm:-left-8 top-1/4 bg-[#1A1F2C] border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-2xl">✨</span>
                <div>
                  <div className="font-bold text-white text-sm">Since 2014</div>
                  <div className="text-slate-400 text-xs">On YouTube</div>
                </div>
              </div>
              
              <div className="absolute -right-4 sm:-right-8 bottom-1/4 bg-[#1A1F2C] border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-red-500/20 p-2 rounded-full text-red-400">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Class 9th-12th</div>
                  <div className="text-slate-400 text-xs">& College Maths</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
