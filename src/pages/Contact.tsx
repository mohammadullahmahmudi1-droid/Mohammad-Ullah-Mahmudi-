import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="যোগাযোগ করুন" centered />

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-navy mb-6">যোগাযোগের ঠিকানা</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-light rounded-full flex items-center justify-center text-gold flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">ইমেইল</p>
                      <p className="text-navy font-medium">mohammadullahmahmudi1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-light rounded-full flex items-center justify-center text-gold flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">ফোন</p>
                      <p className="text-navy font-medium">01862563173</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-light rounded-full flex items-center justify-center text-gold flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">ঠিকানা</p>
                      <p className="text-navy font-medium">ঢাকা, বাংলাদেশ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-3xl text-white">
                <h3 className="text-xl font-serif font-bold mb-6">সামাজিক যোগাযোগ</h3>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">আপনার নাম</label>
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                        placeholder="নাম লিখুন"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">ইমেইল ঠিকানা</label>
                      <input 
                        type="email" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                        placeholder="আপনার ইমেইল"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">বিষয়</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                      placeholder="কি বিষয়ে যোগাযোগ করতে চান?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">বার্তা</label>
                    <textarea 
                      rows={5}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none"
                      placeholder="আপনার বার্তাটি এখানে লিখুন..."
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-navy text-white rounded-xl font-bold hover:bg-gold hover:text-navy transition-all flex items-center justify-center space-x-3 shadow-lg group">
                    <span>বার্তা পাঠান</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
