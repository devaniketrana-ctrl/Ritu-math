import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Results() {
  const testimonials = [
    {
      name: "[Student/Parent Name]",
      role: "[Class or Role]",
      content: "[Add real student/parent testimonial here. This is a placeholder until actual quotes are provided.]",
      rating: 5
    },
    {
      name: "[Student/Parent Name]",
      role: "[Class or Role]",
      content: "[Add real student/parent testimonial here. This is a placeholder until actual quotes are provided.]",
      rating: 5
    },
    {
      name: "[Student/Parent Name]",
      role: "[Class or Role]",
      content: "[Add real student/parent testimonial here. This is a placeholder until actual quotes are provided.]",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-pink-400 font-semibold tracking-wider uppercase text-sm mb-2">Student Stories</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Words from Parents & Students</h2>
          <p className="text-slate-400 text-lg">Nothing makes me happier than seeing my students succeed and gain confidence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A2235] text-white p-8 rounded-3xl relative shadow-sm border border-white/5 hover:border-pink-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
