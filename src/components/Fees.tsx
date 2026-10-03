import { motion } from 'motion/react';
import { Check, Calendar } from 'lucide-react';

export default function Fees() {
  return (
    <section id="fees" className="py-20 bg-[#121827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-pink-400 font-semibold tracking-wider uppercase text-sm mb-2">Enrollment</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple & Transparent
          </h2>
          <p className="text-lg text-slate-400">
            Choose the format that works best for you. No hidden charges.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden border border-white/10"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">1-on-1 Only</div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Personal Tuition</h3>
            <p className="text-purple-200 mb-6">100% personalized attention at your pace.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-extrabold">[Contact]</span>
              <span className="text-pink-200"> for hourly/monthly fee</span>
            </div>

            <ul className="space-y-4 mb-8 text-pink-50">
              <li className="flex gap-3"><Check className="w-5 h-5 text-orange-400 shrink-0" /> <span>Flexible scheduling</span></li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-orange-400 shrink-0" /> <span>Customized lesson plans</span></li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-orange-400 shrink-0" /> <span>Extra doubt clearing sessions</span></li>
            </ul>

            <a href="#contact" className="block w-full text-center bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-3 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-colors shadow-lg shadow-orange-900/50">
              Enquire Now
            </a>
          </motion.div>

        </div>

        {/* Free Trial Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-8 sm:p-12 border border-white/10 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-400 relative z-10">
            <Calendar className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">Not sure yet? Book a Free Trial Class!</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            Experience my teaching style firsthand. No commitment required. We'll spend 45 minutes discussing your current math level and tackling a topic of your choice.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#0B0F19] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors relative z-10">
            Book Trial Class Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
