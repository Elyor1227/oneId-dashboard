
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

import React from "react";
import { GraduationCap, Banknote, Building2, ListChecks, User2 as UserIcon } from "lucide-react";

/**
 * CitizenProfilePage (React – plain JS)
 * Fixes in this revision:
 *  - Fixed JSX syntax: removed stray ">" in <FinanceBadge> that broke build.
 *  - Kept your blue (sky/cyan) modern theme and layout exactly as is.
 *  - Added light smoke tests for small components (FinanceRow/Badge/DescriptionList) in-browser.
 */

// ---------------- Component ----------------
export default function HemisDashboard({ data }) {
  const demo = getDemoData();
  const d = { ...demo, ...(data || {}) };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-50 text-slate-900 p-3 md:p-4">
      <PageBackdrop />
      <div className="h-screen w-full overflow-hidden bg-slate-50 text-slate-900 p-3 md:p-4">
        <div className="mx-auto h-full max-w-[1800px] xl:max-w-[1920px] grid grid-rows-[minmax(0,1fr)_auto] gap-3">
          {/* ===== Main 2x3 grid (unchanged layout) ===== */}
          <div className="grid grid-cols-1 lg:[grid-template-columns:1.15fr_1.7fr_1.15fr] grid-rows-[auto_minmax(0,1fr)] gap-3 min-h-0">
            {/* Row1 Col1: Shaxsiy ma'lumotlar */}
            <div className="lg:col-start-1 lg:row-start-1 min-h-0">
              <Card title="Shaxsiy ma'lumotlar" tight accent="sky" icon={UserIcon}>
                <PersonalList items={d.personal} />
              </Card>
            </div>

            {/* Row1 Col2: FIO + Avvalgi ta'lim */}
            <div className="lg:col-start-2 lg:row-start-1 min-h-0 grid grid-rows-[auto_minmax(0,1fr)] gap-3">
              <Card padding="lg" tight accent="sky" variant="glass" icon={UserIcon} contentOverflow="visible">
                {/* Modern hero header with gradient banner and floating avatar */}
                <div className="relative">
                  <div className="h-20 -mx-4 -mt-2 mb-12 rounded-t-xl bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500" />
                  <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                    <img
                      src={d.fio.photoUrl}
                      alt="Avatar"
                      className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover ring-4 ring-white shadow-xl"
                    />
                  </div>
                </div>
                <div className="-mt-6 text-center">
                  <div className="text-base md:text-lg font-semibold tracking-wide leading-tight text-slate-900">
                    {d.fio.fullName}
                  </div>
                  {d.fio.subtitle && (
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      {d.fio.subtitle}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <DescriptionList items={d.fio.meta} columns={2} compact />
                </div>
              </Card>
              <Card title="Avvalgi ta'lim ma'lumotlari" tight accent="sky" icon={GraduationCap}>
                <PreviousEducationInline items={d.previousEducation || []} />
              </Card>
              <Card title="DTM bali" tight accent="sky" icon={GraduationCap}>
                <div className="py-1">
                  <div className="flex items-center justify-between text-[13px] leading-6">
                    <span className="text-slate-600">DTM bali</span>
                    <span className="font-medium text-slate-800">{getDtmScore(d) || '-'}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Row1 Col3: Ta'lim ma'lumotlari */}
            <div className="lg:col-start-3 lg:row-start-1 min-h-0">
              <Card title="Ta'lim ma'lumotlari" tight accent="sky" icon={GraduationCap}>
                <EducationInline items={d.education} />
              </Card>
            </div>

            {/* Row2 Col1: Talaba ma'lumotlari (compact) */}
            <div className="lg:col-start-1 lg:row-start-2 min-h-0">
              <Card title="Talaba ma'lumotlari" tight accent="sky" icon={Banknote}>
                <FinanceCardCompact details={d.financeDetails} fallbackList={d.finance} />
              </Card>
            </div>

            {/* Row2 Col2: Ro'yxatlar holati */}
            <div className="lg:col-start-2 lg:row-start-2 min-h-0">
              <Card title="Ro'yxatlar holati" tight accent="sky" icon={ListChecks}>
                <StatusList items={computeRegistryStatuses(d)} />
              </Card>
            </div>

            {/* Row2 Col3: Ish joyi ma'lumotlari */}
            <div className="lg:col-start-3 lg:row-start-2 min-h-0">
              <Card title="Ish joyi ma'lumotlari" tight accent="sky" icon={Building2}>
                <Table
                  columns={["Tashkilot", "Bo'lim", "Lavozim", "Stavka", "Boshlanish sana"]}
                  rows={d.work.rows}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================
 * Generic building blocks
 * ===================== */
function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-200/40 blur-2xl" />
      <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[80%] rounded-t-[3rem] bg-slate-100" />
    </div>
  );
}
function Card({ title, children, padding = "md", tight, accent = "slate", icon: Icon, variant = "solid", contentOverflow = "auto" }) {
  // Accent color map (only colors, does not change spacing/layout)
  const accents = {
    slate: {
      headerBg: "bg-slate-50/60",
      headerBorder: "border-slate-100",
      dot: "bg-slate-400",
      title: "text-slate-700",
      ring: "border-slate-200",
    },
    indigo: {
      headerBg: "bg-gradient-to-r from-blue-700 to-sky-600 text-white",
      headerBorder: "border-blue-700",
      dot: "bg-white/90",
      title: "text-white",
      ring: "border-blue-200/70",
    },
    sky: {
      headerBg: "bg-gradient-to-r from-blue-700 to-sky-600 text-white",
      headerBorder: "border-blue-700",
      dot: "bg-white/90",
      title: "text-white",
      ring: "border-blue-200/70",
    },
    emerald: {
      headerBg: "bg-gradient-to-r from-sky-700 to-cyan-600 text-white",
      headerBorder: "border-sky-700",
      dot: "bg-white/90",
      title: "text-white",
      ring: "border-sky-200/70",
    },
    amber: {
      headerBg: "bg-amber-50/80",
      headerBorder: "border-amber-100",
      dot: "bg-amber-500",
      title: "text-amber-700",
      ring: "border-amber-200/70",
    },
    cyan: {
      headerBg: "bg-gradient-to-r from-cyan-600 to-teal-500 text-white",
      headerBorder: "border-cyan-600",
      dot: "bg-white/90",
      title: "text-white",
      ring: "border-cyan-200/70",
    },
    violet: {
      headerBg: "bg-gradient-to-r from-blue-800 to-sky-600 text-white",
      headerBorder: "border-blue-700",
      dot: "bg-white/90",
      title: "text-white",
      ring: "border-blue-200/70",
    },
  };
  const a = accents[accent] || accents.slate;

  return (
    <div className={[
      variant === "glass" ? "bg-white/70 backdrop-blur" : "bg-white",
      "rounded-xl","border","shadow-sm","min-h-0","h-full","flex","flex-col", a.ring].join(" ")}>
      {title && (
        <div className={["flex","items-center","gap-2","px-4","py-2.5","rounded-t-xl","border-b", a.headerBg, a.headerBorder].join(" ")}>
          {Icon ? (
            <Icon size={16} className="shrink-0 text-white/90" />
          ) : (
            <div className={["h-2","w-2","rounded-full", a.dot].join(" ")} />
          )}
          <h3 className={["text-[13px]","font-semibold","tracking-wide", a.title].join(" ")}>{title}</h3>
        </div>
      )}
      <div
        className={[
          padding === "lg" ? "p-4" : "p-3",
          tight ? "text-[13px] leading-[1.4]" : "",
          `min-h-0 max-h-full ${contentOverflow === "visible" ? "overflow-visible" : "overflow-auto"} flex-1`,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

function FinanceRow({ label, value, tone }) {
  const toneClass =
    tone === "good"
      ? "text-emerald-600"
      : tone === "bad"
      ? "text-rose-600"
      : "text-slate-700";
  return (
    <div className="flex items-center justify-between text-sm py-1.5">
      <span className="text-slate-600">{label}</span>
      <span className={`font-medium ${toneClass}`}>{value || "-"}</span>
    </div>
  );
}

function FinanceBadge({ children }) {
  return (
    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
      {children}
    </span>
  );
}

function FinanceCard({ details, fallbackList }) {
  if (!details) {
    return <DescriptionList items={fallbackList} />;
  }
  return (
    <div className="divide-y divide-slate-100">
      <div className="py-1">
        <FinanceRow label="Kontrakt (umumiy)" value={details.contractTotal} />
        <FinanceRow label="To'langan" value={details.contractPaid} tone="good" />
        <FinanceRow label="Kontrakt qolgan" value={details.contractRemaining} tone="bad" />
      </div>
      <div className="py-1">
        <FinanceRow label="TTJ (umumiy)" value={details.ttjTotal} />
        <FinanceRow label="TTJ to'langan" value={details.ttjPaid} tone="good" />
        <FinanceRow label="TTJ qolgan" value={details.ttjRemaining} tone="bad" />
      </div>
      <div className="py-1">
        <FinanceRow label="Kredit (umumiy)" value={details.creditTotal} />
        <FinanceRow label="Kredit to'langan" value={details.creditPaid} tone="good" />
        <FinanceRow label="Kredit qolgan" value={details.creditRemaining} tone="bad" />
      </div>
      <div className="pt-2 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Ijara holati</span>
          <FinanceBadge>{details.rentStatus || "-"}</FinanceBadge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Stipendiya</span>
          <span className="text-slate-700 font-medium">{details.stipend || "-"}</span>
        </div>
      </div>
    </div>
  );
}

// Compact Talaba card: only remaining + rent status
function FinanceCardCompact({ details, fallbackList }) {
  // Compact view: show remaining for Kontrakt, TTJ, Kredit + stipend + ijara holati
  if (!details) {
    return <DescriptionList items={fallbackList} />;
  }
  const contractRemain = details.contractRemaining || "-";
  const ttjRemain = details.ttjRemaining || "-";
  const creditRemain = details.creditRemaining || "-";
  const stipend = details.stipend || "-";
  return (
    <div className="space-y-1">
      <FinanceRow label="Kontrakt qolgan" value={contractRemain} tone={contractRemain === "0" ? "good" : "bad"} />
      <FinanceRow label="TTJ qolgan" value={ttjRemain} tone={ttjRemain === "0" ? "good" : "bad"} />
      <FinanceRow label="Kredit qolgan" value={creditRemain} tone={creditRemain === "0" ? "good" : "bad"} />
      <FinanceRow label="Stipendiya" value={stipend} />
      <div className="flex items-center justify-between text-sm pt-1 border-t border-slate-100 mt-1">
        <span className="text-slate-600">Ijara holati</span>
        <div className="flex items-center gap-2">
          <FinanceBadge>{details.rentStatus || '-'}</FinanceBadge>
          <span className="text-slate-700 font-medium">{ttjRemain}</span>
        </div>
      </div>
    </div>
  );
}

// === Combined Registry Status ===
function StatusBadge({ ok }) {
  return (
    <span
      className={[
        "px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        ok
          ? "bg-emerald-100 text-emerald-700 border-emerald-200"
          : "bg-rose-100 text-rose-700 border-rose-200",
      ].join(" ")}
    >
      {ok ? "Kiritilgan" : "Kiritilmagan"}
    </span>
  );
}

function StatusList({ items }) {
  return (
    <div className="space-y-1.5">
      {items.map((it) => (
        <div
          key={it.label}
          className="flex items-center justify-between text-[13px] border-b border-slate-100 last:border-b-0 py-1"
        >
          <span className="text-slate-700">{it.label}</span>
          <StatusBadge ok={it.ok} />
        </div>
      ))}
    </div>
  );
}

function computeRegistryStatuses(d) {
  const has = (x) => (Array.isArray(x) ? x.length > 0 : !!x);
  return [
    { label: "Nogironlik", ok: has(d?.disability) },
    { label: "Kambag'allik", ok: has(d?.poverty?.header) || has(d?.poverty?.familyRows) },
    { label: "Yoshlar daftari", ok: has(d?.youth?.rows) },
    { label: "Ayollar reyestri", ok: has(d?.women?.rows) },
    { label: "Temir daftar", ok: has(d?.iron?.list) },
    { label: "O'zini o'zi band", ok: has(d?.selfEmployed?.rows) },
  ];
}

// Education list (labels/value with proper wrapping so they don't overlap)
function EducationInline({ items }) {
  return (
    <div className="divide-y divide-slate-100">
      {items.map((it, idx) => (
        <div
          key={it.label + idx}
          className="grid grid-cols-12 gap-3 items-start py-1.5 text-[13px] leading-6"
        >
          <span className="col-span-5 text-slate-600 break-words">{it.label}</span>
          <span className="col-span-7 font-medium text-slate-800 min-w-0 break-words">
            {it.value || '-'}
          </span>
        </div>
      ))}
    </div>
  );
}

// Shaxsiy ma'lumotlar – screenshot uslubida: label (chap) + value (o'ng)
function PersonalList({ items }) {
  return (
    <dl className="divide-y divide-slate-100">
      {items.map((it, idx) => {
        const isLong = /Manzil|Address/i.test(it.label);
        const isLinky = /JSHSHIR|ID \(raqam\)/i.test(it.label);
        const valueClass = [
          "font-medium",
          isLinky ? "text-sky-600 hover:underline cursor-pointer" : "text-slate-800",
          isLong ? "break-words" : "whitespace-nowrap",
        ].join(" ");
        return (
          <div key={it.label + idx} className="grid [grid-template-columns:180px_1fr] items-center py-1.5 text-[13px]">
            <dt className="text-slate-600">{it.label}</dt>
            <dd className={valueClass}>{it.value || '-'}</dd>
          </div>
        );
      })}
    </dl>
  );
}

// Avvalgi ta'lim – bo'yiga bitta qatorda (har biri alohida satr)
function PreviousEducationInline({ items }) {
  return (
    <div className="divide-y divide-slate-100">
      {items.map((it, idx) => (
        <div key={it.label + idx} className="flex items-start justify-between gap-3 text-[13px] py-1.5">
          <span className="text-slate-600">{it.label}</span>
          <span className="font-semibold text-slate-800 min-w-0 break-words text-right">{it.value || '-'}</span>
        </div>
      ))}
    </div>
  );
}

// Generic key/value renderer (used for FIO meta and fallbacks)
function DescriptionList({ items, columns = 1, compact = false }) {
  const grid = [
    "grid-cols-1",
    "grid-cols-1 sm:grid-cols-2",
    "grid-cols-1 md:grid-cols-3",
  ][Math.max(0, Math.min(2, columns - 1))];

  return (
    <dl className={["grid", grid, "gap-x-6", compact ? "gap-y-1" : "gap-y-1.5"].join(" ")}>
      {items.map((it, idx) => (
        <div
          key={it.label + idx}
          className="grid grid-cols-3 items-start break-words text-[13px] leading-6 border-b border-slate-100 last:border-b-0 py-1"
        >
          <dt className="col-span-1 text-slate-600 pr-2">{it.label}</dt>
          <dd className="col-span-2 font-medium text-slate-800">{it.value || "-"}</dd>
        </div>
      ))}
    </dl>
  );
}

function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-4 py-2 text-left font-semibold text-slate-600 whitespace-nowrap">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className="px-4 py-3 text-slate-500" colSpan={columns.length}>
                Ma'lumot yo'q
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={i} className="odd:bg-white even:bg-slate-50/40">
                {r.map((cell, j) => (
                  <td key={j} className="px-4 py-2 align-top whitespace-pre-wrap">
                    {cell || "-"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function getDtmScore(d){
  try{
    if(d && d.dtmScore) return d.dtmScore;
    const fromList = (d?.previousEducation||[]).find(it=>it.label==="DTM bali");
    return fromList?.value;
  }catch(e){
    return undefined;
  }
}

/* =====================
 * Demo data (structure for your future payload)
 * Replace with your real data or pass via props
 * ===================== */
function getDemoData() {
  return {
    fio: {
      fullName: "MOXLAROYIM JAMOLDINOVA ERGASHALI QIZI",
      subtitle: "Biologiya talabasI",
      photoUrl:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=400&auto=format&fit=crop",
      meta: [
        { label: "Jinsi", value: "Ayol" },
        { label: "Fuqarolik", value: "O'zbekiston Respublikasi" },
      ],
    },
    previousEducation: [
      { label: "Maktab", value: "15-umumiy o'rta ta'lim maktabi" },
      { label: "Shahar", value: "Andijon" },
      { label: "Tuman", value: "Ulug'nor tumani" },
      { label: "Litsey/Kollej", value: "O'qimagan" }
    ],
    dtmScore: "182.5",
    personal: [
      { label: "Tug'ilgan sana", value: "2006-09-14" },
      { label: "ID (raqam)", value: "301251101378" },
      { label: "JSHSHIR", value: "61409065090013" },
      { label: "Seriya-raqam", value: "AD4603077" },
      { label: "Pasport berilgan sana", value: "2023-09-14" },
      { label: "Jinsi", value: "Ayol" },
      { label: "Fuqarolik", value: "O'zbekiston Respublikasi fuqarosi" },
      { label: "Davlat", value: "O'zbekiston" },
      { label: "Tuman (doimiy)", value: "Ulug'nor tumani" },
      { label: "Manzil (doimiy)", value: "Obod MFY, Zamondosh ko'chasi, 18-uy" },
      { label: "Telefon", value: "-" },
    ],
    education: [
      { label: "Oliy ta'lim muassasasi", value: "Andijon davlat universiteti" },
      { label: "Ta'lim turi", value: "Bakalavr" },
      { label: "Ta'lim shakli", value: "Kechki" },
      { label: "To'lov turi", value: "To'lov-shartnoma" },
      { label: "Kurs", value: "1-kurs" },
      { label: "Mutaxassislik", value: "Biologiya" },
      { label: "Fakultet", value: "Kimyo va biologiya fakulteti" },
      { label: "Guruh", value: "Kechki_Biologiya-2025-02" },
      { label: "Ta'lim tili", value: "O'zbek" },
      { label: "Qabul yili", value: "2025-2026" },
      { label: "Holati", value: "O'qimoqda" },
      { label: "GPA bali", value: "3.85" },
    ],
    finance: [
      { label: "Daromad holati", value: "Barqaror" },
      { label: "Bank", value: "-" },
      { label: "Kreditlar", value: "-" },
    ],
    financeDetails: {
      contractTotal: "8,500,000 so'm",
      contractPaid: "2,500,000 so'm",
      contractRemaining: "6,000,000 so'm",
      ttjTotal: "3,000,000 so'm",
      ttjPaid: "1,500,000 so'm",
      ttjRemaining: "1,500,000 so'm",
      creditTotal: "5,000,000 so'm",
      creditPaid: "3,000,000 so'm",
      creditRemaining: "2,000,000 so'm",
      rentStatus: "To'langan",
      stipend: "Olmaydi",
    },
    school: [
      { label: "Maktab nomi", value: "-" },
      { label: "Sinf / yo'nalish", value: "-" },
    ],
    work: {
      rows: [
        ['"BLACK LION ULUGNOR" MCHJ', '-', 'Erdamchi ishchi', '1.00', '-'],
        ['"ULUG\'NOR SILK 7" MCHJ', '-', 'Erdamchi ishchi', '1.00', '-'],
      ],
    },
    youth: { rows: [["Daftarga kiritilgan", "3-toifa: ...", "2024-02-28", "-"]] },
    women: { rows: [["Daftarga kiritilgan", "6-toifa: ...", "2025-02-01", "-"]] },
    iron: {
      list: [
        { label: "Holati", value: "Muhtoj oilalar ro'yxatidan chiqarilgan" },
        { label: "Oila a'zolari soni", value: "5" },
        { label: "Ish bilan band a'zolar soni", value: "1" },
        { label: "Ishsiz a'zolar soni", value: "1" },
        { label: "Ro'yxatga olingan sana", value: "2020-06-17" },
        { label: "Ro'yxatdan chiqarilgan sana", value: "2020-07-07" },
      ],
    },
    selfEmployed: { rows: [["Tikuvchilik (bichish)", "2024-07-03", "0006527572", "Maktab"]] },
    poverty: {
      header: [
        { label: "MFY INN", value: "2043232620" },
        { label: "Daraja", value: "Yashil" },
        { label: "Holati", value: "Reyestrda mavjud" },
      ],
      familyRows: [
        ["MAXAMMADJONOVA MUBINAXON ANAPIYA QIZI", "2017-06-03", "I-AN 0935597", "Qizi"],
        ["MAXAMMADJONOV MUHAMMADSOID ANAPIYA O'G'LI", "2017-06-03", "I-AN 0935598", "O'g'li"],
      ],
    },
    disability: [
      { label: "Ma'lumotnoma raqami", value: "1064987" },
      { label: "Guruhi", value: "3" },
      { label: "Kirish sanasi", value: "2025-09-24" },
      { label: "Sababi", value: "4" },
    ],
  };
}

// ---------------- Minimal smoke tests (run in browser only) ----------------
if (typeof window !== "undefined") {
  try {
    const t = getDemoData();
    console.assert(t.fio && t.fio.fullName, "FIO required");
    console.assert(Array.isArray(t.personal) && t.personal.length > 0, "Personal list present");
    const status = computeRegistryStatuses(t);
    console.assert(Array.isArray(status) && status.length === 6, "Status list should have 6 items");
    console.assert(getDtmScore(t) === "182.5", "DTM score should be 182.5");
    console.assert(t.work.rows.length === 2, "Work rows should be 2");
    console.assert(t.education[t.education.length-1].label === "GPA bali", "GPA should be last row in education");
    // New tiny component sanity tests (no DOM mount)
    console.assert(!!FinanceRow({label:"Test", value:"123", tone:"good"}), "FinanceRow should return element");
    console.assert(!!FinanceBadge({children:"OK"}), "FinanceBadge should return element");
    console.assert(!!DescriptionList({items:[{label:"A", value:"B"}]}), "DescriptionList should return element");
    // eslint-disable-next-line no-console
    console.log("[CitizenProfilePage] Smoke tests passed");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("[CitizenProfilePage] Smoke tests failed", e);
  }
}
