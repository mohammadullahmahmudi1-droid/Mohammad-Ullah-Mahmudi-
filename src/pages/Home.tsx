import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { BookOpen, Mic, Target, Users, ArrowRight, Play, Calendar, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  { icon: BookOpen, title: 'লেখালেখি', desc: 'ওহীর আলোকে সমসাময়িক ভাবনার প্রতিফলন।' },
  { icon: Target, title: 'দৃষ্টিভঙ্গি ও মিশন', desc: 'ন্যায়ভিত্তিক সমাজ ও খিলাফাহর স্বপ্ন।' },
  { icon: Users, title: 'সামাজিক কার্যক্রম', desc: 'মানবতার সেবায় একনিষ্ঠ পথচলা।' },
];

const blogPreviews = [
  {
    id: 1,
    title: 'খিলাফাহর সেই ন্যায়ভিত্তিক প্রভাত',
    excerpt: 'মানব রচিত ব্যবস্থার সীমাবদ্ধতার ঊর্ধ্বে আমি খুঁজি ওহীর আলোকিত দিশা। আমার স্বপ্ন খিলাফাহর সেই ন্যায়ভিত্তিক প্রভাত...',
    image: 'https://picsum.photos/seed/blog1/800/500',
    date: '২০ ফেব্রুয়ারি, ২০২৬'
  },
  {
    id: 2,
    title: 'নৈতিকতা ও তাকওয়ার ভিত্তিতে রাষ্ট্র',
    excerpt: 'আল্লাহর দীন কায়েম হোক জীবনের প্রতিটি স্তরে নৈতিকতা, জ্ঞান ও তাকওয়ার ভিত্তিতে। শব্দ আমার অঙ্গীকার...',
    image: 'https://picsum.photos/seed/blog2/800/500',
    date: '১৫ ফেব্রুয়ারি, ২০২৬'
  },
  {
    id: 3,
    title: 'সত্যের অনুসন্ধানই আমার যাত্রা',
    excerpt: 'আদর্শ আমার পথপ্রদীপ, আর সত্যের অনুসন্ধানই আমার যাত্রা। বর্তমান বিশ্বের চ্যালেঞ্জ মোকাবিলায় আমাদের করণীয়...',
    image: 'https://picsum.photos/seed/blog3/800/500',
    date: '১০ ফেব্রুয়ারি, ২০২৬'
  }
];

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight mb-6">
              মোহাম্মদ উল্লাহ মাহমুদী
            </h1>
            <p className="text-lg text-slate-600 mx-auto max-w-2xl mb-10 leading-relaxed">
              মানব রচিত ব্যবস্থার সীমাবদ্ধতার ঊর্ধ্বে আমি খুঁজি ওহীর আলোকিত দিশা। আমার স্বপ্ন; খিলাফাহর সেই ন্যায়ভিত্তিক প্রভাত, যেখানে ইনসাফ হবে শাসনের প্রাণ।
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link to="/blog" className="px-8 py-4 bg-navy text-white rounded-full font-bold hover:bg-navy/90 transition-all flex items-center group shadow-lg">
                লেখালেখি
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link to="/media" className="px-8 py-4 bg-white text-navy border-2 border-navy rounded-full font-bold hover:bg-navy hover:text-white transition-all flex items-center group shadow-md">
                মিডিয়া
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="এক নজরে কার্যক্রম" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
                className="p-8 rounded-2xl bg-gold-light border border-gold/10 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-gold group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Grid */}
      <section className="py-24 px-6 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="লেখালেখি" centered />
          <div className="grid md:grid-cols-3 gap-8">
            {blogPreviews.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-navy">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="text-navy font-bold text-sm flex items-center group/link">
                    বিস্তারিত পড়ুন 
                    <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center px-8 py-3 border-2 border-navy text-navy rounded-full font-bold hover:bg-navy hover:text-white transition-all">
              সবগুলো লেখা দেখুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
