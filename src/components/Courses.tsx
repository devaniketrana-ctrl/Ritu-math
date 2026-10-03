import { motion } from 'motion/react';
import { BookOpen, Calculator, PenTool, TrendingUp, ArrowRight } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "Class 9–10 Maths",
      description: "Strategic preparation for board exams (CBSE/ICSE/PSEB). Covering NCERT thoroughly with extra focus on previous year questions.",
      format: "1-on-1 Only",
      timings: "[Available Time Slots - to be added]",
      mode: "[Online/Offline - to be added]",
      icon: BookOpen,
      color: "purple"
    },
    {
      title: "Class 11–12 Mathematics",
      description: "Deep dive into Algebra, Calculus, and Trigonometry. Perfect for students targeting top marks in their board exams.",
      format: "1-on-1 Only",
      timings: "[Available Time Slots - to be added]",
      mode: "[Online/Offline - to be added]",
      icon: TrendingUp,
      color: "pink"
    },
    {
      title: "College Level Maths",
      description: "Specialized tuition for selected college-level topics covering B.A, B.Sc, BBA, and M.Sc Mathematics papers.",
      format: "1-on-1 Only",
      timings: "[Available Time Slots - to be added]",
      mode: "[Online/Offline - to be added]",
      icon: Calculator,
      color: "purple"
    },
    {
      title: "Special Doubt Sessions",
      description: "Struggling with just one topic like Integration or Geometry? Book a short-term module to master specific concepts.",
      format: "1-on-1 Only",
      timings: "Flexible Timings",
      mode: "Online Only",
      icon: PenTool,
      color: "orange"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">My Classes</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tailored Math Tuition
          </h2>
          <p className="text-lg text-slate-400">
            Whether you need a quick topic refresher or year-long board exam support, I offer flexible options to suit your learning style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A2235] rounded-3xl p-8 border border-white/5 hover:border-purple-500/30 transition-all group shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform group-hover:scale-110 ${course.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : course.color === 'pink' ? 'bg-pink-500/20 text-pink-400' : 'bg-orange-500/20 text-orange-400'}`}>
                    <course.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-slate-400">{course.description}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-sm font-semibold text-slate-300 mb-1 uppercase tracking-wider">Format & Mode</div>
                  <div className="text-purple-300 font-medium bg-purple-900/30 inline-block px-3 py-1 rounded-full text-sm mr-2">{course.format}</div>
                  <div className="text-pink-300 font-medium bg-pink-900/30 inline-block px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">{course.mode}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-300 mb-1 uppercase tracking-wider">Timings</div>
                  <div className="text-slate-400">{course.timings}</div>
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-colors ${
                  course.color === 'purple' 
                    ? 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20' 
                    : course.color === 'pink'
                    ? 'bg-pink-500/10 text-pink-300 hover:bg-pink-500/20'
                    : 'bg-orange-500/10 text-orange-300 hover:bg-orange-500/20'
                }`}
              >
                Enquire for Time Slots
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
