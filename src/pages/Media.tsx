import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowRight, Newspaper } from 'lucide-react';

const newsCoverage = [
  { id: 1, publication: 'দৈনিক ইত্তেফাক', title: 'তরুণদের আদর্শিক সংকটে ওহীর দিশা অপরিহার্য: মোহাম্মদ উল্লাহ মাহমুদী', date: '১৫ জানুয়ারি, ২০২৬', image: 'https://picsum.photos/seed/news1/600/400' },
  { id: 2, publication: 'প্রথম আলো', title: 'নতুন প্রজন্মের জন্য নৈতিক শিক্ষার রূপরেখা', date: '১০ জানুয়ারি, ২০২৬', image: 'https://picsum.photos/seed/news2/600/400' },
  { id: 3, publication: 'দ্য ডেইলি স্টার', title: 'ইসলামী রাজনৈতিক দর্শনে মোহাম্মদ উল্লাহ মাহমুদী', date: '০৫ জানুয়ারি, ২০২৬', image: 'https://picsum.photos/seed/news3/600/400' },
];

export function Media() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="মিডিয়া কভারেজ" centered />

        {/* News Coverage Grid */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-navy mb-8 flex items-center">
            <Newspaper size={24} className="mr-3 text-gold" /> সংবাদপত্রে মোহাম্মদ উল্লাহ মাহমুদী
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {newsCoverage.map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gold font-bold text-[10px] uppercase tracking-widest">{news.publication}</span>
                    <span className="text-slate-400 text-[10px] font-bold">{news.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-navy mb-4 group-hover:text-gold transition-colors">{news.title}</h4>
                  <button className="text-navy font-bold text-xs flex items-center group/btn">
                    সম্পূর্ণ খবর পড়ুন <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


