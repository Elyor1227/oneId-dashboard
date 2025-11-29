// import React, { useState } from 'react';
// import { GraduationCap, Users, Clock, BookOpen, FileText, ChevronRight, Menu, X, Calendar, ArrowRight, Award, Target, Heart, Sparkles, CheckCircle2, Download, ExternalLink } from 'lucide-react';

// export default function TyutorHemis() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('kunlik');

//   const navItems = ['Bosh sahifa', 'Tanlovlar', 'Tyutor minbari', 'Maqolalar', 'Yangiliklar', 'Hujjatlar'];

//   const kunlikVazifalar = [
//     { time: '08:00 - 09:00', task: 'Ish yuzga o\'qishda yetib kelish, kundalik rejasidan talabalar bilan uchrashish' },
//     { time: '10:00 - 12:00', task: 'Professor-o\'qituvchilar bilan uchrashish guruhidagi o\'qish masalasi va bahslashib' },
//     { time: '14:00 - 16:00', task: 'Talabaning bir tili anglash imkoniyatini turishi alloqa quvvatlash' },
//     { time: '16:00 - 17:00', task: 'Ijara xonalaridan talabalar TTJlarni o\'rganish' },
//     { time: '09:00 - 10:00', task: 'Ta\'labaning darslargi ishtirokini kuzatish, davomat omillarni' },
//     { time: '12:00 - 13:00', task: 'Talablar bilan yakka tartibda yetib guruh saflarda qo\'llab-quvvatlash' },
//     { time: '17:00 - 18:00', task: 'Ma\'ruza kitob, mustaqil tayish, huquqiylarni o\'kitish' },
//     { time: '18:00 - 18:30', task: 'Keyingi kun va kun-rep tavliq, kunlik ish safladan tahlil qilisga' }
//   ];

//   const kasbiyMaqsadlar = [
//     'Talaba yoshlarni vatanparvarlik va milliy qadriyatlarini sinfga rivojlantirish',
//     'Ta\'lim tizimi jarayonlariga ma\'naviyatlarni qo\'llab-quvvatlash hamda tuzli mustahkamlash',
//     'Ularning shuning hamada kasbiy rangsizlarning yoqonlar yoshish',
//     'Talabalarning akademik muvaffaqiyatlarini oshirish va ularga professional yondan ko\'rsatish'
//   ];

//   const testimonials = [
//     {
//       quote: 'Tyutorlik — bu nafaqat o\'rgatish, balki yo\'l ko\'rsatish, ruhlantirish va rag\'batlantirish san\'atidir.',
//       author: 'Alimov Bahrom Davgorovich',
//       role: 'Toshkent kemyo texnologiya instituti'
//     },
//     {
//       quote: 'Har bir talaba — hali ochilmagan kitob, tyutor esa uning sahifalarini birga ochadigan inson.',
//       author: 'Salimova Nodira Oripovna',
//       role: 'Toshkent davlat iqtisodiyot universiteti'
//     },
//     {
//       quote: 'Tyutorlik: muammo topish emas — uni birga hal qilishdir.',
//       author: 'Alimov Bahrom Davgorovich',
//       role: 'Toshkent kemyo texnologiya instituti'
//     },
//     {
//       quote: 'Bilim beraxchi kabi emasmn, balki ichingidagi potensialini uyg\'otaman.',
//       author: 'Salimova Nodira Oripovna',
//       role: 'O\'zbekiston davlat jahon tillari universiteti'
//     }
//   ];

//   const news = [
//     {
//       date: '2025-04-11',
//       title: 'Tyutorlar faoliyati samaradorligini baholash tizimi (KPI) joriy etildi',
//       category: 'Xabar'
//     },
//     {
//       date: '2025-04-09',
//       title: 'Oliy ta\'lim, fan va innovatsiyalar vazirligi "Islohlar bilimdon" Respublika ko\'rik-tanlovini e\'lon qiladi!',
//       category: 'E\'lon'
//     },
//     {
//       date: '2025-04-12',
//       title: 'Oliy ta\'limda tyutorlik faoliyatini tashkil etish tartibi tasdiqlandi',
//       category: 'Xabar'
//     }
//   ];

//   const documents = [
//     { title: 'O\'zbekiston Respublikasi Prezidentining "Oliy ta\'lim to\'g\'risida"gi Farmoni', number: '412-son buyruq, 2-3-4 ilova', type: 'PDF' },
//     { title: 'OTMlarini tyutorlik faoliyatini tashkil etish tartibi to\'g\'risida', number: '412-son buyruq, 1-ilova', type: 'PDF' },
//     { title: 'Vazirlikning ko\'cha bayroq qo\'yilishing to\'g\'risida ko\'rsatma buyrug\'i', number: '411-sonli buyruq', type: 'PDF' },
//     { title: 'Oliy ta\'lim muassasalarida tyutorlik faoliyatini tashkil etish', number: '412-sonli buyruq', type: 'PDF' }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Outfit', sans-serif" }}>
//       {/* Google Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');
        
//         .gradient-text {
//           background: linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
        
//         .hero-gradient {
//           background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
//         }
        
//         .card-hover {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .card-hover:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
//         }
        
//         .nav-link {
//           position: relative;
//         }
        
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #14b8a6, #0d9488);
//           transition: width 0.3s ease;
//         }
        
//         .nav-link:hover::after {
//           width: 100%;
//         }
        
//         .blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(60px);
//           opacity: 0.4;
//           animation: blob 7s infinite;
//         }
        
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
        
//         .stagger-1 { animation-delay: 0.1s; }
//         .stagger-2 { animation-delay: 0.2s; }
//         .stagger-3 { animation-delay: 0.3s; }
//         .stagger-4 { animation-delay: 0.4s; }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
        
//         .glass {
//           background: rgba(255, 255, 255, 0.8);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
        
//         .pattern-dots {
//           background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
//           background-size: 24px 24px;
//         }
//       `}</style>

//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 glass">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
//                 <GraduationCap className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-slate-800">
//                 tyutor<span className="text-teal-600">.hemis</span>
//               </span>
//             </div>

//             <div className="hidden lg:flex items-center gap-8">
//               {navItems.map((item, i) => (
//                 <a 
//                   key={i} 
//                   href="#" 
//                   className={`nav-link text-sm font-medium ${i === 0 ? 'text-teal-600' : 'text-slate-600 hover:text-slate-900'} transition-colors`}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all hover:-translate-y-0.5">
//                 Tizimga kirish
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//               <button 
//                 className="lg:hidden p-2 text-slate-600"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden bg-white border-t border-slate-100 py-4">
//             <div className="max-w-7xl mx-auto px-6 space-y-3">
//               {navItems.map((item, i) => (
//                 <a key={i} href="#" className="block py-2 text-slate-600 hover:text-teal-600 font-medium">
//                   {item}
//                 </a>
//               ))}
//               <button className="w-full mt-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl">
//                 Tizimga kirish
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="relative hero-gradient pt-32 pb-24 overflow-hidden">
//         <div className="blob w-96 h-96 bg-teal-500 top-0 right-0"></div>
//         <div className="blob w-72 h-72 bg-cyan-400 bottom-0 left-1/4" style={{ animationDelay: '2s' }}></div>
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-fade-in-up">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-300 text-sm font-medium mb-6">
//                 <Sparkles className="w-4 h-4" />
//                 Hemis tizimi orqali boshqaring
//               </div>
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
//                 Tyutorlar —{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
//                   yuksak mas'uliyat
//                 </span>{' '}
//                 egalari!
//               </h1>
//               <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
//                 Talabaning o'qish jarayonini individual tarzda qo'llab-quvvatlash, 
//                 yo'naltirish va o'rgatish uchun zarur bo'lgan malakali 
//                 mutaxassislar hamjamiyatiga qo'shiling.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-slate-900 font-bold rounded-2xl shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all hover:-translate-y-1">
//                   Tyutor bo'lish
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all">
//                   Batafsil
//                 </button>
//               </div>

//               <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
//                 <div>
//                   <div className="text-3xl font-bold text-white">500+</div>
//                   <div className="text-sm text-slate-400">Faol tyutorlar</div>
//                 </div>
//                 <div className="w-px h-12 bg-white/20"></div>
//                 <div>
//                   <div className="text-3xl font-bold text-white">50+</div>
//                   <div className="text-sm text-slate-400">OTMlar</div>
//                 </div>
//                 <div className="w-px h-12 bg-white/20"></div>
//                 <div>
//                   <div className="text-3xl font-bold text-white">10K+</div>
//                   <div className="text-sm text-slate-400">Talabalar</div>
//                 </div>
//               </div>
//             </div>

//             <div className="hidden lg:block relative animate-fade-in-up stagger-2">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl transform rotate-6 opacity-20"></div>
//                 <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 border border-white/10">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
//                       <Users className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-white font-semibold">Tyutor Dashboard</div>
//                       <div className="text-slate-400 text-sm">Bugungi vazifalar</div>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-3">
//                     {[
//                       { label: 'Talabalar bilan uchrashuv', done: true },
//                       { label: 'Guruh yig\'ilishi', done: true },
//                       { label: 'Individual konsultatsiya', done: false }
//                     ].map((task, i) => (
//                       <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${task.done ? 'bg-teal-500/20' : 'bg-white/5'}`}>
//                         <div className={`w-5 h-5 rounded-full flex items-center justify-center ${task.done ? 'bg-teal-500' : 'border-2 border-slate-500'}`}>
//                           {task.done && <CheckCircle2 className="w-3 h-3 text-white" />}
//                         </div>
//                         <span className={`text-sm ${task.done ? 'text-slate-300 line-through' : 'text-white'}`}>{task.label}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30">
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-300 text-sm">Haftalik progress</span>
//                       <span className="text-teal-400 font-semibold">78%</span>
//                     </div>
//                     <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
//                       <div className="h-full w-3/4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-24 relative">
//         <div className="absolute inset-0 pattern-dots opacity-50"></div>
//         <div className="max-w-7xl mx-auto px-6 relative">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
//               Tyutor haqida
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
//               Tyutorning kunlik vazifalari
//             </h2>
//             <p className="text-slate-600">
//               Tyutor har kuni talabalar bilan ishlash va ularni qo'llab-quvvatlash uchun belgilangan vazifalarni bajaradi
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {kunlikVazifalar.map((item, i) => (
//               <div 
//                 key={i} 
//                 className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/30">
//                     {i + 1}
//                   </div>
//                   <div className="px-3 py-1 bg-slate-100 rounded-lg text-slate-600 text-sm font-medium">
//                     {item.time}
//                   </div>
//                 </div>
//                 <p className="text-slate-700 text-sm leading-relaxed">
//                   {item.task}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Kasbiy Maqsadlar */}
//           <div className="mt-20">
//             <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
//               <div className="blob w-64 h-64 bg-teal-500 -top-20 -right-20 opacity-20"></div>
              
//               <div className="relative z-10">
//                 <div className="flex items-center gap-3 mb-6">
//                   <Target className="w-6 h-6 text-teal-400" />
//                   <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
//                     Kasbiy maqsadlari
//                   </h3>
//                 </div>
                
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {kasbiyMaqsadlar.map((item, i) => (
//                     <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0">
//                         <CheckCircle2 className="w-4 h-4 text-white" />
//                       </div>
//                       <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 bg-gradient-to-b from-slate-100 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//             <div>
//               <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
//                 Tyutorlar minbari
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
//                 Tyutorlardan fikrlar
//               </h2>
//             </div>
//             <a href="#" className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
//               Barchasini ko'rish <ChevronRight className="w-5 h-5" />
//             </a>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {testimonials.map((item, i) => (
//               <div 
//                 key={i} 
//                 className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
//               >
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-bl-full transition-all group-hover:w-40 group-hover:h-40"></div>
                
//                 <div className="relative">
//                   <svg className="w-10 h-10 text-teal-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
//                     <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
//                   </svg>
                  
//                   <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
//                     "{item.quote}"
//                   </p>
                  
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-bold">
//                       {item.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
//                     </div>
//                     <div>
//                       <div className="font-semibold text-slate-800">{item.author}</div>
//                       <div className="text-sm text-slate-500">{item.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* News Section */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//             <div>
//               <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
//                 Yangiliklar
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
//                 So'nggi e'lonlar va yangiliklar
//               </h2>
//             </div>
//             <a href="#" className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
//               Barchasini ko'rish <ChevronRight className="w-5 h-5" />
//             </a>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {news.map((item, i) => (
//               <div 
//                 key={i} 
//                 className="card-hover group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
//               >
//                 <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:opacity-100 opacity-0 transition-opacity"></div>
//                   <div className="absolute top-4 left-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       item.category === 'E\'lon' 
//                         ? 'bg-amber-100 text-amber-700' 
//                         : 'bg-teal-100 text-teal-700'
//                     }`}>
//                       {item.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
//                     <Calendar className="w-4 h-4" />
//                     {item.date}
//                   </div>
//                   <h3 className="font-semibold text-slate-800 leading-snug group-hover:text-teal-600 transition-colors">
//                     {item.title}
//                   </h3>
//                   <a href="#" className="inline-flex items-center gap-1 mt-4 text-teal-600 text-sm font-medium hover:gap-2 transition-all">
//                     Batafsil <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
//               <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
//             </div>
            
//             <div className="relative z-10 max-w-2xl">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
//                 Oliy ta'lim muassasalarida tyutorlik faoliyatini amalga oshirish
//               </h2>
//               <p className="text-teal-100 mb-8">
//                 Oliy ta'lim muassasalarida tyutorlik faoliyatini tashkil etish bo'yicha takliflar, tavsiyalar va amaliy ko'rsatmalar jamlanmasi
//               </p>
//               <button className="flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
//                 <Download className="w-5 h-5" />
//                 Yuklab olish
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Documents Section */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
//               Hujjatlar
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
//               Buyruqlar, nizomlar va ko'rsatmalar
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {documents.map((doc, i) => (
//               <div 
//                 key={i} 
//                 className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
//                   <FileText className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-2 line-clamp-3">
//                   {doc.title}
//                 </h3>
//                 <p className="text-slate-500 text-xs mb-4">{doc.number}</p>
//                 <div className="flex gap-2">
//                   <button className="flex-1 py-2 px-3 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors">
//                     Ko'rish
//                   </button>
//                   <button className="flex-1 py-2 px-3 bg-teal-50 text-teal-600 text-xs font-medium rounded-lg hover:bg-teal-100 transition-colors">
//                     Yuklash
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
//                 <FileText className="w-6 h-6 text-teal-400" />
//               </div>
//               <div>
//                 <h4 className="text-white font-semibold">Oliy ta'lim tashkilotlarida tyutorlik faoliyatini tashkil etish tartibi</h4>
//                 <p className="text-slate-400 text-sm">To'g'risidagi nizomni tasdiqlash haqida</p>
//               </div>
//             </div>
//             <button className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-colors">
//               <ExternalLink className="w-5 h-5" />
//               Lexuz
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div className="md:col-span-2">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
//                   <GraduationCap className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-white">
//                   tyutor<span className="text-teal-400">.hemis</span>
//                 </span>
//               </div>
//               <p className="text-slate-400 max-w-md mb-6">
//                 Oliy ta'lim muassasalarida tyutorlik faoliyatini tashkil etish va boshqarish uchun yagona platforma
//               </p>
//               <div className="flex gap-4">
//                 {['facebook', 'instagram', 'telegram'].map((social, i) => (
//                   <a 
//                     key={i}
//                     href="#" 
//                     className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"
//                   >
//                     <span className="text-xs font-bold uppercase">{social[0]}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Havolalar</h4>
//               <ul className="space-y-3">
//                 {navItems.map((item, i) => (
//                   <li key={i}>
//                     <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Aloqa</h4>
//               <ul className="space-y-3 text-slate-400 text-sm">
//                 <li>📍 Toshkent sh., Universitet ko'chasi</li>
//                 <li>📞 +998 71 123 45 67</li>
//                 <li>✉️ info@tyutor.hemis.uz</li>
//               </ul>
//             </div>
//           </div>

//           <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-slate-500 text-sm">
//               © 2025 Tyutor Hemis. Barcha huquqlar himoyalangan.
//             </p>
//             <div className="flex gap-6 text-slate-500 text-sm">
//               <a href="#" className="hover:text-teal-400 transition-colors">Maxfiylik siyosati</a>
//               <a href="#" className="hover:text-teal-400 transition-colors">Foydalanish shartlari</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }









import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, Clock, BookOpen, FileText, ChevronRight, Menu, X, Calendar, ArrowRight, Award, Target, Heart, Sparkles, CheckCircle2, Download, ExternalLink, Play, Star } from 'lucide-react';

// Custom hook for scroll animations
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Typing animation component
const TypeWriter = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default function TyutorHemis() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = ['Bosh sahifa', 'Tanlovlar', 'Tyutor minbari', 'Maqolalar', 'Yangiliklar', 'Hujjatlar'];

  const kunlikVazifalar = [
    { time: '08:30 - 09:00', task: 'Ish joyiga o\'z vaqtida yetib kelish, kundalik reja asosida ishlarni tashkil etish choralarini ko\'rish, davomat jurnali va hujjatlarni tayyorlash', icon: '🌅' },
    { time: '09:00 - 10:00', task: 'Ta\'labalarning darsdagi ishtirokini tekshirish, davomatini aniqlash, sababsiz kelmaganlar bilan bog\'lanish', icon: '👨‍🏫' },
    { time: '10:00 - 11:00', task: 'Professor-o\'qituvchilar bilan uchrashuv: guruhdagi o\'quv intizomi va baholash natijalari bo\'yicha fikr almashish', icon: '💬' },
    { time: '11:00 - 13:00', task: 'Talabalar bilan yakka tartibda yoki guruh suhbatlar: o\'qishdagi muammolar, shaxsiy masalalar bo\'yicha maslahat berish', icon: '🏠' },
    { time: '14:00 - 14:30', task: 'Talabaning bo\'sh vaqtini mazmunli tashkil etishga qaratilgan ijtimoiy-ma\'naviy tadbirlar, uchrashuvlar, davra suhbatari tashkil etish', icon: '📊' },
    { time: '14:30 - 15:00', task: 'Ma\'muriy ishlar: hisobot yozish, hujjatlarni to\'ldirish, ota-onalar bilan aloqa', icon: '🤝' },
    { time: '15:00 - 17:00', task: 'Ijara xonadonlari hamda TTJlarni o\'rganish', icon: '📚' },
    { time: '17:00 - 18:00', task: 'Keyingi kun uchun reja tuzish, kunlik ish natijalarini tahlil qilish, yakuniy hisobot tayyorlash', icon: '📝' }
  ];

  const kasbiyMaqsadlar = [
    'Talaba-yoshlarni vatanparvarlik va milliy qadriyatlarga sadoqat ruhida tarbiyalash',
    'Ularning shaxsiy hamda kasbiy rivojlanishiga yaqindan yordam berish',
    'Ta\'lim tarbiya jarayonlariga moslashuvini qo\'llab-quvvatlash hamda bo\'sh vaqtlarini mazmunli tashkil etish',
    'Talabalarning akademik muvaffaqiyatini oshirish va ularga professional yo\'nalishda yordam ko\'rsatish'
  ];

  const testimonials = [
    {
      quote: 'Tyutorlik — bu nafaqat o\'rgatish, balki yo\'l ko\'rsatish, ruhlantirish va rag\'batlantirish san\'atidir.',
      author: 'Alimov Bahrom Davgorovich',
      role: 'Toshkent kemyo texnologiya instituti'
    },
    {
      quote: 'Har bir talaba — hali ochilmagan kitob, tyutor esa uning sahifalarini birga ochadigan inson.',
      author: 'Salimova Nodira Oripovna',
      role: 'Toshkent davlat iqtisodiyot universiteti'
    },
    {
      quote: 'Tyutorlik: muammo topish emas — uni birga hal qilishdir.',
      author: 'Karimov Jasur Bahodirovich',
      role: 'Toshkent kemyo texnologiya instituti'
    },
    {
      quote: 'Bilim beraxchi kabi emasmn, balki ichingidagi potensialini uyg\'otaman.',
      author: 'Rahimova Dilnoza Shuhratovna',
      role: 'O\'zbekiston davlat jahon tillari universiteti'
    }
  ];

  const news = [
    {
      date: '2025-04-11',
      title: 'Tyutorlar faoliyati samaradorligini baholash tizimi (KPI) joriy etildi',
      category: 'Xabar',
      image: '📊'
    },
    {
      date: '2025-04-09',
      title: 'Oliy ta\'lim, fan va innovatsiyalar vazirligi "Islohlar bilimdon" Respublika ko\'rik-tanlovini e\'lon qiladi!',
      category: 'E\'lon',
      image: '🏆'
    },
    {
      date: '2025-04-12',
      title: 'Oliy ta\'limda tyutorlik faoliyatini tashkil etish tartibi tasdiqlandi',
      category: 'Xabar',
      image: '📋'
    }
  ];

  const documents = [
    { title: 'O\'zbekiston Respublikasi Prezidentining "Oliy ta\'lim to\'g\'risida"gi Farmoni', number: '412-son buyruq, 2-3-4 ilova', type: 'PDF' },
    { title: 'OTMlarini tyutorlik faoliyatini tashkil etish tartibi to\'g\'risida', number: '412-son buyruq, 1-ilova', type: 'PDF' },
    { title: 'Vazirlikning ko\'cha bayroq qo\'yilishing to\'g\'risida ko\'rsatma buyrug\'i', number: '411-sonli buyruq', type: 'PDF' },
    { title: 'Oliy ta\'lim muassasalarida tyutorlik faoliyatini tashkil etish', number: '412-sonli buyruq', type: 'PDF' }
  ];

  // Animation refs
  const [heroRef, heroInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [testimonialRef, testimonialInView] = useInView();
  const [newsRef, newsInView] = useInView();
  const [docsRef, docsInView] = useInView();

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.4); }
          50% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.8); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: floatReverse 5s ease-in-out infinite; }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-gradient { animation: gradient-shift 3s ease infinite; background-size: 200% 200%; }
        .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-wave { animation: wave 1s ease-in-out infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        
        .slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        .scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .rotate-in { animation: rotateIn 0.8s ease-out forwards; }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .stagger-6 { animation-delay: 0.6s; opacity: 0; }
        .stagger-7 { animation-delay: 0.7s; opacity: 0; }
        .stagger-8 { animation-delay: 0.8s; opacity: 0; }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f766e 100%);
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .glass-dark {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #14b8a6, #0d9488);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
        }
        
        .pattern-dots {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 24px 24px;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        
        .btn-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .btn-shine:hover::before {
          left: 100%;
        }
        
        .magnetic-btn {
          transition: transform 0.3s ease;
        }
        
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(20, 184, 166, 0.6);
          border-radius: 50%;
          pointer-events: none;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
        }
        
        .ripple-effect {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-effect::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: rgba(20, 184, 166, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.6s ease;
        }
        
        .ripple-effect:hover::after {
          transform: translate(-50%, -50%) scale(2);
          opacity: 0;
        }
      `}</style>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'glass shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:animate-pulse-glow transition-all group-hover:scale-110">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold transition-colors ${scrollY > 50 ? 'text-slate-800' : 'text-white'}`}>
                tyutor<span className="text-teal-500">.hemis</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`nav-link text-sm font-medium transition-all hover:scale-105 ${
                    scrollY > 50 
                      ? (i === 0 ? 'text-teal-600' : 'text-slate-600 hover:text-slate-900')
                      : (i === 0 ? 'text-teal-300' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="btn-shine hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all hover:-translate-y-0.5 hover:scale-105">
                Tizimga kirish
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                className={`lg:hidden p-2 transition-colors ${scrollY > 50 ? 'text-slate-600' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass border-t border-slate-100 py-4 slide-in-up">
            <div className="max-w-7xl mx-auto px-6 space-y-3">
              {navItems.map((item, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="block py-2 text-slate-600 hover:text-teal-600 font-medium transition-all hover:translate-x-2"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl">
                Tizimga kirish
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative hero-gradient pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="blob w-96 h-96 bg-teal-500 animate-morph"
            style={{ 
              top: '10%', 
              right: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div 
            className="blob w-72 h-72 bg-cyan-400 animate-morph"
            style={{ 
              bottom: '20%', 
              left: '15%',
              animationDelay: '2s',
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
            }}
          />
          <div 
            className="blob w-48 h-48 bg-emerald-400 animate-morph"
            style={{ 
              top: '50%', 
              right: '30%',
              animationDelay: '4s'
            }}
          />
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-10 animate-float text-4xl opacity-20">📚</div>
          <div className="absolute top-1/3 right-20 animate-float-reverse text-3xl opacity-20" style={{ animationDelay: '1s' }}>🎓</div>
          <div className="absolute bottom-1/3 left-1/4 animate-float text-3xl opacity-20" style={{ animationDelay: '2s' }}>✨</div>
          <div className="absolute bottom-1/4 right-1/3 animate-float-slow text-4xl opacity-20">🌟</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={heroInView ? 'slide-in-left' : 'opacity-0'}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-300 text-sm font-medium mb-6 animate-bounce-soft">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                Hemis tizimi orqali boshqaring
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="inline-block hover:scale-105 transition-transform">Tyutorlar</span>{' '}
                <span className="inline-block hover:scale-105 transition-transform">—</span>{' '}
                <span className="text-gradient inline-block hover:scale-105 transition-transform pb-5">
                  yuksak mas'uliyat
                </span>{' '}
                <span className="inline-block hover:scale-105 transition-transform">egalari!</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                Talabaning o'qish jarayonini individual tarzda qo'llab-quvvatlash, 
                yo'naltirish va o'rgatish uchun zarur bo'lgan malakali 
                mutaxassislar hamjamiyatiga qo'shiling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-shine group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-slate-900 font-bold rounded-2xl shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all hover:-translate-y-1 hover:scale-105 animate-gradient">
                  Tizimga kirish
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all hover:scale-105 ripple-effect">
                  <Play className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  Video ko'rish
                </button>
              </div>

              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-400">Faol tyutorlar</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-slate-400">OTMlar</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    <AnimatedCounter end={10} suffix="K+" />
                  </div>
                  <div className="text-sm text-slate-400">Talabalar</div>
                </div>
              </div>
            </div>

            <div className={`hidden lg:block relative ${heroInView ? 'slide-in-right stagger-2' : 'opacity-0'}`}>
              <div className="relative">
                {/* Rotating border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-3xl animate-spin-slow opacity-20 blur-xl"></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl transform rotate-6 opacity-20 hover:rotate-12 transition-transform duration-500"></div>
                <div className="relative glass-dark rounded-3xl p-8 border border-white/10 hover:border-teal-500/50 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center animate-pulse-glow">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Tyutor Dashboard</div>
                      <div className="text-slate-400 text-sm">Bugungi vazifalar</div>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Online
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: 'Talabalar bilan uchrashuv', done: true, time: '09:00' },
                      { label: 'Guruh yig\'ilishi', done: true, time: '11:00' },
                      { label: 'Individual konsultatsiya', done: false, time: '14:00' },
                      { label: 'Hisobot tayyorlash', done: false, time: '16:00' }
                    ].map((task, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer hover:scale-102 ${
                          task.done ? 'bg-teal-500/20 hover:bg-teal-500/30' : 'bg-white/5 hover:bg-white/10'
                        }`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                          task.done ? 'bg-teal-500' : 'border-2 border-slate-500 hover:border-teal-500'
                        }`}>
                          {task.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <span className={`flex-1 text-sm ${task.done ? 'text-slate-400 line-through' : 'text-white'}`}>
                          {task.label}
                        </span>
                        <span className="text-xs text-slate-500">{task.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 text-sm">Haftalik progress</span>
                      <span className="text-teal-400 font-semibold">78%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-1000 relative overflow-hidden"
                        style={{ width: heroInView ? '78%' : '0%' }}
                      >
                        <div className="absolute inset-0 shimmer"></div>
                      </div>
                    </div>
                  </div>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {[
                      { label: 'Talabalar', value: 24, icon: '👨‍🎓' },
                      { label: 'Uchrashuvlar', value: 8, icon: '📅' },
                      { label: 'Vazifalar', value: 12, icon: '✅' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="text-lg mb-1 group-hover:scale-125 transition-transform">{stat.icon}</div>
                        <div className="text-white font-bold">{stat.value}</div>
                        <div className="text-slate-500 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 animate-float-reverse"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${aboutInView ? 'slide-in-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4 hover:scale-105 transition-transform cursor-pointer">
              Tyutor haqida
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tyutorning kunlik vazifalari
            </h2>
            <p className="text-slate-600">
              Tyutor har kuni talabalar bilan ishlash va ularni qo'llab-quvvatlash uchun belgilangan vazifalarni bajaradi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kunlikVazifalar.map((item, i) => (
              <div 
                key={i} 
                className={`card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group ${
                  aboutInView ? 'slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-xl shadow-lg shadow-teal-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {item.icon}
                  </div>
                  <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-slate-600 text-sm font-medium group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors">
                    {item.time}
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
                  {item.task}
                </p>
                <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-500 group-hover:w-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Kasbiy Maqsadlar */}
          <div className={`mt-20 ${aboutInView ? 'scale-in stagger-4' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="blob w-64 h-64 bg-teal-500 -top-20 -right-20 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors">
                    <Target className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Kasbiy maqsadlari
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {kasbiyMaqsadlar.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all cursor-pointer group/item hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all shadow-lg shadow-teal-500/30">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialRef} className="py-24 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 ${testimonialInView ? 'slide-in-up' : 'opacity-0'}`}>
            <div>
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
                Tyutorlar minbari
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Tyutorlardan fikrlar
              </h2>
            </div>
            <a href="#" className="group text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Barchasini ko'rish 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <div 
                key={i} 
                className={`card-hover bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group ${
                  testimonialInView ? 'slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-bl-full transition-all duration-500 group-hover:w-48 group-hover:h-48"></div>
                <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-tr-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star 
                        key={j} 
                        className="w-4 h-4 text-amber-400 fill-amber-400 transition-transform hover:scale-125" 
                        style={{ animationDelay: `${j * 0.1}s` }}
                      />
                    ))}
                  </div>
                  
                  <svg className="w-10 h-10 text-teal-200 mb-4 group-hover:text-teal-300 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                  
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic group-hover:text-slate-900 transition-colors">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
                      {item.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">{item.author}</div>
                      <div className="text-sm text-slate-500">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section ref={newsRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 ${newsInView ? 'slide-in-up' : 'opacity-0'}`}>
            <div>
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
                Yangiliklar
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                So'nggi e'lonlar va yangiliklar
              </h2>
            </div>
            <a href="#" className="group text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Barchasini ko'rish 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div 
                key={i} 
                className={`card-hover group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 ${
                  newsInView ? 'slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-125 transition-transform duration-500">{item.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-transform group-hover:scale-105 ${
                      item.category === 'E\'lon' 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-teal-100 text-teal-700'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-slate-800 leading-snug group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <a href="#" className="inline-flex items-center gap-1 mt-4 text-teal-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Batafsil <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden group hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-500">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                  style={{
                    left: `${10 + i * 10}%`,
                    top: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i * 0.5}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Oliy ta'lim muassasalarida tyutorlik faoliyatini amalga oshirish
              </h2>
              <p className="text-teal-100 mb-8">
                Oliy ta'lim muassasalarida tyutorlik faoliyatini tashkil etish bo'yicha takliflar, tavsiyalar va amaliy ko'rsatmalar jamlanmasi
              </p>
              <button className="btn-shine group flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Yuklab olish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section ref={docsRef} className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-12 ${docsInView ? 'slide-in-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
              Hujjatlar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Buyruqlar, nizomlar va ko'rsatmalar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => (
              <div 
                key={i} 
                className={`card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group ${
                  docsInView ? 'slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 shadow-lg shadow-red-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-2 line-clamp-3 group-hover:text-slate-900 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-slate-500 text-xs mb-4">{doc.number}</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 px-3 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-200 hover:scale-105 transition-all">
                    Ko'rish
                  </button>
                  <button className="flex-1 py-2.5 px-3 bg-teal-50 text-teal-600 text-xs font-medium rounded-lg hover:bg-teal-100 hover:scale-105 transition-all">
                    Yuklash
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:shadow-2xl hover:shadow-slate-900/30 transition-all ${
            docsInView ? 'slide-in-up stagger-5' : 'opacity-0'
          }`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 group-hover:scale-110 transition-all">
                <FileText className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold group-hover:text-teal-300 transition-colors">Oliy ta'lim tashkilotlarida tyutorlik faoliyatini tashkil etish tartibi</h4>
                <p className="text-slate-400 text-sm">To'g'risidagi nizomni tasdiqlash haqida</p>
              </div>
            </div>
            <button className="btn-shine flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 hover:scale-105 transition-all">
              <ExternalLink className="w-5 h-5" />
              Lexuz
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="blob w-96 h-96 bg-teal-500 -top-48 -right-48 opacity-5"></div>
          <div className="blob w-64 h-64 bg-cyan-500 -bottom-32 -left-32 opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  tyutor<span className="text-teal-400">.hemis</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-md mb-6">
                Oliy ta'lim muassasalarida tyutorlik faoliyatini tashkil etish va boshqarish uchun yagona platforma
              </p>
              <div className="flex gap-4">
                {[
                  { icon: 'f', label: 'Facebook' },
                  { icon: 'i', label: 'Instagram' },
                  { icon: 't', label: 'Telegram' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all"
                    title={social.label}
                  >
                    <span className="text-xs font-bold uppercase">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Havolalar</h4>
              <ul className="space-y-3">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-teal-400 hover:translate-x-2 transition-all inline-block text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Aloqa</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2 hover:text-teal-400 transition-colors cursor-pointer">
                  <span>📍</span> Toshkent sh., Universitet ko'chasi
                </li>
                <li className="flex items-center gap-2 hover:text-teal-400 transition-colors cursor-pointer">
                  <span>📞</span> +998 71 123 45 67
                </li>
                <li className="flex items-center gap-2 hover:text-teal-400 transition-colors cursor-pointer">
                  <span>✉️</span> info@tyutor.hemis.uz
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Tyutor Hemis. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors">Maxfiylik siyosati</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Foydalanish shartlari</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}