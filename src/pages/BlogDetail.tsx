import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const posts = [
  { 
    id: 1, 
    title: 'খিলাফাহর সেই ন্যায়ভিত্তিক প্রভাত', 
    category: 'রাজনীতি', 
    date: '২০ ফেব্রুয়ারি, ২০২৬', 
    readTime: '৫ মিনিট', 
    image: 'https://picsum.photos/seed/p1/1200/600',
    content: `
# খিলাফাহর সেই ন্যায়ভিত্তিক প্রভাত

মানব রচিত ব্যবস্থার সীমাবদ্ধতার ঊর্ধ্বে আমি খুঁজি ওহীর আলোকিত দিশা। আমার স্বপ্ন খিলাফাহর সেই ন্যায়ভিত্তিক প্রভাত, যেখানে ইনসাফ হবে শাসনের প্রাণ।

বর্তমান বিশ্বের সংকটগুলো বিশ্লেষণ করলে দেখা যায়, অধিকাংশ সমস্যার মূলে রয়েছে নৈতিক অবক্ষয় এবং সঠিক নেতৃত্বের অভাব। ইসলামী রাষ্ট্রব্যবস্থা বা খিলাফাহ কেবল একটি রাজনৈতিক কাঠামো নয়, বরং এটি একটি সামগ্রিক জীবনব্যবস্থা যা মানুষের ইহকালীন ও পরকালীন কল্যাণের নিশ্চয়তা দেয়।

## কেন খিলাফাহ প্রয়োজন?

১. **ইনসাফ কায়েম করা**: খিলাফাহর মূল লক্ষ্য হলো সমাজে ন্যায়বিচার প্রতিষ্ঠা করা।
২. **নৈতিক সমাজ গঠন**: ওহীর শিক্ষার আলোকে মানুষের চরিত্র গঠন করা।
৩. **উম্মাহর ঐক্য**: বিশ্ব মুসলিম উম্মাহকে এক পতাকাতলে নিয়ে আসা।

আমাদের যাত্রা দীর্ঘ, কিন্তু সত্যের পথে অবিচল থাকলে বিজয় সুনিশ্চিত।
    `
  },
  { 
    id: 2, 
    title: 'নৈতিকতা ও তাকওয়ার ভিত্তিতে রাষ্ট্র', 
    category: 'ইসলাম', 
    date: '১৮ ফেব্রুয়ারি, ২০২৬', 
    readTime: '৮ মিনিট', 
    image: 'https://picsum.photos/seed/p2/1200/600',
    content: `
# নৈতিকতা ও তাকওয়ার ভিত্তিতে রাষ্ট্র

আল্লাহর দীন কায়েম হোক জীবনের প্রতিটি স্তরে নৈতিকতা, জ্ঞান ও তাকওয়ার ভিত্তিতে। শব্দ আমার অঙ্গীকার, আদর্শ আমার পথপ্রদীপ।

একটি রাষ্ট্রের ভিত্তি যদি কেবল বস্তুগত উন্নতির ওপর হয়, তবে তা দীর্ঘস্থায়ী হয় না। তাকওয়া বা আল্লাহর ভয়ই হলো প্রকৃত শাসনের মূল শক্তি। যখন একজন শাসক নিজেকে আল্লাহর কাছে দায়বদ্ধ মনে করেন, তখন প্রজাদের অধিকার ক্ষুণ্ণ হওয়ার সম্ভাবনা থাকে না।

## তাকওয়ার গুরুত্ব

- এটি মানুষকে দুর্নীতি থেকে দূরে রাখে।
- এটি শাসকের মনে জনগণের প্রতি মমতা সৃষ্টি করে।
- এটি সমাজে শান্তি ও শৃঙ্খলা বজায় রাখে।
    `
  },
  { 
    id: 3, 
    title: 'সত্যের অনুসন্ধানই আমার যাত্রা', 
    category: 'সমাজ', 
    date: '১৫ ফেব্রুয়ারি, ২০২৬', 
    readTime: '৬ মিনিট', 
    image: 'https://picsum.photos/seed/p3/1200/600',
    content: `
# সত্যের অনুসন্ধানই আমার যাত্রা

আদর্শ আমার পথপ্রদীপ, আর সত্যের অনুসন্ধানই আমার যাত্রা। বর্তমান বিশ্বের চ্যালেঞ্জ মোকাবিলায় আমাদের করণীয় অনেক।

আমরা এমন এক সময়ে বাস করছি যেখানে তথ্যের ছড়াছড়ি, কিন্তু সত্যের বড় অভাব। সত্যের অনুসন্ধান কেবল বুদ্ধিবৃত্তিক কাজ নয়, এটি একটি আধ্যাত্মিক সাধনাও বটে।

## আমাদের করণীয়

- নিয়মিত অধ্যয়ন ও গবেষণা।
- সত্যের পথে আপসহীন থাকা।
- সমাজ সংস্কারে আত্মনিয়োগ করা।
    `
  },
  { 
    id: 4, 
    title: 'বর্তমান বিশ্বের চ্যালেঞ্জ ও মুসলিম তরুণ', 
    category: 'সংস্কৃতি', 
    date: '১২ ফেব্রুয়ারি, ২০২৬', 
    readTime: '১০ মিনিট', 
    image: 'https://picsum.photos/seed/p4/1200/600',
    content: `
# বর্তমান বিশ্বের চ্যালেঞ্জ ও মুসলিম তরুণ

আজকের তরুণ প্রজন্মকে আধুনিক বিশ্বের চ্যালেঞ্জ মোকাবিলায় প্রস্তুত হতে হবে। কেবল প্রযুক্তিগত জ্ঞান নয়, বরং আদর্শিক ভিত্তি থাকা জরুরি।

## চ্যালেঞ্জসমূহ

- সাংস্কৃতিক আগ্রাসন।
- নৈতিক অবক্ষয়।
- আত্মপরিচয়ের সংকট।
    `
  },
  { 
    id: 5, 
    title: 'ইতিহাসের আয়নায় বর্তমান মুসলিম উম্মাহ', 
    category: 'ইতিহাস', 
    date: '১০ ফেব্রুয়ারি, ২০২৬', 
    readTime: '১২ মিনিট', 
    image: 'https://picsum.photos/seed/p5/1200/600',
    content: `
# ইতিহাসের আয়নায় বর্তমান মুসলিম উম্মাহ

ইতিহাস আমাদের শেখায় কীভাবে আমরা অতীতে সফল হয়েছিলাম এবং কেন আমরা বর্তমানে পিছিয়ে আছি। অতীত থেকে শিক্ষা নিয়ে আমাদের ভবিষ্যৎ গড়তে হবে।
    `
  },
  { 
    id: 6, 
    title: 'ইনসাফ ও শাসনের প্রাণ', 
    category: 'রাজনীতি', 
    date: '০৫ ফেব্রুয়ারি, ২০২৬', 
    readTime: '৭ মিনিট', 
    image: 'https://picsum.photos/seed/p6/1200/600',
    content: `
# ইনসাফ ও শাসনের প্রাণ

শাসনব্যবস্থায় ইনসাফ বা ন্যায়বিচারই হলো মূল প্রাণ। ইনসাফ ছাড়া কোনো রাষ্ট্র দীর্ঘস্থায়ী হতে পারে না।
    `
  }
];

export function BlogDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id)) || posts[0];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center text-navy/60 hover:text-gold transition-colors mb-8 group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          সবগুলো লেখা
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400 mb-6 font-medium uppercase tracking-wider">
            <div className="flex items-center"><Calendar size={16} className="mr-2 text-gold" /> {post.date}</div>
            <div className="flex items-center"><Clock size={16} className="mr-2 text-gold" /> {post.readTime}</div>
            <div className="flex items-center"><User size={16} className="mr-2 text-gold" /> মোহাম্মদ উল্লাহ মাহমুদী</div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="markdown-body prose prose-lg max-w-none prose-slate prose-headings:text-navy prose-a:text-gold">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center text-gold">
                <User size={24} />
              </div>
              <div>
                <p className="font-bold text-navy">মোহাম্মদ উল্লাহ মাহমুদী</p>
                <p className="text-xs text-slate-400">লেখক ও গবেষক</p>
              </div>
            </div>
            <button className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-gold-light hover:text-gold transition-all">
              <Share2 size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
