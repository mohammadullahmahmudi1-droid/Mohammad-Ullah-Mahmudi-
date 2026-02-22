import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2, Copy, Check, RotateCcw, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

const SYSTEM_INSTRUCTION = `
আপনি মোহাম্মদ উল্লাহ মাহমুদীর অফিসিয়াল ওয়েবসাইটের সহকারী এসিস্ট্যান্ট। আপনার নাম "ফারহান ফাইয়াজ"।
আপনার কাজ হলো মোহাম্মদ উল্লাহ মাহমুদী সম্পর্কে দর্শকদের প্রশ্নের উত্তর দেওয়া এবং তাদের ওয়েবসাইটের বিভিন্ন বিভাগে গাইড করা।

মোহাম্মদ উল্লাহ মাহমুদী সম্পর্কে তথ্য:
- তিনি একজন লেখক, এক্টিভিস্ট এবং উদ্যোক্তা।
- তার স্বপ্ন: ওহীর আলোকিত দিশায় একটি ন্যায়ভিত্তিক সমাজ ও খিলাফাহর প্রভাত বিনির্মাণ।
- তার মূল দর্শন: নৈতিকতা, জ্ঞান ও তাকওয়ার ভিত্তিতে সমাজ গঠন।
- তিনি ইসলামী রাষ্ট্রব্যবস্থা ও সমসাময়িক রাজনীতি নিয়ে গবেষণা করেন।
- তার বইসমূহ: 'খিলাফাহর স্বপ্ন ও বাস্তবতা', 'নৈতিকতার সংকট ও সমাধান', 'আদর্শিক নেতৃত্ব'।
- তিনি বিভিন্ন সেমিনার এবং সম্মেলনে বক্তব্য প্রদান করেন।

ওয়েবসাইটের বিভাগসমূহ:
- হোম (Home): মূল পরিচিতি ও দর্শন।
- প্রোফাইল (Profile): বিস্তারিত জীবনী ও অভিজ্ঞতা।
- লেখালেখি (Blog): বিভিন্ন লেখা ও সমসাময়িক ভাবনা।
- ইভেন্ট (Events): সেমিনার ও সম্মেলনের তথ্য।
- মিডিয়া (Media): ভিডিও ও অডিও কন্টেন্ট।
- যোগাযোগ (Contact): উনার সাথে যোগাযোগের মাধ্যম।

আপনার আচরণের নিয়ম:
১. সবসময় বিনয়ী, প্রফেশনাল এবং আন্তরিক থাকবেন।
২. উত্তরগুলো বাংলায় দেবেন।
৩. যদি এমন কিছু জিজ্ঞাসা করা হয় যা মোহাম্মদ উল্লাহ মাহমুদী বা তার দর্শনের সাথে সম্পর্কিত নয়, তবে বিনয়ের সাথে বলবেন যে আপনি শুধুমাত্র মাহমুদী সাহেবের কাজ ও দর্শন সম্পর্কে তথ্য দিতে পারেন।
৪. উত্তরগুলো সংক্ষিপ্ত এবং তথ্যবহুল রাখার চেষ্টা করবেন।
৫. কোনো বিতর্কিত রাজনৈতিক বা ধর্মীয় বিষয়ে ব্যক্তিগত মতামত দেবেন না, বরং মাহমুদী সাহেবের দর্শনের আলোকে উত্তর দেবেন।
৬. কথোপকথনের প্রেক্ষাপট (Context) মনে রাখবেন এবং আগের কথার সূত্র ধরে উত্তর দেবেন।
`;

interface Message {
  role: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const SUGGESTED_QUESTIONS = [
  "মাহমুদী সাহেবের মূল দর্শন কী?",
  "উনার লেখা বইগুলোর নাম কী?",
  "খিলাফাহ সম্পর্কে উনার ভাবনা কী?",
  "উনার সাথে কীভাবে যোগাযোগ করব?"
];

const AVATAR_URL = "https://picsum.photos/seed/student/100/100";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('mahmudi_chat_history');
    if (saved) return JSON.parse(saved);
    return [
      { 
        role: 'bot', 
        text: 'আসসালামু আলাইকুম! আমি ফারহান ফাইয়াজ, মোহাম্মদ উল্লাহ মাহমুদী সাহেবের সহকারী এসিস্ট্যান্ট। উনার সম্পর্কে আপনার কোনো প্রশ্ন থাকলে করতে পারেন।',
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    localStorage.setItem('mahmudi_chat_history', JSON.stringify(messages));
  }, [messages]);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const timestamp = new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });
    const userMessage: Message = { role: 'user', text: messageText, timestamp };
    
    setInput('');
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = "gemini-3.1-pro-preview";
      
      // Convert messages to Gemini history format
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const chat = ai.chats.create({
        model: model,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history,
      });

      // Add a placeholder for the bot message
      setMessages(prev => [...prev, { role: 'bot', text: '', timestamp: '' }]);

      const result = await chat.sendMessageStream({ message: messageText });
      let fullText = '';

      for await (const chunk of result) {
        const chunkText = chunk.text || "";
        fullText += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            role: 'bot',
            text: fullText,
            timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
          };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { 
          role: 'bot', 
          text: "দুঃখিত, একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।", 
          timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[420px] h-[70vh] sm:h-[600px] max-h-[600px] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy px-5 py-6 sm:px-6 sm:py-8 flex items-center justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full -ml-16 -mb-16 blur-2xl" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-9 h-9 rounded-lg overflow-hidden shadow-[0_4px_10px_-2px_rgba(0,0,0,0.2)] transform rotate-3 border-2 border-white/20 bg-white">
                    <img 
                      src={AVATAR_URL} 
                      alt="ফারহান ফাইয়াজ" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-navy rounded-full shadow-sm" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-base sm:text-lg tracking-tight leading-tight">ফারহান ফাইয়াজ</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 relative z-10">
                <button 
                  onClick={() => {
                    if (confirm('আপনি কি চ্যাট হিস্ট্রি মুছে ফেলতে চান?')) {
                      setMessages([{ 
                        role: 'bot', 
                        text: 'আসসালামু আলাইকুম! আমি ফারহান ফাইয়াজ, মোহাম্মদ উল্লাহ মাহমুদী সাহেবের সহকারী এসিস্ট্যান্ট। উনার সম্পর্কে আপনার কোনো প্রশ্ন থাকলে করতে পারেন।',
                        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
                      }]);
                    }
                  }}
                  className="p-2.5 hover:bg-white/10 rounded-xl transition-all text-white/60 hover:text-white"
                  title="Reset Chat"
                >
                  <RotateCcw size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 hover:bg-white/10 rounded-xl transition-all"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-6 bg-[#F8FAFC] scrollbar-thin scrollbar-thumb-slate-200">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[88%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 shadow-sm ${
                      msg.role === 'user' ? 'bg-navy text-white flex items-center justify-center' : 'bg-white border border-gold/20'
                    }`}>
                      {msg.role === 'user' ? (
                        <User size={14} />
                      ) : (
                        <img 
                          src={AVATAR_URL} 
                          alt="Bot" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className={`p-4 rounded-2xl text-[14px] leading-relaxed relative group ${
                        msg.role === 'user' 
                          ? 'bg-navy text-white rounded-tr-none shadow-blue-900/10 shadow-lg' 
                          : 'bg-white text-navy shadow-sm border border-slate-100 rounded-tl-none'
                      }`}>
                        <div className="markdown-body prose prose-sm max-w-none prose-slate">
                          <ReactMarkdown>
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                        
                        {msg.role === 'bot' && msg.text && (
                          <button 
                            onClick={() => handleCopy(msg.text, idx)}
                            className="absolute -right-10 top-0 p-2 text-slate-400 hover:text-gold opacity-0 group-hover:opacity-100 transition-all"
                          >
                            {copiedId === idx ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                          </button>
                        )}
                      </div>
                      <span className={`text-[10px] font-medium text-slate-400 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && !messages[messages.length - 1].text && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-xl overflow-hidden bg-white border border-gold/20 shadow-sm">
                      <img 
                        src={AVATAR_URL} 
                        alt="Bot" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length < 3 && (
              <div className="px-5 py-3 bg-[#F8FAFC] flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[11px] font-bold text-navy/70 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:border-gold hover:text-gold transition-all shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-white">
              <div className="relative group">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="আপনার প্রশ্নটি এখানে লিখুন..."
                  className="w-full pl-5 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold focus:bg-white transition-all placeholder:text-slate-400"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy text-white rounded-xl flex items-center justify-center hover:bg-gold hover:text-navy transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] transition-all relative ${
          isOpen ? 'bg-white text-navy border border-slate-100' : 'bg-navy text-white'
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7 sm:w-8 sm:h-8" />
        ) : (
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gold rounded-full border-4 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
