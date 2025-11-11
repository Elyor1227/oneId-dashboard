// import React, { useState, useEffect } from 'react';
// import { Calendar, BookOpen, TrendingUp, Award, Clock, CheckCircle, Target, BarChart3, GraduationCap, DollarSign, FileCheck, Send, X, Sparkles, MessageCircle } from 'lucide-react';

// export default function HemisDashboard() {
//   const [selectedSemester, setSelectedSemester] = useState('2-semestr');
//   const [isAIModalOpen, setIsAIModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [messages, setMessages] = useState([
//     {
//       role: 'assistant',
//       content: "Salom! Men sizning shaxsiy AI yordamchingizman. Bugun sizga qanday yordam bera olaman?",
//       timestamp: new Date()
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   const quickAccessCategories = [
//     {
//       id: 'gpa',
//       icon: <Award className="w-5 h-5" />,
//       label: 'GPA & Progress',
//       color: 'from-emerald-400 to-teal-500',
//       bgColor: 'bg-emerald-50',
//       textColor: 'text-emerald-600'
//     },
//     {
//       id: 'attendance',
//       icon: <CheckCircle className="w-5 h-5" />,
//       label: 'Attendance',
//       color: 'from-blue-400 to-indigo-500',
//       bgColor: 'bg-blue-50',
//       textColor: 'text-blue-600'
//     },
//     {
//       id: 'schedule',
//       icon: <Calendar className="w-5 h-5" />,
//       label: 'Schedule',
//       color: 'from-purple-400 to-pink-500',
//       bgColor: 'bg-purple-50',
//       textColor: 'text-purple-600'
//     },
//     {
//       id: 'courses',
//       icon: <BookOpen className="w-5 h-5" />,
//       label: 'Courses',
//       color: 'from-orange-400 to-red-500',
//       bgColor: 'bg-orange-50',
//       textColor: 'text-orange-600'
//     },
//     {
//       id: 'plagiarism',
//       icon: <FileCheck className="w-5 h-5" />,
//       label: 'Plagiarism',
//       color: 'from-cyan-400 to-blue-500',
//       bgColor: 'bg-cyan-50',
//       textColor: 'text-cyan-600'
//     },
//     {
//       id: 'financial',
//       icon: <DollarSign className="w-5 h-5" />,
//       label: 'Financial',
//       color: 'from-violet-400 to-purple-500',
//       bgColor: 'bg-violet-50',
//       textColor: 'text-violet-600'
//     }
//   ];

//   useEffect(() => {
//     if (isAIModalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isAIModalOpen]);

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return;
    
//     const newMessage = {
//       role: 'user',
//       content: inputMessage,
//       timestamp: new Date()
//     };
    
//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);
    
//     setTimeout(() => {
//       setIsTyping(false);
//       setMessages(prev => [...prev, {
//         role: 'assistant',
//         content: "Men sizning savolingizni tushundim va ustida ishlayapman. Qisqa vaqt ichida batafsil javob beraman.",
//         timestamp: new Date()
//       }]);
//     }, 1500);
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category.id);
//     const categoryMessage = {
//       role: 'assistant',
//       content: `${category.label} bo'yicha sizga qanday yordam bera olaman?`,
//       timestamp: new Date()
//     };
//     setMessages([...messages, categoryMessage]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg">
//                 <GraduationCap className="w-6 h-6" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   HEMIS AI
//                 </h1>
//                 <p className="text-xs text-gray-500">Student Portal</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <select 
//                 value={selectedSemester}
//                 onChange={(e) => setSelectedSemester(e.target.value)}
//                 className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/80 backdrop-blur text-sm font-medium"
//               >
//                 <option>1-semestr</option>
//                 <option>2-semestr</option>
//               </select>
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
//                 AI
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">GPA</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">5.0</p>
//                 <p className="text-emerald-600 text-sm mt-1 flex items-center">
//                   <TrendingUp className="w-4 h-4 mr-1" /> Excellent
//                 </p>
//               </div>
//               <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-3 rounded-2xl">
//                 <Award className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">Credits</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">463</p>
//                 <p className="text-blue-600 text-sm mt-1">Total earned</p>
//               </div>
//               <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-2xl">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">Attendance</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">98%</p>
//                 <p className="text-purple-600 text-sm mt-1">This week</p>
//               </div>
//               <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-2xl">
//                 <Calendar className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">Progress</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">95%</p>
//                 <p className="text-orange-600 text-sm mt-1">Average</p>
//               </div>
//               <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-2xl">
//                 <Target className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white/80 backdrop-blur rounded-3xl shadow-sm p-8 border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Progress</h2>
//               <div className="space-y-6">
//                 {[
//                   { name: 'Advanced Mathematics', progress: 92, color: 'from-blue-500 to-indigo-600' },
//                   { name: 'Computer Science', progress: 88, color: 'from-emerald-500 to-teal-600' },
//                   { name: 'Economics', progress: 95, color: 'from-purple-500 to-pink-600' }
//                 ].map((subject, idx) => (
//                   <div key={idx} className="group">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="font-semibold text-gray-900">{subject.name}</h3>
//                       <span className="text-gray-900 font-bold">{subject.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
//                       <div 
//                         className={`bg-gradient-to-r ${subject.color} h-3 rounded-full transition-all duration-1000 ease-out`}
//                         style={{ width: `${subject.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-white/80 backdrop-blur rounded-3xl shadow-sm p-8 border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">Today's Classes</h2>
//                 <Clock className="w-5 h-5 text-gray-400" />
//               </div>
              
//               <div className="space-y-4">
//                 <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm opacity-90 font-medium">09:00 - 10:30</span>
//                     <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Now</span>
//                   </div>
//                   <h3 className="font-bold text-lg mb-1">Mathematics</h3>
//                   <p className="text-sm opacity-90">Room: A-204</p>
//                 </div>
                
//                 <div className="border border-gray-100 rounded-2xl p-5 bg-white/50">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm text-gray-600 font-medium">11:00 - 12:30</span>
//                   </div>
//                   <h3 className="font-semibold text-gray-900">Economics</h3>
//                   <p className="text-sm text-gray-600 mt-1">Room: B-105</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Floating AI Assistant Button */}
//       <button
//         onClick={() => setIsAIModalOpen(true)}
//         className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 group"
//       >
//         <MessageCircle className="w-7 h-7" />
//         <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></span>
//       </button>

//       {/* AI Assistant Modal */}
//       {isAIModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
//           <div 
//             className="absolute inset-0 bg-black/30 backdrop-blur-sm"
//             onClick={() => setIsAIModalOpen(false)}
//           ></div>
          
//           <div className={`relative bg-white w-full sm:w-[90vw] sm:max-w-7xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out ${
//             isAIModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//           } h-[100vh] sm:h-[85vh]`}>
            
//             {/* Modal Header */}
//             <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 text-white relative overflow-hidden">
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
//               <div className="relative flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
//                     <Sparkles className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold">HEMIS AI Assistant</h2>
//                     <p className="text-sm opacity-90 mt-0.5">Always here to help you</p>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={() => setIsAIModalOpen(false)}
//                   className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Quick Access Categories */}
//             <div className="px-6 py-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
//               <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
//                 {quickAccessCategories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => handleCategoryClick(category)}
//                     className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
//                       selectedCategory === category.id
//                         ? `bg-gradient-to-r ${category.color} text-white shadow-md scale-105`
//                         : `${category.bgColor} ${category.textColor} hover:scale-105 hover:shadow-sm`
//                     }`}
//                   >
//                     {category.icon}
//                     <span className="text-sm font-semibold whitespace-nowrap">{category.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
//               {messages.map((message, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
//                 >
//                   {message.role === 'assistant' && (
//                     <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
//                       <Sparkles className="w-5 h-5 text-white" />
//                     </div>
//                   )}
//                   <div
//                     className={`max-w-[75%] rounded-2xl p-4 ${
//                       message.role === 'user'
//                         ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md'
//                         : 'bg-white text-gray-900 shadow-sm border border-gray-100'
//                     }`}
//                   >
//                     <p className="text-sm leading-relaxed">{message.content}</p>
//                     <p className={`text-xs mt-2 ${
//                       message.role === 'user' ? 'text-white/70' : 'text-gray-400'
//                     }`}>
//                       {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </p>
//                   </div>
//                   {message.role === 'user' && (
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center ml-3 flex-shrink-0 shadow-md text-white font-bold">
//                       U
//                     </div>
//                   )}
//                 </div>
//               ))}
              
//               {isTyping && (
//                 <div className="flex justify-start animate-fadeIn">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
//                     <Sparkles className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
//                     <div className="flex space-x-2">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Input Area */}
//             <div className="border-t border-gray-100 p-6 bg-white">
//               <div className="flex items-end space-x-3">
//                 <input
//                   type="text"
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                   placeholder="Type your message..."
//                   className="flex-1 border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none text-sm bg-gray-50"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   disabled={!inputMessage.trim()}
//                   className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3.5 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import React, { useState, useEffect } from 'react';
// import { Calendar, BookOpen, TrendingUp, Award, Clock, CheckCircle, Target, BarChart3, GraduationCap, DollarSign, FileCheck, Send, X, Sparkles, MessageCircle } from 'lucide-react';

// export default function HemisDashboard() {
//   const [selectedSemester, setSelectedSemester] = useState('2-semestr');
//   const [isAIModalOpen, setIsAIModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [messages, setMessages] = useState([
//     {
//       role: 'assistant',
//       content: "Salom! Men sizning shaxsiy AI yordamchingizman. Bugun sizga qanday yordam bera olaman?",
//       timestamp: new Date()
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   const quickAccessCategories = [
//     {
//       id: 'gpa',
//       icon: <Award className="w-5 h-5" />,
//       label: 'GPA & Progress',
//       color: 'from-emerald-400 to-teal-500',
//       bgColor: 'bg-emerald-50',
//       textColor: 'text-emerald-600'
//     },
//     {
//       id: 'attendance',
//       icon: <CheckCircle className="w-5 h-5" />,
//       label: 'Attendance',
//       color: 'from-blue-400 to-indigo-500',
//       bgColor: 'bg-blue-50',
//       textColor: 'text-blue-600'
//     },
//     {
//       id: 'schedule',
//       icon: <Calendar className="w-5 h-5" />,
//       label: 'Schedule',
//       color: 'from-purple-400 to-pink-500',
//       bgColor: 'bg-purple-50',
//       textColor: 'text-purple-600'
//     },
//     {
//       id: 'courses',
//       icon: <BookOpen className="w-5 h-5" />,
//       label: 'Courses',
//       color: 'from-orange-400 to-red-500',
//       bgColor: 'bg-orange-50',
//       textColor: 'text-orange-600'
//     },
//     {
//       id: 'plagiarism',
//       icon: <FileCheck className="w-5 h-5" />,
//       label: 'Plagiarism',
//       color: 'from-cyan-400 to-blue-500',
//       bgColor: 'bg-cyan-50',
//       textColor: 'text-cyan-600'
//     },
//     {
//       id: 'financial',
//       icon: <DollarSign className="w-5 h-5" />,
//       label: 'Financial',
//       color: 'from-violet-400 to-purple-500',
//       bgColor: 'bg-violet-50',
//       textColor: 'text-violet-600'
//     }
//   ];

//   useEffect(() => {
//     if (isAIModalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isAIModalOpen]);

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return;
    
//     const newMessage = {
//       role: 'user',
//       content: inputMessage,
//       timestamp: new Date()
//     };
    
//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);
    
//     setTimeout(() => {
//       setIsTyping(false);
//       setMessages(prev => [...prev, {
//         role: 'assistant',
//         content: "Men sizning savolingizni tushundim va ustida ishlayapman. Qisqa vaqt ichida batafsil javob beraman.",
//         timestamp: new Date()
//       }]);
//     }, 1500);
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category.id);
//     const categoryMessage = {
//       role: 'assistant',
//       content: `${category.label} bo'yicha sizga qanday yordam bera olaman?`,
//       timestamp: new Date()
//     };
//     setMessages([...messages, categoryMessage]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg">
//                 <GraduationCap className="w-6 h-6" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   HEMIS AI
//                 </h1>
//                 <p className="text-xs text-gray-500">Student Portal</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <select 
//                 value={selectedSemester}
//                 onChange={(e) => setSelectedSemester(e.target.value)}
//                 className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/80 backdrop-blur text-sm font-medium"
//               >
//                 <option>1-semestr</option>
//                 <option>2-semestr</option>
//               </select>
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
//                 AI
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">GPA</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">5.0</p>
//                 <p className="text-emerald-600 text-sm mt-1 flex items-center">
//                   <TrendingUp className="w-4 h-4 mr-1" /> Excellent
//                 </p>
//               </div>
//               <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-3 rounded-2xl">
//                 <Award className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">Credits</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">463</p>
//                 <p className="text-blue-600 text-sm mt-1">Total earned</p>
//               </div>
//               <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-2xl">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">Attendance</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">98%</p>
//                 <p className="text-purple-600 text-sm mt-1">This week</p>
//               </div>
//               <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-2xl">
//                 <Calendar className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 text-sm font-medium">Progress</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-1">95%</p>
//                 <p className="text-orange-600 text-sm mt-1">Average</p>
//               </div>
//               <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-2xl">
//                 <Target className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white/80 backdrop-blur rounded-3xl shadow-sm p-8 border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Progress</h2>
//               <div className="space-y-6">
//                 {[
//                   { name: 'Advanced Mathematics', progress: 92, color: 'from-blue-500 to-indigo-600' },
//                   { name: 'Computer Science', progress: 88, color: 'from-emerald-500 to-teal-600' },
//                   { name: 'Economics', progress: 95, color: 'from-purple-500 to-pink-600' }
//                 ].map((subject, idx) => (
//                   <div key={idx} className="group">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="font-semibold text-gray-900">{subject.name}</h3>
//                       <span className="text-gray-900 font-bold">{subject.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
//                       <div 
//                         className={`bg-gradient-to-r ${subject.color} h-3 rounded-full transition-all duration-1000 ease-out`}
//                         style={{ width: `${subject.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-white/80 backdrop-blur rounded-3xl shadow-sm p-8 border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">Today's Classes</h2>
//                 <Clock className="w-5 h-5 text-gray-400" />
//               </div>
              
//               <div className="space-y-4">
//                 <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm opacity-90 font-medium">09:00 - 10:30</span>
//                     <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Now</span>
//                   </div>
//                   <h3 className="font-bold text-lg mb-1">Mathematics</h3>
//                   <p className="text-sm opacity-90">Room: A-204</p>
//                 </div>
                
//                 <div className="border border-gray-100 rounded-2xl p-5 bg-white/50">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm text-gray-600 font-medium">11:00 - 12:30</span>
//                   </div>
//                   <h3 className="font-semibold text-gray-900">Economics</h3>
//                   <p className="text-sm text-gray-600 mt-1">Room: B-105</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Floating AI Assistant Button */}
//       <button
//         onClick={() => setIsAIModalOpen(true)}
//         className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 group"
//       >
//         <MessageCircle className="w-7 h-7" />
//         <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></span>
//       </button>

//       {/* AI Assistant Modal */}
//       {isAIModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
//           <div 
//             className="absolute inset-0 bg-black/30 backdrop-blur-sm"
//             onClick={() => setIsAIModalOpen(false)}
//           ></div>
          
//           <div className={`relative bg-white w-full sm:w-[90vw] sm:max-w-7xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out ${
//             isAIModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//           } h-[100vh] sm:h-[85vh]`}>
            
//             {/* Modal Header */}
//             <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 text-white relative overflow-hidden">
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
//               <div className="relative flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
//                     <Sparkles className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold">HEMIS AI Assistant</h2>
//                     <p className="text-sm opacity-90 mt-0.5">Always here to help you</p>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={() => setIsAIModalOpen(false)}
//                   className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Quick Access Categories */}
//             <div className="px-6 py-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
//               <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
//                 {quickAccessCategories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => handleCategoryClick(category)}
//                     className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
//                       selectedCategory === category.id
//                         ? `bg-gradient-to-r ${category.color} text-white shadow-md scale-105`
//                         : `${category.bgColor} ${category.textColor} hover:scale-105 hover:shadow-sm`
//                     }`}
//                   >
//                     {category.icon}
//                     <span className="text-sm font-semibold whitespace-nowrap">{category.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
//               {messages.map((message, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
//                 >
//                   {message.role === 'assistant' && (
//                     <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
//                       <Sparkles className="w-5 h-5 text-white" />
//                     </div>
//                   )}
//                   <div
//                     className={`max-w-[75%] rounded-2xl p-4 ${
//                       message.role === 'user'
//                         ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md'
//                         : 'bg-white text-gray-900 shadow-sm border border-gray-100'
//                     }`}
//                   >
//                     <p className="text-sm leading-relaxed">{message.content}</p>
//                     <p className={`text-xs mt-2 ${
//                       message.role === 'user' ? 'text-white/70' : 'text-gray-400'
//                     }`}>
//                       {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </p>
//                   </div>
//                   {message.role === 'user' && (
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center ml-3 flex-shrink-0 shadow-md text-white font-bold">
//                       U
//                     </div>
//                   )}
//                 </div>
//               ))}
              
//               {isTyping && (
//                 <div className="flex justify-start animate-fadeIn">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
//                     <Sparkles className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
//                     <div className="flex space-x-2">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Input Area */}
//             <div className="border-t border-gray-100 p-6 bg-white">
//               <div className="flex items-end space-x-3">
//                 <input
//                   type="text"
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                   placeholder="Type your message..."
//                   className="flex-1 border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none text-sm bg-gray-50"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   disabled={!inputMessage.trim()}
//                   className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3.5 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, TrendingUp, Award, Clock, CheckCircle, Target, BarChart3, GraduationCap, DollarSign, FileCheck, Send, X, Sparkles, MessageCircle } from 'lucide-react';

export default function HemisDashboard() {
  const [selectedSemester, setSelectedSemester] = useState('2-semestr');
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Salom! Men sizning shaxsiy AI yordamchingizman. Bugun sizga qanday yordam bera olaman?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickAccessCategories = [
    {
      id: 'gpa',
      icon: <Award className="w-5 h-5" />,
      label: 'GPA & Progress',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      id: 'attendance',
      icon: <CheckCircle className="w-5 h-5" />,
      label: 'Attendance',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'schedule',
      icon: <Calendar className="w-5 h-5" />,
      label: 'Schedule',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'courses',
      icon: <BookOpen className="w-5 h-5" />,
      label: 'Courses',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      id: 'plagiarism',
      icon: <FileCheck className="w-5 h-5" />,
      label: 'Plagiarism',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600'
    },
    {
      id: 'financial',
      icon: <DollarSign className="w-5 h-5" />,
      label: 'Financial',
      color: 'from-violet-400 to-purple-500',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600'
    }
  ];

  useEffect(() => {
    if (isAIModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAIModalOpen]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Men sizning savolingizni tushundim va ustida ishlayapman. Qisqa vaqt ichida batafsil javob beraman.",
        timestamp: new Date()
      }]);
    }, 1500);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
    const categoryMessage = {
      role: 'assistant',
      content: `${category.label} bo'yicha sizga qanday yordam bera olaman?`,
      timestamp: new Date()
    };
    setMessages([...messages, categoryMessage]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  HEMIS AI
                </h1>
                <p className="text-xs text-gray-500">Student Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/80 backdrop-blur text-sm font-medium"
              >
                <option>1-semestr</option>
                <option>2-semestr</option>
              </select>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                AI
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">GPA</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">5.0</p>
                <p className="text-emerald-600 text-sm mt-1 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> Excellent
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-3 rounded-2xl">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Credits</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">463</p>
                <p className="text-blue-600 text-sm mt-1">Total earned</p>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-2xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Attendance</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">98%</p>
                <p className="text-purple-600 text-sm mt-1">This week</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-2xl">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Progress</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">95%</p>
                <p className="text-orange-600 text-sm mt-1">Average</p>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-2xl">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-3xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Progress</h2>
              <div className="space-y-6">
                {[
                  { name: 'Advanced Mathematics', progress: 92, color: 'from-blue-500 to-indigo-600' },
                  { name: 'Computer Science', progress: 88, color: 'from-emerald-500 to-teal-600' },
                  { name: 'Economics', progress: 95, color: 'from-purple-500 to-pink-600' }
                ].map((subject, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                      <span className="text-gray-900 font-bold">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${subject.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-3xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Today's Classes</h2>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90 font-medium">09:00 - 10:30</span>
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Now</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Mathematics</h3>
                  <p className="text-sm opacity-90">Room: A-204</p>
                </div>
                
                <div className="border border-gray-100 rounded-2xl p-5 bg-white/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 font-medium">11:00 - 12:30</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Economics</h3>
                  <p className="text-sm text-gray-600 mt-1">Room: B-105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating AI Assistant Button */}
      <button
        onClick={() => setIsAIModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></span>
      </button>

      {/* AI Assistant Modal */}
      {isAIModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsAIModalOpen(false)}
          ></div>
          
          <div className={`relative bg-white w-full sm:w-[75vw] sm:max-w-6xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out ${
            isAIModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          } h-[75vh]`}>
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">HEMIS AI Assistant</h2>
                    <p className="text-sm opacity-90 mt-0.5">Always here to help you</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsAIModalOpen(false)}
                  className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Quick Access Categories */}
            <div className="px-6 py-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
              <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
                {quickAccessCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-md scale-105`
                        : `${category.bgColor} ${category.textColor} hover:scale-105 hover:shadow-sm`
                    }`}
                  >
                    {category.icon}
                    <span className="text-sm font-semibold whitespace-nowrap">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl p-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md'
                        : 'bg-white text-gray-900 shadow-sm border border-gray-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-white/70' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center ml-3 flex-shrink-0 shadow-md text-white font-bold">
                      U
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-100 p-6 bg-white">
              <div className="flex items-end space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none text-sm bg-gray-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3.5 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}