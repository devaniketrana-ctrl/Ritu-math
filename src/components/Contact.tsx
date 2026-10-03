import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Youtube, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">Get in Touch</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Talk About Math
          </h2>
          <p className="text-lg text-slate-400">
            Have questions about time slots, fees, or want to book a trial class? Drop me a message below or reach out directly on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-[#1A2235] rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative">
          
          {/* Contact Info */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-900/50 to-pink-900/20 text-white relative overflow-hidden border-r border-white/5">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-6 mb-12 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">Call or WhatsApp</h4>
                  <p className="text-slate-300">[Phone Number - to be added]</p>
                  <a href="https://chat.whatsapp.com/DBJG2WAzw5436PSXYIGUTj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 mt-2 transition-colors">
                    <MessageCircle className="w-4 h-4" /> Join WhatsApp Community
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">Email Me</h4>
                  <p className="text-slate-300">[Email - to be added]</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">Location</h4>
                  <p className="text-slate-300">[City/Area - to be added]</p>
                  <p className="text-slate-400 text-sm mt-1">Online & Offline Classes Available</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10">
              <h4 className="font-semibold mb-4 text-white">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@mathswithritumahajan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-colors" aria-label="YouTube">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/_ritu_mahajan_19" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/share/1HxrP3iHMT" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-12 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="studentName" className="block text-sm font-medium text-slate-300 mb-2">Student's Name *</label>
                  <input type="text" id="studentName" required className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-[#0B0F19] text-white placeholder-slate-500" placeholder="Rahul" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="grade" className="block text-sm font-medium text-slate-300 mb-2">Grade/Class *</label>
                  <select id="grade" required className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-[#0B0F19] text-white">
                    <option value="" className="text-slate-500">Select class...</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="college">College Level</option>
                    <option value="other">Other / Specific Topic</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Parent/Student Phone Number *</label>
                <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-[#0B0F19] text-white placeholder-slate-500" placeholder="+91 98765 XXXXX" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">How can I help? (Optional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-[#0B0F19] text-white resize-none placeholder-slate-500" placeholder="e.g. Needs help preparing for board exams..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 transition-colors disabled:opacity-70 shadow-lg shadow-orange-500/20"
              >
                {formStatus === 'idle' && (
                  <>
                    Send to Ritu
                    <Send className="w-5 h-5" />
                  </>
                )}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent Successfully!'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
