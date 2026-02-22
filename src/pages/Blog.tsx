import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { Search, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const categories = ['সবগুলো', 'ইসলাম', 'সমাজ', 'রাজনীতি', 'সংস্কৃতি', 'ইতিহাস'];

const posts = [
  { id: 1, title: 'খিলাফাহর সেই ন্যায়ভিত্তিক প্রভাত', category: 'রাজনীতি', date: '২০ ফেব্রুয়ারি, ২০২৬', readTime: '৫ মিনিট', image: 'https://picsum.photos/seed/p1/800/600' },
  { id: 2, title: 'নৈতিকতা ও তাকওয়ার ভিত্তিতে রাষ্ট্র', category: 'ইসলাম', date: '১৮ ফেব্রুয়ারি, ২০২৬', readTime: '৮ মিনিট', image: 'https://picsum.photos/seed/p2/800/800' },
  { id: 3, title: 'সত্যের অনুসন্ধানই আমার যাত্রা', category: 'সমাজ', date: '১৫ ফেব্রুয়ারি, ২০২৬', readTime: '৬ মিনিট', image: 'https://picsum.photos/seed/p3/800/500' },
  { id: 4, title: 'বর্তমান বিশ্বের চ্যালেঞ্জ ও মুসলিম তরুণ', category: 'সংস্কৃতি', date: '১২ ফেব্রুয়ারি, ২০২৬', readTime: '১০ মিনিট', image: 'https://picsum.photos/seed/p4/800/700' },
  { id: 5, title: 'ইতিহাসের আয়নায় বর্তমান মুসলিম উম্মাহ', category: 'ইতিহাস', date: '১০ ফেব্রুয়ারি, ২০২৬', readTime: '১২ মিনিট', image: 'https://picsum.photos/seed/p5/800/600' },
  { id: 6, title: 'ইনসাফ ও শাসনের প্রাণ', category: 'রাজনীতি', date: '০৫ ফেব্রুয়ারি, ২০২৬', readTime: '৭ মিনিট', image: 'https://picsum.photos/seed/p6/800/900' },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('সবগুলো');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'সবগুলো' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="লেখালেখি" centered />

        {/* Filter & Search */}
        <div className="sticky top-20 z-30 bg-[#FDFCF9]/80 backdrop-blur-md py-6 mb-12 border-b border-slate-100">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat 
                      ? "bg-navy text-white shadow-lg" 
                      : "bg-white text-navy/60 hover:bg-slate-50 border border-slate-100"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="লেখা খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
              />
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="masonry-item"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-[11px] text-slate-400 mb-3 font-medium uppercase tracking-wider">
                      <div className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</div>
                      <div className="flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</div>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <Link to={`/blog/${post.id}`} className="text-navy font-bold text-xs flex items-center group/link">
                        বিস্তারিত পড়ুন <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <button className="text-slate-400 hover:text-gold transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-400 text-lg">কোন লেখা পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
