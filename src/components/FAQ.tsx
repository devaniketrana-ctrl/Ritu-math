import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'boards' | 'scheduling' | 'methodology' | 'trial';
  question: string;
  answer: string;
  highlight?: string;
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['boards-1', 'methodology-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'boards', label: 'Board Exams' },
    { id: 'scheduling', label: 'Scheduling & Slots' },
    { id: 'methodology', label: 'Teaching Methodology' },
    { id: 'trial', label: 'Trial & Getting Started' },
  ];

  const faqs: FAQItem[] = [
    {
      id: 'boards-1',
      category: 'boards',
      question: 'Which school boards and syllabus do you teach for Class 9th to 12th?',
      answer:
        'I provide complete, syllabus-aligned guidance for CBSE, ICSE, and PSEB (Punjab School Education Board) curriculums. Every session covers core NCERT/prescribed textbooks line-by-line, combined with Chapter-wise Exemplar problems, high-weightage topics, and regular revision worksheets tailored to your board pattern.',
      highlight: 'CBSE, ICSE & PSEB covered',
    },
    {
      id: 'boards-2',
      category: 'boards',
      question: 'How do you train students for board exams to secure high marks?',
      answer:
        'Board exam coaching focuses on three key areas: (1) Complete concept clarity so you never blank out on twist questions, (2) Step-marking and answer-presentation discipline (writing formal proofs, neat rough columns, and theorem statements that examiners look for), and (3) Past 10-year question papers (PYQs) and timed sample papers with detailed evaluation.',
      highlight: 'Step-marking & PYQs focus',
    },
    {
      id: 'scheduling-1',
      category: 'scheduling',
      question: 'How are 1-on-1 class timings scheduled?',
      answer:
        'Because all tuition is strictly 1-on-1 personal tutoring, timings are coordinated directly between the parent/student and me. We select fixed recurring time slots that comfortably fit around school schedules, sports, and coaching without causing student fatigue.',
      highlight: 'Personalized slot booking',
    },
    {
      id: 'scheduling-2',
      category: 'scheduling',
      question: 'Can classes be rescheduled if a student has school tests or emergencies?',
      answer:
        'Yes, flexibility is one of the main advantages of private 1-on-1 tuition. If you inform me in advance about upcoming unit tests, school exams, or health issues, we adjust and reschedule your session to a mutually convenient slot so the student never loses continuity.',
      highlight: 'Zero penalty rescheduling with notice',
    },
    {
      id: 'methodology-1',
      category: 'methodology',
      question: 'My child experiences math anxiety or fears numbers. What is your approach?',
      answer:
        'Math anxiety almost always stems from being rushed, shamed, or forced to memorize rote formulas without understanding where they come from. My core motto is: patience first, no question is ever a "silly" question. We break intimidating concepts like Trigonometry or Calculus into small, digestible visual steps until the student gains genuine self-belief.',
      highlight: 'Patience & conceptual confidence',
    },
    {
      id: 'methodology-2',
      category: 'methodology',
      question: 'How do online tuition sessions work? What setup is needed?',
      answer:
        'Online classes are conducted over high-quality video call platforms using a professional digital graphics tablet and interactive chalkboard screen-sharing. The student sees every single equation written out live with color-coded notations, just like a real classroom blackboard. After each class, full high-resolution notes and formula summaries are exported and shared as PDFs.',
      highlight: 'Live digital blackboard + PDF notes',
    },
    {
      id: 'methodology-3',
      category: 'methodology',
      question: 'Do you offer coaching for college-level mathematics?',
      answer:
        'Yes. In addition to high school classes, I take selected college and university modules including Differential Equations, Real Analysis, Linear Algebra, and Business Mathematics for students in B.A, B.Sc, BBA, and M.Sc programs.',
      highlight: 'Selected B.A, B.Sc, BBA & M.Sc modules',
    },
    {
      id: 'trial-1',
      category: 'trial',
      question: 'What happens during the Free 45-Minute Trial Class?',
      answer:
        'The free trial is a friendly, zero-obligation introduction. We spend 10–15 minutes assessing the student’s current syllabus position and specific pain points, followed by 30 minutes of real interactive problem-solving on a topic of the student’s choice. This allows the student to experience my teaching style firsthand.',
      highlight: 'Zero obligation · 45-minute live demo',
    },
    {
      id: 'trial-2',
      category: 'methodology',
      question: 'Are homework assignments and doubt clearing provided between classes?',
      answer:
        'Yes. Targeted homework drills are assigned after each lesson to solidify the day’s concept. If a student gets stuck while solving questions during self-study, they can snap a photo and send it directly via WhatsApp, or we start the next session by resolving that doubt.',
      highlight: 'Dedicated doubt resolution',
    },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#0B0F19] relative overflow-hidden text-slate-200">
      {/* Chalkboard Texture & Mathematical Background Aesthetics */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none overflow-hidden">
        {/* Faint chalk mathematical inscriptions */}
        <div className="absolute top-12 left-8 font-mono text-xs sm:text-sm text-slate-400 opacity-60 tracking-wider">
          ∫ f(x) dx = F(x) + C
        </div>
        <div className="absolute top-20 right-16 font-mono text-sm sm:text-base text-purple-300 opacity-50">
          sin²θ + cos²θ = 1
        </div>
        <div className="absolute top-1/3 left-1/4 font-mono text-xs text-pink-300 opacity-40">
          x = [-b ± √(b² - 4ac)] / 2a
        </div>
        <div className="absolute bottom-24 left-12 font-mono text-sm text-orange-300 opacity-50">
          lim [x→0] (sin x)/x = 1
        </div>
        <div className="absolute bottom-16 right-20 font-mono text-xs sm:text-sm text-slate-400 opacity-60">
          d/dx (e^x) = e^x · dy/dx
        </div>
        <div className="absolute top-2/3 right-1/3 font-mono text-xs text-yellow-200 opacity-40">
          ∑ [n=1 to ∞] 1/n² = π²/6
        </div>
        
        {/* Subtle grid pattern resembling blackboard graph grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Ambient ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4">
            <HelpCircle className="w-4 h-4 text-orange-400" />
            <span>Got Questions? Here Are The Answers</span>
          </div>

          {/* Chalkboard handwritten accent */}
          <div className="font-[Caveat] text-3xl sm:text-4xl text-yellow-300 -rotate-2 mb-2 inline-block">
            No question is a "silly" question in Math!
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you and your parents need to know about 1-on-1 personal tutoring, board exam schedules, and my concept-first teaching methodology.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-purple-600/30 text-white border-purple-500/50 shadow-md shadow-purple-900/40'
                      : 'bg-[#151D2E]/70 text-slate-300 border-white/10 hover:bg-[#1A2438] hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chalkboard Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-200 border backdrop-blur-sm overflow-hidden ${
                  isOpen
                    ? 'bg-[#141C2E] border-purple-500/40 shadow-xl shadow-purple-950/30'
                    : 'bg-[#101726]/80 border-white/10 hover:border-white/20 hover:bg-[#141C2E]/60'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-2xl"
                >
                  <div className="flex-1 pr-2">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs text-purple-400 font-semibold tracking-wider uppercase">
                        Q{index + 1}
                      </span>
                      {faq.highlight && (
                        <>
                          <span className="text-slate-600 text-xs" aria-hidden="true">·</span>
                          <span className="text-xs text-orange-400/90 font-medium">
                            {faq.highlight}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 border ${
                      isOpen
                        ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 rotate-180'
                        : 'bg-white/5 text-slate-400 border-white/10'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 border-t border-white/5 leading-relaxed text-sm sm:text-base">
                        <p className="relative pl-3 border-l-2 border-purple-400/50">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Chalkboard Callout Banner at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#172033] via-[#1A2438] to-[#172033] border border-white/10 relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Subtle chalkboard chalk stroke accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-60" />

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="font-[Caveat] text-2xl text-yellow-300">
                Still have a specific query?
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Talk directly with Ritu Mahajan
            </h4>
            <p className="text-slate-400 text-sm max-w-lg">
              Every student's learning requirements are unique. Send a quick message to discuss syllabus status, available evening/weekend slots, or customized preparation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://chat.whatsapp.com/DBJG2WAzw5436PSXYIGUTj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-emerald-300 hover:bg-[#25D366]/30 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Ask on WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-orange-950/40"
            >
              Send Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
