import { motion } from 'motion/react';
import { Target, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const principles = [
    "I focus on step-by-step clarity, not rote memorization.",
    "Making topics that feel intimidating start to feel manageable.",
    "Providing support for those who can't attend offline classes.",
    "Patience is key. No question is a 'silly' question."
  ];

  return (
    <section id="about" className="py-20 bg-[#121827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 bg-[#1A2235] w-fit pr-6 p-1.5 rounded-full border border-white/5 shadow-lg">
              <img src="/ritu_mahajan_channel_logo.png" alt="Maths with Ritu Mahajan Logo" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm leading-tight">Ritu Mahajan</span>
                <span className="text-pink-400 text-xs font-medium">Maths with Ritu Mahajan</span>
              </div>
            </div>

            <div className="inline-block text-orange-400 font-semibold tracking-wider uppercase text-sm mb-2">About Me</div>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
              <img src="/image.png" alt="Ritu Mahajan" className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-purple-500/20 shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Hi, I'm Ritu. Let's make Math your <span className="text-orange-400">favorite subject.</span>
              </h2>
            </div>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              I teach Math in a step-by-step, concept-first way. My channel and classes exist because I know that not every student can easily reach an offline classroom—whether due to distance, cost, or personal circumstances.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Since 2014, I've been creating clear, free video lessons for anyone who needs them, alongside dedicated board-exam-focused preparation and personal doubt-solving sessions for my private students.
            </p>

            <div className="bg-purple-900/10 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                My Teaching Philosophy
              </h3>
              <ul className="space-y-3">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-[#1A2235] p-8 rounded-2xl border border-white/5 shadow-sm hover:border-purple-500/30 transition-colors">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experience</h3>
              <p className="text-slate-400">Teaching Math since 2014, helping thousands online and offline prepare for board & college exams.</p>
            </div>
            
            <div className="bg-[#1A2235] p-8 rounded-2xl border border-white/5 shadow-sm hover:border-pink-500/30 transition-colors sm:translate-y-8">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Boards & Levels</h3>
              <p className="text-slate-400">Expertise in CBSE, ICSE, and PSEB for Classes 9-12, plus selected College modules (B.A, B.Sc, BBA, M.Sc).</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
