
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE, ICONS, VCARD_STRING } from '../constants';
import { Language } from '../App';
import { Send, CheckCircle2, QrCode } from 'lucide-react';

interface ContactProps {
  lang: Language;
  translations: any;
}

const Contact: React.FC<ContactProps> = ({ lang, translations }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=20&data=${encodeURIComponent(VCARD_STRING)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <footer id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/50 dark:to-black/80 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-white/60 dark:bg-white/[0.03] rounded-[3.5rem] p-8 md:p-16 border border-white/40 dark:border-white/10 shadow-2xl backdrop-blur-3xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {translations.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {translations.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Info & QR */}
              <div className="lg:col-span-5 space-y-10">
                
                {/* QR Section */}
                <div className="bg-black/5 dark:bg-white/[0.02] p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 flex flex-col items-center text-center gap-6 group">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative w-48 h-48 bg-white p-4 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={qrCodeUrl} 
                        alt="vCard QR Code" 
                        className="w-full h-full rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-10 h-10 bg-white border-4 border-white rounded-lg flex items-center justify-center shadow-md">
                          <ICONS.Users size={16} className="text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{translations.qr_title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      {translations.qr_subtitle}
                    </p>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="space-y-4">
                   <div className="flex items-center gap-4 p-5 bg-white/40 dark:bg-white/[0.02] rounded-2xl border border-white/20 dark:border-white/5">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                        <ICONS.Mail className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{PROFILE.email}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-5 bg-white/40 dark:bg-white/[0.02] rounded-2xl border border-white/20 dark:border-white/5">
                      <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                        <ICONS.Phone className="text-green-500" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{PROFILE.phone}</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2">{translations.form.name}</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Es. Mario Rossi"
                        className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-white/10 rounded-2xl outline-none transition-all duration-300 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2">{translations.form.email}</label>
                      <input 
                        required
                        type="email" 
                        placeholder="mario@esempio.com"
                        className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-white/10 rounded-2xl outline-none transition-all duration-300 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2">{translations.form.interest}</label>
                    <select 
                      required
                      className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-white/10 rounded-2xl outline-none transition-all duration-300 text-gray-900 dark:text-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>{translations.form.interest}...</option>
                      {translations.form.interests.map((opt: string) => (
                        <option key={opt} value={opt} className="bg-white dark:bg-apple-gray text-gray-900 dark:text-white">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2">{translations.form.message}</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="..."
                      className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-white/10 rounded-2xl outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none"
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitted}
                    type="submit"
                    className={`w-full flex items-center justify-center gap-3 px-10 py-5 ${isSubmitted ? 'bg-green-500' : 'bg-blue-600'} text-white font-bold rounded-2xl shadow-xl transition-all duration-300 group`}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                          <CheckCircle2 size={20} />
                          {translations.form.success}
                        </motion.div>
                      ) : (
                        <motion.div key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          {translations.form.send}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-10 mt-16 pt-10 border-t border-gray-200 dark:border-white/10">
              <a href={PROFILE.linkedinFull} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <ICONS.LinkedinIcon size={20} />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-blue-500">{PROFILE.linkedin}</span>
              </a>
              <div className="flex items-center gap-3 group">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <ICONS.MapPin size={20} className="text-blue-500" />
                </div>
                <span className="text-sm font-medium text-gray-500">{PROFILE.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="mt-20 text-center text-gray-500 dark:text-gray-600 text-xs tracking-widest uppercase">
          © 2025 Fabio Festa • Apple Developer Academy Alumnus • Mechatronic Engineer
        </p>
      </div>
    </footer>
  );
};

export default Contact;
