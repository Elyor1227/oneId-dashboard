
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState, useEffect } from 'react';
// import { Calendar, BookOpen, TrendingUp, Award, Clock, CheckCircle, Target, GraduationCap, DollarSign, FileCheck, Send, X, Sparkles, MessageCircle } from 'lucide-react';

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
          
//           <div className={`relative bg-white w-full sm:w-[75vw] sm:max-w-6xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out ${
//             isAIModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//           } h-[75vh]`}>
            
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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState, useEffect, useRef } from 'react';
// import { Calendar, BookOpen, TrendingUp, Award, Clock, CheckCircle, Target,  GraduationCap, DollarSign, FileCheck, Send, X, Sparkles, MessageCircle, Mic, Paperclip, Bell,  FileText,  Copy, RefreshCw,  CheckSquare } from 'lucide-react';

// export default function HemisDashboard() {
//   const [selectedSemester, setSelectedSemester] = useState('2-semestr');
//   const [isAIModalOpen, setIsAIModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [messages, setMessages] = useState([
//     {
//       role: 'assistant',
//       content: "Salom! Men sizning shaxsiy AI yordamchingizman. Bugun sizga qanday yordam bera olaman?",
//       timestamp: new Date(),
//       suggestions: ['GPA tahlil qiling', 'Test tuzib bering', 'Dars jadvalim']
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [notifications, setNotifications] = useState([
//     { id: 1, title: 'Assignment Due', message: 'Mathematics homework due tomorrow', time: '2 hours ago', read: false },
//     { id: 2, title: 'Class Reminder', message: 'Economics class in 30 minutes', time: '30 min ago', read: false }
//   ]);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const fileInputRef = useRef(null);
//   const messagesEndRef = useRef(null);

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
//       id: 'test',
//       icon: <CheckSquare className="w-5 h-5" />,
//       label: 'Create Test',
//       color: 'from-rose-400 to-pink-500',
//       bgColor: 'bg-rose-50',
//       textColor: 'text-rose-600'
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

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (!inputMessage.trim() && !uploadedFile) return;
    
//     const newMessage = {
//       role: 'user',
//       content: inputMessage || 'File uploaded',
//       timestamp: new Date(),
//       file: uploadedFile
//     };
    
//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setUploadedFile(null);
//     setIsTyping(true);
    
//     setTimeout(() => {
//       setIsTyping(false);
//       const response = generateAIResponse(inputMessage, uploadedFile);
//       setMessages(prev => [...prev, response]);
//     }, 1500);
//   };

//   const generateAIResponse = (message, file) => {
//     const lowerMessage = message.toLowerCase();
    
//     if (file && (file.type === 'application/pdf' || file.type.includes('document'))) {
//       return {
//         role: 'assistant',
//         content: "Men sizning hujjatingizni tahlil qildim. Ushbu mavzu bo'yicha test tuzishni xohlaysizmi?",
//         timestamp: new Date(),
//         testOptions: {
//           questions: 10,
//           difficulty: 'medium',
//           topic: file.name.replace(/\.[^/.]+$/, "")
//         },
//         suggestions: ['10 ta savol', '20 ta savol', '30 ta savol']
//       };
//     }
    
//     if (lowerMessage.includes('test') || lowerMessage.includes('imtihon')) {
//       return {
//         role: 'assistant',
//         content: "Test tuzish uchun qaysi mavzu yoki fanni tanlaysiz? Yoki material yuklang va men u bo'yicha test tuzaman.",
//         timestamp: new Date(),
//         suggestions: ['Mathematics', 'Economics', 'Computer Science']
//       };
//     }
    
//     return {
//       role: 'assistant',
//       content: "Men sizning savolingizni tushundim va ustida ishlayapman. Qisqa vaqt ichida batafsil javob beraman.",
//       timestamp: new Date(),
//       suggestions: ['Batafsil tushuntiring', 'Misol keltiring', 'Qisqacha aytib bering']
//     };
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category.id);
//     let categoryMessage = '';
    
//     if (category.id === 'test') {
//       categoryMessage = "Test yaratish uchun mavzu nomini yozing yoki material yuklang. Men siz uchun imtihonga tayyorgarlik testini tuzaman.";
//     } else {
//       categoryMessage = `${category.label} bo'yicha sizga qanday yordam bera olaman?`;
//     }
    
//     const message = {
//       role: 'assistant',
//       content: categoryMessage,
//       timestamp: new Date()
//     };
//     setMessages([...messages, message]);
//   };

//   const handleVoiceInput = () => {
//     setIsRecording(!isRecording);
//     if (!isRecording) {
//       setTimeout(() => {
//         setIsRecording(false);
//         setInputMessage("Ovozli xabar qabul qilindi");
//       }, 3000);
//     }
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedFile(file);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setInputMessage(suggestion);
//   };

//   const markNotificationAsRead = (id) => {
//     setNotifications(notifications.map(n => 
//       n.id === id ? { ...n, read: true } : n
//     ));
//   };

//   const unreadCount = notifications.filter(n => !n.read).length;

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
//               <div className="relative">
//                 <button
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors"
//                 >
//                   <Bell className="w-6 h-6 text-gray-600" />
//                   {unreadCount > 0 && (
//                     <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
//                       {unreadCount}
//                     </span>
//                   )}
//                 </button>
                
//                 {showNotifications && (
//                   <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50">
//                     <div className="p-4 border-b border-gray-100">
//                       <h3 className="font-bold text-gray-900">Notifications</h3>
//                     </div>
//                     <div className="max-h-96 overflow-y-auto">
//                       {notifications.map((notif) => (
//                         <div
//                           key={notif.id}
//                           onClick={() => markNotificationAsRead(notif.id)}
//                           className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
//                             !notif.read ? 'bg-blue-50' : ''
//                           }`}
//                         >
//                           <div className="flex items-start justify-between">
//                             <div className="flex-1">
//                               <h4 className="font-semibold text-sm text-gray-900">{notif.title}</h4>
//                               <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
//                               <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
//                             </div>
//                             {!notif.read && (
//                               <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
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

//       <button
//         onClick={() => setIsAIModalOpen(true)}
//         className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 group"
//       >
//         <MessageCircle className="w-7 h-7" />
//         <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></span>
//       </button>

//       {isAIModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
//           <div 
//             className="absolute inset-0 bg-black/30 backdrop-blur-sm"
//             onClick={() => setIsAIModalOpen(false)}
//           ></div>
          
//           <div className={`relative bg-white w-full sm:w-[90vw] sm:max-w-7xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out ${
//             isAIModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//           } h-[100vh] sm:h-[85vh]`}>
            
//             <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 text-white relative overflow-hidden">
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
//               <div className="relative flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
//                     <Sparkles className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold">HEMIS AI Assistant</h2>
//                     <p className="text-sm opacity-90 mt-0.5">Your intelligent study companion</p>
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

//             <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
//               {messages.map((message, idx) => (
//                 <div key={idx} className="animate-fadeIn">
//                   <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                     {message.role === 'assistant' && (
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
//                         <Sparkles className="w-5 h-5 text-white" />
//                       </div>
//                     )}
//                     <div className="flex flex-col max-w-[75%]">
//                       <div
//                         className={`rounded-2xl p-4 ${
//                           message.role === 'user'
//                             ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md'
//                             : 'bg-white text-gray-900 shadow-sm border border-gray-100'
//                         }`}
//                       >
//                         <p className="text-sm leading-relaxed">{message.content}</p>
//                         {message.file && (
//                           <div className="mt-2 flex items-center space-x-2 text-xs opacity-80">
//                             <Paperclip className="w-4 h-4" />
//                             <span>{message.file.name}</span>
//                           </div>
//                         )}
//                         <p className={`text-xs mt-2 ${
//                           message.role === 'user' ? 'text-white/70' : 'text-gray-400'
//                         }`}>
//                           {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                         </p>
//                       </div>
                      
//                       {message.suggestions && message.role === 'assistant' && (
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           {message.suggestions.map((suggestion, i) => (
//                             <button
//                               key={i}
//                               onClick={() => handleSuggestionClick(suggestion)}
//                               className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-all"
//                             >
//                               {suggestion}
//                             </button>
//                           ))}
//                         </div>
//                       )}
                      
//                       {message.testOptions && (
//                         <div className="mt-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
//                           <h4 className="font-semibold text-sm text-gray-900 mb-2">Test sozlamalari:</h4>
//                           <div className="flex items-center space-x-2 text-sm text-gray-700 mb-3">
//                             <span>Mavzu: <strong>{message.testOptions.topic}</strong></span>
//                           </div>
//                           <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
//                             Test tuzish
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                     {message.role === 'user' && (
//                       <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center ml-3 flex-shrink-0 shadow-md text-white font-bold">
//                         U
//                       </div>
//                     )}
//                   </div>
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
//               <div ref={messagesEndRef} />
//             </div>

//             <div className="border-t border-gray-100 p-6 bg-white">
//               {uploadedFile && (
//                 <div className="mb-3 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl p-3">
//                   <div className="flex items-center space-x-2">
//                     <FileText className="w-5 h-5 text-blue-600" />
//                     <span className="text-sm font-medium text-gray-900">{uploadedFile.name}</span>
//                     <span className="text-xs text-gray-500">({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
//                   </div>
//                   <button
//                     onClick={() => setUploadedFile(null)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>
//               )}
              
//               <div className="flex items-end space-x-3">
//                 <div className="flex-1 flex items-end space-x-2">
//                   <button
//                     onClick={() => fileInputRef.current?.click()}
//                     className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
//                     title="Upload file"
//                   >
//                     <Paperclip className="w-5 h-5 text-gray-600" />
//                   </button>
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     onChange={handleFileUpload}
//                     accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
//                     className="hidden"
//                   />
                  
//                   <button
//                     onClick={handleVoiceInput}
//                     className={`p-3 rounded-xl transition-all ${
//                       isRecording 
//                         ? 'bg-red-500 text-white animate-pulse' 
//                         : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
//                     }`}
//                     title="Voice input"
//                   >
//                     <Mic className="w-5 h-5" />
//                   </button>
                  
//                   <input
//                     type="text"
//                     value={inputMessage}
//                     onChange={(e) => setInputMessage(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                     placeholder="Xabar yozing yoki fayl yuklang..."
//                     className="flex-1 border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none text-sm bg-gray-50"
//                   />
//                 </div>
//                 <button
//                   onClick={handleSendMessage}
//                   disabled={!inputMessage.trim() && !uploadedFile}
//                   className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3.5 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
              
//               <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
//                 <div className="flex items-center space-x-4">
//                   <span>PDF, DOC, rasmlar qabul qilinadi</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
//                     <Copy className="w-4 h-4" />
//                   </button>
//                   <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
//                     <RefreshCw className="w-4 h-4" />
//                   </button>
//                 </div>
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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react';
// import { 
//   FileText, Users, Activity, Calendar, ClipboardCheck, 
//   TrendingUp, DollarSign, BarChart3, MessageSquare, 
//   Settings, Home, Search, Bell, User, 
//  Award, BookOpen,
//   Building2, CreditCard, 
//   Menu, X,
//   UserCheck, 
//   Upload,
//   CheckCircle,
//   Send,
//   Download,
//   AlertCircle, 
// } from 'lucide-react';
// import { BarChart, Bar, PieChart as  XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

// const HemisDashboard = () => {
//   const [activeTab, setActiveTab] = useState('home');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [selectedGroup, setSelectedGroup] = useState('all');

//   // Guruh rahbari ma'lumotlari
//   const groupLeaderInfo = {
//     name: "Aliyev Sardor Karimovich",
//     position: "Guruh rahbari",
//     faculty: "Axborot texnologiyalari fakulteti",
//     groups: ["CS-101", "CS-102"]
//   };

//   // Talabalar ma'lumotlari
//   const students = [
//     { 
//       id: 1, 
//       name: 'Abdullayev Ali', 
//       group: 'CS-101', 
//       gender: 'Erkak',
//       age: 19,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol', 
//       gpa: 3.8,
//       residence: 'Yotoqxona',
//       paymentType: 'Grant',
//       contract: '100%',
//       subjects: [
//         { name: 'Matematika', grade: 5, attendance: 92, hours: 60, missed: 5, reason: 'Sababli' },
//         { name: 'Fizika', grade: 4, attendance: 88, hours: 60, missed: 7, reason: 'Sababsiz' },
//         { name: 'Dasturlash', grade: 5, attendance: 95, hours: 80, missed: 4, reason: 'Sababli' }
//       ],
//       debts: []
//     },
//     { 
//       id: 2, 
//       name: 'Karimova Malika', 
//       group: 'CS-101', 
//       gender: 'Ayol',
//       age: 18,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol',
//       gpa: 3.9,
//       residence: 'O\'z uyi',
//       paymentType: 'Grant',
//       contract: '100%',
//       subjects: [
//         { name: 'Matematika', grade: 5, attendance: 96, hours: 60, missed: 2, reason: 'Sababli' },
//         { name: 'Fizika', grade: 5, attendance: 94, hours: 60, missed: 3, reason: 'Sababli' },
//         { name: 'Dasturlash', grade: 5, attendance: 98, hours: 80, missed: 1, reason: 'Sababli' }
//       ],
//       debts: []
//     },
//     { 
//       id: 3, 
//       name: 'Rahimov Jamshid', 
//       group: 'CS-102', 
//       gender: 'Erkak',
//       age: 20,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Akademik qarzdor',
//       gpa: 2.8,
//       residence: 'Ijara',
//       paymentType: 'Kontrakt',
//       contract: '50%',
//       contractAmount: 12000000,
//       paid: 6000000,
//       debt: 6000000,
//       subjects: [
//         { name: 'Matematika', grade: 3, attendance: 75, hours: 60, missed: 15, reason: 'Sababsiz' },
//         { name: 'Fizika', grade: 2, attendance: 70, hours: 60, missed: 18, reason: 'Sababsiz' },
//         { name: 'Dasturlash', grade: 4, attendance: 85, hours: 80, missed: 12, reason: 'Sababli' }
//       ],
//       debts: ['Fizika', 'Ingliz tili']
//     },
//     { 
//       id: 4, 
//       name: 'Tursunova Dilnoza', 
//       group: 'CS-102', 
//       gender: 'Ayol',
//       age: 19,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol',
//       gpa: 3.5,
//       residence: 'Qarindosh uyi',
//       paymentType: 'Kontrakt',
//       contract: '30%',
//       contractAmount: 15000000,
//       paid: 15000000,
//       debt: 0,
//       subjects: [
//         { name: 'Matematika', grade: 4, attendance: 90, hours: 60, missed: 6, reason: 'Sababli' },
//         { name: 'Fizika', grade: 4, attendance: 88, hours: 60, missed: 7, reason: 'Sababli' },
//         { name: 'Dasturlash', grade: 5, attendance: 93, hours: 80, missed: 5, reason: 'Sababli' }
//       ],
//       debts: []
//     }
//   ];

//   // Dars jadvali (Haftalik)
//   const weekSchedule = [
//     { day: 'Dushanba', lessons: [
//       { time: '08:30-10:00', subject: 'Matematika', room: '305', teacher: 'Mamadaliyev A.', group: 'CS-101' },
//       { time: '10:10-11:40', subject: 'Fizika', room: '201', teacher: 'Qosimov B.', group: 'CS-101' },
//       { time: '12:00-13:30', subject: 'Dasturlash', room: '401', teacher: 'Karimova S.', group: 'CS-102' }
//     ]},
//     { day: 'Seshanba', lessons: [
//       { time: '08:30-10:00', subject: 'Ingliz tili', room: '105', teacher: 'Rashidova M.', group: 'CS-101' },
//       { time: '10:10-11:40', subject: 'Dasturlash', room: '401', teacher: 'Karimova S.', group: 'CS-101' },
//       { time: '12:00-13:30', subject: 'Matematika', room: '305', teacher: 'Mamadaliyev A.', group: 'CS-102' }
//     ]},
//     { day: 'Chorshanba', lessons: [
//       { time: '08:30-10:00', subject: 'Ma\'lumotlar bazasi', room: '402', teacher: 'Tursunov J.', group: 'CS-101' },
//       { time: '10:10-11:40', subject: 'Fizika', room: '201', teacher: 'Qosimov B.', group: 'CS-102' },
//       { time: '12:00-13:30', subject: 'Ingliz tili', room: '105', teacher: 'Rashidova M.', group: 'CS-102' }
//     ]}
//   ];

//   // Imtihon jadvali
//   const examSchedule = [
//     { date: '15.01.2025', day: 'Seshanba', subject: 'Matematika', time: '09:00', room: '305', teacher: 'Mamadaliyev A.', groups: ['CS-101', 'CS-102'] },
//     { date: '17.01.2025', day: 'Payshanba', subject: 'Fizika', time: '09:00', room: '201', teacher: 'Qosimov B.', groups: ['CS-101', 'CS-102'] },
//     { date: '20.01.2025', day: 'Yakshanba', subject: 'Dasturlash', time: '10:00', room: '401', teacher: 'Karimova S.', groups: ['CS-101', 'CS-102'] }
//   ];
//   const documents = [
//     { id: 1, name: 'Enrollment Form 2024', date: '2024-11-10', status: 'Signed', type: 'PDF' },
//     { id: 2, name: 'Transcript Request', date: '2024-11-12', status: 'Pending', type: 'PDF' },
//     { id: 3, name: 'Scholarship Agreement', date: '2024-11-08', status: 'Verified', type: 'DOCX' }
//   ];

//   // Statistika hisoblash
//   const filteredStudents = selectedGroup === 'all' 
//     ? students 
//     : students.filter(s => s.group === selectedGroup);

//   const stats = {
//     total: filteredStudents.length,
//     male: filteredStudents.filter(s => s.gender === 'Erkak').length,
//     female: filteredStudents.filter(s => s.gender === 'Ayol').length,
//     dormitory: filteredStudents.filter(s => s.residence === 'Yotoqxona').length,
//     ownHome: filteredStudents.filter(s => s.residence === 'O\'z uyi').length,
//     rental: filteredStudents.filter(s => s.residence === 'Ijara').length,
//     relative: filteredStudents.filter(s => s.residence === 'Qarindosh uyi').length,
//     contract: filteredStudents.filter(s => s.paymentType === 'Kontrakt').length,
//     grant: filteredStudents.filter(s => s.paymentType === 'Grant').length,
//     active: filteredStudents.filter(s => s.status === 'Faol').length,
//     debtors: filteredStudents.filter(s => s.status === 'Akademik qarzdor').length,
//     avgGpa: filteredStudents.length > 0 ? (filteredStudents.reduce((sum, s) => sum + s.gpa, 0) / filteredStudents.length).toFixed(2) : '0.00'
//   };

//   // Yosh kesimi
//   const ageDistribution = [
//     { age: '18', count: filteredStudents.filter(s => s.age === 18).length },
//     { age: '19', count: filteredStudents.filter(s => s.age === 19).length },
//     { age: '20', count: filteredStudents.filter(s => s.age === 20).length },
//     { age: '21+', count: filteredStudents.filter(s => s.age >= 21).length }
//   ];

//   const navigationItems = [
//     { id: 'home', icon: Home, label: 'Bosh sahifa' },
//     { id: 'documents', icon: FileText, label: 'E-Hujjatlar' },
//     { id: 'students', icon: Users, label: 'Talabalar' },
//     { id: 'activity', icon: Activity, label: 'Talaba faoliyati' },
//     { id: 'academic', icon: Calendar, label: 'O\'quv jarayoni' },
//     { id: 'attendance', icon: ClipboardCheck, label: 'Davomat' },
//     { id: 'performance', icon: TrendingUp, label: 'O\'zlashtirish' },
//     { id: 'financial', icon: DollarSign, label: 'Moliyaviy faoliyat' },
//     { id: 'statistics', icon: BarChart3, label: 'Statistika' },
//     { id: 'messages', icon: MessageSquare, label: 'Xabarlar' },
//     { id: 'settings', icon: Settings, label: 'Sozlamalar' }
//   ];

//   const StatCard = ({ icon: Icon, title, value, subtitle, color, percentage }) => (
//     <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//       <div className="flex items-start justify-between mb-4">
//         <div className={`p-3 rounded-xl bg-gradient-to-br ${color}`}>
//           <Icon className="w-6 h-6 text-white" />
//         </div>
//         {percentage && (
//           <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
//         )}
//       </div>
//       <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
//       <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
//       {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
//     </div>
//   );

//   const HomeIcon = ({ className = "w-4 h-4" }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//     </svg>
//   );

//   const renderContent = () => {
//     switch(activeTab) {
//       case 'home':
//         return (
//           <div className="space-y-6">
//             {/* Guruh rahbari info */}
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <User className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold">{groupLeaderInfo.name}</h2>
//                   <p className="text-blue-100">{groupLeaderInfo.position} • {groupLeaderInfo.faculty}</p>
//                   <p className="text-blue-100 text-sm mt-1">Guruhlar: {groupLeaderInfo.groups.join(', ')}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Guruh filter */}
//             <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
//               <div className="flex gap-3">
//                 <button 
//                   onClick={() => setSelectedGroup('all')}
//                   className={`px-6 py-2 rounded-xl font-medium transition-all ${
//                     selectedGroup === 'all' 
//                       ? 'bg-blue-500 text-white shadow-md' 
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   Barcha guruhlar
//                 </button>
//                 {groupLeaderInfo.groups.map(group => (
//                   <button 
//                     key={group}
//                     onClick={() => setSelectedGroup(group)}
//                     className={`px-6 py-2 rounded-xl font-medium transition-all ${
//                       selectedGroup === group 
//                         ? 'bg-blue-500 text-white shadow-md' 
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {group}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Asosiy statistika */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <StatCard 
//                 icon={Users} 
//                 title="Jami talabalar" 
//                 value={stats.total}
//                 color="from-blue-500 to-blue-600"
//               />
//               <StatCard 
//                 icon={UserCheck} 
//                 title="Faol talabalar" 
//                 value={stats.active}
//                 subtitle={`${stats.debtors} nafar qarzdor`}
//                 color="from-green-500 to-green-600"
//               />
//               <StatCard 
//                 icon={Award} 
//                 title="O'rtacha GPA" 
//                 value={stats.avgGpa}
//                 color="from-purple-500 to-purple-600"
//               />
//               <StatCard 
//                 icon={BookOpen} 
//                 title="Grant talabalar" 
//                 value={stats.grant}
//                 subtitle={`${stats.contract} nafar kontrakt`}
//                 color="from-orange-500 to-orange-600"
//               />
//             </div>

//             {/* Jins kesimi va Turar joy */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">Jins kesimi</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
//                     <span className="font-medium text-gray-700">Erkaklar</span>
//                     <div className="flex items-center gap-3">
//                       <div className="w-32 bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
//                           style={{width: `${(stats.male/stats.total)*100}%`}}
//                         />
//                       </div>
//                       <span className="text-xl font-bold text-blue-600 w-12 text-right">{stats.male}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
//                     <span className="font-medium text-gray-700">Qizlar</span>
//                     <div className="flex items-center gap-3">
//                       <div className="w-32 bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-pink-500 h-2 rounded-full transition-all duration-500" 
//                           style={{width: `${(stats.female/stats.total)*100}%`}}
//                         />
//                       </div>
//                       <span className="text-xl font-bold text-pink-600 w-12 text-right">{stats.female}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">Turar joy kesimi</h3>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="p-4 bg-green-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Building2 className="w-4 h-4 text-green-600" />
//                       <span className="text-sm text-gray-600">Yotoqxona</span>
//                     </div>
//                     <p className="text-2xl font-bold text-green-600">{stats.dormitory}</p>
//                   </div>
//                   <div className="p-4 bg-blue-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <HomeIcon className="w-4 h-4 text-blue-600" />
//                       <span className="text-sm text-gray-600">O'z uyi</span>
//                     </div>
//                     <p className="text-2xl font-bold text-blue-600">{stats.ownHome}</p>
//                   </div>
//                   <div className="p-4 bg-orange-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <CreditCard className="w-4 h-4 text-orange-600" />
//                       <span className="text-sm text-gray-600">Ijara</span>
//                     </div>
//                     <p className="text-2xl font-bold text-orange-600">{stats.rental}</p>
//                   </div>
//                   <div className="p-4 bg-purple-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Users className="w-4 h-4 text-purple-600" />
//                       <span className="text-sm text-gray-600">Qarindosh</span>
//                     </div>
//                     <p className="text-2xl font-bold text-purple-600">{stats.relative}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Yosh va To'lov kesimi */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Yosh kesimi</h3>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <BarChart data={ageDistribution}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                     <XAxis dataKey="age" stroke="#9ca3af" />
//                     <YAxis stroke="#9ca3af" />
//                     <Tooltip />
//                     <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">To'lov turi kesimi</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
//                     <div>
//                       <span className="font-medium text-gray-700">Grant asosida</span>
//                       <p className="text-sm text-gray-500 mt-1">100% chegirma</p>
//                     </div>
//                     <span className="text-3xl font-bold text-green-600">{stats.grant}</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
//                     <div>
//                       <span className="font-medium text-gray-700">Kontrakt asosida</span>
//                       <p className="text-sm text-gray-500 mt-1">To'lov shartnomasi</p>
//                     </div>
//                     <span className="text-3xl font-bold text-blue-600">{stats.contract}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'activity':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Talaba faoliyati</h2>
              
//               {/* Guruhlar bo'yicha */}
//               <div className="space-y-6">
//                 {groupLeaderInfo.groups.map(group => {
//                   const groupStudents = students.filter(s => s.group === group);
//                   return (
//                     <div key={group} className="border border-gray-200 rounded-xl overflow-hidden">
//                       <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
//                         <h3 className="text-xl font-bold text-white">{group} guruh</h3>
//                         <p className="text-blue-100 text-sm">{groupStudents.length} ta talaba</p>
//                       </div>
                      
//                       <div className="overflow-x-auto">
//                         <table className="w-full">
//                           <thead className="bg-gray-50">
//                             <tr>
//                               <th className="text-left py-3 px-6 font-semibold text-gray-700">Talaba</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">Ta'lim turi</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">Kurs</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">Talaba holati</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">GPA</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {groupStudents.map(student => (
//                               <tr key={student.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
//                                 <td className="py-4 px-6">
//                                   <div className="flex items-center gap-3">
//                                     <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                                       student.gender === 'Erkak' ? 'bg-blue-100' : 'bg-pink-100'
//                                     }`}>
//                                       <User className={`w-5 h-5 ${
//                                         student.gender === 'Erkak' ? 'text-blue-600' : 'text-pink-600'
//                                       }`} />
//                                     </div>
//                                     <div>
//                                       <p className="font-medium text-gray-900">{student.name}</p>
//                                       <p className="text-sm text-gray-500">{student.gender} • {student.age} yosh</p>
//                                     </div>
//                                   </div>
//                                 </td>
//                                 <td className="py-4 px-4 text-gray-700">{student.educationType}</td>
//                                 <td className="py-4 px-4 text-gray-700">{student.course}-kurs</td>
//                                 <td className="py-4 px-4">
//                                   <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                     student.status === 'Faol' 
//                                       ? 'bg-green-100 text-green-700' 
//                                       : 'bg-red-100 text-red-700'
//                                   }`}>
//                                     {student.status}
//                                   </span>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <span className={`text-lg font-bold ${
//                                     student.gpa >= 3.5 ? 'text-green-600' : 
//                                     student.gpa >= 3.0 ? 'text-yellow-600' : 'text-red-600'
//                                   }`}>
//                                     {student.gpa}
//                                   </span>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         );

//       case 'academic':
//          return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Oquv jarayoni</h2>
              
//               <div className="space-y-4">
//                 {weekSchedule.map((day, idx) => (
//                   <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3">
//                       <h3 className="text-lg font-bold text-white">{day.day}</h3>
//                     </div>
//                     <div className="p-4">
//                       <div className="grid gap-3">
//                         {day.lessons.map((lesson, lessonIdx) => (
//                           <div key={lessonIdx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                             <div className="flex items-center gap-4">
//                               <div className="text-center">
//                                 <p className="text-sm font-semibold text-blue-600">{lesson.time}</p>
//                               </div>
//                               <div className="w-px h-12 bg-gray-300"></div>
//                               <div>
//                                 <p className="font-bold text-gray-900">{lesson.subject}</p>
//                                 <p className="text-sm text-gray-600">{lesson.teacher}</p>
//                               </div>
//                             </div>
//                             <div className="flex items-center gap-4">
//                               <div className="text-right">
//                                 <p className="text-sm font-medium text-gray-700">Xona: {lesson.room}</p>
//                                 <p className="text-sm text-gray-500">{lesson.group}</p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Imtihonlar jadvali</h3>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="text-left py-3 px-4 font-semibold text-gray-700">Sana</th>
//                         <th className="text-left py-3 px-4 font-semibold text-gray-700">Kun</th>
//                         <th className="text-left py-3 px-4 font-semibold text-gray-700">Fan</th>
//                         <th className="text-left py-3 px-4 font-semibold text-gray-700">Vaqt</th>
//                         <th className="text-left py-3 px-4 font-semibold text-gray-700">Xona</th>
//                         <th className="text-left py-3 px-4 font-semibold text-gray-700">Oqituvchi</th>
//                         <th className="text-left py-3 px-4 font-semibold text-gray-700">Guruhlar</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {examSchedule.map((exam, idx) => (
//                         <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
//                           <td className="py-3 px-4 font-medium text-gray-900">{exam.date}</td>
//                           <td className="py-3 px-4 text-gray-700">{exam.day}</td>
//                           <td className="py-3 px-4 font-semibold text-blue-600">{exam.subject}</td>
//                           <td className="py-3 px-4 text-gray-700">{exam.time}</td>
//                           <td className="py-3 px-4 text-gray-700">{exam.room}</td>
//                           <td className="py-3 px-4 text-gray-700">{exam.teacher}</td>
//                           <td className="py-3 px-4">
//                             <div className="flex gap-1">
//                               {exam.groups.map((g, gIdx) => (
//                                 <span key={gIdx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
//                                   {g}
//                                 </span>
//                               ))}
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'attendance':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Davomat hisoboti</h2>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2">
//                   <Download className="w-4 h-4" />
//                   Yuklab olish
//                 </button>
//               </div>

//               <div className="mb-6">
//                 <select 
//                   value={selectedGroup}
//                   onChange={(e) => setSelectedGroup(e.target.value)}
//                   className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="all">Barcha guruhlar</option>
//                   {groupLeaderInfo.groups.map(group => (
//                     <option key={group} value={group}>{group}</option>
//                   ))}
//                 </select>
//               </div>

//               {groupLeaderInfo.groups.map(group => {
//                 if (selectedGroup !== 'all' && selectedGroup !== group) return null;
//                 const groupStudents = students.filter(s => s.group === group);
                
//                 return (
//                   <div key={group} className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
//                       <h3 className="text-xl font-bold text-white">{group} guruh - Davomat</h3>
//                     </div>
                    
//                     {groupStudents.map(student => (
//                       <div key={student.id} className="border-t border-gray-200">
//                         <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                               student.gender === 'Erkak' ? 'bg-blue-100' : 'bg-pink-100'
//                             }`}>
//                               <User className={`w-5 h-5 ${
//                                 student.gender === 'Erkak' ? 'text-blue-600' : 'text-pink-600'
//                               }`} />
//                             </div>
//                             <div>
//                               <p className="font-bold text-gray-900">{student.name}</p>
//                               <p className="text-sm text-gray-500">GPA: {student.gpa}</p>
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="p-6">
//                           <div className="overflow-x-auto">
//                             <table className="w-full">
//                               <thead className="bg-gray-100">
//                                 <tr>
//                                   <th className="text-left py-2 px-4 font-semibold text-gray-700">Fan nomi</th>
//                                   <th className="text-center py-2 px-4 font-semibold text-gray-700">Umumiy soat</th>
//                                   <th className="text-center py-2 px-4 font-semibold text-gray-700">Qoldirilgan</th>
//                                   <th className="text-center py-2 px-4 font-semibold text-gray-700">Sabab</th>
//                                   <th className="text-center py-2 px-4 font-semibold text-gray-700">Davomat %</th>
//                                   <th className="text-center py-2 px-4 font-semibold text-gray-700">Holat</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {student.subjects.map((subject, idx) => {
//                                   const isRed = subject.attendance < 75;
//                                   return (
//                                     <tr key={idx} className={`border-t border-gray-100 ${isRed ? 'bg-red-50' : ''}`}>
//                                       <td className="py-3 px-4 font-medium text-gray-900">{subject.name}</td>
//                                       <td className="py-3 px-4 text-center text-gray-700">{subject.hours}</td>
//                                       <td className="py-3 px-4 text-center font-semibold text-red-600">{subject.missed}</td>
//                                       <td className="py-3 px-4 text-center">
//                                         <span className={`px-2 py-1 rounded-full text-xs ${
//                                           subject.reason === 'Sababli' 
//                                             ? 'bg-blue-100 text-blue-700' 
//                                             : 'bg-red-100 text-red-700'
//                                         }`}>
//                                           {subject.reason}
//                                         </span>
//                                       </td>
//                                       <td className="py-3 px-4 text-center">
//                                         <div className="flex items-center justify-center gap-2">
//                                           <div className="w-24 bg-gray-200 rounded-full h-2">
//                                             <div 
//                                               className={`h-2 rounded-full ${isRed ? 'bg-red-500' : 'bg-green-500'}`}
//                                               style={{width: `${subject.attendance}%`}}
//                                             />
//                                           </div>
//                                           <span className={`font-bold ${isRed ? 'text-red-600' : 'text-green-600'}`}>
//                                             {subject.attendance}%
//                                           </span>
//                                         </div>
//                                       </td>
//                                       <td className="py-3 px-4 text-center">
//                                         {isRed ? (
//                                           <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
//                                             Qizil
//                                           </span>
//                                         ) : (
//                                           <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
//                                             Yaxshi
//                                           </span>
//                                         )}
//                                       </td>
//                                     </tr>
//                                   );
//                                 })}
//                               </tbody>
//                             </table>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );

//       case 'performance':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Ozlashtirish va Baholash</h2>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2">
//                   <Download className="w-4 h-4" />
//                   Hisobot
//                 </button>
//               </div>

//               <div className="mb-6">
//                 <select 
//                   value={selectedGroup}
//                   onChange={(e) => setSelectedGroup(e.target.value)}
//                   className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="all">Barcha guruhlar</option>
//                   {groupLeaderInfo.groups.map(group => (
//                     <option key={group} value={group}>{group}</option>
//                   ))}
//                 </select>
//               </div>
              
//               {groupLeaderInfo.groups.map(group => {
//                 if (selectedGroup !== 'all' && selectedGroup !== group) return null;
//                 const groupStudents = students.filter(s => s.group === group);
//                 const debtorStudents = groupStudents.filter(s => s.debts.length > 0);
                
//                 return (
//                   <div key={group} className="mb-8 space-y-6">
//                     <div className="border border-gray-200 rounded-xl overflow-hidden">
//                       <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
//                         <h3 className="text-xl font-bold text-white">{group} guruh - Ozlashtirish</h3>
//                       </div>
                      
//                       {groupStudents.map(student => (
//                         <div key={student.id} className="border-t border-gray-200">
//                           <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
//                             <div className="flex items-center gap-4">
//                               <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                                 student.gender === 'Erkak' ? 'bg-blue-100' : 'bg-pink-100'
//                               }`}>
//                                 <User className={`w-6 h-6 ${
//                                   student.gender === 'Erkak' ? 'text-blue-600' : 'text-pink-600'
//                                 }`} />
//                               </div>
//                               <div>
//                                 <p className="font-bold text-gray-900 text-lg">{student.name}</p>
//                                 <p className="text-sm text-gray-500">{student.group} - {student.course}-kurs</p>
//                               </div>
//                             </div>
//                             <div className="flex items-center gap-6">
//                               <div className="text-center">
//                                 <p className="text-sm text-gray-500">GPA</p>
//                                 <p className="text-2xl font-bold text-purple-600">{student.gpa}</p>
//                               </div>
//                               {student.debts.length > 0 && (
//                                 <div className="flex items-center gap-2 px-4 py-2 bg-red-100 rounded-xl">
//                                   <AlertCircle className="w-5 h-5 text-red-600" />
//                                   <span className="font-medium text-red-700">{student.debts.length} ta qarzdorlik</span>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
                          
//                           <div className="p-6">
//                             <h4 className="font-semibold text-gray-900 mb-4">Fanlar boyicha baholash:</h4>
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                               {student.subjects.map((subject, idx) => (
//                                 <div key={idx} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
//                                   <div className="flex items-center justify-between mb-2">
//                                     <p className="font-medium text-gray-900">{subject.name}</p>
//                                     <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                                       subject.grade === 5 ? 'bg-green-100' :
//                                       subject.grade === 4 ? 'bg-blue-100' :
//                                       subject.grade === 3 ? 'bg-yellow-100' : 'bg-red-100'
//                                     }`}>
//                                       <span className={`text-xl font-bold ${
//                                         subject.grade === 5 ? 'text-green-600' :
//                                         subject.grade === 4 ? 'text-blue-600' :
//                                         subject.grade === 3 ? 'text-yellow-600' : 'text-red-600'
//                                       }`}>
//                                         {subject.grade}
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <div className="flex items-center justify-between text-sm text-gray-600">
//                                     <span>Davomat:</span>
//                                     <span className={`font-semibold ${
//                                       subject.attendance >= 85 ? 'text-green-600' :
//                                       subject.attendance >= 75 ? 'text-yellow-600' : 'text-red-600'
//                                     }`}>
//                                       {subject.attendance}%
//                                     </span>
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>

//                             {student.debts.length > 0 && (
//                               <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
//                                 <div className="flex items-center gap-2 mb-2">
//                                   <AlertCircle className="w-5 h-5 text-red-600" />
//                                   <p className="font-semibold text-red-900">Akademik qarzdorliklar:</p>
//                                 </div>
//                                 <div className="flex flex-wrap gap-2">
//                                   {student.debts.map((debt, idx) => (
//                                     <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
//                                       {debt}
//                                     </span>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {debtorStudents.length > 0 && (
//                       <div className="bg-red-50 border border-red-200 rounded-xl p-6">
//                         <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
//                           <AlertCircle className="w-6 h-6" />
//                           Akademik qarzdor talabalar ({debtorStudents.length})
//                         </h4>
//                         <div className="space-y-3">
//                           {debtorStudents.map(student => (
//                             <div key={student.id} className="flex items-center justify-between p-4 bg-white rounded-xl">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
//                                   <User className="w-5 h-5 text-red-600" />
//                                 </div>
//                                 <div>
//                                   <p className="font-medium text-gray-900">{student.name}</p>
//                                   <p className="text-sm text-gray-500">GPA: {student.gpa}</p>
//                                 </div>
//                               </div>
//                               <div className="flex flex-wrap gap-2">
//                                 {student.debts.map((debt, idx) => (
//                                   <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
//                                     {debt}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );

//       case 'financial':
//            return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Moliyaviy faoliyat</h2>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2">
//                   <Download className="w-4 h-4" />
//                   Moliyaviy hisobot
//                 </button>
//               </div>

//               <div className="mb-6">
//                 <select 
//                   value={selectedGroup}
//                   onChange={(e) => setSelectedGroup(e.target.value)}
//                   className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="all">Barcha guruhlar</option>
//                   {groupLeaderInfo.groups.map(group => (
//                     <option key={group} value={group}>{group}</option>
//                   ))}
//                 </select>
//               </div>

//               {groupLeaderInfo.groups.map(group => {
//                 if (selectedGroup !== 'all' && selectedGroup !== group) return null;
//                 const groupStudents = students.filter(s => s.group === group);
                
//                 return (
//                   <div key={group} className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
//                     <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
//                       <h3 className="text-xl font-bold text-white">{group} guruh - Moliyaviy malumotlar</h3>
//                     </div>
                    
//                     <div className="overflow-x-auto">
//                       <table className="w-full">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="text-left py-3 px-6 font-semibold text-gray-700">Talaba</th>
//                             <th className="text-left py-3 px-4 font-semibold text-gray-700">Tolov turi</th>
//                             <th className="text-left py-3 px-4 font-semibold text-gray-700">Chegirma</th>
//                             <th className="text-left py-3 px-4 font-semibold text-gray-700">Kontrakt summasi</th>
//                             <th className="text-left py-3 px-4 font-semibold text-gray-700">Tolangan</th>
//                             <th className="text-left py-3 px-4 font-semibold text-gray-700">Qarz</th>
//                             <th className="text-left py-3 px-4 font-semibold text-gray-700">Turar joy</th>
//                             <th className="text-left py-3 px-4 font-semibold text-gray-700">Holat</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {groupStudents.map(student => (
//                             <tr key={student.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
//                               <td className="py-4 px-6">
//                                 <div className="flex items-center gap-3">
//                                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                                     student.gender === 'Erkak' ? 'bg-blue-100' : 'bg-pink-100'
//                                   }`}>
//                                     <User className={`w-5 h-5 ${
//                                       student.gender === 'Erkak' ? 'text-blue-600' : 'text-pink-600'
//                                     }`} />
//                                   </div>
//                                   <div>
//                                     <p className="font-medium text-gray-900">{student.name}</p>
//                                     <p className="text-sm text-gray-500">{student.age} yosh</p>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td className="py-4 px-4">
//                                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                   student.paymentType === 'Grant' 
//                                     ? 'bg-green-100 text-green-700' 
//                                     : 'bg-blue-100 text-blue-700'
//                                 }`}>
//                                   {student.paymentType}
//                                 </span>
//                               </td>
//                               <td className="py-4 px-4 font-semibold text-gray-900">{student.contract}</td>
//                               <td className="py-4 px-4 text-gray-700">
//                                 {student.contractAmount ? `${(student.contractAmount / 1000000).toFixed(1)} mln` : '-'}
//                               </td>
//                               <td className="py-4 px-4 font-semibold text-green-600">
//                                 {student.paid ? `${(student.paid / 1000000).toFixed(1)} mln` : '-'}
//                               </td>
//                               <td className="py-4 px-4">
//                                 {student.debt > 0 ? (
//                                   <span className="font-semibold text-red-600">{(student.debt / 1000000).toFixed(1)} mln</span>
//                                 ) : (
//                                   <span className="text-gray-400">-</span>
//                                 )}
//                               </td>
//                               <td className="py-4 px-4">
//                                 <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                                   {student.residence}
//                                 </span>
//                               </td>
//                               <td className="py-4 px-4">
//                                 {student.debt > 0 ? (
//                                   <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
//                                     Qarz bor
//                                   </span>
//                                 ) : student.paymentType === 'Grant' ? (
//                                   <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
//                                     Grant
//                                   </span>
//                                 ) : (
//                                   <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
//                                     Tolangan
//                                   </span>
//                                 )}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       // Qolgan bo'limlar...
//       case 'documents': return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">E-Documents</h2>
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2">
//                   <Upload className="w-4 h-4" />
//                   Upload Document
//                 </button>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-200">
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Document Name</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {documents.map(doc => (
//                       <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                         <td className="py-3 px-4 font-medium text-gray-900">{doc.name}</td>
//                         <td className="py-3 px-4 text-gray-600">{doc.date}</td>
//                         <td className="py-3 px-4">
//                           <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{doc.type}</span>
//                         </td>
//                         <td className="py-3 px-4">
//                           <span className={`px-3 py-1 rounded-full text-sm ${
//                             doc.status === 'Signed' ? 'bg-green-100 text-green-700' :
//                             doc.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
//                             'bg-blue-100 text-blue-700'
//                           }`}>
//                             {doc.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-4">
//                           <div className="flex gap-2">
//                             <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
//                               <CheckCircle className="w-4 h-4 text-green-600" />
//                             </button>
//                             <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
//                               <FileText className="w-4 h-4 text-blue-600" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         );
//       case 'students':  return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Management</h2>
              
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-200">
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Group</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">GPA</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {students.map(student => (
//                       <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                         <td className="py-3 px-4 font-medium text-gray-900">{student.name}</td>
//                         <td className="py-3 px-4 text-gray-600">{student.group}</td>
//                         <td className="py-3 px-4 text-gray-900">{student.gpa}</td>
//                         <td className="py-3 px-4">
//                           <span className={`px-3 py-1 rounded-full text-sm ${
//                             student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//                           }`}>
//                             {student.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         );
//       case 'statistics':
//       case 'messages': return (
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Messages</h2>
//             <div className="space-y-4">
//               <input 
//                 type="text" 
//                 placeholder="To: Student name or email" 
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input 
//                 type="text" 
//                 placeholder="Subject" 
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <textarea 
//                 placeholder="Message content..." 
//                 rows="6" 
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2">
//                 <Send className="w-4 h-4" />
//                 Send Message
//               </button>
//             </div>
//           </div>
//         );
//       case 'settings':
//       default:
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">{navigationItems.find(item => item.id === activeTab)?.label}</h2>
//             <p className="text-gray-600">Ushbu bo'lim hozirda ishlab chiqilmoqda. Tez orada foydalanishga tayyor bo'ladi.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans">
//       {/* Sidebar */}
//       <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
//         <div className="p-6 border-b border-gray-200 flex items-center justify-between">
//           {sidebarOpen && <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">UniManage</h1>}
//           <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//             {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>

//         <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
//           {navigationItems.map(item => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
//                 activeTab === item.id
//                   ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <item.icon className="w-5 h-5" />
//               {sidebarOpen && <span className="font-medium">{item.label}</span>}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4 flex-1">
//               <div className="relative flex-1 max-w-md">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Talabalar, hujjatlar, fanlar bo'yicha qidirish..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
//                 <Bell className="w-6 h-6 text-gray-600" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="flex items-center gap-3">
//                 <div className="text-right">
//                   <p className="font-medium text-gray-900 text-sm">{groupLeaderInfo.name}</p>
//                   <p className="text-gray-500 text-xs">{groupLeaderInfo.position}</p>
//                 </div>
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//                   <User className="w-5 h-5 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <main className="flex-1 overflow-y-auto p-8">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HemisDashboard;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react';
// import { 
//   FileText, Users, Activity, Calendar, ClipboardCheck, 
//   TrendingUp,  BarChart3, MessageSquare, 
//   Settings, Home, Search, Bell, User,  
//      Award, BookOpen,
//   Building2, CreditCard,   
//   Menu, X, ChevronDown, ChevronRight, AlertCircle,
//   UserCheck,    FileCheck,
//   ListChecks, School, Wallet,  
//   HelpCircle
// } from 'lucide-react';
// import {   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

// const HemisDashboard = () => {
//   const [activeTab, setActiveTab] = useState('home');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [selectedGroup, setSelectedGroup] = useState('all');
//   const [expandedMenus, setExpandedMenus] = useState({});

//   const groupLeaderInfo = {
//     name: "Aliyev Sardor Karimovich",
//     position: "Guruh rahbari",
//     faculty: "Axborot texnologiyalari fakulteti",
//     groups: ["CS-101", "CS-102"]
//   };

//   const students = [
//     { 
//       id: 1, 
//       name: 'Abdullayev Ali', 
//       group: 'CS-101', 
//       gender: 'Erkak',
//       age: 19,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol', 
//       gpa: 3.8,
//       residence: 'Yotoqxona',
//       paymentType: 'Grant',
//       contract: '100%',
//       contractAmount: 0,
//       paid: 0,
//       debt: 0,
//       subjects: [
//         { name: 'Matematika', grade: 5, attendance: 92, hours: 60, missed: 5, reason: 'Sababli' },
//         { name: 'Fizika', grade: 4, attendance: 88, hours: 60, missed: 7, reason: 'Sababsiz' },
//         { name: 'Dasturlash', grade: 5, attendance: 95, hours: 80, missed: 4, reason: 'Sababli' }
//       ],
//       debts: []
//     },
//     { 
//       id: 2, 
//       name: 'Karimova Malika', 
//       group: 'CS-101', 
//       gender: 'Ayol',
//       age: 18,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol',
//       gpa: 3.9,
//       residence: 'Oz uyi',
//       paymentType: 'Grant',
//       contract: '100%',
//       contractAmount: 0,
//       paid: 0,
//       debt: 0,
//       subjects: [
//         { name: 'Matematika', grade: 5, attendance: 96, hours: 60, missed: 2, reason: 'Sababli' },
//         { name: 'Fizika', grade: 5, attendance: 94, hours: 60, missed: 3, reason: 'Sababli' },
//         { name: 'Dasturlash', grade: 5, attendance: 98, hours: 80, missed: 1, reason: 'Sababli' }
//       ],
//       debts: []
//     },
//     { 
//       id: 3, 
//       name: 'Rahimov Jamshid', 
//       group: 'CS-102', 
//       gender: 'Erkak',
//       age: 20,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Akademik qarzdor',
//       gpa: 2.8,
//       residence: 'Ijara',
//       paymentType: 'Kontrakt',
//       contract: '50%',
//       contractAmount: 12000000,
//       paid: 6000000,
//       debt: 6000000,
//       subjects: [
//         { name: 'Matematika', grade: 3, attendance: 75, hours: 60, missed: 15, reason: 'Sababsiz' },
//         { name: 'Fizika', grade: 2, attendance: 70, hours: 60, missed: 18, reason: 'Sababsiz' },
//         { name: 'Dasturlash', grade: 4, attendance: 85, hours: 80, missed: 12, reason: 'Sababli' }
//       ],
//       debts: ['Fizika', 'Ingliz tili']
//     },
//     { 
//       id: 4, 
//       name: 'Tursunova Dilnoza', 
//       group: 'CS-102', 
//       gender: 'Ayol',
//       age: 19,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol',
//       gpa: 3.5,
//       residence: 'Qarindosh uyi',
//       paymentType: 'Kontrakt',
//       contract: '30%',
//       contractAmount: 15000000,
//       paid: 15000000,
//       debt: 0,
//       subjects: [
//         { name: 'Matematika', grade: 4, attendance: 90, hours: 60, missed: 6, reason: 'Sababli' },
//         { name: 'Fizika', grade: 4, attendance: 88, hours: 60, missed: 7, reason: 'Sababli' },
//         { name: 'Dasturlash', grade: 5, attendance: 93, hours: 80, missed: 5, reason: 'Sababli' }
//       ],
//       debts: []
//     },
//     { 
//       id: 5, 
//       name: 'Yusupov Bobur', 
//       group: 'CS-101', 
//       gender: 'Erkak',
//       age: 21,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol',
//       gpa: 3.6,
//       residence: 'Yotoqxona',
//       paymentType: 'Kontrakt',
//       contract: '70%',
//       contractAmount: 10000000,
//       paid: 10000000,
//       debt: 0,
//       subjects: [
//         { name: 'Matematika', grade: 4, attendance: 89, hours: 60, missed: 6, reason: 'Sababli' },
//         { name: 'Fizika', grade: 4, attendance: 91, hours: 60, missed: 5, reason: 'Sababli' },
//         { name: 'Dasturlash', grade: 4, attendance: 87, hours: 80, missed: 10, reason: 'Sababli' }
//       ],
//       debts: []
//     },
//     { 
//       id: 6, 
//       name: 'Nazarova Nigora', 
//       group: 'CS-102', 
//       gender: 'Ayol',
//       age: 18,
//       educationType: "Kunduzgi",
//       course: 2,
//       status: 'Faol',
//       gpa: 4.0,
//       residence: 'Oz uyi',
//       paymentType: 'Grant',
//       contract: '100%',
//       contractAmount: 0,
//       paid: 0,
//       debt: 0,
//       subjects: [
//         { name: 'Matematika', grade: 5, attendance: 98, hours: 60, missed: 1, reason: 'Sababli' },
//         { name: 'Fizika', grade: 5, attendance: 97, hours: 60, missed: 2, reason: 'Sababli' },
//         { name: 'Dasturlash', grade: 5, attendance: 99, hours: 80, missed: 1, reason: 'Sababli' }
//       ],
//       debts: []
//     }
//   ];

//   const weekSchedule = [
//     { day: 'Dushanba', lessons: [
//       { time: '08:30-10:00', subject: 'Matematika', room: '305', teacher: 'Mamadaliyev A.', group: 'CS-101' },
//       { time: '10:10-11:40', subject: 'Fizika', room: '201', teacher: 'Qosimov B.', group: 'CS-101' }
//     ]},
//     { day: 'Seshanba', lessons: [
//       { time: '08:30-10:00', subject: 'Ingliz tili', room: '105', teacher: 'Rashidova M.', group: 'CS-101' },
//       { time: '10:10-11:40', subject: 'Dasturlash', room: '401', teacher: 'Karimova S.', group: 'CS-101' }
//     ]}
//   ];

//   const examSchedule = [
//     { date: '15.01.2025', day: 'Seshanba', subject: 'Matematika', time: '09:00', room: '305', teacher: 'Mamadaliyev A.', groups: ['CS-101', 'CS-102'] },
//     { date: '17.01.2025', day: 'Payshanba', subject: 'Fizika', time: '09:00', room: '201', teacher: 'Qosimov B.', groups: ['CS-101', 'CS-102'] }
//   ];

//   const filteredStudents = selectedGroup === 'all' ? students : students.filter(s => s.group === selectedGroup);

//   const calculateStats = () => {
//     if (filteredStudents.length === 0) {
//       return {
//         total: 0, male: 0, female: 0, dormitory: 0, ownHome: 0, rental: 0,
//         relative: 0, contract: 0, grant: 0, active: 0, debtors: 0, avgGpa: '0.00'
//       };
//     }
//     return {
//       total: filteredStudents.length,
//       male: filteredStudents.filter(s => s.gender === 'Erkak').length,
//       female: filteredStudents.filter(s => s.gender === 'Ayol').length,
//       dormitory: filteredStudents.filter(s => s.residence === 'Yotoqxona').length,
//       ownHome: filteredStudents.filter(s => s.residence === 'Oz uyi').length,
//       rental: filteredStudents.filter(s => s.residence === 'Ijara').length,
//       relative: filteredStudents.filter(s => s.residence === 'Qarindosh uyi').length,
//       contract: filteredStudents.filter(s => s.paymentType === 'Kontrakt').length,
//       grant: filteredStudents.filter(s => s.paymentType === 'Grant').length,
//       active: filteredStudents.filter(s => s.status === 'Faol').length,
//       debtors: filteredStudents.filter(s => s.status === 'Akademik qarzdor').length,
//       avgGpa: (filteredStudents.reduce((sum, s) => sum + s.gpa, 0) / filteredStudents.length).toFixed(2)
//     };
//   };

//   const stats = calculateStats();

//   const ageDistribution = [
//     { age: '18', count: filteredStudents.filter(s => s.age === 18).length },
//     { age: '19', count: filteredStudents.filter(s => s.age === 19).length },
//     { age: '20', count: filteredStudents.filter(s => s.age === 20).length },
//     { age: '21+', count: filteredStudents.filter(s => s.age >= 21).length }
//   ];

//   const navigationItems = [
//     { id: 'home', icon: Home, label: 'Bosh sahifa', type: 'single' },
//     { 
//       id: 'students', 
//       icon: Users, 
//       label: 'Talabalar', 
//       type: 'group',
//       children: [
//         { id: 'students-list', label: "Talabalar ro'yxati", icon: ListChecks },
//         { id: 'students-activity', label: 'Talabalar harakati', icon: Activity },
//         { id: 'students-passport', label: 'Talaba pasporti', icon: FileCheck }
//       ]
//     },
//     { 
//       id: 'academic', 
//       icon: School, 
//       label: "O'quv jarayoni", 
//       type: 'group',
//       children: [
//         { id: 'schedule', label: 'Dars jadvali', icon: Calendar },
//         { id: 'exams', label: 'Nazorat jadvali', icon: FileText },
//         { id: 'attendance', label: 'Davomat', icon: ClipboardCheck },
//         { id: 'performance', label: "O'zlashtirish", icon: TrendingUp }
//       ]
//     },
//     { 
//       id: 'financial', 
//       icon: Wallet, 
//       label: 'Moliyaviy holat', 
//       type: 'group',
//       children: [
//         { id: 'contracts', label: 'Shartnoma', icon: FileText },
//         { id: 'payments', label: "To'lovlar tarixi", icon: CreditCard },
//         { id: 'debts', label: 'Qarzdorlik', icon: AlertCircle },
//         { id: 'scholarship', label: 'Stipendiya', icon: Award },
//         { id: 'rental', label: 'Ijara', icon: Building2 },
//         { id: 'dormitory', label: 'Talabalar turar joyi', icon: Home }
//       ]
//     },
//     { 
//       id: 'external', 
//       icon: HelpCircle, 
//       label: 'Tashqi xizmatlar', 
//       type: 'group',
//       children: [
//         { id: 'support', label: 'Yordam', icon: MessageSquare },
//         { id: 'documents', label: 'Hujjatlar', icon: FileText }
//       ]
//     },
//     { id: 'statistics', icon: BarChart3, label: 'Statistika', type: 'single' },
//     { id: 'messages', icon: MessageSquare, label: 'Xabarlar', type: 'single' },
//     { id: 'settings', icon: Settings, label: 'Sozlamalar', type: 'single' }
//   ];

//   const toggleMenu = (menuId) => {
//     setExpandedMenus(prev => ({
//       ...prev,
//       [menuId]: !prev[menuId]
//     }));
//   };

//   const StatCard = ({ icon: Icon, title, value, subtitle, color }) => (
//     <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//       <div className="flex items-start justify-between mb-4">
//         <div className={`p-3 rounded-xl bg-gradient-to-br ${color}`}>
//           <Icon className="w-6 h-6 text-white" />
//         </div>
//       </div>
//       <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
//       <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
//       {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
//     </div>
//   );

//   const renderContent = () => {
//     switch(activeTab) {
//       case 'home':
//         return (
//           <div className="space-y-6">
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <User className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold">{groupLeaderInfo.name}</h2>
//                   <p className="text-blue-100">{groupLeaderInfo.position} - {groupLeaderInfo.faculty}</p>
//                   <p className="text-blue-100 text-sm mt-1">Guruhlar: {groupLeaderInfo.groups.join(', ')}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
//               <div className="flex gap-3 flex-wrap">
//                 <button 
//                   onClick={() => setSelectedGroup('all')}
//                   className={`px-6 py-2 rounded-xl font-medium transition-all ${
//                     selectedGroup === 'all' 
//                       ? 'bg-blue-500 text-white shadow-md' 
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   Barcha guruhlar
//                 </button>
//                 {groupLeaderInfo.groups.map(group => (
//                   <button 
//                     key={group}
//                     onClick={() => setSelectedGroup(group)}
//                     className={`px-6 py-2 rounded-xl font-medium transition-all ${
//                       selectedGroup === group 
//                         ? 'bg-blue-500 text-white shadow-md' 
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {group}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <StatCard 
//                 icon={Users} 
//                 title="Jami talabalar" 
//                 value={stats.total}
//                 color="from-blue-500 to-blue-600"
//               />
//               <StatCard 
//                 icon={UserCheck} 
//                 title="Faol talabalar" 
//                 value={stats.active}
//                 subtitle={`${stats.debtors} nafar qarzdor`}
//                 color="from-green-500 to-green-600"
//               />
//               <StatCard 
//                 icon={Award} 
//                 title="Ortacha GPA" 
//                 value={stats.avgGpa}
//                 color="from-purple-500 to-purple-600"
//               />
//               <StatCard 
//                 icon={BookOpen} 
//                 title="Grant talabalar" 
//                 value={stats.grant}
//                 subtitle={`${stats.contract} nafar kontrakt`}
//                 color="from-orange-500 to-orange-600"
//               />
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">Jins kesimi</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
//                     <span className="font-medium text-gray-700">Erkaklar</span>
//                     <div className="flex items-center gap-3">
//                       <div className="w-32 bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
//                           style={{width: stats.total > 0 ? `${(stats.male/stats.total)*100}%` : '0%'}}
//                         />
//                       </div>
//                       <span className="text-xl font-bold text-blue-600 w-12 text-right">{stats.male}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
//                     <span className="font-medium text-gray-700">Qizlar</span>
//                     <div className="flex items-center gap-3">
//                       <div className="w-32 bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-pink-500 h-2 rounded-full transition-all duration-500" 
//                           style={{width: stats.total > 0 ? `${(stats.female/stats.total)*100}%` : '0%'}}
//                         />
//                       </div>
//                       <span className="text-xl font-bold text-pink-600 w-12 text-right">{stats.female}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">Turar joy kesimi</h3>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="p-4 bg-green-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Building2 className="w-4 h-4 text-green-600" />
//                       <span className="text-sm text-gray-600">Yotoqxona</span>
//                     </div>
//                     <p className="text-2xl font-bold text-green-600">{stats.dormitory}</p>
//                   </div>
//                   <div className="p-4 bg-blue-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Home className="w-4 h-4 text-blue-600" />
//                       <span className="text-sm text-gray-600">Oz uyi</span>
//                     </div>
//                     <p className="text-2xl font-bold text-blue-600">{stats.ownHome}</p>
//                   </div>
//                   <div className="p-4 bg-orange-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <CreditCard className="w-4 h-4 text-orange-600" />
//                       <span className="text-sm text-gray-600">Ijara</span>
//                     </div>
//                     <p className="text-2xl font-bold text-orange-600">{stats.rental}</p>
//                   </div>
//                   <div className="p-4 bg-purple-50 rounded-xl">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Users className="w-4 h-4 text-purple-600" />
//                       <span className="text-sm text-gray-600">Qarindosh</span>
//                     </div>
//                     <p className="text-2xl font-bold text-purple-600">{stats.relative}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Yosh kesimi</h3>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <BarChart data={ageDistribution}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                     <XAxis dataKey="age" stroke="#9ca3af" />
//                     <YAxis stroke="#9ca3af" />
//                     <Tooltip />
//                     <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">Tolov turi kesimi</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
//                     <div>
//                       <span className="font-medium text-gray-700">Grant asosida</span>
//                       <p className="text-sm text-gray-500 mt-1">100% chegirma</p>
//                     </div>
//                     <span className="text-3xl font-bold text-green-600">{stats.grant}</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
//                     <div>
//                       <span className="font-medium text-gray-700">Kontrakt asosida</span>
//                       <p className="text-sm text-gray-500 mt-1">Tolov shartnomasi</p>
//                     </div>
//                     <span className="text-3xl font-bold text-blue-600">{stats.contract}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'students-list':
//       case 'students-activity':
//       case 'students-passport':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 {activeTab === 'students-list' && "Talabalar ro'yxati"}
//                 {activeTab === 'students-activity' && "Talabalar harakati"}
//                 {activeTab === 'students-passport' && "Talaba pasporti"}
//               </h2>
              
//               <div className="space-y-6">
//                 {groupLeaderInfo.groups.map(group => {
//                   const groupStudents = students.filter(s => s.group === group);
//                   return (
//                     <div key={group} className="border border-gray-200 rounded-xl overflow-hidden">
//                       <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
//                         <h3 className="text-xl font-bold text-white">{group} guruh</h3>
//                         <p className="text-blue-100 text-sm">{groupStudents.length} ta talaba</p>
//                       </div>
                      
//                       <div className="overflow-x-auto">
//                         <table className="w-full">
//                           <thead className="bg-gray-50">
//                             <tr>
//                               <th className="text-left py-3 px-6 font-semibold text-gray-700">Talaba</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">Talim turi</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">Kurs</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">Talaba holati</th>
//                               <th className="text-left py-3 px-4 font-semibold text-gray-700">GPA</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {groupStudents.map(student => (
//                               <tr key={student.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
//                                 <td className="py-4 px-6">
//                                   <div className="flex items-center gap-3">
//                                     <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                                       student.gender === 'Erkak' ? 'bg-blue-100' : 'bg-pink-100'
//                                     }`}>
//                                       <User className={`w-5 h-5 ${
//                                         student.gender === 'Erkak' ? 'text-blue-600' : 'text-pink-600'
//                                       }`} />
//                                     </div>
//                                     <div>
//                                       <p className="font-medium text-gray-900">{student.name}</p>
//                                       <p className="text-sm text-gray-500">{student.gender} - {student.age} yosh</p>
//                                     </div>
//                                   </div>
//                                 </td>
//                                 <td className="py-4 px-4 text-gray-700">{student.educationType}</td>
//                                 <td className="py-4 px-4 text-gray-700">{student.course}-kurs</td>
//                                 <td className="py-4 px-4">
//                                   <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                     student.status === 'Faol' 
//                                       ? 'bg-green-100 text-green-700' 
//                                       : 'bg-red-100 text-red-700'
//                                   }`}>
//                                     {student.status}
//                                   </span>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <span className="font-bold text-gray-900">{student.gpa}</span>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         );

//       case 'schedule':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Dars jadvali</h2>
              
//               <div className="space-y-4">
//                 {weekSchedule.map((day, idx) => (
//                   <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3">
//                       <h3 className="text-lg font-bold text-white">{day.day}</h3>
//                     </div>
//                     <div className="p-4">
//                       <div className="grid gap-3">
//                         {day.lessons.map((lesson, lessonIdx) => (
//                           <div key={lessonIdx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                             <div className="flex items-center gap-4">
//                               <div className="text-center">
//                                 <p className="text-sm font-semibold text-blue-600">{lesson.time}</p>
//                               </div>
//                               <div className="w-px h-12 bg-gray-300"></div>
//                               <div>
//                                 <p className="font-bold text-gray-900">{lesson.subject}</p>
//                                 <p className="text-sm text-gray-600">{lesson.teacher}</p>
//                               </div>
//                             </div>
//                             <div className="flex items-center gap-4">
//                               <div className="text-right">
//                                 <p className="text-sm font-medium text-gray-700">Xona: {lesson.room}</p>
//                                 <p className="text-sm text-gray-500">{lesson.group}</p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 'exams':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Nazorat (Imtihonlar) jadvali</h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Sana</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Kun</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Fan</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Vaqt</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Xona</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Oqituvchi</th>
//                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Guruhlar</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {examSchedule.map((exam, idx) => (
//                       <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
//                         <td className="py-3 px-4 font-medium text-gray-900">{exam.date}</td>
//                         <td className="py-3 px-4 text-gray-700">{exam.day}</td>
//                         <td className="py-3 px-4 font-semibold text-blue-600">{exam.subject}</td>
//                         <td className="py-3 px-4 text-gray-700">{exam.time}</td>
//                         <td className="py-3 px-4 text-gray-700">{exam.room}</td>
//                         <td className="py-3 px-4 text-gray-700">{exam.teacher}</td>
//                         <td className="py-3 px-4">
//                           <div className="flex gap-1">
//                             {exam.groups.map((g, gIdx) => (
//                               <span key={gIdx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
//                                 {g}
//                               </span>
//                             ))}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         );

//       case 'attendance':
//       case 'performance':
//       case 'contracts':
//       case 'payments':
//       case 'debts':
//       case 'scholarship':
//       case 'rental':
//       case 'dormitory':
//       case 'support':
//       case 'documents':
//       case 'statistics':
//       case 'messages':
//       case 'settings':
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               {navigationItems.flatMap(item => item.type === 'group' ? item.children : [item]).find(i => i.id === activeTab)?.label || 'Sahifa'}
//             </h2>
//             <p className="text-gray-600">Bu bolim ishlab chiqilmoqda...</p>
//           </div>
//         );

//       default:
//         return (
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Sahifa topilmadi</h2>
//             <p className="text-gray-600">Bu bolim ishlab chiqilmoqda...</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans">
//       <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
//         <div className="p-6 border-b border-gray-200 flex items-center justify-between">
//           {sidebarOpen && (
//             <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               UniManage
//             </h1>
//           )}
//           <button 
//             onClick={() => setSidebarOpen(!sidebarOpen)} 
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>

//         <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
//           {navigationItems.map(item => {
//             if (item.type === 'single') {
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
//                     activeTab === item.id
//                       ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
//                       : 'text-gray-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   <item.icon className="w-5 h-5 flex-shrink-0" />
//                   {sidebarOpen && <span className="font-medium">{item.label}</span>}
//                 </button>
//               );
//             } else {
//               const isExpanded = expandedMenus[item.id];
//               const hasActiveChild = item.children.some(child => child.id === activeTab);
              
//               return (
//                 <div key={item.id} className="space-y-1">
//                   <button
//                     onClick={() => toggleMenu(item.id)}
//                     className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
//                       hasActiveChild
//                         ? 'bg-blue-50 text-blue-600'
//                         : 'text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <item.icon className="w-5 h-5 flex-shrink-0" />
//                       {sidebarOpen && <span className="font-medium">{item.label}</span>}
//                     </div>
//                     {sidebarOpen && (
//                       isExpanded ? 
//                         <ChevronDown className="w-4 h-4 flex-shrink-0" /> : 
//                         <ChevronRight className="w-4 h-4 flex-shrink-0" />
//                     )}
//                   </button>
                  
//                   {sidebarOpen && isExpanded && (
//                     <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
//                       {item.children.map(child => (
//                         <button
//                           key={child.id}
//                           onClick={() => setActiveTab(child.id)}
//                           className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
//                             activeTab === child.id
//                               ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
//                               : 'text-gray-600 hover:bg-gray-100'
//                           }`}
//                         >
//                           <child.icon className="w-4 h-4 flex-shrink-0" />
//                           <span className="font-medium">{child.label}</span>
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             }
//           })}
//         </nav>
//       </div>

//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="bg-white border-b border-gray-200 px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4 flex-1">
//               <div className="relative flex-1 max-w-md">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Talabalar, hujjatlar, kurslarni qidirish..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
//                 <Bell className="w-6 h-6 text-gray-600" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//                 <User className="w-5 h-5 text-white" />
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-y-auto p-8">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HemisDashboard;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react';
// import { MapPin,   Building2, Users, GraduationCap, TrendingUp, FileText, DollarSign, Calendar, Briefcase, Handshake, Award, X, Menu } from 'lucide-react';

// const HemisDashboard = () => {
//     const [activeSection, setActiveSection] = useState('yutuqlar');
//   const [menuOpen, setMenuOpen] = useState(false);

//   const sections = [
//     { id: 'yutuqlar', label: 'Yutuqlar', icon: TrendingUp },
//     { id: 'ijara', label: 'Ijara', icon: Building2 },
//     { id: 'mablaglar', label: "Mablag'lar", icon: DollarSign },
//     { id: 'dasturlar', label: "O'quv dasturlari", icon: FileText },
//     { id: 'kvota', label: 'Qabul kvotalari', icon: Users },
//     { id: 'muddat', label: "O'qish muddati", icon: Calendar },
//     { id: 'tolov', label: "To'lov-kontrakt", icon: DollarSign },
//     { id: 'amaliyot', label: 'Amaliyot', icon: Briefcase },
//     { id: 'hamkorlar', label: 'Hamkorlar', icon: Handshake },
//     { id: 'malaka', label: 'Malaka va daraja', icon: Award }
//   ];

//   const sectionContent  = {
//     yutuqlar: {
//       title: "Texnikum Erishgan Yutuqlar",
//       items: [
//         { year: "2024", achievement: "Viloyat miqyosida 'Eng yaxshi tibbiy texnikum' mukofoti" },
//         { year: "2023", achievement: "90% bitiruvchilar ish bilan ta'minlangan" },
//         { year: "2023", achievement: "Respublika ko'rgazmasida 2-o'rin" },
//         { year: "2022", achievement: "Zamonaviy laboratoriyalar ochildi" }
//       ]
//     },
//     ijara: {
//       title: "Ijara Ma'lumotlari",
//       data: [
//         { label: "Bino maydoni", value: "5,000 m²" },
//         { label: "Ijara shakli", value: "Uzoq muddatli ijara" },
//         { label: "Ijara muddati", value: "25 yil" },
//         { label: "Ijara to'lovi", value: "Yillik shartnoma asosida" }
//       ]
//     },
//     mablaglar: {
//       title: "Moliyaviy Ko'rsatkichlar",
//       budget: [
//         { category: "Umumiy byudjet", amount: "2,5 mlrd so'm", percent: 100 },
//         { category: "Ta'lim xarajatlari", amount: "1,2 mlrd so'm", percent: 48 },
//         { category: "Infratuzilma", amount: "800 mln so'm", percent: 32 },
//         { category: "Maosh fondi", amount: "500 mln so'm", percent: 20 }
//       ]
//     },
//     dasturlar: {
//       title: "O'quv Dasturlari",
//       programs: [
//         { code: "5110700", name: "Hamshiralik ishi", duration: "2 yil 10 oy" },
//         { code: "5110900", name: "Laboratoriya diagnostikasi", duration: "2 yil 10 oy" },
//         { code: "5111000", name: "Stomatologiya", duration: "2 yil 10 oy" },
//         { code: "5110800", name: "Dorivor vositalar texnologiyasi", duration: "2 yil 10 oy" }
//       ]
//     },
//     kvota: {
//       title: "Qabul Kvotalari (2024-2025)",
//       quotas: [
//         { program: "Hamshiralik ishi", davlat: 150, kontrakt: 200 },
//         { program: "Laboratoriya diagnostikasi", davlat: 80, kontrakt: 120 },
//         { program: "Stomatologiya", davlat: 60, kontrakt: 100 },
//         { program: "Dorivor vositalar texnologiyasi", davlat: 70, kontrakt: 90 }
//       ]
//     },
//     muddat: {
//       title: "O'qish Muddatlari",
//       durations: [
//         { base: "9-sinf asosida", duration: "3 yil 10 oy", form: "Kunduzgi" },
//         { base: "11-sinf asosida", duration: "2 yil 10 oy", form: "Kunduzgi" },
//         { base: "9-sinf asosida", duration: "4 yil", form: "Sirtqi" },
//         { base: "11-sinf asosida", duration: "3 yil 4 oy", form: "Sirtqi" }
//       ]
//     },
//     tolov: {
//       title: "To'lov-Kontrakt Miqdorlari (2024-2025)",
//       payments: [
//         { program: "Hamshiralik ishi", year: "7,500,000 so'm", month: "625,000 so'm" },
//         { program: "Laboratoriya diagnostikasi", year: "8,200,000 so'm", month: "683,333 so'm" },
//         { program: "Stomatologiya", year: "9,000,000 so'm", month: "750,000 so'm" },
//         { program: "Dorivor vositalar", year: "7,800,000 so'm", month: "650,000 so'm" }
//       ]
//     },
//     amaliyot: {
//       title: "Amaliyot O'tash Joylari",
//       locations: [
//         { name: "Surxondaryo viloyat shifoxonasi", type: "Asosiy hamkor", students: "250 ta talaba" },
//         { name: "Sho'rchi tuman markaziy shifoxonasi", type: "Hamkor muassasa", students: "150 ta talaba" },
//         { name: "Jarqo'rg'on tuman shifoxonasi", type: "Hamkor muassasa", students: "100 ta talaba" },
//         { name: "Termiz davlat tibbiyot shifoxonasi", type: "Hamkor muassasa", students: "80 ta talaba" }
//       ]
//     },
//     hamkorlar: {
//       title: "Hamkor Tashkilotlar",
//       partners: [
//         { name: "Surxondaryo viloyat SSV boshqarmasi", type: "Davlat muassasasi" },
//         { name: "Termiz davlat universiteti", type: "Ta'lim muassasasi" },
//         { name: "Ajiniyoz nomidagi Nukus davlat pedagogika instituti", type: "Ta'lim muassasasi" },
//         { name: "MEDLINE Diagnostika Markazi", type: "Xususiy klinika" },
//         { name: "FARMAMED dorixona tarmog'i", type: "Xususiy kompaniya" }
//       ]
//     },
//     malaka: {
//       title: "Bitiruvchilar Malakasi va Darajasi",
//       qualifications: [
//         { direction: "Hamshiralik ishi", degree: "Hamshira", level: "O'rta maxsus" },
//         { direction: "Laboratoriya diagnostikasi", degree: "Laborant", level: "O'rta maxsus" },
//         { direction: "Stomatologiya", degree: "Stomatologik hamshira", level: "O'rta maxsus" },
//         { direction: "Dorivor vositalar", degree: "Farmatsevt", level: "O'rta maxsus" }
//       ]
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-xl">
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           {/* Universitet rasmi va ma'lumotlari */}
//           <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
//             <div className="w-68 h-68 bg-white rounded-2xl shadow-2xl overflow-hidden flex-shrink-0 border-4 border-white/30">
//               <img 
//                 src="https://kasbiy.edu.uz/api/public/download/xwWzM196531262.png" 
//                 alt="MEDSTART Logo"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">MEDSTART TIBBIYOT TEXNIKUMI</h1>
//               <p className="text-blue-100 text-lg">Nodavlat ta'lim muassasasi</p>
//               <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
//                 <MapPin className="w-5 h-5" />
//                 <p className="text-base text-blue-100">Sho'rchi tumani, Surxondaryo viloyati</p>
//               </div>
//             </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
//               <Users className="w-8 h-8 mx-auto mb-3" />
//               <p className="text-sm text-blue-100 mb-1">Umumiy sig'im</p>
//               <p className="text-3xl font-bold">9,999</p>
//               <p className="text-xs text-blue-100 mt-1">talaba</p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
//               <TrendingUp className="w-8 h-8 mx-auto mb-3" />
//               <p className="text-sm text-blue-100 mb-1">Ish bilan ta'minlanish</p>
//               <p className="text-3xl font-bold">90%</p>
//               <p className="text-xs text-blue-100 mt-1">bandlik darajasi</p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
//               <GraduationCap className="w-8 h-8 mx-auto mb-3" />
//               <p className="text-sm text-blue-100 mb-1">Bitiruvchilar</p>
//               <p className="text-3xl font-bold">967</p>
//               <p className="text-xs text-blue-100 mt-1">mutaxassis</p>
//             </div>
//           </div>
//           </div>
          
//           {/* 3 ta ko'rsatkich bitta qatorda */}
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Xarita bo'limi - Kattaroq */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 h-96">
//           <div className="relative w-full h-full">
//             <iframe
//               src="https://www.openstreetmap.org/export/embed.html?bbox=67.7%2C37.8%2C67.9%2C38.0&layer=mapnik&marker=37.9,67.8"
//               className="w-full h-full border-0"
//               title="Texnikum joylashuvi"
//             />
//             <div className="absolute top-4 left-4 bg-white px-4 py-3 rounded-lg shadow-lg">
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-blue-600" />
//                 <div>
//                   <p className="font-bold text-gray-800">Joylashuv</p>
//                   <p className="text-sm text-gray-600">Sho'rchi tumani, Surxondaryo</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//          <div className="flex flex-col lg:flex-row gap-6">
//           {/* Sidebar Menu */}
//           <div className="lg:w-64 flex-shrink-0">
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
//               <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 flex items-center justify-between lg:justify-center">
//                 <h3 className="font-bold text-lg">Bo'limlar</h3>
//                 <button 
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="lg:hidden"
//                 >
//                   {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//               </div>
//               <div className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
//                 {sections.map(section => {
//                   const Icon = section.icon;
//                   return (
//                     <button
//                       key={section.id}
//                       onClick={() => {
//                         setActiveSection(section.id);
//                         setMenuOpen(false);
//                       }}
//                       className={`w-full flex items-center gap-3 px-4 py-4 transition-all border-l-4 ${
//                         activeSection === section.id
//                           ? 'bg-blue-50 border-blue-600 text-blue-600 font-semibold'
//                           : 'border-transparent text-gray-600 hover:bg-gray-50'
//                       }`}
//                     >
//                       <Icon className="w-5 h-5" />
//                       <span>{section.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//           {/* Content */}
//           <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
//             {activeSection === 'yutuqlar' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.yutuqlar.title}</h2>
//                 <div className="space-y-4">
//                   {sectionContent.yutuqlar.items.map((item, idx) => (
//                     <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg hover:shadow-md transition-shadow">
//                       <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">{item.year}</div>
//                       <p className="text-gray-700 flex-1 pt-2">{item.achievement}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'ijara' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.ijara.title}</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {sectionContent.ijara.data.map((item, idx) => (
//                     <div key={idx} className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md">
//                       <p className="text-sm text-gray-600 mb-2">{item.label}</p>
//                       <p className="text-xl font-bold text-purple-600">{item.value}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'mablaglar' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.mablaglar.title}</h2>
//                 <div className="space-y-4">
//                   {sectionContent.mablaglar.budget.map((item, idx) => (
//                     <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
//                       <div className="flex justify-between items-center mb-3">
//                         <h3 className="font-semibold text-gray-800">{item.category}</h3>
//                         <span className="text-lg font-bold text-green-600">{item.amount}</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-3">
//                         <div
//                           className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
//                           style={{ width: `${item.percent}%` }}
//                         ></div>
//                       </div>
//                       <p className="text-sm text-gray-600 mt-2">{item.percent}% umumiy byudjetdan</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'dasturlar' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.dasturlar.title}</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {sectionContent.dasturlar.programs.map((program, idx) => (
//                     <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
//                       <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
//                         {program.code}
//                       </div>
//                       <h3 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h3>
//                       <div className="flex items-center gap-2 text-gray-600">
//                         <Calendar className="w-4 h-4" />
//                         <span>{program.duration}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'kvota' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.kvota.title}</h2>
//                 <div className="space-y-6">
//                   {sectionContent.kvota.quotas.map((quota, idx) => (
//                     <div key={idx} className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border-l-4 border-indigo-600">
//                       <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                         <GraduationCap className="w-5 h-5 text-indigo-600" />
//                         {quota.program}
//                       </h3>
//                       <div className="grid grid-cols-3 gap-4">
//                         <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4 text-center shadow-md">
//                           <p className="text-sm opacity-90 mb-1">Davlat grant</p>
//                           <p className="text-3xl font-bold">{quota.davlat}</p>
//                           <p className="text-xs opacity-75 mt-1">o'rin</p>
//                         </div>
//                         <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 text-center shadow-md">
//                           <p className="text-sm opacity-90 mb-1">Kontrakt</p>
//                           <p className="text-3xl font-bold">{quota.kontrakt}</p>
//                           <p className="text-xs opacity-75 mt-1">o'rin</p>
//                         </div>
//                         <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4 text-center shadow-md">
//                           <p className="text-sm opacity-90 mb-1">Jami</p>
//                           <p className="text-3xl font-bold">{quota.davlat + quota.kontrakt}</p>
//                           <p className="text-xs opacity-75 mt-1">o'rin</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'muddat' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.muddat.title}</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {sectionContent.muddat.durations.map((dur, idx) => (
//                     <div key={idx} className="bg-white border-2 border-pink-200 rounded-xl p-6 hover:border-pink-400 transition-colors">
//                       <div className="flex items-center gap-3 mb-4">
//                         <div className="bg-pink-100 p-2 rounded-lg">
//                           <Calendar className="w-6 h-6 text-pink-600" />
//                         </div>
//                         <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
//                           {dur.form}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-2">{dur.base}</p>
//                       <p className="text-2xl font-bold text-pink-600">{dur.duration}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'tolov' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.tolov.title}</h2>
//                 <div className="space-y-6">
//                   {sectionContent.tolov.payments.map((pay, idx) => (
//                     <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
//                       <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4">
//                         <h3 className="font-bold text-xl flex items-center gap-2">
//                           <DollarSign className="w-6 h-6" />
//                           {pay.program}
//                         </h3>
//                       </div>
//                       <div className="p-6">
//                         <div className="grid md:grid-cols-2 gap-6">
//                           <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
//                             <div className="flex items-center gap-3 mb-3">
//                               <div className="bg-green-600 p-2 rounded-lg">
//                                 <Calendar className="w-5 h-5 text-white" />
//                               </div>
//                               <p className="text-gray-600 font-medium">Yillik to'lov</p>
//                             </div>
//                             <p className="text-3xl font-bold text-green-700">{pay.year}</p>
//                           </div>
//                           <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
//                             <div className="flex items-center gap-3 mb-3">
//                               <div className="bg-blue-600 p-2 rounded-lg">
//                                 <Calendar className="w-5 h-5 text-white" />
//                               </div>
//                               <p className="text-gray-600 font-medium">Oylik to'lov</p>
//                             </div>
//                             <p className="text-3xl font-bold text-blue-700">{pay.month}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'amaliyot' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.amaliyot.title}</h2>
//                 <div className="space-y-4">
//                   {sectionContent.amaliyot.locations.map((loc, idx) => (
//                     <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
//                       <div className="flex items-start gap-4">
//                         <div className="bg-orange-100 p-3 rounded-lg">
//                           <Briefcase className="w-6 h-6 text-orange-600" />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-bold text-gray-800 mb-1">{loc.name}</h3>
//                           <div className="flex flex-wrap gap-3 mt-2">
//                             <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
//                               {loc.type}
//                             </span>
//                             <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
//                               {loc.students}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'hamkorlar' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.hamkorlar.title}</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {sectionContent.hamkorlar.partners.map((partner, idx) => (
//                     <div key={idx} className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-violet-600">
//                       <div className="flex items-start gap-3">
//                         <Handshake className="w-6 h-6 text-violet-600 mt-1" />
//                         <div>
//                           <h3 className="font-bold text-gray-800 mb-2">{partner.name}</h3>
//                           <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">
//                             {partner.type}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSection === 'malaka' && (
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.malaka.title}</h2>
//                 <div className="space-y-4">
//                   {sectionContent.malaka.qualifications.map((qual, idx) => (
//                     <div key={idx} className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//                       <div className="flex items-center gap-4">
//                         <div className="bg-gradient-to-br from-amber-600 to-yellow-600 p-3 rounded-lg">
//                           <Award className="w-8 h-8 text-white" />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-bold text-gray-800">{qual.direction}</h3>
//                           <div className="flex gap-3 mt-2">
//                             <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                               {qual.degree}
//                             </span>
//                             <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                               {qual.level}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HemisDashboard;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import React, { useState } from 'react';
// import { Microscope, FlaskConical, TestTube, Sparkles, TrendingUp, Star, ChevronRight } from 'lucide-react';

// const ProfessionCard = ({ profession, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const getIcon = (id) => {
//     const icons = {
//       3684: Microscope,
//       3685: FlaskConical,
//       3686: TestTube
//     };
//     return icons[id] || Microscope;
//   };

//   const gradients = [
//     'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500',
//     'bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500',
//     'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500'
//   ];

//   const Icon = getIcon(profession.id);
//   const gradient = gradients[index % 3];

//   return (
//     <div 
//       className="group relative w-full"
//       style={{ aspectRatio: '16/9' }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`absolute inset-0 ${gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
      
//       <div className="relative h-full bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 transition-all duration-500 group-hover:scale-105">
//         <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

//         <div className="relative h-full flex flex-col">
//           <div className="flex items-start justify-between p-6 pb-4">
//             <div className="relative">
//               <div className={`absolute inset-0 ${gradient} rounded-2xl blur-lg opacity-60`}></div>
//               <div className={`relative ${gradient} p-4 rounded-2xl transition-transform duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
//                 <Icon className="w-8 h-8 text-white" />
//               </div>
//               <Sparkles className={`absolute -top-2 -right-2 w-5 h-5 text-yellow-400 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
//             </div>

//             <div className="flex flex-col items-end gap-2">
//               <div className={`${gradient} px-4 py-1.5 rounded-full`}>
//                 <span className="text-white font-bold text-sm">№ {profession.id}</span>
//               </div>
//               <div className="flex items-center gap-1 bg-emerald-500 bg-opacity-20 px-3 py-1 rounded-full">
//                 <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
//                 <span className="text-emerald-400 text-xs font-semibold">{profession.level}</span>
//               </div>
//             </div>
//           </div>

//           <div className="px-6 pb-4">
//             <h3 className="text-white text-xl font-bold leading-tight mb-2">
//               {profession.name}
//             </h3>
//             <div className="flex items-center gap-2 text-gray-400 text-sm">
//               <TrendingUp className="w-4 h-4" />
//               <span>Mutaxassislar toifasi</span>
//             </div>
//           </div>

//           <div className="flex-1 px-6 pb-6 grid grid-cols-2 gap-3">
//             <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
//               <div className="text-gray-500 text-xs mb-1 font-medium">Malaka</div>
//               <div className="text-white font-semibold text-sm">{profession.rank}</div>
//             </div>

//             <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
//               <div className="text-gray-500 text-xs mb-1 font-medium">Kod</div>
//               <div className="text-white font-semibold text-sm font-mono">{profession.code}</div>
//             </div>

//             <div className="col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
//               <div className="text-gray-500 text-xs mb-1 font-medium">Milliy malakalar ramkasi</div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold">5-daraja</div>
//                 <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={`absolute bottom-0 left-0 right-0 h-1 ${gradient} transform origin-left transition-transform duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   const professions = [
//     {
//       id: 3684,
//       name: "Kimyo laboratoriyasi xodimi",
//       rank: "xizmatchi",
//       code: "31111001",
//       category: "Mutaxassislar",
//       level: "LEVEL 6"
//     },
//     {
//       id: 3685,
//       name: "Kimyo sohasida laborant tadqiqotchi",
//       rank: "xizmatchi",
//       code: "31111002",
//       category: "Mutaxassislar",
//       level: "LEVEL 6"
//     },
//     {
//       id: 3686,
//       name: "Kimyogar-laborant, probirkada sinovchi",
//       rank: "xizmatchi",
//       code: "31111003",
//       category: "Mutaxassislar",
//       level: "LEVEL 6"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-8">
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 opacity-20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 mb-4">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-60"></div>
//               <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-2xl">
//                 <Sparkles className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>
          
//           <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//             Kasbiy Talab Kartalari
//           </h1>
          
//           <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
//             O'zbekiston kasb-hunar ta'limi tizimida kasblar, malakalar va karyera yo'nalishlarini o'rganing
//           </p>

//           <div className="inline-flex items-center gap-2 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 px-6 py-3 rounded-full">
//             <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
//             <span className="text-gray-300 font-semibold">7,226 ta kasbiy talab topildi</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//           {professions.map((profession, index) => (
//             <ProfessionCard key={profession.id} profession={profession} index={index} />
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <div className="inline-flex items-center gap-4 text-gray-600">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-700"></div>
//             <Star className="w-4 h-4" />
//             <span className="text-sm font-medium">Zamonaviy dizayn</span>
//             <Star className="w-4 h-4" />
//             <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-700"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react';
// import { TrendingUp, TrendingDown, Search, Filter, Calendar, FileText, DollarSign, Users, Award, Building } from 'lucide-react';

// const ModernDashboard = () => {
//   const [selectedYear, setSelectedYear] = useState('2025-2026');
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');

//   const dashboardData = {
//     tolovKontrakt: {
//       title: "To'lov kontrakt",
//       icon: FileText,
//       color: "from-blue-500 to-blue-600",
//       stats: [
//         { label: "Arizalar soni", value: "698 124 ta", subValue: "Shartnomalar soni: 697 555 ta", trend: 2.5 },
//         { label: "Shartnomalar summasi", value: "9 789.8 mlrd so'm", subValue: "To'langan summa: 3 651.1 mlrd", trend: -1.2 },
//         { label: "Qarzdorlik soni", value: "911 949 ta", subValue: "10 082.0 mlrd so'm", trend: 5.3 },
//         { label: "Haqдorlik soni", value: "434 554 ta", subValue: "2 738.4 mlrd so'm", trend: -0.8 }
//       ],
//       details: {
//         byFaculty: [
//           { name: "Matematika", students: 1250, amount: "850.5 mln" },
//           { name: "Fizika", students: 980, amount: "720.3 mln" },
//           { name: "Kimyo", students: 1100, amount: "790.8 mln" }
//         ],
//         monthly: [
//           { month: "Sentyabr", collected: "450.2 mln", planned: "500 mln" },
//           { month: "Oktyabr", collected: "480.5 mln", planned: "500 mln" },
//           { month: "Noyabr", collected: "520.8 mln", planned: "500 mln" }
//         ]
//       }
//     },
//     kreditModul: {
//       title: "Kredit modul",
//       icon: Award,
//       color: "from-purple-500 to-purple-600",
//       stats: [
//         { label: "Arizalar soni", value: "30 789 ta", subValue: "Shartnomalar: 30 426 ta", trend: 3.2 },
//         { label: "Shartnomalar summasi", value: "0.0 mlrd so'm", subValue: "To'langan: 0.0 mlrd", trend: 0 },
//         { label: "Qarzdorlik soni", value: "94 154 ta", subValue: "190.2 mlrd so'm", trend: 2.1 },
//         { label: "Haqдorlik soni", value: "127 552 ta", subValue: "74.1 mlrd so'm", trend: -1.5 }
//       ],
//       details: {
//         byDegree: [
//           { name: "Bakalavr", students: 25000, amount: "150.2 mln" },
//           { name: "Magistratura", students: 5000, amount: "40.0 mln" }
//         ]
//       }
//     },
//     stipendiya: {
//       title: "Stipendiya (VM-59)",
//       icon: DollarSign,
//       color: "from-green-500 to-green-600",
//       stats: [
//         { 
//           label: "Stipendiya oluvchilar talaba soni", 
//           value: "184 939 nafar",
//           budget: "150 114 nafar",
//           contract: "34 825 nafar",
//           percentage: "19.8% / 81.2%",
//           trend: 1.5
//         },
//         { 
//           label: "Hisoblanган summa", 
//           value: "449.3 mlrd",
//           budget: "405.8 mlrd",
//           contract: "43.5 mlrd",
//           percentage: "9.7% / 90.3%",
//           trend: 2.3
//         },
//         { 
//           label: "To'langan summa", 
//           value: "448.4 mlrd",
//           budget: "405.4 mlrd",
//           contract: "43.1 mlrd",
//           percentage: "9.6% / 90.4%",
//           trend: 2.1
//         }
//       ]
//     },
//     talabalar: {
//       title: "Talabalar turar joyi",
//       icon: Building,
//       color: "from-orange-500 to-orange-600",
//       stats: [
//         { label: "Arizalar soni", value: "98 382 ta", subValue: "Shartnomalar: 100 364 ta", trend: 4.2 },
//         { label: "Shartnomalar summasi", value: "253.3 mlrd so'm", subValue: "To'langan: 90.3 mlrd", trend: 1.8 },
//         { label: "Qarzdorlik soni", value: "104 963 ta", subValue: "182.4 mlrd so'm", trend: 3.5 },
//         { label: "Haqдorlik soni", value: "24 684 ta", subValue: "8.8 mlrd so'm", trend: -2.1 }
//       ]
//     }
//   };

//   const StatCard = ({ data, onClick }) => {
//     const Icon = data.icon;
//     return (
//       <div
//         onClick={onClick}
//         className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${data.color} p-6 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
//       >
//         <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
//               <Icon className="h-6 w-6" />
//             </div>
//             <span className="text-xs font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               Detallar →
//             </span>
//           </div>
//           <h3 className="text-xl font-bold mb-6">{data.title}</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {data.stats.map((stat, idx) => (
//               <div key={idx} className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
//                 <p className="text-xs opacity-90 mb-2">{stat.label}</p>
//                 <p className="text-lg font-bold mb-1">{stat.value}</p>
//                 {stat.subValue && (
//                   <p className="text-xs opacity-75">{stat.subValue}</p>
//                 )}
//                 {stat.trend !== undefined && stat.trend !== 0 && (
//                   <div className="flex items-center mt-2">
//                     {stat.trend > 0 ? (
//                       <>
//                         <TrendingUp className="h-3 w-3 mr-1" />
//                         <span className="text-xs">+{stat.trend}%</span>
//                       </>
//                     ) : (
//                       <>
//                         <TrendingDown className="h-3 w-3 mr-1" />
//                         <span className="text-xs">{stat.trend}%</span>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const Modal = ({ data, onClose }) => {
//     if (!data) return null;
//     const Icon = data.icon;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
//         <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
//           <div className={`bg-gradient-to-br ${data.color} p-8 text-white rounded-t-3xl`}>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
//                   <Icon className="h-8 w-8" />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold">{data.title}</h2>
//                   <p className="text-sm opacity-90 mt-1">Batafsil statistika va ma'lumotlar</p>
//                 </div>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all"
//               >
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <div className="p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {data.stats.map((stat, idx) => (
//                 <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
//                   <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
//                   {stat.subValue && (
//                     <p className="text-sm text-gray-500">{stat.subValue}</p>
//                   )}
//                   {stat.percentage && (
//                     <div className="mt-3">
//                       <div className="flex justify-between text-xs text-gray-600 mb-1">
//                         <span>Budjet / Kontrakt</span>
//                         <span>{stat.percentage}</span>
//                       </div>
//                       <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                         <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{width: stat.percentage.split('/')[0].trim()}}></div>
//                       </div>
//                     </div>
//                   )}
//                   {stat.trend !== undefined && stat.trend !== 0 && (
//                     <div className="flex items-center mt-3 text-sm">
//                       {stat.trend > 0 ? (
//                         <>
//                           <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
//                           <span className="text-green-600 font-medium">+{stat.trend}% o'sish</span>
//                         </>
//                       ) : (
//                         <>
//                           <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
//                           <span className="text-red-600 font-medium">{stat.trend}% kamayish</span>
//                         </>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {data.details && (
//               <div className="space-y-6">
//                 {data.details.byFaculty && (
//                   <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Fakultetlar bo'yicha</h3>
//                     <div className="space-y-3">
//                       {data.details.byFaculty.map((faculty, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4 flex justify-between items-center">
//                           <div>
//                             <p className="font-semibold text-gray-900">{faculty.name}</p>
//                             <p className="text-sm text-gray-600">{faculty.students} talaba</p>
//                           </div>
//                           <p className="text-lg font-bold text-blue-600">{faculty.amount}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {data.details.byDegree && (
//                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Ta'lim darajasi bo'yicha</h3>
//                     <div className="space-y-3">
//                       {data.details.byDegree.map((degree, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4 flex justify-between items-center">
//                           <div>
//                             <p className="font-semibold text-gray-900">{degree.name}</p>
//                             <p className="text-sm text-gray-600">{degree.students} talaba</p>
//                           </div>
//                           <p className="text-lg font-bold text-purple-600">{degree.amount}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {data.details.monthly && (
//                   <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Oylik statistika</h3>
//                     <div className="space-y-3">
//                       {data.details.monthly.map((month, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4">
//                           <div className="flex justify-between items-center mb-2">
//                             <p className="font-semibold text-gray-900">{month.month}</p>
//                             <p className="text-sm text-gray-600">Reja: {month.planned}</p>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
//                               <div 
//                                 className="h-full bg-gradient-to-r from-green-500 to-teal-500"
//                                 style={{width: `${(parseInt(month.collected) / parseInt(month.planned)) * 100}%`}}
//                               ></div>
//                             </div>
//                             <p className="text-lg font-bold text-green-600">{month.collected}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//               <p className="text-gray-600 mt-1">CHIRCHIQ DAVLAT PEDAGOGIKA UNIVERSITETI</p>
//             </div>
            
//             <div className="flex flex-wrap items-center gap-3">
//               {/* Search */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Qidirish..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
//                 />
//               </div>

//               {/* Year Selector */}
//               <div className="relative">
//                 <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <select
//                   value={selectedYear}
//                   onChange={(e) => setSelectedYear(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
//                 >
//                   <option value="2025-2026">2025-2026 o'quv yili</option>
//                   <option value="2024-2025">2024-2025 o'quv yili</option>
//                   <option value="2023-2024">2023-2024 o'quv yili</option>
//                 </select>
//               </div>

//               {/* Filter */}
//               <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all">
//                 <Filter className="h-5 w-5" />
//                 <span>Filtr</span>
//               </button>
//             </div>
//           </div>

//           {/* Quick Filters */}
//           <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
//             {['all', 'payment', 'credit', 'scholarship', 'dormitory'].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
//                   activeFilter === filter
//                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {filter === 'all' && 'Hammasi'}
//                 {filter === 'payment' && "To'lov kontrakt"}
//                 {filter === 'credit' && 'Kredit modul'}
//                 {filter === 'scholarship' && 'Stipendiya'}
//                 {filter === 'dormitory' && 'Turar joy'}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Jami talabalar</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-2">698 124</p>
//                 <div className="flex items-center mt-2 text-green-600">
//                   <TrendingUp className="h-4 w-4 mr-1" />
//                   <span className="text-sm font-medium">+5.2%</span>
//                 </div>
//               </div>
//               <div className="p-4 bg-blue-100 rounded-xl">
//                 <Users className="h-8 w-8 text-blue-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Jami to'lovlar</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-2">9 789.8</p>
//                 <p className="text-sm text-gray-500 mt-1">mlrd so'm</p>
//               </div>
//               <div className="p-4 bg-purple-100 rounded-xl">
//                 <DollarSign className="h-8 w-8 text-purple-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Qarzdorliklar</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-2">1 111 066</p>
//                 <div className="flex items-center mt-2 text-red-600">
//                   <TrendingUp className="h-4 w-4 mr-1" />
//                   <span className="text-sm font-medium">+3.8%</span>
//                 </div>
//               </div>
//               <div className="p-4 bg-red-100 rounded-xl">
//                 <FileText className="h-8 w-8 text-red-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Stipendiya oluvchilar</p>
//                 <p className="text-3xl font-bold text-gray-900 mt-2">184 939</p>
//                 <div className="flex items-center mt-2 text-green-600">
//                   <TrendingUp className="h-4 w-4 mr-1" />
//                   <span className="text-sm font-medium">+2.1%</span>
//                 </div>
//               </div>
//               <div className="p-4 bg-green-100 rounded-xl">
//                 <Award className="h-8 w-8 text-green-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Dashboard Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <StatCard 
//             data={dashboardData.tolovKontrakt} 
//             onClick={() => setSelectedCard(dashboardData.tolovKontrakt)}
//           />
//           <StatCard 
//             data={dashboardData.kreditModul} 
//             onClick={() => setSelectedCard(dashboardData.kreditModul)}
//           />
//           <StatCard 
//             data={dashboardData.stipendiya} 
//             onClick={() => setSelectedCard(dashboardData.stipendiya)}
//           />
//           <StatCard 
//             data={dashboardData.talabalar} 
//             onClick={() => setSelectedCard(dashboardData.talabalar)}
//           />
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <Modal data={selectedCard} onClose={() => setSelectedCard(null)} />
//       )}
//     </div>
//   );
// };

// export default ModernDashboard;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react';
// import { TrendingUp, TrendingDown, Search, Filter, Calendar, FileText, DollarSign, Users, Award, Building } from 'lucide-react';

// // CSS Animations
// const styles = `
//   @keyframes fadeInUp {
//     from {
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes slideIn {
//     from {
//       opacity: 0;
//       transform: translateX(-20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
  
//   @keyframes float {
//     0%, 100% {
//       transform: translateY(0px);
//     }
//     50% {
//       transform: translateY(-10px);
//     }
//   }
  
//   .animate-float {
//     animation: float 3s ease-in-out infinite;
//   }
// `;

// const ModernDashboard = () => {
//   const [selectedYear, setSelectedYear] = useState('2025-2026');
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');

//   const dashboardData = {
//     tolovKontrakt: {
//       title: "To'lov kontrakt",
//       icon: FileText,
//       color: "from-blue-500 to-blue-600",
//       stats: [
//         { label: "Arizalar soni", value: "698 124 ta", subValue: "Shartnomalar soni: 697 555 ta", trend: 2.5 },
//         { label: "Shartnomalar summasi", value: "9 789.8 mlrd so'm", subValue: "To'langan summa: 3 651.1 mlrd", trend: -1.2 },
//         { label: "Qarzdorlik soni", value: "911 949 ta", subValue: "10 082.0 mlrd so'm", trend: 5.3 },
//         { label: "Haqдorlik soni", value: "434 554 ta", subValue: "2 738.4 mlrd so'm", trend: -0.8 }
//       ],
//       details: {
//         byFaculty: [
//           { name: "Matematika", students: 1250, amount: "850.5 mln" },
//           { name: "Fizika", students: 980, amount: "720.3 mln" },
//           { name: "Kimyo", students: 1100, amount: "790.8 mln" }
//         ],
//         monthly: [
//           { month: "Sentyabr", collected: "450.2 mln", planned: "500 mln" },
//           { month: "Oktyabr", collected: "480.5 mln", planned: "500 mln" },
//           { month: "Noyabr", collected: "520.8 mln", planned: "500 mln" }
//         ]
//       }
//     },
//     kreditModul: {
//       title: "Kredit modul",
//       icon: Award,
//       color: "from-purple-500 to-purple-600",
//       stats: [
//         { label: "Arizalar soni", value: "30 789 ta", subValue: "Shartnomalar: 30 426 ta", trend: 3.2 },
//         { label: "Shartnomalar summasi", value: "0.0 mlrd so'm", subValue: "To'langan: 0.0 mlrd", trend: 0 },
//         { label: "Qarzdorlik soni", value: "94 154 ta", subValue: "190.2 mlrd so'm", trend: 2.1 },
//         { label: "Haqдorlik soni", value: "127 552 ta", subValue: "74.1 mlrd so'm", trend: -1.5 }
//       ],
//       details: {
//         byDegree: [
//           { name: "Bakalavr", students: 25000, amount: "150.2 mln" },
//           { name: "Magistratura", students: 5000, amount: "40.0 mln" }
//         ]
//       }
//     },
//     stipendiya: {
//       title: "Stipendiya (VM-59)",
//       icon: DollarSign,
//       color: "from-green-500 to-green-600",
//       stats: [
//         { 
//           label: "Stipendiya oluvchilar talaba soni", 
//           value: "184 939 nafar",
//           budget: "150 114 nafar",
//           contract: "34 825 nafar",
//           percentage: "19.8% / 81.2%",
//           trend: 1.5
//         },
//         { 
//           label: "Hisoblanган summa", 
//           value: "449.3 mlrd",
//           budget: "405.8 mlrd",
//           contract: "43.5 mlrd",
//           percentage: "9.7% / 90.3%",
//           trend: 2.3
//         },
//         { 
//           label: "To'langan summa", 
//           value: "448.4 mlrd",
//           budget: "405.4 mlrd",
//           contract: "43.1 mlrd",
//           percentage: "9.6% / 90.4%",
//           trend: 2.1
//         }
//       ]
//     },
//     talabalar: {
//       title: "Talabalar turar joyi",
//       icon: Building,
//       color: "from-orange-500 to-orange-600",
//       stats: [
//         { label: "Arizalar soni", value: "98 382 ta", subValue: "Shartnomalar: 100 364 ta", trend: 4.2 },
//         { label: "Shartnomalar summasi", value: "253.3 mlrd so'm", subValue: "To'langan: 90.3 mlrd", trend: 1.8 },
//         { label: "Qarzdorlik soni", value: "104 963 ta", subValue: "182.4 mlrd so'm", trend: 3.5 },
//         { label: "Haqдorlik soni", value: "24 684 ta", subValue: "8.8 mlrd so'm", trend: -2.1 }
//       ]
//     }
//   };

//   const StatCard = ({ data, onClick }) => {
//     const Icon = data.icon;
//     const [isHovered, setIsHovered] = useState(false);
    
//     return (
//       <div
//         onClick={onClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${data.color} p-6 text-white cursor-pointer transform transition-all duration-500 hover:scale-[1.02] group shadow-xl hover:shadow-2xl`}
//         style={{
//           boxShadow: isHovered 
//             ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(59, 130, 246, 0.3)' 
//             : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
//         }}
//       >
//         {/* Animated background circles */}
//         <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white opacity-10 transition-all duration-700 ${isHovered ? 'opacity-20 scale-150' : 'scale-100'}`}></div>
//         <div className={`absolute bottom-0 left-0 -mb-6 -ml-6 h-40 w-40 rounded-full bg-white opacity-5 transition-all duration-1000 ${isHovered ? 'opacity-15 scale-125' : 'scale-100'}`}></div>
        
//         {/* Animated gradient overlay */}
//         <div className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-4">
//             <div className={`p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm transition-all duration-300 ${isHovered ? 'scale-110 rotate-6 bg-opacity-30' : ''}`}>
//               <Icon className={`h-6 w-6 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
//             </div>
//             <span className={`text-xs font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full transition-all duration-300 ${isHovered ? 'bg-opacity-30 pr-4' : ''}`}>
//               Detallar {isHovered ? '→' : ''}
//             </span>
//           </div>
//           <h3 className={`text-xl font-bold mb-6 transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>{data.title}</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {data.stats.map((stat, idx) => (
//               <div 
//                 key={idx} 
//                 className={`bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${isHovered ? 'bg-opacity-20 translate-y-[-4px]' : ''}`}
//                 style={{
//                   transitionDelay: `${idx * 50}ms`
//                 }}
//               >
//                 <p className="text-xs opacity-90 mb-2">{stat.label}</p>
//                 <p className={`text-lg font-bold mb-1 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>{stat.value}</p>
//                 {stat.subValue && (
//                   <p className="text-xs opacity-75">{stat.subValue}</p>
//                 )}
//                 {stat.trend !== undefined && stat.trend !== 0 && (
//                   <div className={`flex items-center mt-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
//                     {stat.trend > 0 ? (
//                       <>
//                         <TrendingUp className={`h-3 w-3 mr-1 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
//                         <span className="text-xs">+{stat.trend}%</span>
//                       </>
//                     ) : (
//                       <>
//                         <TrendingDown className={`h-3 w-3 mr-1 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
//                         <span className="text-xs">{stat.trend}%</span>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const Modal = ({ data, onClose }) => {
//     const Icon = data.icon;
//     const [isVisible, setIsVisible] = useState(false);

//     React.useEffect(() => {
//       setIsVisible(true);
//     }, []);
//     if (!data) return null;

//     return (
//       <div 
//         className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center z-50 p-4 ${isVisible ? 'bg-opacity-50' : 'bg-opacity-0'}`}
//         onClick={onClose}
//       >
//         <div 
//           className={`bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
//           onClick={(e) => e.stopPropagation()}
//           style={{
//             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 60px rgba(59, 130, 246, 0.2)'
//           }}
//         >
//           <div className={`bg-gradient-to-br ${data.color} p-8 text-white rounded-t-3xl relative overflow-hidden`}>
//             {/* Animated background */}
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//             </div>
            
//             <div className="flex items-center justify-between relative z-10">
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm animate-pulse">
//                   <Icon className="h-8 w-8" />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold">{data.title}</h2>
//                   <p className="text-sm opacity-90 mt-1">Batafsil statistika va ma'lumotlar</p>
//                 </div>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 hover:rotate-90"
//               >
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <div className="p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {data.stats.map((stat, idx) => (
//                 <div 
//                   key={idx} 
//                   className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
//                   style={{
//                     animation: `slideIn 0.5s ease-out ${idx * 100}ms both`
//                   }}
//                 >
//                   <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
//                   {stat.subValue && (
//                     <p className="text-sm text-gray-500">{stat.subValue}</p>
//                   )}
//                   {stat.percentage && (
//                     <div className="mt-3">
//                       <div className="flex justify-between text-xs text-gray-600 mb-1">
//                         <span>Budjet / Kontrakt</span>
//                         <span>{stat.percentage}</span>
//                       </div>
//                       <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                         <div 
//                           className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
//                           style={{
//                             width: isVisible ? stat.percentage.split('/')[0].trim() : '0%'
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   )}
//                   {stat.trend !== undefined && stat.trend !== 0 && (
//                     <div className="flex items-center mt-3 text-sm">
//                       {stat.trend > 0 ? (
//                         <>
//                           <TrendingUp className="h-4 w-4 mr-1 text-green-500 animate-bounce" />
//                           <span className="text-green-600 font-medium">+{stat.trend}% o'sish</span>
//                         </>
//                       ) : (
//                         <>
//                           <TrendingDown className="h-4 w-4 mr-1 text-red-500 animate-bounce" />
//                           <span className="text-red-600 font-medium">{stat.trend}% kamayish</span>
//                         </>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {data.details && (
//               <div className="space-y-6">
//                 {data.details.byFaculty && (
//                   <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Fakultetlar bo'yicha</h3>
//                     <div className="space-y-3">
//                       {data.details.byFaculty.map((faculty, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4 flex justify-between items-center">
//                           <div>
//                             <p className="font-semibold text-gray-900">{faculty.name}</p>
//                             <p className="text-sm text-gray-600">{faculty.students} talaba</p>
//                           </div>
//                           <p className="text-lg font-bold text-blue-600">{faculty.amount}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {data.details.byDegree && (
//                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Ta'lim darajasi bo'yicha</h3>
//                     <div className="space-y-3">
//                       {data.details.byDegree.map((degree, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4 flex justify-between items-center">
//                           <div>
//                             <p className="font-semibold text-gray-900">{degree.name}</p>
//                             <p className="text-sm text-gray-600">{degree.students} talaba</p>
//                           </div>
//                           <p className="text-lg font-bold text-purple-600">{degree.amount}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {data.details.monthly && (
//                   <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Oylik statistika</h3>
//                     <div className="space-y-3">
//                       {data.details.monthly.map((month, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4">
//                           <div className="flex justify-between items-center mb-2">
//                             <p className="font-semibold text-gray-900">{month.month}</p>
//                             <p className="text-sm text-gray-600">Reja: {month.planned}</p>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
//                               <div 
//                                 className="h-full bg-gradient-to-r from-green-500 to-teal-500"
//                                 style={{width: `${(parseInt(month.collected) / parseInt(month.planned)) * 100}%`}}
//                               ></div>
//                             </div>
//                             <p className="text-lg font-bold text-green-600">{month.collected}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
//       <style>{styles}</style>
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div className="animate-float">
//               <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//               <p className="text-gray-600 mt-1">CHIRCHIQ DAVLAT PEDAGOGIKA UNIVERSITETI</p>
//             </div>
            
//             <div className="flex flex-wrap items-center gap-3">
//               {/* Search */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Qidirish..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
//                 />
//               </div>

//               {/* Year Selector */}
//               <div className="relative">
//                 <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <select
//                   value={selectedYear}
//                   onChange={(e) => setSelectedYear(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
//                 >
//                   <option value="2025-2026">2025-2026 o'quv yili</option>
//                   <option value="2024-2025">2024-2025 o'quv yili</option>
//                   <option value="2023-2024">2023-2024 o'quv yili</option>
//                 </select>
//               </div>

//               {/* Filter */}
//               <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all">
//                 <Filter className="h-5 w-5" />
//                 <span>Filtr</span>
//               </button>
//             </div>
//           </div>

//           {/* Quick Filters */}
//           <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
//             {['all', 'payment', 'credit', 'scholarship', 'dormitory'].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
//                   activeFilter === filter
//                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {filter === 'all' && 'Hammasi'}
//                 {filter === 'payment' && "To'lov kontrakt"}
//                 {filter === 'credit' && 'Kredit modul'}
//                 {filter === 'scholarship' && 'Stipendiya'}
//                 {filter === 'dormitory' && 'Turar joy'}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {[
//             { label: "Jami talabalar", value: "698 124", trend: 5.2, icon: Users, color: "blue" },
//             { label: "Jami to'lovlar", value: "9 789.8", sub: "mlrd so'm", icon: DollarSign, color: "purple" },
//             { label: "Qarzdorliklar", value: "1 111 066", trend: 3.8, up: false, icon: FileText, color: "red" },
//             { label: "Stipendiya oluvchilar", value: "184 939", trend: 2.1, icon: Award, color: "green" }
//           ].map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div 
//                 key={idx}
//                 className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
//                 style={{
//                   animation: `fadeInUp 0.6s ease-out ${idx * 100}ms both`,
//                   boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
//                 }}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-900">{item.label}</p>
//                     <p className="text-3xl font-bold text-gray-900 mt-2 transition-transform duration-300 group-hover:scale-110">{item.value}</p>
//                     {item.sub && <p className="text-sm text-gray-500 mt-1">{item.sub}</p>}
//                     {item.trend !== undefined && (
//                       <div className={`flex items-center mt-2 ${item.up === false ? 'text-red-600' : 'text-green-600'}`}>
//                         {item.up === false ? (
//                           <TrendingUp className="h-4 w-4 mr-1 group-hover:animate-bounce" />
//                         ) : (
//                           <TrendingUp className="h-4 w-4 mr-1 group-hover:animate-bounce" />
//                         )}
//                         <span className="text-sm font-medium">+{item.trend}%</span>
//                       </div>
//                     )}
//                   </div>
//                   <div className={`p-4 bg-${item.color}-100 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
//                     <Icon className={`h-8 w-8 text-${item.color}-600`} />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Main Dashboard Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <StatCard 
//             data={dashboardData.tolovKontrakt} 
//             onClick={() => setSelectedCard(dashboardData.tolovKontrakt)}
//           />
//           <StatCard 
//             data={dashboardData.kreditModul} 
//             onClick={() => setSelectedCard(dashboardData.kreditModul)}
//           />
//           <StatCard 
//             data={dashboardData.stipendiya} 
//             onClick={() => setSelectedCard(dashboardData.stipendiya)}
//           />
//           <StatCard 
//             data={dashboardData.talabalar} 
//             onClick={() => setSelectedCard(dashboardData.talabalar)}
//           />
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <Modal data={selectedCard} onClose={() => setSelectedCard(null)} />
//       )}
//     </div>
//   );
// };

// export default ModernDashboard;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Animations and 
// import React, { useState, useEffect } from 'react';
// import { TrendingUp, TrendingDown, Search,  Calendar, FileText, DollarSign, Users, Award, Building, Download, Share2, Bell, Settings,  BarChart3, PieChart, Activity, Zap } from 'lucide-react';

// // CSS Animations
// const styles = `
//   @keyframes fadeInUp {
//     from {
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes slideIn {
//     from {
//       opacity: 0;
//       transform: translateX(-20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
  
//   @keyframes float {
//     0%, 100% {
//       transform: translateY(0px);
//     }
//     50% {
//       transform: translateY(-10px);
//     }
//   }
  
//   @keyframes pulse-ring {
//     0% {
//       transform: scale(0.95);
//       opacity: 1;
//     }
//     50% {
//       transform: scale(1);
//       opacity: 0.7;
//     }
//     100% {
//       transform: scale(0.95);
//       opacity: 1;
//     }
//   }
  
//   @keyframes shimmer {
//     0% {
//       background-position: -1000px 0;
//     }
//     100% {
//       background-position: 1000px 0;
//     }
//   }
  
//   .animate-float {
//     animation: float 3s ease-in-out infinite;
//   }
  
//   .animate-pulse-ring {
//     animation: pulse-ring 2s ease-in-out infinite;
//   }
  
//   .shimmer {
//     background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//     background-size: 1000px 100%;
//     animation: shimmer 2s;
//   }
  
//   @keyframes slideDown {
//     from {
//       opacity: 0;
//       transform: translateY(-20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   .notification-enter {
//     animation: slideDown 0.3s ease-out;
//   }
// `;

// const HemisDashboard = () => {
//   const [selectedYear, setSelectedYear] = useState('2025-2026');
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [notifications, setNotifications] = useState([
//     { id: 1, type: 'success', message: "Yangi to'lov qabul qilindi", time: '5 daqiqa oldin', unread: true },
//     { id: 2, type: 'warning', message: 'Qarzdorlik muddati tugaydi', time: '1 soat oldin', unread: true },
//     { id: 3, type: 'info', message: 'Oylik hisobot tayyor', time: '2 soat oldin', unread: false }
//   ]);
  
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [liveStats, setLiveStats] = useState({
//     activeUsers: 1245,
//     todayPayments: 45,
//     pendingRequests: 89
//   });

//   // Real-time counter simulation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLiveStats(prev => ({
//         activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
//         todayPayments: prev.todayPayments + Math.floor(Math.random() * 3),
//         pendingRequests: prev.pendingRequests + Math.floor(Math.random() * 5) - 2
//       }));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const dashboardData = {
//     tolovKontrakt: {
//       title: "To'lov kontrakt",
//       icon: FileText,
//       color: "from-blue-500 to-blue-600",
//       stats: [
//         { label: "Arizalar soni", value: "698 124 ta", subValue: "Shartnomalar soni: 697 555 ta", trend: 2.5 },
//         { label: "Shartnomalar summasi", value: "9 789.8 mlrd so'm", subValue: "To'langan summa: 3 651.1 mlrd", trend: -1.2 },
//         { label: "Qarzdorlik soni", value: "911 949 ta", subValue: "10 082.0 mlrd so'm", trend: 5.3 },
//         { label: "Haqдorlik soni", value: "434 554 ta", subValue: "2 738.4 mlrd so'm", trend: -0.8 }
//       ],
//       details: {
//         byFaculty: [
//           { name: "Matematika", students: 1250, amount: "850.5 mln", progress: 85 },
//           { name: "Fizika", students: 980, amount: "720.3 mln", progress: 72 },
//           { name: "Kimyo", students: 1100, amount: "790.8 mln", progress: 79 }
//         ],
//         monthly: [
//           { month: "Sentyabr", collected: "450.2 mln", planned: "500 mln", percentage: 90 },
//           { month: "Oktyabr", collected: "480.5 mln", planned: "500 mln", percentage: 96 },
//           { month: "Noyabr", collected: "520.8 mln", planned: "500 mln", percentage: 104 }
//         ]
//       }
//     },
//     kreditModul: {
//       title: "Kredit modul",
//       icon: Award,
//       color: "from-purple-500 to-purple-600",
//       stats: [
//         { label: "Arizalar soni", value: "30 789 ta", subValue: "Shartnomalar: 30 426 ta", trend: 3.2 },
//         { label: "Shartnomalar summasi", value: "0.0 mlrd so'm", subValue: "To'langan: 0.0 mlrd", trend: 0 },
//         { label: "Qarzdorlik soni", value: "94 154 ta", subValue: "190.2 mlrd so'm", trend: 2.1 },
//         { label: "Haqдorlik soni", value: "127 552 ta", subValue: "74.1 mlrd so'm", trend: -1.5 }
//       ],
//       details: {
//         byDegree: [
//           { name: "Bakalavr", students: 25000, amount: "150.2 mln", progress: 88 },
//           { name: "Magistratura", students: 5000, amount: "40.0 mln", progress: 65 }
//         ]
//       }
//     },
//     stipendiya: {
//       title: "Stipendiya (VM-59)",
//       icon: DollarSign,
//       color: "from-green-500 to-green-600",
//       stats: [
//         { 
//           label: "Stipendiya oluvchilar talaba soni", 
//           value: "184 939 nafar",
//           budget: "150 114 nafar",
//           contract: "34 825 nafar",
//           percentage: "19.8% / 81.2%",
//           trend: 1.5
//         },
//         { 
//           label: "Hisoblanган summa", 
//           value: "449.3 mlrd",
//           budget: "405.8 mlrd",
//           contract: "43.5 mlrd",
//           percentage: "9.7% / 90.3%",
//           trend: 2.3
//         },
//         { 
//           label: "To'langan summa", 
//           value: "448.4 mlrd",
//           budget: "405.4 mlrd",
//           contract: "43.1 mlrd",
//           percentage: "9.6% / 90.4%",
//           trend: 2.1
//         }
//       ]
//     },
//     talabalar: {
//       title: "Talabalar turar joyi",
//       icon: Building,
//       color: "from-orange-500 to-orange-600",
//       stats: [
//         { label: "Arizalar soni", value: "98 382 ta", subValue: "Shartnomalar: 100 364 ta", trend: 4.2 },
//         { label: "Shartnomalar summasi", value: "253.3 mlrd so'm", subValue: "To'langan: 90.3 mlrd", trend: 1.8 },
//         { label: "Qarzdorlik soni", value: "104 963 ta", subValue: "182.4 mlrd so'm", trend: 3.5 },
//         { label: "Haqдorlik soni", value: "24 684 ta", subValue: "8.8 mlrd so'm", trend: -2.1 }
//       ]
//     }
//   };

//   const StatCard = ({ data, onClick }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const Icon = data.icon;
    
//     return (
//       <div
//         onClick={onClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${data.color} p-6 text-white cursor-pointer transform transition-all duration-500 hover:scale-[1.02] group shadow-xl hover:shadow-2xl`}
//         style={{
//           boxShadow: isHovered 
//             ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(59, 130, 246, 0.3)' 
//             : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
//         }}
//       >
//         {/* Animated background circles */}
//         <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white opacity-10 transition-all duration-700 ${isHovered ? 'opacity-20 scale-150' : 'scale-100'}`}></div>
//         <div className={`absolute bottom-0 left-0 -mb-6 -ml-6 h-40 w-40 rounded-full bg-white opacity-5 transition-all duration-1000 ${isHovered ? 'opacity-15 scale-125' : 'scale-100'}`}></div>
        
//         {/* Shimmer effect */}
//         {isHovered && <div className="absolute inset-0 shimmer"></div>}
        
//         {/* Animated gradient overlay */}
//         <div className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-4">
//             <div className={`p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm transition-all duration-300 ${isHovered ? 'scale-110 rotate-6 bg-opacity-30' : ''}`}>
//               <Icon className={`h-6 w-6 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
//             </div>
//             <div className="flex gap-2">
//               <button 
//                 className={`p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
//                 onClick={(e) => { e.stopPropagation(); }}
//               >
//                 <Download className="h-4 w-4" />
//               </button>
//               <button 
//                 className={`p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
//                 onClick={(e) => { e.stopPropagation(); }}
//               >
//                 <Share2 className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//           <h3 className={`text-xl font-bold mb-6 transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>{data.title}</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {data.stats.map((stat, idx) => (
//               <div 
//                 key={idx} 
//                 className={`bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${isHovered ? 'bg-opacity-20 translate-y-[-4px]' : ''}`}
//                 style={{
//                   transitionDelay: `${idx * 50}ms`
//                 }}
//               >
//                 <p className="text-xs opacity-90 mb-2">{stat.label}</p>
//                 <p className={`text-lg font-bold mb-1 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>{stat.value}</p>
//                 {stat.subValue && (
//                   <p className="text-xs opacity-75">{stat.subValue}</p>
//                 )}
//                 {stat.trend !== undefined && stat.trend !== 0 && (
//                   <div className={`flex items-center mt-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
//                     {stat.trend > 0 ? (
//                       <>
//                         <TrendingUp className={`h-3 w-3 mr-1 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
//                         <span className="text-xs">+{stat.trend}%</span>
//                       </>
//                     ) : (
//                       <>
//                         <TrendingDown className={`h-3 w-3 mr-1 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
//                         <span className="text-xs">{stat.trend}%</span>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const Modal = ({ data, onClose }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [activeTab, setActiveTab] = useState('overview');
    
//     useEffect(() => {
//       setIsVisible(true);
//     }, []);
//     if (!data) return null;
//     const Icon = data.icon;

//     return (
//       <div 
//         className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center z-50 p-4 ${isVisible ? 'bg-opacity-50' : 'bg-opacity-0'}`}
//         onClick={onClose}
//       >
//         <div 
//           className={`bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
//           onClick={(e) => e.stopPropagation()}
//           style={{
//             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 60px rgba(59, 130, 246, 0.2)'
//           }}
//         >
//           <div className={`bg-gradient-to-br ${data.color} p-8 text-white relative overflow-hidden`}>
//             {/* Animated background */}
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//             </div>
            
//             <div className="flex items-center justify-between relative z-10">
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm animate-pulse-ring">
//                   <Icon className="h-8 w-8" />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold">{data.title}</h2>
//                   <p className="text-sm opacity-90 mt-1">Batafsil statistika va ma'lumotlar</p>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300">
//                   <Download className="h-5 w-5" />
//                 </button>
//                 <button className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300">
//                   <Share2 className="h-5 w-5" />
//                 </button>
//                 <button
//                   onClick={onClose}
//                   className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 hover:rotate-90"
//                 >
//                   <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="flex gap-2 mt-6 relative z-10">
//               {['overview', 'details', 'analytics'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                     activeTab === tab 
//                       ? 'bg-white bg-opacity-30 backdrop-blur-sm' 
//                       : 'bg-white bg-opacity-10 hover:bg-opacity-20'
//                   }`}
//                 >
//                   {tab === 'overview' && 'Umumiy'}
//                   {tab === 'details' && 'Batafsil'}
//                   {tab === 'analytics' && 'Tahlil'}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
//             {activeTab === 'overview' && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {data.stats.map((stat, idx) => (
//                   <div 
//                     key={idx} 
//                     className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
//                     style={{
//                       animation: `slideIn 0.5s ease-out ${idx * 100}ms both`
//                     }}
//                   >
//                     <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
//                     <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
//                     {stat.subValue && (
//                       <p className="text-sm text-gray-500">{stat.subValue}</p>
//                     )}
//                     {stat.percentage && (
//                       <div className="mt-3">
//                         <div className="flex justify-between text-xs text-gray-600 mb-1">
//                           <span>Budjet / Kontrakt</span>
//                           <span>{stat.percentage}</span>
//                         </div>
//                         <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                           <div 
//                             className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
//                             style={{
//                               width: isVisible ? stat.percentage.split('/')[0].trim() : '0%'
//                             }}
//                           ></div>
//                         </div>
//                       </div>
//                     )}
//                     {stat.trend !== undefined && stat.trend !== 0 && (
//                       <div className="flex items-center mt-3 text-sm">
//                         {stat.trend > 0 ? (
//                           <>
//                             <TrendingUp className="h-4 w-4 mr-1 text-green-500 animate-bounce" />
//                             <span className="text-green-600 font-medium">+{stat.trend}% o'sish</span>
//                           </>
//                         ) : (
//                           <>
//                             <TrendingDown className="h-4 w-4 mr-1 text-red-500 animate-bounce" />
//                             <span className="text-red-600 font-medium">{stat.trend}% kamayish</span>
//                           </>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'details' && data.details && (
//               <div className="space-y-6">
//                 {data.details.byFaculty && (
//                   <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Fakultetlar bo'yicha</h3>
//                     <div className="space-y-3">
//                       {data.details.byFaculty.map((faculty, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4">
//                           <div className="flex justify-between items-center mb-3">
//                             <div>
//                               <p className="font-semibold text-gray-900">{faculty.name}</p>
//                               <p className="text-sm text-gray-600">{faculty.students} talaba</p>
//                             </div>
//                             <p className="text-lg font-bold text-blue-600">{faculty.amount}</p>
//                           </div>
//                           <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                             <div 
//                               className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
//                               style={{width: isVisible ? `${faculty.progress}%` : '0%'}}
//                             ></div>
//                           </div>
//                           <p className="text-xs text-gray-500 mt-1">{faculty.progress}% to'langan</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {data.details.byDegree && (
//                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Ta'lim darajasi bo'yicha</h3>
//                     <div className="space-y-3">
//                       {data.details.byDegree.map((degree, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4">
//                           <div className="flex justify-between items-center mb-3">
//                             <div>
//                               <p className="font-semibold text-gray-900">{degree.name}</p>
//                               <p className="text-sm text-gray-600">{degree.students} talaba</p>
//                             </div>
//                             <p className="text-lg font-bold text-purple-600">{degree.amount}</p>
//                           </div>
//                           <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                             <div 
//                               className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
//                               style={{width: isVisible ? `${degree.progress}%` : '0%'}}
//                             ></div>
//                           </div>
//                           <p className="text-xs text-gray-500 mt-1">{degree.progress}% to'langan</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {data.details.monthly && (
//                   <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4">Oylik statistika</h3>
//                     <div className="space-y-3">
//                       {data.details.monthly.map((month, idx) => (
//                         <div key={idx} className="bg-white rounded-xl p-4">
//                           <div className="flex justify-between items-center mb-2">
//                             <p className="font-semibold text-gray-900">{month.month}</p>
//                             <p className="text-sm text-gray-600">Reja: {month.planned}</p>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
//                               <div 
//                                 className={`h-full ${month.percentage >= 100 ? 'bg-gradient-to-r from-green-500 to-teal-500' : 'bg-gradient-to-r from-orange-500 to-yellow-500'} transition-all duration-1000`}
//                                 style={{width: isVisible ? `${Math.min(month.percentage, 100)}%` : '0%'}}
//                               ></div>
//                             </div>
//                             <p className="text-lg font-bold text-green-600">{month.collected}</p>
//                           </div>
//                           <p className="text-xs text-gray-500 mt-1">{month.percentage}% bajarildi</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === 'analytics' && (
//               <div className="space-y-6">
//                 <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
//                   <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
//                     <BarChart3 className="h-5 w-5 text-indigo-600" />
//                     Tahlil va prognoz
//                   </h3>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-white rounded-xl p-4">
//                       <p className="text-sm text-gray-600 mb-2">O'rtacha o'sish sur'ati</p>
//                       <p className="text-2xl font-bold text-indigo-600">+12.5%</p>
//                       <p className="text-xs text-gray-500 mt-1">Oylik</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-4">
//                       <p className="text-sm text-gray-600 mb-2">To'lov faolligi</p>
//                       <p className="text-2xl font-bold text-green-600">87.3%</p>
//                       <p className="text-xs text-gray-500 mt-1">Hozirgi holat</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-4">
//                       <p className="text-sm text-gray-600 mb-2">Kelgusi oy prognozi</p>
//                       <p className="text-2xl font-bold text-purple-600">+8.7%</p>
//                       <p className="text-xs text-gray-500 mt-1">Kutilmoqda</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-4">
//                       <p className="text-sm text-gray-600 mb-2">Samaradorlik darajasi</p>
//                       <p className="text-2xl font-bold text-orange-600">92.1%</p>
//                       <p className="text-xs text-gray-500 mt-1">Umumiy</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-white border border-gray-200 rounded-2xl p-6">
//                   <h4 className="font-semibold text-gray-900 mb-3">Tavsiyalar</h4>
//                   <div className="space-y-2">
//                     <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
//                       <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">Qarzdorlikni kamaytirish</p>
//                         <p className="text-xs text-gray-600">SMS xabarnoma tizimini faollashtiring</p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
//                       <Zap className="h-5 w-5 text-green-600 mt-0.5" />
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">To'lovlarni tezlashtirish</p>
//                         <p className="text-xs text-gray-600">Online to'lov tizimini yaxshilang</p>
//                       </div>
//                     </div>
//                                         <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
//                       <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">Hisobotlarni avtomatlashtirish</p>
//                         <p className="text-xs text-gray-600">Oylik hisobotlar avtomatik yuborish</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const NotificationPanel = () => {
//     return (
//       <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 notification-enter">
//         <div className="p-4 border-b border-gray-100">
//           <div className="flex justify-between items-center">
//             <h3 className="font-bold text-gray-900">Bildirishnomalar</h3>
//             <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
//               {notifications.filter(n => n.unread).length} yangi
//             </span>
//           </div>
//         </div>
//         <div className="max-h-96 overflow-y-auto">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
//                 notification.unread ? 'bg-blue-50' : ''
//               }`}
//             >
//               <div className="flex gap-3">
//                 <div className={`w-2 h-2 mt-2 rounded-full ${
//                   notification.type === 'success' ? 'bg-green-500' :
//                   notification.type === 'warning' ? 'bg-yellow-500' :
//                   'bg-blue-500'
//                 }`}></div>
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-gray-900">{notification.message}</p>
//                   <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
//                 </div>
//                 {notification.unread && (
//                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="p-3 text-center">
//           <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
//             Barchasini ko'rish
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const LiveStatsBar = () => {
//     return (
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl mb-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Activity className="h-5 w-5 animate-pulse" />
//             <span className="font-semibold">Real vaqt rejimi</span>
//           </div>
//           <div className="flex gap-6">
//             <div className="text-center">
//               <p className="text-2xl font-bold">{liveStats.activeUsers}</p>
//               <p className="text-xs opacity-90">Faol foydalanuvchilar</p>
//             </div>
//             <div className="text-center">
//               <p className="text-2xl font-bold">{liveStats.todayPayments}</p>
//               <p className="text-xs opacity-90">Bugungi to'lovlar</p>
//             </div>
//             <div className="text-center">
//               <p className="text-2xl font-bold">{liveStats.pendingRequests}</p>
//               <p className="text-xs opacity-90">Kutilayotgan so'rovlar</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
//             <span className="text-sm">Online</span>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} transition-colors duration-300`}>
//       <style>{styles}</style>
      
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
//         <div className="px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
//                 <Building className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-gray-900">Universitet Moliya Tizimi</h1>
//                 <p className="text-sm text-gray-600">Boshqaruv paneli</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-4">
//               {/* Search */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Qidirish..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 w-64"
//                 />
//               </div>

//               {/* Theme Toggle */}
//               <button
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//                 className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
//               >
//                 <Settings className="h-5 w-5 text-gray-600" />
//               </button>

//               {/* Notifications */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200 relative"
//                 >
//                   <Bell className="h-5 w-5 text-gray-600" />
//                   {notifications.filter(n => n.unread).length > 0 && (
//                     <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
//                   )}
//                 </button>
//                 {showNotifications && <NotificationPanel />}
//               </div>

//               {/* User Profile */}
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm font-bold">A</span>
//                 </div>
//                 <div className="text-sm">
//                   <p className="font-medium text-gray-900">Adminstrator</p>
//                   <p className="text-gray-600">Super admin</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 py-8">
//         {/* Controls */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-4">
//             <div className="bg-white rounded-2xl p-4 shadow-sm">
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-5 w-5 text-gray-600" />
//                 <select
//                   value={selectedYear}
//                   onChange={(e) => setSelectedYear(e.target.value)}
//                   className="bg-transparent border-0 focus:ring-0 font-medium"
//                 >
//                   <option>2024-2025</option>
//                   <option>2025-2026</option>
//                   <option>2026-2027</option>
//                 </select>
//               </div>
//             </div>
            
//             <div className="flex bg-white rounded-2xl p-1 shadow-sm">
//               {['all', 'payments', 'contracts', 'debts'].map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => setActiveFilter(filter)}
//                   className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
//                     activeFilter === filter 
//                       ? 'bg-blue-500 text-white shadow-sm' 
//                       : 'text-gray-600 hover:text-gray-900'
//                   }`}
//                 >
//                   {filter === 'all' && 'Hammasi'}
//                   {filter === 'payments' && 'To\'lovlar'}
//                   {filter === 'contracts' && 'Shartnomalar'}
//                   {filter === 'debts' && 'Qarzdorliklar'}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <button className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
//               <Download className="h-4 w-4" />
//               <span className="font-medium">Eksport</span>
//             </button>
//             <button className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
//               <FileText className="h-4 w-4" />
//               <span className="font-medium">Hisobot yaratish</span>
//             </button>
//           </div>
//         </div>

//         {/* Live Stats */}
//         <LiveStatsBar />

//         {/* Dashboard Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           {Object.entries(dashboardData).map(([key, data], index) => (
//             <StatCard
//               key={key}
//               data={data}
//               onClick={() => setSelectedCard(data)}
//               style={{
//                 animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
//               }}
//             />
//           ))}
//         </div>

//         {/* Additional Analytics */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-3xl p-6 shadow-sm">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-green-100 rounded-xl">
//                 <TrendingUp className="h-5 w-5 text-green-600" />
//               </div>
//               <h3 className="font-bold text-gray-900">Umumiy statistika</h3>
//             </div>
//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Jami to'lovlar</span>
//                 <span className="font-bold text-gray-900">12,456.8 mlrd</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Faol shartnomalar</span>
//                 <span className="font-bold text-gray-900">829,045 ta</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">O'rtacha to'lov</span>
//                 <span className="font-bold text-gray-900">15.0 mln</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl p-6 shadow-sm">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-blue-100 rounded-xl">
//                 <Users className="h-5 w-5 text-blue-600" />
//               </div>
//               <h3 className="font-bold text-gray-900">Talabalar statistikasi</h3>
//             </div>
//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Jami talabalar</span>
//                 <span className="font-bold text-gray-900">184,939</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Stipendiya oluvchilar</span>
//                 <span className="font-bold text-gray-900">150,114</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Kontrakt asosida</span>
//                 <span className="font-bold text-gray-900">34,825</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl p-6 shadow-sm">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-purple-100 rounded-xl">
//                 <PieChart className="h-5 w-5 text-purple-600" />
//               </div>
//               <h3 className="font-bold text-gray-900">To'lov turlari</h3>
//             </div>
//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Online to'lovlar</span>
//                 <span className="font-bold text-gray-900">67%</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Bank orqali</span>
//                 <span className="font-bold text-gray-900">23%</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Boshqa usullar</span>
//                 <span className="font-bold text-gray-900">10%</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Modal */}
//       <Modal data={selectedCard} onClose={() => setSelectedCard(null)} />
//     </div>
//   );
// };

// export default HemisDashboard;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Animations 2

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Search, Filter, Calendar, FileText, DollarSign, Users, Award, Building, Download, Share2, Bell, Settings, ChevronRight, BarChart3,  Activity, Zap } from 'lucide-react';

// CSS Animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes pulse-ring {
    0% {
      transform: scale(0.95);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      transform: scale(0.95);
      opacity: 1;
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-pulse-ring {
    animation: pulse-ring 2s ease-in-out infinite;
  }
  
  .shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .notification-enter {
    animation: slideDown 0.3s ease-out;
  }
`;

const ModernDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2025-2026');
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: "Yangi to'lov qabul qilindi", time: '5 daqiqa oldin', unread: true },
    { id: 2, type: 'warning', message: 'Qarzdorlik muddati tugaydi', time: '1 soat oldin', unread: true },
    { id: 3, type: 'info', message: 'Oylik hisobot tayyor', time: '2 soat oldin', unread: false }
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [liveStats, setLiveStats] = useState({
    activeUsers: 1245,
    todayPayments: 45,
    pendingRequests: 89
  });

  // Real-time counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        todayPayments: prev.todayPayments + Math.floor(Math.random() * 3),
        pendingRequests: prev.pendingRequests + Math.floor(Math.random() * 5) - 2
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const dashboardData = {
    tolovKontrakt1: {
      title: "To'lov kontrakt",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      stats: [
        { label: "Arizalar soni", value: "698 124 ta", subValue: "Shartnomalar soni: 697 555 ta", trend: 2.5 },
        { label: "Shartnomalar summasi", value: "9 789.8 mlrd so'm", subValue: "To'langan summa: 3 651.1 mlrd", trend: -1.2 },
        { label: "Qarzdorlik soni", value: "911 949 ta", subValue: "10 082.0 mlrd so'm", trend: 5.3 },
        { label: "Haqдorlik soni", value: "434 554 ta", subValue: "2 738.4 mlrd so'm", trend: -0.8 }
      ],
      details: {
        byFaculty: [
          { name: "Matematika", students: 1250, amount: "850.5 mln", progress: 85 },
          { name: "Fizika", students: 980, amount: "720.3 mln", progress: 72 },
          { name: "Kimyo", students: 1100, amount: "790.8 mln", progress: 79 }
        ],
        monthly: [
          { month: "Sentyabr", collected: "450.2 mln", planned: "500 mln", percentage: 90 },
          { month: "Oktyabr", collected: "480.5 mln", planned: "500 mln", percentage: 96 },
          { month: "Noyabr", collected: "520.8 mln", planned: "500 mln", percentage: 104 }
        ]
      }
    },
    kreditModul1: {
      title: "Kredit modul",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      stats: [
        { label: "Arizalar soni", value: "30 789 ta", subValue: "Shartnomalar: 30 426 ta", trend: 3.2 },
        { label: "Shartnomalar summasi", value: "0.0 mlrd so'm", subValue: "To'langan: 0.0 mlrd", trend: 0 },
        { label: "Qarzdorlik soni", value: "94 154 ta", subValue: "190.2 mlrd so'm", trend: 2.1 },
        { label: "Haqдorlik soni", value: "127 552 ta", subValue: "74.1 mlrd so'm", trend: -1.5 }
      ],
      details: {
        byDegree: [
          { name: "Bakalavr", students: 25000, amount: "150.2 mln", progress: 88 },
          { name: "Magistratura", students: 5000, amount: "40.0 mln", progress: 65 }
        ]
      }
    },
    stipendiya: {
      title: "Stipendiya (VM-59)",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      stats: [
        { 
          label: "Stipendiya oluvchilar talaba soni", 
          value: "184 939 nafar",
          budget: "150 114 nafar",
          contract: "34 825 nafar",
          percentage: "19.8% / 81.2%",
          trend: 1.5
        },
        { 
          label: "Hisoblanган summa", 
          value: "449.3 mlrd",
          budget: "405.8 mlrd",
          contract: "43.5 mlrd",
          percentage: "9.7% / 90.3%",
          trend: 2.3
        },
        { 
          label: "To'langan summa", 
          value: "448.4 mlrd",
          budget: "405.4 mlrd",
          contract: "43.1 mlrd",
          percentage: "9.6% / 90.4%",
          trend: 2.1
        }
      ]
    },
    talabalar: {
      title: "Talabalar turar joyi",
      icon: Building,
      color: "from-orange-500 to-orange-600",
      stats: [
        { label: "Arizalar soni", value: "98 382 ta", subValue: "Shartnomalar: 100 364 ta", trend: 4.2 },
        { label: "Shartnomalar summasi", value: "253.3 mlrd so'm", subValue: "To'langan: 90.3 mlrd", trend: 1.8 },
        { label: "Qarzdorlik soni", value: "104 963 ta", subValue: "182.4 mlrd so'm", trend: 3.5 },
        { label: "Haqдorlik soni", value: "24 684 ta", subValue: "8.8 mlrd so'm", trend: -2.1 }
      ]
    }
  };
  const dashboardData1 = {
    stipendiya: {
      title: "Stipendiya (VM-59)",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      stats: [
        { 
          label: "Stipendiya oluvchilar talaba soni", 
          value: "184 939 nafar",
          budget: "150 114 nafar",
          contract: "34 825 nafar",
          percentage: "19.8% / 81.2%",
          trend: 1.5
        },
        { 
          label: "Hisoblanган summa", 
          value: "449.3 mlrd",
          budget: "405.8 mlrd",
          contract: "43.5 mlrd",
          percentage: "9.7% / 90.3%",
          trend: 2.3
        },
        { 
          label: "To'langan summa", 
          value: "448.4 mlrd",
          budget: "405.4 mlrd",
          contract: "43.1 mlrd",
          percentage: "9.6% / 90.4%",
          trend: 2.1
        }
      ]
    },
    talabalar: {
      title: "Talabalar turar joyi",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      stats: [
        { label: "Arizalar soni", value: "98 382 ta", subValue: "Shartnomalar: 100 364 ta", trend: 4.2 },
        { label: "Shartnomalar summasi", value: "253.3 mlrd so'm", subValue: "To'langan: 90.3 mlrd", trend: 1.8 },
        { label: "Qarzdorlik soni", value: "104 963 ta", subValue: "182.4 mlrd so'm", trend: 3.5 },
        { label: "Haqдorlik soni", value: "24 684 ta", subValue: "8.8 mlrd so'm", trend: -2.1 }
      ]
    }
  };

  const StatCard = ({ data, onClick }) => {
    const Icon = data.icon;
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${data.color} p-6 text-white cursor-pointer transform transition-all duration-500 hover:scale-[1.02] group shadow-xl hover:shadow-2xl`}
        style={{
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(59, 130, 246, 0.3)' 
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Animated background circles */}
        <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white opacity-10 transition-all duration-700 ${isHovered ? 'opacity-20 scale-150' : 'scale-100'}`}></div>
        <div className={`absolute bottom-0 left-0 -mb-6 -ml-6 h-40 w-40 rounded-full bg-white opacity-5 transition-all duration-1000 ${isHovered ? 'opacity-15 scale-125' : 'scale-100'}`}></div>
        
        {/* Shimmer effect */}
        {isHovered && <div className="absolute inset-0 shimmer"></div>}
        
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm transition-all duration-300 ${isHovered ? 'scale-110 rotate-6 bg-opacity-30' : ''}`}>
              <Icon className={`h-6 w-6 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
            </div>
            <div className="flex gap-2">
              <button 
                className={`p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Download className="h-4 w-4" />
              </button>
              <button 
                className={`p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <h3 className={`text-xl font-bold mb-6 transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>{data.title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {data.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${isHovered ? 'bg-opacity-20 translate-y-[-4px]' : ''}`}
                style={{
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                <p className="text-xs opacity-90 mb-2">{stat.label}</p>
                <p className={`text-lg font-bold mb-1 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>{stat.value}</p>
                {stat.subValue && (
                  <p className="text-xs opacity-75">{stat.subValue}</p>
                )}
                {stat.trend !== undefined && stat.trend !== 0 && (
                  <div className={`flex items-center mt-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                    {stat.trend > 0 ? (
                      <>
                        <TrendingUp className={`h-3 w-3 mr-1 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
                        <span className="text-xs">+{stat.trend}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className={`h-3 w-3 mr-1 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
                        <span className="text-xs">{stat.trend}%</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Modal = ({ data, onClose }) => {
    const Icon = data.icon;
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    
    useEffect(() => {
      setIsVisible(true);
    }, []);
    if (!data) return null;

    return (
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center z-50 p-4 ${isVisible ? 'bg-opacity-50' : 'bg-opacity-0'}`}
        onClick={onClose}
      >
        <div 
          className={`bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 60px rgba(59, 130, 246, 0.2)'
          }}
        >
          <div className={`bg-gradient-to-br ${data.color} p-8 text-white relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm animate-pulse-ring">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{data.title}</h2>
                  <p className="text-sm opacity-90 mt-1">Batafsil statistika va ma'lumotlar</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300">
                  <Download className="h-5 w-5" />
                </button>
                <button className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300">
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 hover:rotate-90"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mt-6 relative z-10">
              {['overview', 'details', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-white bg-opacity-30 backdrop-blur-sm' 
                      : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                  }`}
                >
                  {tab === 'overview' && 'Umumiy'}
                  {tab === 'details' && 'Batafsil'}
                  {tab === 'analytics' && 'Tahlil'}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    style={{
                      animation: `slideIn 0.5s ease-out ${idx * 100}ms both`
                    }}
                  >
                    <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    {stat.subValue && (
                      <p className="text-sm text-gray-500">{stat.subValue}</p>
                    )}
                    {stat.percentage && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Budjet / Kontrakt</span>
                          <span>{stat.percentage}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? stat.percentage.split('/')[0].trim() : '0%'
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                    {stat.trend !== undefined && stat.trend !== 0 && (
                      <div className="flex items-center mt-3 text-sm">
                        {stat.trend > 0 ? (
                          <>
                            <TrendingUp className="h-4 w-4 mr-1 text-green-500 animate-bounce" />
                            <span className="text-green-600 font-medium">+{stat.trend}% o'sish</span>
                          </>
                        ) : (
                          <>
                            <TrendingDown className="h-4 w-4 mr-1 text-red-500 animate-bounce" />
                            <span className="text-red-600 font-medium">{stat.trend}% kamayish</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'details' && data.details && (
              <div className="space-y-6">
                {data.details.byFaculty && (
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Fakultetlar bo'yicha</h3>
                    <div className="space-y-3">
                      {data.details.byFaculty.map((faculty, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4">
                          <div className="flex justify-between items-center mb-3">
                            <div>
                              <p className="font-semibold text-gray-900">{faculty.name}</p>
                              <p className="text-sm text-gray-600">{faculty.students} talaba</p>
                            </div>
                            <p className="text-lg font-bold text-blue-600">{faculty.amount}</p>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                              style={{width: isVisible ? `${faculty.progress}%` : '0%'}}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{faculty.progress}% to'langan</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {data.details.byDegree && (
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Ta'lim darajasi bo'yicha</h3>
                    <div className="space-y-3">
                      {data.details.byDegree.map((degree, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4">
                          <div className="flex justify-between items-center mb-3">
                            <div>
                              <p className="font-semibold text-gray-900">{degree.name}</p>
                              <p className="text-sm text-gray-600">{degree.students} talaba</p>
                            </div>
                            <p className="text-lg font-bold text-purple-600">{degree.amount}</p>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                              style={{width: isVisible ? `${degree.progress}%` : '0%'}}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{degree.progress}% to'langan</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {data.details.monthly && (
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Oylik statistika</h3>
                    <div className="space-y-3">
                      {data.details.monthly.map((month, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold text-gray-900">{month.month}</p>
                            <p className="text-sm text-gray-600">Reja: {month.planned}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${month.percentage >= 100 ? 'bg-gradient-to-r from-green-500 to-teal-500' : 'bg-gradient-to-r from-orange-500 to-yellow-500'} transition-all duration-1000`}
                                style={{width: isVisible ? `${Math.min(month.percentage, 100)}%` : '0%'}}
                              ></div>
                            </div>
                            <p className="text-lg font-bold text-green-600">{month.collected}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{month.percentage}% bajarildi</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-indigo-600" />
                    Tahlil va prognoz
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">O'rtacha o'sish sur'ati</p>
                      <p className="text-2xl font-bold text-indigo-600">+12.5%</p>
                      <p className="text-xs text-gray-500 mt-1">Oylik</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">To'lov faolligi</p>
                      <p className="text-2xl font-bold text-green-600">87.3%</p>
                      <p className="text-xs text-gray-500 mt-1">Hozirgi holat</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">Kelgusi oy prognozi</p>
                      <p className="text-2xl font-bold text-purple-600">+8.7%</p>
                      <p className="text-xs text-gray-500 mt-1">Kutilmoqda</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">Samaradorlik darajasi</p>
                      <p className="text-2xl font-bold text-orange-600">92.1%</p>
                      <p className="text-xs text-gray-500 mt-1">Umumiy</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tavsiyalar</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Qarzdorlikni kamaytirish</p>
                        <p className="text-xs text-gray-600">SMS xabarnoma tizimini faollashtiring</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <Zap className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">To'lovlarni tezlashtirish</p>
                        <p className="text-xs text-gray-600">Online to'lov tizimini yaxshilang</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Samaradorlikni oshirish</p>
                        <p className="text-xs text-gray-600">Avtomatlashtirish tizimlarini joriy qiling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{styles}</style>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'} transition-colors duration-500`}>
        {/* Header with enhanced design */}
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl sticky top-0 z-40 backdrop-blur-lg bg-opacity-90 transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Moliya Dashboard
                  </h1>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {selectedYear} o'quv yili
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Live Stats */}
                <div className="hidden md:flex items-center gap-4">
                  <div className={`px-4 py-2 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} flex items-center gap-2`}>
                    <Users className={`h-4 w-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} animate-pulse`} />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {liveStats.activeUsers.toLocaleString()}
                    </span>
                  </div>
                  <div className={`px-4 py-2 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} flex items-center gap-2`}>
                    <DollarSign className={`h-4 w-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'} animate-pulse`} />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {liveStats.todayPayments}
                    </span>
                  </div>
                </div>

                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 relative`}
                  >
                    <Bell className={`h-5 w-5 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} />
                    {notifications.some(n => n.unread) && (
                      <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </button>

                  {showNotifications && (
                    <div className={`absolute right-0 mt-2 w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden notification-enter`}>
                      <div className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-500 to-purple-500'} text-white`}>
                        <h3 className="font-bold">Bildirishnomalar</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map(notif => (
                          <div
                            key={notif.id}
                            className={`p-4 border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} transition-colors cursor-pointer ${notif.unread ? (isDarkMode ? 'bg-gray-750' : 'bg-blue-50') : ''}`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg ${
                                notif.type === 'success' ? 'bg-green-100 text-green-600' :
                                notif.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                                'bg-blue-100 text-blue-600'
                              }`}>
                                <Bell className="h-4 w-4" />
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                  {notif.message}
                                </p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                                  {notif.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Settings */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}
                >
                  <Settings className={`h-5 w-5 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} />
                </button>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Qidirish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 ${isDarkMode ? 'bg-gray-700 text-gray-200 placeholder-gray-400' : 'bg-white'} rounded-xl border-2 border-transparent focus:border-blue-500 outline-none transition-all duration-300`}
                />
              </div>
              <div className="flex gap-2">
                <button className={`px-4 py-3 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} rounded-xl flex items-center gap-2 transition-all duration-300`}>
                  <Filter className="h-5 w-5" />
                  <span className="hidden sm:inline">Filter</span>
                </button>
                <button className={`px-4 py-3 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} rounded-xl flex items-center gap-2 transition-all duration-300`}>
                  <Calendar className="h-5 w-5" />
                  <span className="hidden sm:inline">{selectedYear}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Jami talabalar</p>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-2`}>
                    {liveStats.activeUsers.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Bugungi to'lovlar</p>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-2`}>
                    {liveStats.todayPayments}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kutilayotgan</p>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-2`}>
                    {liveStats.pendingRequests}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                  <Activity className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kutilayotgan</p>
                  <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-2`}>
                    {liveStats.pendingRequests}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                  <Activity className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* Main Dashboard Cards */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Shartnomalar dinamikasi</h2>
              <p className="text-gray-600 text-sm mt-1">Tasdiqlangan va bekor qilingan shartnomalar soni</p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Tasdiqlangan shartnomalar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm text-gray-600">Bekor qilingan shartnomalar</span>
              </div>
            </div>
          </div>

          <div className="relative h-80">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
              <span>80000</span>
              <span>60000</span>
              <span>40000</span>
              <span>20000</span>
              <span>0</span>
              <span>-20000</span>
            </div>

            {/* Chart area */}
            <div className="ml-12 h-full flex items-end justify-around pb-8">
              {[
                { month: 'Yanvar', approved: 68000, cancelled: 2100 },
                { month: 'Fevral', approved: 52000, cancelled: 1800 },
                { month: 'Mart', approved: 45000, cancelled: 1500 },
                { month: 'Aprel', approved: 58000, cancelled: 2300 },
                { month: 'May', approved: 56000, cancelled: 1900 },
                { month: 'Iyun', approved: 72000, cancelled: 2500 },
                { month: 'Iyul', approved: 48000, cancelled: 1700 }
              ].map((data, idx) => {
                const maxHeight = 280;
                const maxValue = 80000;
                const approvedHeight = (data.approved / maxValue) * maxHeight;
                const cancelledHeight = (data.cancelled / maxValue) * maxHeight;

                return (
                  <div key={idx} className="flex flex-col items-center gap-2 group">
                    {/* Approved bar */}
                    <div 
                      className="w-12 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500 relative group/bar"
                      style={{ 
                        height: `${approvedHeight}px`,
                        animation: `slideIn 0.8s ease-out ${idx * 100}ms both`
                      }}
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-3 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {data.approved.toLocaleString()} ta
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>

                    {/* Cancelled bar (negative) */}
                    <div 
                      className="w-12 bg-gradient-to-b from-orange-400 to-orange-500 rounded-b-lg transition-all duration-500 hover:from-orange-500 hover:to-orange-600 relative group/bar"
                      style={{ 
                        height: `${cancelledHeight}px`,
                        animation: `slideIn 0.8s ease-out ${idx * 100 + 50}ms both`
                      }}
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-3 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {data.cancelled.toLocaleString()} ta
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                      </div>
                    </div>

                    {/* Month label */}
                    <span className="text-xs text-gray-600 font-medium mt-2 group-hover:text-blue-600 transition-colors">
                      {data.month}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Zero line */}
            <div className="absolute left-12 right-0" style={{ top: 'calc(50% - 16px)' }}>
              <div className="h-px bg-gray-300"></div>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Jami tasdiqlangan</p>
              <p className="text-2xl font-bold text-blue-600">399 000</p>
              <p className="text-xs text-green-600 mt-1 flex items-center justify-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8.5%
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Jami bekor qilingan</p>
              <p className="text-2xl font-bold text-orange-600">13 800</p>
              <p className="text-xs text-red-600 mt-1 flex items-center justify-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +3.2%
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Bekor qilish foizi</p>
              <p className="text-2xl font-bold text-gray-900">3.46%</p>
              <p className="text-xs text-gray-500 mt-1">O'rtacha</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Eng faol oy</p>
              <p className="text-2xl font-bold text-purple-600">Iyun</p>
              <p className="text-xs text-gray-500 mt-1">72 000 ta</p>
            </div>
          </div>
        </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Asosiy modullar</h2>
                <p className="text-blue-100 text-sm mt-1">To'lov kontrakt, Kredit modul va Turar joy</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all">
                  <Download className="h-5 w-5 text-white" />
                </button>
                <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all">
                  <Settings className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 text-sm font-semibold text-gray-700">Modul nomi</th>
                  <th className="text-right p-4 text-sm font-semibold text-gray-700">Arizalar</th>
                  <th className="text-right p-4 text-sm font-semibold text-gray-700">Shartnomalar</th>
                  <th className="text-right p-4 text-sm font-semibold text-gray-700">Summa</th>
                  <th className="text-right p-4 text-sm font-semibold text-gray-700">Qarzdorlik</th>
                  <th className="text-right p-4 text-sm font-semibold text-gray-700">Trend</th>
                  <th className="text-right p-4 text-sm font-semibold text-gray-700">Amallar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['tolovKontrakt', dashboardData.tolovKontrakt1],
                  ['kreditModul', dashboardData.kreditModul1],
                  ['talabalar', dashboardData.talabalar]
                ].map(([key, data], idx) => {
                  const Icon = data.icon;
                  const avgTrend = data.stats.reduce((sum, stat) => sum + (stat.trend || 0), 0) / data.stats.length;
                  
                  return (
                    <tr 
                      key={key}
                      className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${idx * 100}ms both`
                      }}
                      onClick={() => setSelectedCard(data)}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 bg-gradient-to-br ${data.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {data.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {data.stats.length} ta ko'rsatkich
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <p className="font-bold text-gray-900">{data.stats[0]?.value.split(' ')[0]}</p>
                        <p className="text-xs text-gray-500">{data.stats[0]?.value.split(' ')[1]}</p>
                      </td>
                      <td className="p-4 text-right">
                        <p className="font-bold text-gray-900">
                          {data.stats[0]?.subValue?.match(/\d+\s*\d*\s*\d*/)?.[0] || '-'}
                        </p>
                        <p className="text-xs text-gray-500">shartnoma</p>
                      </td>
                      <td className="p-4 text-right">
                        <p className="font-bold text-purple-600">
                          {data.stats[1]?.value.includes('mlrd') ? data.stats[1]?.value : data.stats[0]?.value}
                        </p>
                        <p className="text-xs text-gray-500">umumiy</p>
                      </td>
                      <td className="p-4 text-right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full">
                          <span className="font-bold text-orange-700">
                            {data.stats[2]?.value.split(' ')[0] || '-'}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
                          avgTrend > 0 ? 'bg-green-100' : avgTrend < 0 ? 'bg-red-100' : 'bg-gray-100'
                        }`}>
                          {avgTrend > 0 ? (
                            <>
                              <TrendingUp className="h-4 w-4 text-green-600" />
                              <span className="font-bold text-green-700">+{avgTrend.toFixed(1)}%</span>
                            </>
                          ) : avgTrend < 0 ? (
                            <>
                              <TrendingDown className="h-4 w-4 text-red-600" />
                              <span className="font-bold text-red-700">{avgTrend.toFixed(1)}%</span>
                            </>
                          ) : (
                            <span className="font-bold text-gray-700">0%</span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button 
                            className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all"
                            onClick={(e) => { e.stopPropagation(); }}
                          >
                            <BarChart3 className="h-4 w-4 text-blue-600" />
                          </button>
                          <button 
                            className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-all"
                            onClick={(e) => { e.stopPropagation(); }}
                          >
                            <Download className="h-4 w-4 text-green-600" />
                          </button>
                          <button 
                            className="p-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition-all"
                            onClick={(e) => { e.stopPropagation(); setSelectedCard(data); }}
                          >
                            <ChevronRight className="h-4 w-4 text-purple-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-600">
                  Jami <span className="font-bold text-gray-900">3</span> ta modul
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-all">
                  Barchasini ko'rish →
                </button>
              </div>
            </div>
          </div>
          </div>
        

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(dashboardData1).map(([key, data]) => (
              <StatCard
                key={key}
                data={data}
                onClick={() => setSelectedCard(data)}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Income Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Top 5 - Daromad</h3>
                    <p className="text-green-100 text-xs">Eng ko'p daromadli universitetlar</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all text-white text-xs font-medium">
                  Export
                </button>
              </div>
            </div>
            
            <div className="p-5">
              <div className="space-y-3">
                {[
                  { name: "O'zbekiston Milliy Universiteti", amount: 2458.3, rank: 1 },
                  { name: "Toshkent Davlat Iqtisodiyot Universiteti", amount: 2187.6, rank: 2 },
                  { name: "Samarqand Davlat Universiteti", amount: 1956.8, rank: 3 },
                  { name: "Buxoro Davlat Universiteti", amount: 1743.2, rank: 4 },
                  { name: "Farg'ona Davlat Universiteti", amount: 1621.5, rank: 5 }
                ].map((uni, idx) => {
                  const maxAmount = 2458.3;
                  const barWidth = (uni.amount / maxAmount) * 100;
                  
                  return (
                    <div 
                      key={idx}
                      className="group"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${idx * 80}ms both`
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 flex-shrink-0 ${
                          uni.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-md' :
                          uni.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white shadow-sm' :
                          uni.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-sm' :
                          'bg-gradient-to-br from-green-100 to-green-200 text-green-700'
                        } group-hover:scale-110 group-hover:rotate-12`}>
                          {uni.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900 truncate group-hover:text-green-600 transition-colors">
                            {uni.name}
                          </p>
                        </div>
                        <p className="text-sm font-bold text-green-600 flex-shrink-0">{uni.amount.toFixed(1)}</p>
                      </div>
                      
                      <div className="relative h-7 bg-gray-100 rounded-lg overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg transition-all duration-1000 ease-out flex items-center justify-end pr-2 group-hover:from-green-600 group-hover:to-emerald-600"
                          style={{ width: `${barWidth}%` }}
                        >
                          <span className="text-white font-bold text-[10px]">{barWidth.toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center bg-green-50 rounded-lg p-2">
                    <p className="text-[10px] text-gray-600">Jami</p>
                    <p className="text-lg font-bold text-green-600">9 967.4</p>
                    <p className="text-[10px] text-gray-500">mln so'm</p>
                  </div>
                  <div className="text-center bg-emerald-50 rounded-lg p-2">
                    <p className="text-[10px] text-gray-600">O'rtacha</p>
                    <p className="text-lg font-bold text-emerald-600">1 993.5</p>
                    <p className="text-[10px] text-gray-500">mln so'm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debt Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-rose-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Top 5 - Qarzdorlik</h3>
                    <p className="text-red-100 text-xs">Eng ko'p qarzdor universitetlar</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all text-white text-xs font-medium">
                  Export
                </button>
              </div>
            </div>
            
            <div className="p-5">
              <div className="space-y-3">
                {[
                  { name: "Andijon Davlat Universiteti", amount: 856.4, rank: 1 },
                  { name: "Namangan Davlat Universiteti", amount: 742.8, rank: 2 },
                  { name: "Qo'qon Davlat Pedagogika Instituti", amount: 698.5, rank: 3 },
                  { name: "Termiz Davlat Universiteti", amount: 645.2, rank: 4 },
                  { name: "Urganch Davlat Universiteti", amount: 587.3, rank: 5 }
                ].map((uni, idx) => {
                  const maxAmount = 856.4;
                  const barWidth = (uni.amount / maxAmount) * 100;
                  
                  return (
                    <div 
                      key={idx}
                      className="group"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${idx * 80}ms both`
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 flex-shrink-0 ${
                          uni.rank === 1 ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md' :
                          uni.rank === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-sm' :
                          uni.rank === 3 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-sm' :
                          'bg-gradient-to-br from-red-100 to-red-200 text-red-700'
                        } group-hover:scale-110 group-hover:rotate-12`}>
                          {uni.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900 truncate group-hover:text-red-600 transition-colors">
                            {uni.name}
                          </p>
                        </div>
                        <p className="text-sm font-bold text-red-600 flex-shrink-0">{uni.amount.toFixed(1)}</p>
                      </div>
                      
                      <div className="relative h-7 bg-gray-100 rounded-lg overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg transition-all duration-1000 ease-out flex items-center justify-end pr-2 group-hover:from-red-600 group-hover:to-rose-600"
                          style={{ width: `${barWidth}%` }}
                        >
                          <span className="text-white font-bold text-[10px]">{barWidth.toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center bg-red-50 rounded-lg p-2">
                    <p className="text-[10px] text-gray-600">Jami</p>
                    <p className="text-lg font-bold text-red-600">3 530.2</p>
                    <p className="text-[10px] text-gray-500">mln so'm</p>
                  </div>
                  <div className="text-center bg-rose-50 rounded-lg p-2">
                    <p className="text-[10px] text-gray-600">O'rtacha</p>
                    <p className="text-lg font-bold text-rose-600">706.0</p>
                    <p className="text-[10px] text-gray-500">mln so'm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>

        {/* Modal */}
        {selectedCard && (
          <Modal data={selectedCard} onClose={() => setSelectedCard(null)} />
        )}
      </div>
    </>
  );
};

export default ModernDashboard;
























// const UzbekistanMap = () => {
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [hoveredRegion, setHoveredRegion] = useState(null);

//   // Viloyatlar ma'lumotlari
//   const regionsData = {
//     toshkent_city: {
//       name: "Toshkent shahri",
//       color: "#FFB84D",
//       stats: [
//         { label: "Jami talabalar", value: "145 234 ta", trend: 3.5, icon: Users },
//         { label: "To'langan summa", value: "2 456.8 mlrd so'm", trend: 5.2, icon: DollarSign },
//         { label: "Qarzdorlik", value: "234.5 mlrd so'm", trend: -2.1, icon: FileText },
//         { label: "To'lov foizi", value: "91.2%", trend: 1.8, icon: Award }
//       ],
//       otmCount: 15,
//       studentCount: 145234
//     },
//     toshkent: {
//       name: "Toshkent viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "78 456 ta", trend: 2.3, icon: Users },
//         { label: "To'langan summa", value: "1 234.5 mlrd so'm", trend: 4.1, icon: DollarSign },
//         { label: "Qarzdorlik", value: "145.2 mlrd so'm", trend: -1.5, icon: FileText },
//         { label: "To'lov foizi", value: "89.5%", trend: 2.1, icon: Award }
//       ],
//       otmCount: 12,
//       studentCount: 78456
//     },
//     samarqand: {
//       name: "Samarqand viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "95 321 ta", trend: 4.2, icon: Users },
//         { label: "To'langan summa", value: "1 567.3 mlrd so'm", trend: 3.8, icon: DollarSign },
//         { label: "Qarzdorlik", value: "178.9 mlrd so'm", trend: -2.3, icon: FileText },
//         { label: "To'lov foizi", value: "89.8%", trend: 1.5, icon: Award }
//       ],
//       otmCount: 14,
//       studentCount: 95321
//     },
//     buxoro: {
//       name: "Buxoro viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "52 187 ta", trend: 2.8, icon: Users },
//         { label: "To'langan summa", value: "876.4 mlrd so'm", trend: 3.2, icon: DollarSign },
//         { label: "Qarzdorlik", value: "98.5 mlrd so'm", trend: -1.8, icon: FileText },
//         { label: "To'lov foizi", value: "89.9%", trend: 2.3, icon: Award }
//       ],
//       otmCount: 8,
//       studentCount: 52187
//     },
//     navoiy: {
//       name: "Navoiy viloyati",
//       color: "#FFB84D",
//       stats: [
//         { label: "Jami talabalar", value: "34 892 ta", trend: 3.1, icon: Users },
//         { label: "To'langan summa", value: "567.8 mlrd so'm", trend: 4.5, icon: DollarSign },
//         { label: "Qarzdorlik", value: "67.3 mlrd so'm", trend: -2.5, icon: FileText },
//         { label: "To'lov foizi", value: "89.4%", trend: 1.9, icon: Award }
//       ],
//       otmCount: 3,
//       studentCount: 34892
//     },
//     qashqadaryo: {
//       name: "Qashqadaryo viloyati",
//       color: "#FFB84D",
//       stats: [
//         { label: "Jami talabalar", value: "87 654 ta", trend: 3.7, icon: Users },
//         { label: "To'langan summa", value: "1 432.1 mlrd so'm", trend: 4.3, icon: DollarSign },
//         { label: "Qarzdorlik", value: "165.4 mlrd so'm", trend: -1.9, icon: FileText },
//         { label: "To'lov foizi", value: "89.6%", trend: 2.2, icon: Award }
//       ],
//       otmCount: 11,
//       studentCount: 87654
//     },
//     surxondaryo: {
//       name: "Surxondaryo viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "48 765 ta", trend: 2.9, icon: Users },
//         { label: "To'langan summa", value: "789.6 mlrd so'm", trend: 3.6, icon: DollarSign },
//         { label: "Qarzdorlik", value: "87.2 mlrd so'm", trend: -2.1, icon: FileText },
//         { label: "To'lov foizi", value: "90.1%", trend: 1.7, icon: Award }
//       ],
//       otmCount: 7,
//       studentCount: 48765
//     },
//     fargona: {
//       name: "Farg'ona viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "112 345 ta", trend: 4.8, icon: Users },
//         { label: "To'langan summa", value: "1 876.9 mlrd so'm", trend: 5.1, icon: DollarSign },
//         { label: "Qarzdorlik", value: "198.7 mlrd so'm", trend: -1.6, icon: FileText },
//         { label: "To'lov foizi", value: "90.4%", trend: 2.4, icon: Award }
//       ],
//       otmCount: 13,
//       studentCount: 112345
//     },
//     andijon: {
//       name: "Andijon viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "98 234 ta", trend: 3.9, icon: Users },
//         { label: "To'langan summa", value: "1 645.3 mlrd so'm", trend: 4.7, icon: DollarSign },
//         { label: "Qarzdorlik", value: "176.8 mlrd so'm", trend: -2.2, icon: FileText },
//         { label: "To'lov foizi", value: "90.3%", trend: 2.1, icon: Award }
//       ],
//       otmCount: 12,
//       studentCount: 98234
//     },
//     namangan: {
//       name: "Namangan viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "89 456 ta", trend: 3.4, icon: Users },
//         { label: "To'langan summa", value: "1 498.7 mlrd so'm", trend: 4.2, icon: DollarSign },
//         { label: "Qarzdorlik", value: "167.3 mlrd so'm", trend: -1.8, icon: FileText },
//         { label: "To'lov foizi", value: "89.9%", trend: 2.3, icon: Award }
//       ],
//       otmCount: 10,
//       studentCount: 89456
//     },
//     jizzax: {
//       name: "Jizzax viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "43 678 ta", trend: 2.7, icon: Users },
//         { label: "To'langan summa", value: "723.4 mlrd so'm", trend: 3.5, icon: DollarSign },
//         { label: "Qarzdorlik", value: "81.2 mlrd so'm", trend: -2.4, icon: FileText },
//         { label: "To'lov foizi", value: "89.9%", trend: 1.9, icon: Award }
//       ],
//       otmCount: 6,
//       studentCount: 43678
//     },
//     sirdaryo: {
//       name: "Sirdaryo viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "28 934 ta", trend: 2.1, icon: Users },
//         { label: "To'langan summa", value: "487.5 mlrd so'm", trend: 3.1, icon: DollarSign },
//         { label: "Qarzdorlik", value: "54.3 mlrd so'm", trend: -2.7, icon: FileText },
//         { label: "To'lov foizi", value: "90.0%", trend: 2.0, icon: Award }
//       ],
//       otmCount: 4,
//       studentCount: 28934
//     },
//     xorazm: {
//       name: "Xorazm viloyati",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "56 789 ta", trend: 3.3, icon: Users },
//         { label: "To'langan summa", value: "945.6 mlrd so'm", trend: 4.0, icon: DollarSign },
//         { label: "Qarzdorlik", value: "105.4 mlrd so'm", trend: -1.7, icon: FileText },
//         { label: "To'lov foizi", value: "90.0%", trend: 2.2, icon: Award }
//       ],
//       otmCount: 9,
//       studentCount: 56789
//     },
//     qoraqalpogiston: {
//       name: "Qoraqalpog'iston Respublikasi",
//       color: "#90EE90",
//       stats: [
//         { label: "Jami talabalar", value: "45 123 ta", trend: 2.5, icon: Users },
//         { label: "To'langan summa", value: "756.8 mlrd so'm", trend: 3.4, icon: DollarSign },
//         { label: "Qarzdorlik", value: "89.6 mlrd so'm", trend: -2.0, icon: FileText },
//         { label: "To'lov foizi", value: "89.4%", trend: 1.8, icon: Award }
//       ],
//       otmCount: 7,
//       studentCount: 45123
//     }
//   };

//   const Modal = ({ region, onClose }) => {
//     const data = regionsData[region];
//     const [isVisible, setIsVisible] = useState(false);
    
//     React.useEffect(() => {
//       setIsVisible(true);
//     }, []);
    
//     if (!region) return null;
//     return (
//       <div 
//         className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center z-50 p-4 ${isVisible ? 'bg-opacity-50' : 'bg-opacity-0'}`}
//         onClick={onClose}
//       >
//         <div 
//           className={`bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Header */}
//           <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white relative overflow-hidden">
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//             </div>
            
//             <div className="flex items-center justify-between relative z-10">
//               <div>
//                 <h2 className="text-3xl font-bold">{data.name}</h2>
//                 <p className="text-sm opacity-90 mt-2">
//                   OTMlar: {data.otmCount} ta • Talabalar: {data.studentCount.toLocaleString()} nafar
//                 </p>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="p-3 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 hover:rotate-90"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {data.stats.map((stat, idx) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div 
//                     key={idx} 
//                     className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
//                     style={{
//                       animation: `slideIn 0.5s ease-out ${idx * 100}ms both`
//                     }}
//                   >
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
//                         <Icon className="h-5 w-5 text-white" />
//                       </div>
//                       <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
//                     </div>
//                     <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
//                     {stat.trend !== undefined && (
//                       <div className="flex items-center text-sm">
//                         {stat.trend > 0 ? (
//                           <>
//                             <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
//                             <span className="text-green-600 font-medium">+{stat.trend}% o'sish</span>
//                           </>
//                         ) : (
//                           <>
//                             <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
//                             <span className="text-red-600 font-medium">{stat.trend}% kamayish</span>
//                           </>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Additional Info */}
//             <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
//               <h3 className="font-bold text-gray-900 mb-4">Qo'shimcha ma'lumotlar</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white rounded-xl p-4">
//                   <p className="text-sm text-gray-600">OTMlar soni</p>
//                   <p className="text-2xl font-bold text-blue-600">{data.otmCount} ta</p>
//                 </div>
//                 <div className="bg-white rounded-xl p-4">
//                   <p className="text-sm text-gray-600">Jami talabalar</p>
//                   <p className="text-2xl font-bold text-purple-600">{data.studentCount.toLocaleString()}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full bg-white rounded-3xl p-8 shadow-xl">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">O'zbekiston viloyatlari bo'yicha</h2>
//         <p className="text-gray-600">Viloyatni bosing, batafsil ma'lumot olish uchun</p>
//       </div>

//       {/* SVG Map */}
//       <div className="relative">
//         <svg viewBox="-100 0 1000 600" className="w-full h-auto">
//           {/* Qoraqalpog'iston */}
//           <path
//             d="m 157.43007,23.739722 0.35,7.72 -2.01,5.84 -3.22,5.44 -2.82,6.04 -1.01,4.23 -2.21,0 -1.81,0.2 -1.41,1.41 -0.6,2.62 0.81,4.63 1.21,2.62 0.81,2.82 -2.42,0.81 -3.02,-1.61 -2.42,1.41 -1.81,4.03 -2.42,4.23 -2.21,2.42 -3.02,-1.81 -0.4,-4.03 -0.2,-6.24 -1.21,-1.61 0,-3.45 1.61,0 1.21,2.82 1.81,1.01 2.82,-1.01 1.41,-3.02 0,-4.03 1.01,-3.22 -3.03,-1.81 -3.22,-2.62 -0.6,-2.42 1.81,-2.01 1.81,-0.4 2.01,1.01 0.2,-8.25 2.82,-0.4 -0.2,-3.22 -2.42,-0.6 -3.82,-0.6 -1.41,1.01 -1.61,2.01 -2.21,1.01 1.41,-2.21 2.82,-5.23 1.81,-2.62 -1.01,-3.02 -2.01,-2.82 0.6,-3.82 1.01,-3.42 3.4,-6.4299998 0,0 23.01,16.5899998 z m -38.32,-23.3999998 -0.18,3.55 -1.61,3.22 -0.2,4.8299998 -3.82,3.42 -2.01,3.22 -0.2,5.84 -2.62,2.62 -1.21,5.64 -3.02,4.83 -2.01,5.43 -0.4,4.63 0.2,6.04 1.21,2.82 2.01,3.62 -0.4,2.62 -3.02,8.45 0.4,5.23 2.21,5.23 2.21,2.62 3.02,1.41 4.03,1.61 3.02,0.2 2.62,2.01 2.01,0.6 1.01,-2.01 1.61,-0.4 2.42,0.2 1.81,-0.81 5.03,-1.61 2.62,-1.21 1.61,1.01 0.81,3.62 -1.81,2.21 -2.83,1.83 1.01,3.62 2.21,1.01 1.81,1.81 5.23,0.809998 2.62,2.21 3.02,0.4 6.04,0.6 4.43,0.2 3.62,-2.21 2.42,1.41 1.21,1.01 3.82,-0.81 2.01,-0.6 3.62,1.21 5.03,-1.01 4.83,-1.61 7.05,-2.819998 0.6,-2.62 3.42,0 1.21,-1.81 -1,-1.8 1.61,-3.42 6.24,-5.03 4.63,-4.63 2.82,-5.03 0.81,-3.82 -1.01,-1.41 -1.61,-1.41 -1.01,-2.01 3.88,-0.35 0,0 21.68,15.65 2.21,7.05 6.07,6.13 6.39,7.709998 0.29,0.64 0.64,0.59 2.53,3.01 5.7,7.01 16.83,20.9 1.63,1.56 0.55,0.05 0,0 5.85,10.5 15.43,4.18 -27.66,52.2 -1.26,15.77 6.74,12.15 -12.85,7.1 20.92,28.67 0,0 13.79,19.18 -10.94,5.06 0,0 -2.55,1.21 -0.65,-0.19 -0.27,-0.22 -4.56,-7.41 -1.5,-2.77 -8,-8.81 -3.08,-1.91 -3.52,-1.86 -8.95,-2.06 -3.04,-0.02 -0.62,0.2 -1.39,0.77 -0.78,0.89 -1.17,2.3 -0.51,1.87 -0.72,0.77 -1.49,0 -2.25,-1.44 -0.25,-1.16 -0.37,-0.87 -2.02,-2.27 -0.71,-0.61 -0.74,-0.29 -2.16,-0.36 -1.41,-0.58 -5.96,-4.54 -8.23,-7.31 -1.57,-1.5 -3.35,-3.9 -5.17,-4.83 -0.69,-0.31 -0.67,-0.65 -0.37,-0.46 -3.08,-5.39 -0.41,-2.46 -0.04,-2.63 -0.17,-0.58 -0.39,-0.48 -5.28,-1.12 -4.26,1.39 -1.9,0.84 -2.67,5.23 0,0 -0.22,-0.53 -0.5,-0.6 -0.55,-0.39 -2.42,-0.83 -0.81,-0.51 -1.78,-2.19 -0.17,0.04 -0.33,-0.35 -0.88,0.2 -1.26,-1.24 -0.19,-0.81 0.19,-0.34 0.56,-0.45 2.82,-0.2 0.35,-0.45 -0.2,-0.8 -0.51,-0.73 -0.41,-0.97 -0.22,-0.94 -0.16,-2.27 -1.26,-1.64 -0.03,-0.67 0.18,-0.48 1.09,-0.58 0.42,0.19 0.85,0.1 0.46,-0.11 0.45,-0.43 0.25,-0.39 0.02,-0.64 -0.49,-1.19 -0.48,-0.56 -0.99,-0.6 -1.75,-0.24 -0.58,-0.24 -0.82,-0.71 -0.83,-1.12 -0.68,-1.36 -0.63,-0.56 -1.97,-0.64 -1.04,-0.84 -0.31,0.55 -0.46,1.43 -0.36,0.35 -0.5,0.01 -1.8,-0.55 -0.68,-0.35 -0.46,0.02 -0.54,-0.21 -1.97,-0.04 -1.57,0.37 -1.51,0 -1.34,0.16 -7.41,0.1 -0.57,-0.45 -0.73,-1.4 -0.65,-0.3 -0.88,-1.06 -4.04,-4.03 -0.04,-0.4 0.46,-1.24 -0.11,-1.23 -3.41,-4.45 -0.47,-0.46 -1.11,-0.66 -0.4,-0.06 -1.09,0.3 -0.96,0.77 -0.57,0.24 -2.6,-0.17 -0.7,-0.22 -1.58,-0.86 -2.27,-0.66 -0.67,-0.32 -1.73,-1.5 -4.19,-4.6 -4.81,-5.35 -3.08,-3.9 -0.48,-0.43 -0.03,0.85 -0.31,1.18 0.1,0.55 0.89,0.89 0.04,0.29 -0.17,0.52 -0.34,0.22 -0.42,-0.01 -0.55,-0.31 -0.63,0 -0.51,0.63 0,0.17 0.69,0.57 0.26,0.42 -0.42,2.18 -0.31,0.49 -0.49,0.3 -1.15,-0.37 -2.65,0.5 -1.07,0.06 -1.32,-0.64 -1.21,-0.24 -1.19,-0.57 -1.49,-0.41 -2.9,-0.6 -0.9,0.03 -1.42,0.57 -1.04,0.6 -2.33,1.94 -0.62,0.06 -0.410003,0.35 -0.18,0.69 0.32,0.76 1.860003,1.35 2.37,1.33 0.99,0.38 1.35,0.25 0.45,0.54 2.67,6.2 1.3,2.05 0.57,0.68 0.19,0.94 -0.04,1.21 0.44,0.4 0.53,-0.13 3.15,1.98 0.96,0.79 0.13,0.71 -0.51,1.04 -0.37,0.26 -0.43,0.02 -2.11,-0.5 -1.87,0.38 -0.19,-0.67 0.12,-2.02 -0.11,-1.05 -0.81,-2.86 -0.71,-1.34 -0.89,-0.99 -1.25,-0.84 -4.85,-1.25 -0.8,0.05 -2.180003,1.13 -1.3,0.48 -0.19,-0.1 -0.19,-0.72 -0.92,-0.65 -0.29,-0.37 -0.27,-1.2 -0.85,-0.75 -0.96,-0.18 -1.43,0.31 -0.99,0.68 -0.53,-0.01 -0.27,0.29 -0.4,1.83 -0.29,0.75 -0.32,-0.13 -0.74,-0.86 -0.44,-0.11 -0.67,0.22 -0.22,0.39 -0.28,1.55 0.34,0.78 0.89,0.82 0.44,0.72 0.33,1.08 -0.02,0.54 -0.37,1.05 0.03,1.41 -0.24,1.11 0.12,1.55 -0.2,1.61 -0.18,0.6 -0.34,0.39 -0.47,0.16 -0.85,-0.03 -1.66,-0.69 -0.44,0.1 -0.28,0.52 -0.34,1.2 0.7,1.2 0.44,1.1 -0.19,0.42 -0.87,0.12 -3.06,-0.52 -2.59,0.89 -1.77,0.93 -0.74,0.18 -0.6,-0.02 -1.62,-0.99 -1.87,-0.37 -2.29,-0.18 -5.17,0.28 -1.96,0.73 -2.52,1.24 -2.19,1.6 -1.26,1.09 -1.12,1.61 -0.41,0.87 -0.68,1.59 -1.07,3.33 -0.61,0.85 -1.13,1.1 -0.71,0.43 -1.37,0.51 -2.16,0.64 -0.73,0.44 -0.86,0.79 -0.92,1.92 -0.31,2.04 -0.45,1.83 0.05,2.75 0.3,2.68 -0.14,2.73 0.56,2.37 0.4,0.99 0.38,0.5 -0.02,0.24 0.36,0.16 0.53,1.03 0.24,1.15 0.09,0.8 -0.2,1.22 0,2.34 0.42,3.14 0.3,0.99 0.38,0.72 1.85,2.64 0.91,0.02 1.95,-0.6 0.43,0.4 0.04,0.52 -0.32,0.71 -0.4,0.4 -0.53,0.33 -1.98,0.69 -0.84,0.79 -0.46,0.88 -0.04,1.5 -0.32,0.67 -0.49,0.54 -0.55,0.29 -1.32,0 -1.8,-0.44 -3.96,-0.34 -4.15,-0.59 -6.75,-0.42 -3.77,-0.08 -5.88,-0.68 -3.49,-0.26 -1.88,0.01 -5.1800003,-0.47 -9.41999997,-0.39 -0.08,-232.559998 1.51999997,-0.39 1.43,-0.63 30.1400003,-9.85 0.02,-0.13 1.67,-0.29 0.34,-0.35 1.01,-0.34 13.14,-4.2 43.66,-13.4999998 6.65,-2.22 2.220003,-0.46 17.06,-5.04 z"
//             fill={hoveredRegion === 'qoraqalpogiston' ? '#60A5FA' : regionsData.qoraqalpogiston.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('qoraqalpogiston')}
//             onMouseEnter={() => setHoveredRegion('qoraqalpogiston')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />
          
//           {/* Navoiy - markazda */}
//           <path
//             d="m 498.40007,274.98972 -0.52,4.76 -0.22,-0.04 -0.29,2.93 -6.71,0.22 1.13,10.64 0.72,1.27 0.95,0.58 4.27,1.05 0.25,0.23 0.23,0.53 1.57,6.86 -0.28,0.74 -3.12,5.32 -4.43,8.59 -0.73,1.79 0,0 -1.26,-3.47 -1.86,-2.66 -0.97,-1.12 -0.58,-0.27 -2.11,1.92 -2.35,1.29 -1.38,0.11 -1.83,-0.25 -1.04,-0.79 -1.03,-1.55 -1.19,-0.09 -1.11,0.19 -0.91,1.08 -2.15,4.68 -0.59,4.91 0.25,0.35 0.54,0.2 0.37,0.72 -0.17,2.27 -0.88,6.12 -0.86,1.34 -2.3,6.07 0.2,0.98 0.8,0.1 1.43,-0.92 0.82,0.07 0.18,0.45 -0.14,1.12 -0.43,0.62 -3.49,3.29 -1.63,0.76 -8.91,1.93 -1.22,-0.2 -5.38,-2.3 -2.09,-1.14 -0.46,-1.04 -1,-1.55 -5.48,-2.07 -1.01,-0.17 -0.52,0.28 -0.35,0.57 -0.16,0.7 0.05,0.97 -0.42,5.8 -1.83,5.54 -0.71,1.29 -0.52,0.3 -0.59,0.01 -2.85,-0.88 -1,-0.49 -8.65,2.92 -0.5,0.35 -0.08,0.37 0.33,0.77 1.48,1.53 0.97,0.81 0.94,1.45 1.35,5.22 -0.17,0.97 -0.51,1.46 -1.17,2.34 -0.04,0.63 0.17,0.81 0.81,1.81 2.12,3.8 0,0 -0.4,0.43 -0.53,0.21 -2.6,0.4 -1.39,0.37 -0.8,0.38 -1.17,0.81 0,0 0,0 0,0 -0.29,-3.38 -0.36,-1.15 -4.39,-9.39 -4.91,-3.69 -3.2,0.78 -1.08,-0.06 -7.06,-2.67 -1.19,-1.15 -4.27,-5.79 1.42,-2.72 0.89,-0.33 4.4,-2.67 2.13,-2.47 2.53,-4.78 1.29,-5.71 0.45,-4.36 -0.36,-3.32 0.36,-0.62 1.11,-0.48 2.06,0.12 2,1.3 0.82,0.79 2.01,0.99 2.9,0.54 3.85,0.23 0.94,-0.38 0.64,-0.61 3.35,-4.14 1.45,-4.13 0.17,-1.03 3.99,-2.81 1.4,-9.26 -7.97,-1.14 -5.93,-0.63 -8.63,-1.19 -1.03,-0.34 -0.8,-0.42 -1.14,-1.1 -2.14,-10.12 -0.79,-2.83 -0.97,-0.22 -0.45,0.19 -0.72,2.1 -1.13,2.68 -2.27,0.38 -3.79,0.06 -5.02,0.58 -0.57,0.19 -0.82,4.49 -0.19,0.49 -16.19,-1.89 -0.1,-7.61 -1.67,-1.93 -0.88,-0.15 -2.19,1.17 -1.04,1.09 -5.38,12.19 -0.55,0.19 -2.64,0.23 -3.4,0.09 0.48,-2.23 -0.34,-1.49 -0.56,-1.05 -2.12,-1.67 -9.83,-5.7 -8.48,-4.6 -5.38,-2.31 -3.16,-0.91 -2.04,0.05 -0.45,0.37 -0.88,0.09 -0.57,-1.39 -1.4,-5.15 -2.08,-4.35 -1.57,-1.58 -3.54,-1.9 -2.39,-1.55 -2.15,-2.32 -1.39,-2.06 -3.34,-6.7 -1.05,0.08 -13.55,3.21 -3.67,0.92 -0.56,0.28 0,0 -20.92,-28.67 12.85,-7.1 -6.74,-12.15 1.26,-15.77 27.66,-52.21 -15.44,-4.18 -5.85,-10.49 0,0 42.36,-8.25 20.45,-3.61 3.48,0.68 3.01,0.36 9.7,1.05 5.93,0.38 2.4,0.42 14.18,1.09 13.64,0.67 0.2,-0.15 0.85,-0.04 10.52,-5.17 7,-3.06 4.38,-2.19 2.06,-0.51 1.08,-0.11 1.67,0.07 0.83,0.32 0.76,0.58 0.99,1.14 5.73,12.62 2.02,1.91 3.6,3.74 10.88,9.68 1.5,6.07 6.64,21.39 12.57,-5.92 0.35,31.3 -0.05,7.21 -0.58,-0.18 -2.42,-1.23 -0.25,0 -0.1,6.6 -0.91,1.1 -0.3,16.64 0.07,2.15 24.14,2.92 3.48,39.7 z"
//             fill={hoveredRegion === 'navoiy' ? '#60A5FA' : regionsData.navoiy.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('navoiy')}
//             onMouseEnter={() => setHoveredRegion('navoiy')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />
//           <text x="525" y="360" textAnchor="middle" className="text-sm font-semibold pointer-events-none" fill="#333">
//             Navoiy viloyati
//           </text>
//           <text x="525" y="380" textAnchor="middle" className="text-xs pointer-events-none" fill="#666">
//             Jami: 3
//           </text>

//           {/* Xorazm */}
//           <path
//             d="m 282.54007,312.32972 -1.26,-2.86 -0.52,-0.75 -0.69,-0.61 -0.3,-0.81 -0.16,-2.77 -0.46,-0.74 -0.26,-1.03 -1.22,-2.04 -0.09,-1.22 0.16,-1.18 -0.07,-1.98 -0.15,-0.48 -0.25,-2.85 0.23,-1.62 -0.22,-0.4 -0.51,-0.21 -0.18,-0.72 0.02,-0.64 -0.29,-0.81 -0.74,-0.94 -1.47,-0.78 -0.57,-0.11 -0.45,-0.26 -0.3,-0.56 0.19,-0.94 -0.37,-1.05 -0.47,-0.87 -1.22,-0.73 -1.88,-1.98 -1.13,-0.34 -1.49,-1.01 -2.03,-2.41 -0.48,-0.3 -1.27,-0.13 -0.66,-0.23 -0.49,-0.34 -0.41,-0.38 -0.28,-0.95 -0.38,-0.72 -0.85,-0.64 -0.47,-0.01 -1.3,0.57 -1.77,-0.14 -0.74,-0.22 -1.61,-0.9 -1.76,-0.29 -0.52,0.04 -0.47,0.31 -0.82,1.47 0.06,2.65 -0.45,0.8 -0.28,1.57 -0.43,0.91 -0.35,0.39 -0.49,0.33 -1.05,0.16 -0.15,0.14 -1.67,0.19 -0.33,-0.1 -1.32,0.05 -0.2,-0.13 -0.28,0.1 -0.7,-0.16 -3.1,-1.48 -2.13,-2.23 -0.34,-0.15 -2.01,0.18 -1.32,-1.56 -4.91,-0.22 -0.42,0.21 -1.04,-0.07 -2.18,0.32 -2.58,-0.12 -1.68,0.31 -3.93,0.01 -4.76,0.3 -0.88,-0.05 -2.6,0.43 -0.95,-0.06 -0.72,-0.24 -3.24,-1.94 -2.91,-2.6 -6.11,-4.17 -3.37,-1.93 -1.16,-1.04 -0.57,-1.24 -0.02,-0.69 0.16,-0.79 0.04,-2.99 0.28,-1.86 0.38,-0.81 2.14,-2 0.25,-0.61 0,-1.17 -0.27,-0.89 -1.13,-2.02 -1.15,-1.53 -1.85,-2.89 -0.38,-1.5 0.52,-1.24 0.56,-2.25 0.24,-0.14 0.31,0.02 0.9,0.49 1,-0.02 1.98,0.72 1.11,0.53 1.28,1.05 1.19,-0.03 0.78,0.63 0.82,0.27 0.26,-0.4 0.73,0.01 0.26,-0.16 0.03,-0.44 -0.52,-0.7 -1.13,-0.89 -1.16,-1.32 -1.25,-0.57 -1.65,-0.37 -1.39,-0.87 -0.76,-0.85 -0.31,-0.72 0,0 2.67,-5.23 1.9,-0.85 4.26,-1.39 5.28,1.12 0.39,0.48 0.16,0.58 0.04,2.64 0.41,2.45 3.08,5.39 0.38,0.47 0.66,0.65 0.7,0.31 5.17,4.83 3.35,3.9 1.57,1.51 8.23,7.31 5.96,4.54 1.41,0.58 2.16,0.36 0.74,0.29 0.71,0.61 2.01,2.27 0.37,0.87 0.26,1.16 2.25,1.44 1.49,0 0.72,-0.76 0.51,-1.88 1.17,-2.3 0.78,-0.88 1.39,-0.77 0.62,-0.2 3.04,0.01 8.95,2.06 3.52,1.86 3.08,1.91 8,8.81 1.5,2.77 4.56,7.41 0.27,0.22 0.65,0.19 2.55,-1.22 0,0 3.24,3.33 5.91,6.68 0.68,1.15 -0.03,1.54 -0.79,3.8 -4.59,5.13 -6.28,7.61 0,0 z"
//             fill={hoveredRegion === 'xorazm' ? '#60A5FA' : regionsData.xorazm.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('xorazm')}
//             onMouseEnter={() => setHoveredRegion('xorazm')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Buxoro */}
//           <path
//             d="m 421.26007,383.36972 -3.77,3.59 -3.35,2.22 -0.57,0.11 -4.4,4.71 -0.35,1.03 0.15,0.86 0.71,1.2 0.83,0.88 0.82,1.17 0.23,0.51 -0.28,0.61 -18.12,6.64 -5.61,6.23 0,0 -2.13,-2.3 -0.41,-0.03 -1.18,0.3 -2.1,1.21 -1,0.26 -1.05,0.02 -1.38,-0.18 -0.85,-0.42 -2.95,-2.43 -2.87,-2 -6.79,-5.22 -1.82,-1.17 -4.68,-3.44 -1.31,-1.29 -1.15,-1.39 -0.29,-0.63 -0.41,-0.37 -0.78,-1.23 -3.57,-3.46 -2.02,-2.15 -3.97,-2.81 -4.38,-2.62 -4.45,-3.15 -4.24,-2.78 -10.26,-7.3 -6.96,-4.77 -14.33,-10.53 -1.18,-1.1 -0.91,-1.29 -0.16,-0.53 -0.2,-0.9 0.06,-0.55 -0.29,-0.7 -0.13,-1.75 -1.41,-2.07 0.02,-0.65 0.69,-1.19 0.08,-2.63 -0.38,-1.01 -0.14,-1.23 -0.59,-2.04 -0.06,-1.14 -0.23,-0.77 0.04,-0.6 0.36,-0.91 -0.03,-1.01 -0.75,-1.34 -1.16,-1.05 -0.72,-1.06 -0.06,-0.51 0.5,-1.54 0.29,-1.47 -0.04,-0.31 -1.32,-0.52 -1.32,-0.84 -1.32,-1.45 -1.27,-0.57 -1.32,-0.87 -0.4,-0.56 0,0 6.28,-7.61 4.59,-5.13 0.79,-3.8 0.03,-1.54 -0.68,-1.15 -5.91,-6.68 -3.24,-3.33 0,0 10.94,-5.06 -13.78,-19.18 0,0 0.56,-0.28 3.67,-0.92 13.55,-3.21 1.05,-0.08 3.34,6.7 1.39,2.06 2.15,2.32 2.39,1.55 3.54,1.9 1.57,1.58 2.08,4.35 1.4,5.15 0.57,1.39 0.88,-0.09 0.45,-0.37 2.04,-0.05 3.16,0.91 5.38,2.31 8.48,4.6 9.83,5.7 2.12,1.67 0.56,1.05 0.34,1.49 -0.48,2.23 3.4,-0.09 2.64,-0.23 0.55,-0.19 5.38,-12.19 1.04,-1.09 2.19,-1.17 0.88,0.15 1.67,1.93 0.1,7.61 16.19,1.89 0.19,-0.49 0.82,-4.49 0.57,-0.19 5.02,-0.58 3.79,-0.06 2.27,-0.38 1.13,-2.68 0.72,-2.1 0.45,-0.19 0.97,0.22 0.79,2.83 2.14,10.12 1.14,1.1 0.8,0.42 1.03,0.34 8.63,1.19 5.93,0.63 7.97,1.14 -1.4,9.26 -3.99,2.81 -0.17,1.03 -1.45,4.13 -3.35,4.14 -0.64,0.61 -0.94,0.38 -3.85,-0.23 -2.9,-0.54 -2.01,-0.99 -0.82,-0.79 -2,-1.3 -2.06,-0.12 -1.11,0.48 -0.36,0.62 0.36,3.32 -0.45,4.36 -1.29,5.71 -2.53,4.78 -2.13,2.47 -4.4,2.67 -0.89,0.33 -1.42,2.72 4.27,5.79 1.19,1.15 7.06,2.67 1.08,0.06 3.2,-0.78 4.91,3.69 4.39,9.39 0.36,1.15 z"
//             fill={hoveredRegion === 'buxoro' ? '#60A5FA' : regionsData.buxoro.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('buxoro')}
//             onMouseEnter={() => setHoveredRegion('buxoro')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Qashqadaryo */}
//           <path
//             d="m 421.26007,383.36972 1.17,-0.81 0.8,-0.38 1.39,-0.37 2.6,-0.4 0.53,-0.21 0.4,-0.43 0,0 0.69,0.16 17.55,0.53 1.49,-0.18 1.31,-0.55 1.43,-1.07 0.19,-0.27 0.04,-0.33 4.31,0.88 3.3,3.81 2.77,4.65 0.09,1.49 0.22,0.21 0.72,0.25 3.08,0.78 1.53,-0.04 2.21,-1.38 3.27,-1.67 7.55,-1.87 0.63,0.16 1.17,0.75 1.65,1.44 1.64,1.15 0.69,0.33 0.3,-0.01 3.64,-1.56 0.82,-0.96 1.1,-1.78 0.83,-0.95 0.81,-0.28 1.19,-0.06 8.57,1.53 0.63,0.67 0.49,1.32 -0.11,1.26 -0.46,1.7 0.06,0.58 0.33,0.48 0.93,0.53 1.89,0.15 3.88,-0.24 0.82,-0.21 0.42,-0.48 0.11,-0.35 -0.07,-1.78 0.43,-0.48 0.88,-0.05 4.46,1.27 2.56,1.09 3.84,1.19 1.65,0.32 1,-0.23 0,0 0.38,1.58 1.39,2.41 0.73,0.75 0.96,0.53 1.76,0.37 0.62,0.41 0.85,0.29 0.8,0.02 1.03,-0.22 1.08,0.19 1.02,0.47 0.65,1.67 0.57,0.23 1.59,0.08 0.28,0.29 -0.01,0.57 -0.35,0.51 -0.21,2.5 0.44,1.26 0.13,2.05 0.39,0.56 0,0 -0.8,0.82 -0.98,0.58 -3.99,0.23 -0.86,0.26 -0.51,0.25 -0.67,0.57 -0.45,0.84 -0.06,0.4 0.54,3.14 1.02,2.1 0.38,0.46 0.15,0.52 0.13,4.2 -1.34,4.3 -0.54,-0.18 -1.41,-1.43 -1,-0.32 -1.43,-0.07 -1.14,0.33 -0.45,0.34 -0.59,0.64 -0.81,1.3 -1.19,2.22 -8.89,8.88 -0.72,3.35 -0.16,1.52 -0.37,1.4 -0.45,0.87 -2.42,2.43 -1.83,1.28 -3.54,1.85 -11.58,12.1 -0.43,1.25 -1.04,4.27 0.27,0.9 0,0 -2.39,-2.79 -1.05,-0.67 -1.48,-0.61 -3.19,-0.35 -2.63,0.82 -0.57,0.06 -1.26,-0.33 -1.23,-1.07 -2.79,-1.64 -1.83,-2.07 -1.29,-2.33 -0.47,-0.3 -1.9,-0.11 -3.5,-1.03 -0.63,-0.4 -0.5,-0.97 -1.17,-0.4 -0.87,-0.13 -0.76,-0.8 -0.47,-0.17 -1.37,0.07 -0.83,-0.27 -0.9,-0.6 -1.91,-1.96 -0.9,-0.24 -1.07,0.01 -0.97,0.27 -0.73,1.4 -0.56,-0.07 -0.14,0.1 -0.16,0.64 -0.37,0.17 -0.53,0 -4.68,-0.96 -9.93,-3.92 -1.95,-1.12 -6.41,-4.13 -1.85,-1.49 -2.7,-2.52 -7.61,-7.6 -0.58,-0.39 -2.73,-1.25 -3.5,-1.33 -2.94,-1.37 -1.73,-1.26 -0.61,-0.66 -8.98,-5.55 -2.72,-1.9 -5.54,-5.13 -1.19,-1.31 0,0 5.61,-6.23 18.12,-6.64 0.28,-0.61 -0.23,-0.51 -0.82,-1.17 -0.83,-0.88 -0.71,-1.2 -0.15,-0.86 0.35,-1.03 4.4,-4.71 0.57,-0.11 3.35,-2.22 z"
//             fill={hoveredRegion === 'qashqadaryo' ? '#60A5FA' : regionsData.qashqadaryo.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('qashqadaryo')}
//             onMouseEnter={() => setHoveredRegion('qashqadaryo')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Surxondaryo */}
//           <path
//             d="m 573.27007,459.46972 -1.03,3.53 -0.14,1.23 -2.3,2.42 -1.64,3.1 0.07,1.57 -0.47,1.11 0.09,0.79 -0.35,0.89 -2.5,1.17 -4.05,0.7 -0.81,1.44 -3.16,6.75 -1.15,1.66 -1.37,0.98 -2.29,2.97 -1.05,2.43 -1.27,2.43 -1.59,1.53 -1.19,3.88 -0.05,2.56 0.26,4.01 -0.56,6.66 -0.71,2.43 -0.68,0.44 -0.59,-1.11 -1.5,-1.2 -0.74,-0.22 -1.38,0.15 -0.42,-0.06 -0.86,-0.76 -1,-0.59 -0.61,0.09 -1.37,0.55 -0.67,0.54 -0.39,0.5 -0.7,0.09 -0.42,-0.65 -0.42,-1.37 -0.74,-0.72 -0.82,-0.4 -0.67,0.14 -0.57,0.38 -1.87,1.72 -1.35,0.46 -1.15,0.68 -1.26,0.11 -1.84,0.47 -0.96,1.03 -1.5,0.63 -0.54,-0.2 -0.86,-0.77 -0.17,-1.53 -0.28,-0.49 -0.77,-0.37 -0.37,-0.87 -0.27,-0.27 -0.97,-0.38 -0.45,-0.34 -0.7,0.15 -0.46,-0.12 -1.52,-0.85 -0.46,-0.71 0.36,-1.53 -0.32,-0.84 -1.73,-0.86 -1.36,-1.41 -0.43,-0.26 -1.93,-0.72 -1.88,0.13 -3.58,1.59 -1.58,-0.19 -0.82,0.07 -2.23,0.76 -1.95,-0.49 -0.95,0.01 -1.1,0.37 -1.6,-0.37 -1.45,0.23 -1.17,-0.12 -1.79,0.07 -1.31,0.54 -0.4,-2.01 0.17,-0.66 0.43,-0.62 0.86,-0.63 1.13,-0.58 3.04,-0.91 0.3,-0.73 0.01,-0.75 -0.43,-1.1 -4.56,-5.54 -0.26,-1.49 0.56,-5.62 -0.29,-1.53 0,-0.6 0.45,-3.11 0.74,-1.79 0.73,-1.12 0.77,-0.76 0.54,-1.27 0.56,-0.73 2.28,-1.33 0.43,-0.4 0.24,-0.83 -0.03,-0.89 -0.54,-1.05 0,0 -0.27,-0.9 1.04,-4.27 0.43,-1.25 11.58,-12.1 3.54,-1.85 1.83,-1.28 2.42,-2.43 0.45,-0.87 0.37,-1.4 0.16,-1.52 0.72,-3.35 8.89,-8.88 1.19,-2.22 0.81,-1.3 0.59,-0.64 0.45,-0.34 1.14,-0.33 1.43,0.07 1,0.32 1.41,1.43 0.54,0.18 1.34,-4.3 -0.13,-4.2 -0.15,-0.52 -0.38,-0.46 -1.02,-2.1 -0.54,-3.14 0.06,-0.4 0.45,-0.84 0.67,-0.57 0.51,-0.25 0.86,-0.26 3.99,-0.23 0.98,-0.58 0.8,-0.82 0,0 0.39,0.53 0.68,0.29 0.91,-0.32 0.62,0.24 1.04,-0.72 2.05,-0.19 1.35,0.82 1.47,0.14 1.05,-1.35 2.05,-0.07 1.04,-0.55 0.45,0.01 1.11,1.16 1.02,0.25 1.84,-0.99 1.25,0.14 1.24,0.82 0.87,1.84 0.31,1.03 2.69,2.1 0.09,0.8 -0.14,1.24 -0.35,0.22 0.3,2.16 -1.26,0.65 -0.59,0.9 -1.03,0.32 -2.5,0.4 -0.35,0.56 2.53,3.68 -0.36,0.67 -1.59,0.19 -1.27,1.22 0.42,1.48 0.87,1.94 -0.01,0.45 -0.47,0.56 -0.33,5.31 2.42,3.21 1,0.81 -0.37,1.12 -0.93,1.45 -0.25,1.01 0.45,0.01 1.48,-0.65 0.46,0.01 1.67,0.94 1.41,2.4 0.21,0.79 0.08,1.36 0.22,0.23 1.34,0.48 1.45,0.71 1,0.69 1.97,2.53 0.02,0.38 0.72,1.32 1.09,1.49 -0.01,0.79 z"
//             fill={hoveredRegion === 'surxondaryo' ? '#60A5FA' : regionsData.surxondaryo.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('surxondaryo')}
//             onMouseEnter={() => setHoveredRegion('surxondaryo')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Samarqand */}
//           <path
//             d="m 532.92007,390.83972 -0.11,0.3 -1.6,-0.31 -0.97,0.21 -3.33,1.15 -0.23,0.29 0,0.19 0,0 -1,0.23 -1.65,-0.32 -3.84,-1.19 -2.56,-1.09 -4.46,-1.27 -0.88,0.05 -0.43,0.48 0.07,1.78 -0.11,0.35 -0.42,0.48 -0.82,0.21 -3.88,0.24 -1.89,-0.15 -0.93,-0.53 -0.33,-0.48 -0.06,-0.58 0.46,-1.7 0.11,-1.26 -0.49,-1.32 -0.63,-0.67 -8.57,-1.53 -1.19,0.06 -0.81,0.28 -0.83,0.95 -1.1,1.78 -0.82,0.96 -3.64,1.56 -0.3,0.01 -0.69,-0.33 -1.64,-1.15 -1.65,-1.44 -1.17,-0.75 -0.63,-0.16 -7.55,1.87 -3.27,1.67 -2.21,1.38 -1.53,0.04 -3.08,-0.78 -0.72,-0.25 -0.22,-0.21 -0.09,-1.49 -2.77,-4.65 -3.3,-3.81 -4.31,-0.88 -0.04,0.33 -0.19,0.27 -1.43,1.07 -1.31,0.55 -1.49,0.18 -17.55,-0.53 -0.69,-0.16 0,0 -2.12,-3.8 -0.81,-1.81 -0.17,-0.81 0.04,-0.63 1.17,-2.34 0.51,-1.46 0.17,-0.97 -1.35,-5.22 -0.94,-1.45 -0.97,-0.81 -1.48,-1.53 -0.33,-0.77 0.08,-0.37 0.5,-0.35 8.65,-2.92 1,0.49 2.85,0.88 0.59,-0.01 0.52,-0.3 0.71,-1.29 1.83,-5.54 0.42,-5.8 -0.05,-0.97 0.16,-0.7 0.35,-0.57 0.52,-0.28 1.01,0.17 5.48,2.07 1,1.55 0.46,1.04 2.09,1.14 5.38,2.3 1.22,0.2 8.91,-1.93 1.63,-0.76 3.49,-3.29 0.43,-0.62 0.14,-1.12 -0.18,-0.45 -0.82,-0.07 -1.43,0.92 -0.8,-0.1 -0.2,-0.98 2.3,-6.07 0.86,-1.34 0.88,-6.12 0.17,-2.27 -0.37,-0.72 -0.54,-0.2 -0.25,-0.35 0.59,-4.91 2.15,-4.68 0.91,-1.08 1.11,-0.19 1.19,0.09 1.03,1.55 1.04,0.79 1.83,0.25 1.38,-0.11 2.35,-1.29 2.11,-1.92 0.58,0.27 0.97,1.12 1.86,2.66 1.26,3.47 0,0 7.79,0.92 4.61,0.1 0.96,2.18 0.01,1.1 -0.83,1.83 -0.14,0.77 0.1,3.93 0.84,4.1 1.86,1.66 1.44,2.81 -0.07,0.81 -0.45,1.34 -0.24,0.16 -1.24,0.29 -0.1,0.35 0.35,3.71 5.83,3.93 2.12,0.8 4.81,0.4 11.87,2.53 0.21,0.24 1.07,5.96 0.08,1.02 -1.3,0.15 -1.54,0.38 -2.16,1.03 -0.69,0.54 -0.76,0.91 -3.22,5.24 -0.1,0.37 0.02,4.16 0.21,0.95 0.65,0.96 1.03,1.05 4.53,3.82 0,0 2.23,4.67 0.83,2.3 0.94,1.95 0.21,0.81 z"
//             fill={hoveredRegion === 'samarqand' ? '#60A5FA' : regionsData.samarqand.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('samarqand')}
//             onMouseEnter={() => setHoveredRegion('samarqand')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Jizzax */}
//           <path
//             d="m 580.63007,374.69972 -0.48,0.25 -0.21,1.54 -0.32,1.02 -0.82,0.73 -1.08,-0.38 -1.15,0.26 -2.96,-0.47 -1.86,0.81 -0.39,-0.12 -0.79,-0.76 -0.51,-0.24 -1.42,-0.32 -1.77,-0.21 -1.26,0.14 -0.93,0.26 -0.74,-0.13 -1.02,-0.59 -0.74,0.1 -2.23,-0.16 -0.97,-0.48 -0.74,-0.19 -1.09,0.09 -0.6,-0.15 -1.1,-0.85 -0.91,-0.37 -1.37,-0.08 -0.92,0.1 -1.87,-0.84 -0.96,-0.88 -1.38,-0.08 -2.43,-1.65 -0.7,0.39 -1.21,0.32 -1.93,-0.83 -0.4,-0.01 -0.88,1.02 -1.09,0.38 -0.64,0.45 -0.94,1.53 -0.58,0.16 -1.43,0.03 -3.98,1.49 -0.12,0.68 0.2,1.61 -0.41,0.51 -2.22,-0.55 -0.46,0.11 -0.35,0.8 -0.02,1.31 0.32,0.51 0,0 -4.53,-3.82 -1.03,-1.05 -0.65,-0.96 -0.21,-0.95 -0.02,-4.16 0.1,-0.37 3.22,-5.24 0.76,-0.91 0.69,-0.54 2.16,-1.03 1.54,-0.38 1.3,-0.15 -0.08,-1.02 -1.07,-5.96 -0.21,-0.24 -11.87,-2.53 -4.81,-0.4 -2.12,-0.8 -5.83,-3.93 -0.35,-3.71 0.1,-0.35 1.24,-0.29 0.24,-0.16 0.45,-1.34 0.07,-0.81 -1.44,-2.81 -1.86,-1.66 -0.84,-4.1 -0.1,-3.93 0.14,-0.77 0.83,-1.83 -0.01,-1.1 -0.96,-2.18 -4.61,-0.1 -7.79,-0.92 0,0 0.73,-1.79 4.43,-8.59 3.12,-5.32 0.28,-0.74 -1.57,-6.86 -0.23,-0.53 -0.25,-0.23 -4.27,-1.05 -0.95,-0.58 -0.72,-1.27 -1.13,-10.64 6.71,-0.22 0.29,-2.93 0.22,0.04 0.52,-4.76 0,0 17.4,1.31 4.64,0.52 2.72,0.01 0.85,0.56 0.87,0.13 1.25,-0.41 1.27,-0.2 15.41,0.47 1.41,1.29 0.87,0.23 2.05,2.49 3.32,3.08 1.47,-1.3 0.84,1.19 3.05,-1.98 1.38,1.29 0.59,-0.26 0.79,0.47 -2.47,0.53 -1.41,1.48 1.39,3.45 -1.48,1.47 0.08,5.22 -4.07,0.15 -0.73,2.28 1.44,2 2.44,0.68 5.77,3.4 3.59,4.03 3.79,1.34 0.44,0.38 0,0 -0.17,2.84 -0.34,0.61 -1.86,-0.1 -2.1,0.54 -0.48,4.89 0.16,0.27 2.11,-1.02 0.33,-0.1 0.16,0.2 -0.15,0.77 -0.77,2 -4.95,11.04 -0.2,1.52 0.15,0.96 0.34,0.9 0.66,0.97 0.32,0.05 6.55,0.31 4.57,-0.17 4.02,-0.82 2.28,-0.79 7.13,-1.64 0.31,0.68 -1.01,6.41 0,0 -1.55,0.28 -0.09,0.14 -2.89,0.84 -0.24,0.6 0.86,0.8 2.62,1.54 1.23,-0.03 2.15,-0.45 1.31,-0.56 2.87,-0.81 1.23,-0.55 3.43,-0.89 1.68,-0.21 3.15,-0.11 0.84,0.65 0.41,1.28 0.45,2.38 -0.32,0.66 -0.75,0.06 -1.53,-0.36 -0.9,-0.01 -0.75,0.03 -1.52,0.35 -1.17,0.88 -0.21,1.04 -0.15,0.12 -0.46,-0.26 -0.3,-1.29 -0.73,-1.1 -0.65,-0.1 -0.58,0.2 -0.24,0.28 -0.03,0.53 0.35,0.57 0.94,0.94 0.05,0.63 -0.41,1.35 0.03,0.3 1.5,1.4 2.61,3.24 0.54,1.1 0.04,0.75 -0.2,0.69 -0.71,0.72 -0.81,0.1 -0.62,-0.31 -0.6,-0.94 -0.07,-1.78 -1.35,-3.21 -0.72,-0.88 -0.4,-0.07 -0.47,0.22 -0.12,0.4 0.08,1.1 1.04,1.98 0.81,1.92 0.03,0.69 -0.36,0.8 -0.36,0.27 -0.92,0.21 -0.3,0.39 -0.27,1.43 -0.24,0.22 -0.46,0.11 -0.56,-0.42 -0.31,-1.27 -0.78,-0.89 -0.46,-0.13 -1.47,1.23 -0.51,-0.3 -1.2,-0.15 -0.09,1.15 0.3,1.67 -0.32,1.31 -0.49,0.85 -0.25,0.92 -0.3,0.56 -0.64,0.27 -0.63,0.04 -0.42,0.51 0.27,0.64 1.88,2.68 -0.27,1.72 -2.37,2.68 z"
//             fill={hoveredRegion === 'jizzax' ? '#60A5FA' : regionsData.jizzax.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('jizzax')}
//             onMouseEnter={() => setHoveredRegion('jizzax')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Sirdaryo */}
//           <path
//             d="m 596.13007,337.79972 -1.61,0.97 -1.29,0.33 -2.39,-0.67 -0.98,0.44 -5.44,1.74 0,0 1.01,-6.41 -0.31,-0.68 -7.13,1.64 -2.28,0.79 -4.02,0.82 -4.57,0.17 -6.55,-0.31 -0.32,-0.05 -0.66,-0.97 -0.34,-0.9 -0.15,-0.96 0.2,-1.52 4.95,-11.04 0.77,-2 0.15,-0.77 -0.16,-0.2 -0.33,0.1 -2.11,1.02 -0.16,-0.27 0.48,-4.89 2.1,-0.54 1.86,0.1 0.34,-0.61 0.17,-2.84 0,0 3.65,3.11 1.89,-0.5 1.91,1.57 -0.54,1.14 4.87,1.43 0.81,-1.12 2.4,0.18 4.31,-1.73 -0.84,-2.09 -2.41,-1.29 -1.13,-3.29 -3.28,-4.53 0.87,-7.45 -1,-2.53 0.86,-0.9 -0.88,-1.39 -3.62,-0.23 -0.01,-1.3 4.92,0.31 0.32,0.6 2.36,-1.47 -0.02,0.24 0.31,0.09 0.2,1.2 0.67,0.25 0.8,-0.37 0.94,0.21 0.37,0.38 -0.14,0.33 -1.44,0.55 -0.19,0.35 -0.03,0.56 0.54,1.06 0.4,-0.33 0,0 4.86,5.52 3.47,3.47 4.92,4.44 4.71,3.91 0.62,0.08 3.03,4.23 -0.5,4.7 -0.86,5.32 -1.01,4.96 0.02,1.06 0.14,0.62 0.5,1.05 -0.25,4.73 0,0 -1.11,-0.35 -2.57,-0.02 -3.36,0.35 z"
//             fill={hoveredRegion === 'sirdaryo' ? '#60A5FA' : regionsData.sirdaryo.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('sirdaryo')}
//             onMouseEnter={() => setHoveredRegion('sirdaryo')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Toshkent viloyati */}
//           <path
//             d="m 705.74007,216.12972 -0.15,-0.38 -0.65,-0.51 -0.79,-0.38 -3.33,-3 -0.94,-0.54 -1.75,-0.21 -1.22,-0.7 -0.46,-0.02 -0.86,0.21 -1.14,0.5 -1.25,1.16 -0.68,0.03 -0.94,-0.34 -0.42,0.04 -1.77,2.24 -1.02,0.69 -0.96,0.43 -1.18,0.89 -0.7,0.02 -1.06,-1.01 -0.52,0.16 -0.58,0.56 -0.67,0.73 -0.84,1.38 -0.82,0.66 -0.55,0.9 -0.98,0.78 -0.75,1.09 -0.15,1.26 -0.91,1.8 -1.1,2.99 0.05,0.2 -0.22,0.48 -0.74,0.26 -0.42,-0.02 -1.23,-1.13 -0.75,-0.21 -0.15,-0.63 0.11,-1.61 -0.55,-0.91 -2.54,-1.39 -2.69,-2.37 -0.37,-0.16 -0.69,0.14 -0.37,0.46 -0.3,2.12 -0.22,0.37 -0.97,0.87 -0.3,0.69 -1.58,0.96 -0.31,0.5 0.13,1.17 0.34,1.39 -0.08,1.08 -1.04,0.74 -0.96,0.31 -0.49,0.55 -0.54,-0.02 -1.16,0.55 -0.89,1.3 -1.07,0.9 -0.44,0.76 -0.74,2.01 -0.59,1.01 -3.19,1.6 -1.34,0.96 -0.73,2.14 -0.32,0.3 -0.33,0.12 -0.36,-0.12 -0.16,-0.29 0.05,-0.56 -0.38,-0.67 -0.39,-0.07 -0.68,0.2 -0.26,0.31 -1.65,3.99 -2.93,1.2 -1.2,-1.04 -0.74,-0.33 -0.5,0 -1.67,1.05 -2.04,0.33 -0.25,-0.13 -0.84,0.13 -0.31,0.2 -0.2,0.44 -0.53,0.53 -0.68,0.33 -2.74,0.65 -0.52,0.23 -1.22,1.14 -0.29,0.51 -0.95,0.71 -1.3,1.39 -0.4,0.54 -0.5,1.56 -0.23,0.28 -0.74,0.38 -1.22,0.35 -0.38,-0.06 -0.33,0.12 -1.68,1.43 -0.67,1.1 0.02,0.52 0.33,0.54 1.17,0.76 -0.34,1.01 -0.41,0.21 -2.21,-0.35 -0.53,0.23 -0.83,0.04 -1.31,0.35 -0.47,-0.02 -1,-0.58 -0.56,-0.14 -1.1,0.13 -0.36,-0.12 -1.5,0.32 -1.15,0.69 -0.64,1.9 -0.44,0.5 -2.23,1.26 -1.14,2.84 -0.66,0.46 -0.51,-0.06 -0.59,-0.58 -0.29,-0.12 -0.51,0.16 -1.98,3.07 -0.19,2.71 -0.23,0.37 -1.39,1.17 -0.3,1.8 -0.21,0.14 -0.85,-0.15 -0.68,0.46 -0.65,0.86 -1.41,1.37 -1.53,2.02 -0.74,1.15 -0.48,1.1 -1.66,2.09 -0.72,1.67 -0.15,1.51 -0.17,0.35 -1.33,1.21 -1.83,0.72 -1.04,0.86 0,0 4.86,5.52 3.47,3.47 4.92,4.44 4.71,3.91 0.62,0.08 3.03,4.23 -0.5,4.7 -0.86,5.32 -1.01,4.96 0.01,1.06 0.14,0.62 0.5,1.06 -0.25,4.73 0,0 2.55,0.22 0.64,-0.05 1.05,0.37 1.09,-0.09 0.77,-0.25 1.3,0.31 1.96,0.04 1.12,0.62 0.48,-0.4 -0.84,-2.12 -0.41,-0.42 -1.38,-0.27 -0.41,-0.42 0.24,-0.85 -0.35,-0.58 0.18,-0.62 1.75,0.24 0.83,-0.06 1.13,-1.07 0.01,-0.91 0.33,-0.55 -0.02,-1.21 -1.04,-0.83 -0.42,-0.5 0.01,-0.83 -0.29,-0.81 -0.4,-0.35 0.24,-0.85 -0.47,-0.19 -0.61,-2.07 -0.42,-0.5 0.01,-0.83 0.35,-0.41 0.04,-0.76 -0.66,-0.57 -1.34,-1.85 -0.07,-0.33 0.27,-0.64 1.56,-1.05 1.82,-0.24 0.87,0.17 0.3,-0.08 0.26,-0.27 -0.03,-0.18 0.4,-0.75 0.48,-0.23 0.26,-1.27 -0.56,-1.23 -0.34,-1.13 0.21,-3.51 0.06,-0.32 0.33,-0.39 0.2,-0.95 1.84,-2.59 1.64,-0.2 0.66,0.33 2.53,0.7 1.21,0.15 0.75,0.74 0.85,1.71 0.25,1.19 0.55,0.78 1.26,0.9 0.73,0.88 0.69,0.11 0.4,0.21 0.5,1.3 0.3,0.41 0.66,0.15 1.62,-0.11 0.93,-0.59 1.4,-3.02 0.45,-0.4 0.71,-0.21 1.43,0.41 0.3,-0.03 0.94,-1.01 1.11,-0.66 0.43,-0.01 1.59,0.98 0.21,0.01 1.18,-1.12 0.76,-0.49 2.03,-0.29 0.83,-0.36 1.06,-0.9 1.43,-0.56 2.38,-2.32 0.31,-0.44 0.28,-0.87 0.49,-0.59 0.59,-0.11 1.03,0.41 1.14,0.18 1.46,-0.94 0.88,-0.39 0.72,-1.02 1.64,-0.99 1.2,-0.03 0.68,-0.23 0.37,-0.36 0.51,-1.01 0.01,-0.36 -0.29,-0.93 0.15,-0.72 0.68,-0.82 0.03,-0.76 0.3,-0.53 -0.28,-1.28 0.11,-0.46 0.38,-0.28 0.4,-0.94 0.55,-0.6 1.3,-0.52 1.03,0.25 0,0 -0.2,-0.42 0.15,-0.88 -0.03,-1.75 -0.24,-2.33 -0.66,-1.34 -1.91,-2.62 -0.67,-7.3 2.97,-4.11 0.68,-1.93 0,0 -0.49,-1.01 -0.48,-0.56 -0.85,-0.56 -1.21,-1.45 -1.17,-0.12 -0.5,-0.52 -0.63,-1.47 -0.4,-0.27 -1.31,-0.56 -1.07,-0.18 -0.97,0.06 -0.52,0.28 -0.82,0.1 -0.94,-0.24 -1.25,0.09 -0.63,-0.37 -0.16,-0.37 -0.17,-1.24 0.08,-1.97 0.28,-0.74 0.41,-0.58 1.27,-0.54 0.69,-0.12 1.28,0.11 1.66,-1.54 1.3,0.05 0.85,-0.4 1.51,-1.46 0.58,-0.9 0.3,-0.23 2.07,-1.13 0.54,-0.16 1.66,-1.13 0.67,-1.34 0.09,-2.21 0.24,-0.49 0.62,-0.59 1.24,-0.56 2.17,-1.52 0.33,-1.21 1.12,-0.8 0.37,-0.42 0.74,-1.53 1.05,-1.08 1.19,-0.57 0.65,-0.05 0.88,0.32 0.41,-0.01 0.17,-0.19 0.17,-0.82 0.22,-0.2 0.68,0.46 1.04,0.36 0.88,0.01 0.43,-0.15 0.89,-0.9 0.3,-0.51 0.16,-1.82 -0.91,-1.58 0.34,-0.9 0.65,-0.66 0.12,-0.73 0.17,-0.29 0.6,-0.29 0.8,0 1.87,1.04 0.81,0.2 0.77,0 1.05,-0.52 1.29,-1.1 0.68,-0.3 1.76,-1.81 0.81,-0.31 2.68,-2.56 1.08,-0.41 0.82,-0.03 1.27,0.31 0.4,-0.62 0.7,-0.54 0.45,-0.18 0.2,-0.28 0.1,-1.57 0.33,-0.45 z m -86.22,51.43 -0.36,0.46 0.09,0.66 -0.39,-0.05 -0.16,0.11 -0.29,0.68 -0.05,0.48 0.14,0.34 -0.34,0.25 -0.48,0.75 0.57,0.75 0.17,0.55 0,0.89 -0.15,0.55 -0.95,1.14 -0.33,0.23 -0.64,0.09 -0.36,-0.25 -0.43,-0.93 0.16,-0.41 -0.72,-0.23 -1.08,-0.09 -1.08,0.87 -0.02,0.48 -0.57,0.07 -0.69,-0.14 -0.17,-0.25 -0.36,0.23 -0.16,-0.05 -0.33,-0.84 -0.48,-0.25 -0.33,0.18 -0.29,-0.21 -0.93,-0.23 -0.09,-0.34 0.12,-1.46 0.14,-0.87 0.45,-1.25 0.1,-0.84 1.2,-1.32 0.14,0 0.1,0.18 1.03,0.21 0.83,-0.37 0.26,-0.34 0.21,-0.02 1.6,0.84 0.57,-0.11 0.55,0.27 0.36,-0.66 0.71,0.07 0.7,-0.75 0.6,-0.11 0.38,-0.62 0.45,-0.11 0.04,0.71 0.51,0.46 0.05,0.6 z"
//             fill={hoveredRegion === 'toshkent' ? '#60A5FA' : regionsData.toshkent.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('toshkent')}
//             onMouseEnter={() => setHoveredRegion('toshkent')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Toshkent shahri */}
//           <circle
//             d='m 618.94007,266.48972 0.05,-0.57 -0.09,-0.14 -0.24,0 -0.3,0.25 -0.13,0.37 -0.75,0.23 -0.71,0.75 -0.7,-0.07 -0.36,0.66 -0.55,-0.27 -0.57,0.11 -1.6,-0.84 -0.2,0.02 -0.26,0.34 -0.82,0.37 -1.03,-0.21 -0.11,-0.18 -0.14,0 -1.2,1.32 -0.1,0.85 -0.45,1.25 -0.14,0.87 -0.12,1.46 0.09,0.34 0.93,0.22 0.29,0.21 0.33,-0.18 0.48,0.25 0.32,0.84 0.16,0.05 0.36,-0.23 0.17,0.25 0.69,0.13 0.57,-0.06 0.01,-0.48 1.08,-0.87 1.09,0.09 0.72,0.23 -0.16,0.41 0.43,0.94 0.37,0.25 0.63,-0.09 1.05,-1.05 0.38,-0.87 -0.07,-1.18 -0.38,-0.73 -0.29,-0.27 0.48,-0.76 0.34,-0.25 -0.13,-0.34 0.05,-0.48 0.29,-0.68 0.15,-0.12 0.4,0.05 -0.09,-0.66 0.28,-0.27 0.12,-0.48 -0.11,-0.32 -0.24,-0.14 z'
//             fill={hoveredRegion === 'toshkent_city' ? '#60A5FA' : regionsData.toshkent_city.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('toshkent_city')}
//             onMouseEnter={() => setHoveredRegion('toshkent_city')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Namangan */}
//           <path
//             d="m 749.31007,281.14972 -0.5,-0.84 -0.46,-0.29 -0.45,-0.07 -0.45,0.24 -1.05,-0.35 -0.76,-0.03 -1.88,1.36 -0.35,0.08 -0.68,-0.3 -1.74,-1.12 -1.14,-0.31 -1.22,-0.14 -1.16,0.79 -0.46,-0.22 -0.56,-0.05 -1.62,-0.65 -0.32,-0.41 0.02,-0.88 -0.56,-0.06 -0.37,-0.2 -0.07,-0.21 0.64,-2 0.92,-1.61 0.78,-0.8 0.47,-0.82 0.56,-1.35 -0.05,-0.25 -1.08,-0.58 -0.85,-1.03 -0.28,-0.65 0.13,-1.3 -0.14,-0.37 -0.38,-0.28 -0.41,0.24 -0.34,0.56 -0.81,0.17 -0.25,-0.17 -0.06,-0.19 0.26,-1.3 -0.62,-1.06 -1.4,-1.35 -1.05,-2.21 -0.37,-0.1 -0.14,0.12 -0.11,1.69 -0.17,0.26 -0.31,0.07 -0.21,-0.41 -0.1,-0.68 -0.31,-0.27 -0.38,-0.03 -0.63,0.45 -0.12,0.4 0.41,0.66 -0.06,0.56 -0.27,0.21 -0.42,-0.26 -0.41,-0.71 -0.1,-0.46 0.09,-0.43 0.84,-1.1 0.46,-0.83 0.07,-0.47 -0.24,-1.41 0.13,-0.3 -0.06,-0.74 0.43,-0.9 -0.35,-0.61 -1.14,-0.05 -0.36,0.1 -0.77,0.72 -0.76,1.36 -0.44,0.5 -1.26,0.43 -0.24,0.35 0.05,0.42 0.32,0.24 1.14,0.11 0.57,0.23 0.5,0.78 0.13,0.68 -0.34,1.22 -0.44,0.81 -0.04,0.41 0.8,1.23 -0.29,0.66 -0.66,0.72 -0.36,0.7 -0.27,0.98 -0.22,0.01 -0.36,-0.25 -0.26,0.25 -0.32,0.72 -0.6,0.49 -0.17,0.58 -0.17,0.04 -0.25,0.95 -0.38,0.32 -0.6,-0.16 -0.61,-0.69 -0.4,-0.22 -0.88,-0.02 -0.42,0.35 -0.67,0.14 -0.82,-0.51 -0.32,0.07 -1.44,1.72 -0.05,0.41 0.25,0.77 -0.26,0.85 0,0.53 0.18,0.37 0.86,0.37 0.3,0.72 -0.89,2 -0.32,1.99 -0.71,1.61 -0.03,0.37 -1.03,1.12 -0.53,0.04 -0.26,-0.17 -0.15,-0.29 -0.23,-1.77 -0.23,-0.49 -0.79,-0.83 -0.39,-0.19 -0.54,0.01 -0.51,0.3 -0.35,0.41 -0.23,1.41 -0.4,0.76 -0.8,0.75 -0.51,0.12 -0.38,-0.11 -0.14,-0.3 0.22,-2.39 -0.26,-1.43 -0.26,-0.42 -0.95,-0.63 -0.3,-0.04 -0.62,0.29 -0.13,0.4 0.04,0.54 -0.31,0.23 -0.28,-0.06 -0.43,-1.06 -0.32,-0.01 -0.35,0.3 -0.47,0.72 -0.48,-0.02 -0.26,0.15 -0.83,0.88 -0.5,0.29 -0.4,0.03 -1.21,-0.43 -0.41,-0.37 -0.61,-1.02 -0.8,-0.19 -1.23,-0.8 -0.59,0.03 -2.66,1.81 -0.56,-0.2 -0.54,-1.23 -0.92,-0.86 -0.86,-0.54 -0.58,-0.85 -0.53,-0.5 -0.27,-0.04 -0.71,0.32 -0.47,0.68 -0.83,2.06 -0.3,0.44 -0.33,0.16 -0.86,-0.35 -0.5,-0.61 -0.22,-0.9 0.03,-1.09 0.74,-0.95 0.18,-0.6 -0.1,-0.35 -0.62,-0.91 -0.25,-0.74 -0.07,-1.79 0.42,-0.92 0.25,-1.16 -0.49,-2.05 -2.55,-4.08 -0.42,-1.17 -0.19,-0.16 -1.21,-0.34 -0.31,0.03 -1.14,0.85 -1.23,-0.06 -1.52,0.48 -0.98,0.84 -0.41,0.74 -1.68,1.39 -2.08,0 -0.5,-0.54 0,0 -0.68,1.93 -2.97,4.11 0.67,7.3 1.91,2.62 0.66,1.34 0.24,2.33 0.03,1.75 -0.15,0.88 0.2,0.42 0,0 0.45,-0.02 0.73,0.4 0.27,0.68 1.1,0.89 0.07,0.62 0.32,0.24 0.88,1.19 0.68,0.02 0.55,1.37 1.01,1.25 0.39,0.89 1.11,1.65 0.46,1.18 0.27,0.01 0.12,0.37 0.97,0.83 0.56,1.37 0.83,0.31 0.53,0.47 0.73,0.99 -0.48,0.38 -0.17,-0.09 -0.29,0.18 0.08,0.32 -0.19,0.29 -0.37,0.1 -0.57,-0.25 -0.47,-1.21 -0.37,1.24 0.04,0.71 0.32,0.64 0.83,-0.24 1.23,0.1 0.85,0.45 -0.28,0.18 0.9,0.04 0.43,0.23 1,0.85 0.22,0.49 0,0 0.34,-0.09 0.26,-0.26 4.87,-1.25 3.38,-0.61 6.75,-0.1 0,0.22 -0.37,0.52 -1.36,1.66 0.83,1.97 1.88,1.85 5.58,2.73 0.4,0.08 0.76,-0.42 3.02,-2.85 0.76,-1 0.75,-1.45 1.23,-0.79 4.11,-2.23 3.44,-1.03 0,0 1.9,-1.21 -2.2,-2.67 2.03,-1.89 1.2,-0.8 8.59,-2.19 3.67,0.03 0.58,0.25 0.73,0.56 3.33,0.75 1.46,0.15 4.88,-0.44 0.53,-0.27 0.4,-0.46 1.26,-5.86 0,0 -0.42,-0.26 -0.45,-0.58 0.16,-0.33 1.26,-0.3 0.53,-0.41 0.47,-1.02 -0.45,-0.82 -0.77,-4.63 z m -70.46,14.69 -3.18,-4.31 -1.22,-0.9 -1.01,-0.03 -0.19,-0.68 0.27,-0.47 0.73,-0.56 -0.27,0.38 1.2,0.51 1.51,1.77 1.73,2.35 0.64,1.58 -0.21,0.36 z"
//             fill={hoveredRegion === 'namangan' ? '#60A5FA' : regionsData.namangan.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('namangan')}
//             onMouseEnter={() => setHoveredRegion('namangan')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Andijon */}
//           <path
//             d="m 750.33007,320.40972 -0.11,-3.61 -0.31,-0.84 -4.01,-1.28 -2.25,-0.45 -0.24,0.17 -0.33,0 -9.25,-1.57 -2.24,-3.46 -0.62,-0.65 -3.02,-1.56 -4.16,-0.6 -0.2,1.45 -3.03,-4.48 0,0 1.9,-1.21 -2.2,-2.67 2.03,-1.9 1.19,-0.8 8.59,-2.19 3.68,0.03 0.57,0.26 0.73,0.56 3.33,0.74 1.46,0.15 4.88,-0.44 0.53,-0.27 0.4,-0.45 1.26,-5.87 0,0 0.24,0.15 0.67,-0.01 2.85,-1.35 0.76,-0.18 1.22,-0.92 1.13,-1.24 0.69,-0.07 0.15,0.18 1.32,0.35 0.97,0.68 0.89,0.05 0.79,0.4 0.86,-0.09 0.78,0.17 0.66,0.32 0.26,1.17 -0.1,0.65 -0.82,1.52 0.01,0.22 0.18,0.22 0.15,-0.02 0.46,-0.72 0.23,-0.05 0.24,-0.03 0.47,0.24 0.42,0.39 1.32,2.26 0.58,0.69 0.2,2 0.77,0.55 1.2,0.35 1.33,0.65 1.57,0.58 0.55,-0.2 1.82,0.29 0.94,-0.4 0.92,-0.19 0.68,0.21 2.21,-0.56 0.72,0.02 0.82,0.45 1.52,1.67 0.38,1.05 0.17,0.15 0.66,0.16 0.51,-0.04 0.65,-0.25 0.19,-0.3 0.64,-0.33 0.4,-0.48 0.58,-0.02 0.35,-0.21 -0.15,-0.54 -0.58,-0.4 -0.35,-0.49 0.43,-1.42 0.23,-0.23 0.43,0.01 1.01,1.46 0.9,0.2 1.13,0.76 0.95,-0.52 1.5,0.07 0.43,0.38 0.23,0.97 -0.43,1.74 -0.43,0.61 -0.45,0.31 -2.88,1.21 -1.66,0.24 -0.63,0.87 -1.16,0.8 -1.4,0.78 -0.81,0.17 -0.05,0.23 -0.87,0.2 -1.34,0.74 -1,0.96 -1.54,0.5 -1.13,-0.15 -0.79,0.11 -0.31,0.36 -0.05,0.32 0.14,0.44 0.38,0.46 0.03,0.34 -0.74,0.61 -0.1,0.42 0.18,2.74 -0.07,1.07 -0.65,0.21 -0.52,-0.3 -0.96,-0.98 -1.5,-0.34 -0.32,0.37 -0.05,0.76 -0.87,0.63 -0.14,0.24 -0.21,1.4 -0.58,1.07 -0.67,0.16 -0.42,-0.04 -1.39,-1.12 -1.47,-0.07 -0.69,-0.38 -0.91,-0.87 -0.51,-0.18 -0.68,0.29 -0.21,-0.04 -1.37,-1.67 -0.55,-1 -1.39,-1.17 -0.4,-0.19 -0.98,0.43 -1.1,0.01 -0.4,0.54 0.15,0.28 1.12,0.38 0.32,0.31 0.46,1.03 1.05,0.32 0.41,0.56 -0.04,0.55 -0.35,0.4 -1.03,0.1 -0.27,0.19 -0.17,0.51 0.14,0.45 1.08,-0.11 0.26,0.37 0.23,1.47 0.49,0.53 0.24,0.75 -1.14,2.67 0.28,0.83 -0.07,0.64 -0.17,0.16 -0.3,0.06 -1.48,-0.38 -0.45,-0.27 -1.55,-1.6 -0.65,-0.46 -0.29,-0.1 -0.8,0.3 -0.32,-0.21 -0.5,-0.71 -0.29,-0.21 -0.9,0.01 -0.27,-0.11 -0.18,-0.4 0.33,-1.13 -0.06,-0.25 -0.45,-0.27 z"
//             fill={hoveredRegion === 'andijon' ? '#60A5FA' : regionsData.andijon.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('andijon')}
//             onMouseEnter={() => setHoveredRegion('andijon')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />

//           {/* Farg'ona */}
//           <path
//             d="m 673.77007,331.35972 0.1,-0.66 -0.23,-0.55 -0.74,-0.66 -2.91,-1.31 -1.63,-0.33 -1,-0.4 -0.32,0 -0.9,0.43 -0.43,-0.03 -0.46,-0.21 -0.33,-0.37 -0.46,-1.11 -0.29,-0.31 -0.28,-0.1 -0.15,-0.74 -0.91,-1.77 -0.06,-0.61 0.13,-0.2 0.81,-0.22 1,-0.81 1.19,-0.22 1.1,-0.57 2.05,-0.72 0.8,0 0.47,-0.41 0.12,-0.81 0.44,-0.44 0.14,-0.89 0.19,-0.4 0.4,-0.22 0.59,-0.08 0.77,0.07 0.48,-0.36 0.72,-0.02 0.43,-0.16 0.87,-1.11 1.11,-2.22 0.36,-0.38 0.65,-0.18 0.68,-0.73 0.51,-0.17 0.15,-0.28 0.41,-0.08 0.41,-0.5 0.97,-0.22 0.4,0.28 0.32,0.03 0.05,-0.66 -0.18,-0.99 0.31,-0.23 0.28,0.25 0.66,-0.04 0.44,-0.58 0.3,-1 0.58,-0.53 0.06,-0.26 0,0 0.34,-0.09 0.26,-0.26 4.87,-1.25 3.37,-0.61 6.76,-0.1 0,0.22 -0.37,0.52 -1.36,1.66 0.83,1.97 1.87,1.86 5.59,2.73 0.4,0.08 0.75,-0.42 3.02,-2.85 0.76,-0.99 0.74,-1.45 1.24,-0.8 4.11,-2.23 3.44,-1.03 0,0 3.03,4.48 0.2,-1.45 4.16,0.6 3.02,1.56 0.62,0.65 2.24,3.46 9.25,1.57 0.33,0 0.24,-0.17 2.25,0.45 4.01,1.28 0.31,0.84 0.11,3.61 0,0 -0.49,0.04 -1.07,-0.26 -0.39,0.08 -0.51,1.38 -0.3,0.5 -0.63,0.6 -0.46,0.24 -0.37,0.07 -0.59,-0.2 -0.89,-0.59 -0.46,1.04 0.45,1.71 -0.14,0.34 -0.64,0.71 -0.07,0.57 -0.29,0.4 -1.37,0.41 -1.04,1.34 -0.51,0.38 -0.8,1.13 -1.19,0.52 -0.93,0.86 -0.12,0.26 0.21,0.5 0.98,0.23 0.98,0.89 -0.07,0.49 -1.11,1.03 -0.46,1.08 -0.29,0.32 -0.66,0.33 -0.62,-0.02 -1.27,-0.92 -2.02,-0.47 -0.48,0.39 -0.13,0.48 0.05,0.27 0.74,1.13 0.02,0.53 -0.75,0.5 -0.54,-0.03 -2.49,1.59 -1.32,0.42 -0.92,0.66 -0.35,0.06 -0.25,-0.14 -0.46,-0.85 -0.43,-0.51 -0.24,-0.07 -0.36,-0.4 -0.15,-0.36 0.17,-1.9 -0.19,-0.81 -0.68,-0.91 -0.52,-0.36 -0.77,-0.08 -1.23,0.12 -0.11,0.84 0.24,1.43 -0.21,0.95 0.08,0.56 -0.12,0.2 -0.29,-0.03 -0.81,-0.96 -1,0 -0.55,0.19 -0.92,-0.58 -1.77,-0.79 -0.22,-0.54 0.19,-1.35 -0.24,-0.52 -1.3,-0.03 -1.54,-0.4 -0.63,-0.5 -1.09,-1.23 -0.41,-0.27 -0.49,-0.15 -0.5,0.22 -0.62,0.06 -0.16,-0.31 0.09,-0.39 -0.32,-0.25 -1.53,0.64 -0.75,0.1 -0.27,-0.1 -0.15,-0.27 -0.02,-1 -1.54,0.11 -1.01,-0.34 -1,-0.09 -0.83,0.11 -1.38,0.46 -0.98,-0.02 -0.61,0.21 -2.56,1.78 -1.95,0.35 -2.07,0.9 -0.45,0.29 -0.14,0.27 0.31,0.92 -0.11,0.97 -2.38,0.07 -1.95,0.35 -0.27,-0.09 -1.7,1.26 -2.47,1.1 -1.58,0.33 -1.4,0.12 -3.13,0.69 -0.83,-0.34 -1.18,-2.14 -0.32,-0.88 -0.72,-0.39 -0.53,-0.94 0.13,-0.11 0.07,-1.28 0.37,-0.99 -0.55,-1.75 z"
//             fill={hoveredRegion === 'fargona' ? '#60A5FA' : regionsData.fargona.color}
//             stroke="#333"
//             strokeWidth="2"
//             className="cursor-pointer transition-all duration-300 hover:opacity-80"
//             onClick={() => setSelectedRegion('fargona')}
//             onMouseEnter={() => setHoveredRegion('fargona')}
//             onMouseLeave={() => setHoveredRegion(null)}
//           />
//         </svg>

//         {/* Tooltip */}
//         {hoveredRegion && (
//           <div className="absolute top-4 right-4 bg-white rounded-xl shadow-xl p-4 border-2 border-blue-500 animate-pulse">
//             <p className="font-bold text-gray-900">{regionsData[hoveredRegion].name}</p>
//             <p className="text-sm text-gray-600">Bosing, batafsil ma'lumot olish uchun</p>
//           </div>
//         )}
//       </div>

//       {/* Legend */}
//       <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
//         <div className="flex items-center gap-2">
//           <div className="w-4 h-4 rounded bg-[#90EE90]"></div>
//           <span className="text-sm text-gray-600">Oddiy holat</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-4 h-4 rounded bg-[#FFB84D]"></div>
//           <span className="text-sm text-gray-600">E'tibor talab etadi</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-4 h-4 rounded bg-[#60A5FA]"></div>
//           <span className="text-sm text-gray-600">Tanlangan</span>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedRegion && (
//         <Modal region={selectedRegion} onClose={() => setSelectedRegion(null)} />
//       )}

//       <style>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };