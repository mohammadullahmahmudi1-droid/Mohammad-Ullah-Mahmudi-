import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto space-y-6">
          <Link to="/" className="font-sans text-3xl font-bold tracking-tight">
            মোহাম্মদ উল্লাহ মাহমুদী
          </Link>
          <p className="text-slate-400 leading-relaxed text-sm">
            ওহীর আলোকিত দিশায় একটি ন্যায়ভিত্তিক সমাজ বিনির্মাণে আমাদের পথচলা। নৈতিকতা, জ্ঞান ও তাকওয়ার ভিত্তিতে আগামীর প্রজন্ম গড়ে তোলাই আমাদের লক্ষ্য।
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © ২০২৬ মোহাম্মদ উল্লাহ মাহমুদী। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
