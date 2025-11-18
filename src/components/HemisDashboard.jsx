
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

import React, { useState } from 'react';
import { MapPin,   Building2, Users, GraduationCap, TrendingUp, FileText, DollarSign, Calendar, Briefcase, Handshake, Award, X, Menu } from 'lucide-react';

const HemisDashboard = () => {
    const [activeSection, setActiveSection] = useState('yutuqlar');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'yutuqlar', label: 'Yutuqlar', icon: TrendingUp },
    { id: 'ijara', label: 'Ijara', icon: Building2 },
    { id: 'mablaglar', label: "Mablag'lar", icon: DollarSign },
    { id: 'dasturlar', label: "O'quv dasturlari", icon: FileText },
    { id: 'kvota', label: 'Qabul kvotalari', icon: Users },
    { id: 'muddat', label: "O'qish muddati", icon: Calendar },
    { id: 'tolov', label: "To'lov-kontrakt", icon: DollarSign },
    { id: 'amaliyot', label: 'Amaliyot', icon: Briefcase },
    { id: 'hamkorlar', label: 'Hamkorlar', icon: Handshake },
    { id: 'malaka', label: 'Malaka va daraja', icon: Award }
  ];

  const sectionContent  = {
    yutuqlar: {
      title: "Texnikum Erishgan Yutuqlar",
      items: [
        { year: "2024", achievement: "Viloyat miqyosida 'Eng yaxshi tibbiy texnikum' mukofoti" },
        { year: "2023", achievement: "90% bitiruvchilar ish bilan ta'minlangan" },
        { year: "2023", achievement: "Respublika ko'rgazmasida 2-o'rin" },
        { year: "2022", achievement: "Zamonaviy laboratoriyalar ochildi" }
      ]
    },
    ijara: {
      title: "Ijara Ma'lumotlari",
      data: [
        { label: "Bino maydoni", value: "5,000 m²" },
        { label: "Ijara shakli", value: "Uzoq muddatli ijara" },
        { label: "Ijara muddati", value: "25 yil" },
        { label: "Ijara to'lovi", value: "Yillik shartnoma asosida" }
      ]
    },
    mablaglar: {
      title: "Moliyaviy Ko'rsatkichlar",
      budget: [
        { category: "Umumiy byudjet", amount: "2,5 mlrd so'm", percent: 100 },
        { category: "Ta'lim xarajatlari", amount: "1,2 mlrd so'm", percent: 48 },
        { category: "Infratuzilma", amount: "800 mln so'm", percent: 32 },
        { category: "Maosh fondi", amount: "500 mln so'm", percent: 20 }
      ]
    },
    dasturlar: {
      title: "O'quv Dasturlari",
      programs: [
        { code: "5110700", name: "Hamshiralik ishi", duration: "2 yil 10 oy" },
        { code: "5110900", name: "Laboratoriya diagnostikasi", duration: "2 yil 10 oy" },
        { code: "5111000", name: "Stomatologiya", duration: "2 yil 10 oy" },
        { code: "5110800", name: "Dorivor vositalar texnologiyasi", duration: "2 yil 10 oy" }
      ]
    },
    kvota: {
      title: "Qabul Kvotalari (2024-2025)",
      quotas: [
        { program: "Hamshiralik ishi", davlat: 150, kontrakt: 200 },
        { program: "Laboratoriya diagnostikasi", davlat: 80, kontrakt: 120 },
        { program: "Stomatologiya", davlat: 60, kontrakt: 100 },
        { program: "Dorivor vositalar texnologiyasi", davlat: 70, kontrakt: 90 }
      ]
    },
    muddat: {
      title: "O'qish Muddatlari",
      durations: [
        { base: "9-sinf asosida", duration: "3 yil 10 oy", form: "Kunduzgi" },
        { base: "11-sinf asosida", duration: "2 yil 10 oy", form: "Kunduzgi" },
        { base: "9-sinf asosida", duration: "4 yil", form: "Sirtqi" },
        { base: "11-sinf asosida", duration: "3 yil 4 oy", form: "Sirtqi" }
      ]
    },
    tolov: {
      title: "To'lov-Kontrakt Miqdorlari (2024-2025)",
      payments: [
        { program: "Hamshiralik ishi", year: "7,500,000 so'm", month: "625,000 so'm" },
        { program: "Laboratoriya diagnostikasi", year: "8,200,000 so'm", month: "683,333 so'm" },
        { program: "Stomatologiya", year: "9,000,000 so'm", month: "750,000 so'm" },
        { program: "Dorivor vositalar", year: "7,800,000 so'm", month: "650,000 so'm" }
      ]
    },
    amaliyot: {
      title: "Amaliyot O'tash Joylari",
      locations: [
        { name: "Surxondaryo viloyat shifoxonasi", type: "Asosiy hamkor", students: "250 ta talaba" },
        { name: "Sho'rchi tuman markaziy shifoxonasi", type: "Hamkor muassasa", students: "150 ta talaba" },
        { name: "Jarqo'rg'on tuman shifoxonasi", type: "Hamkor muassasa", students: "100 ta talaba" },
        { name: "Termiz davlat tibbiyot shifoxonasi", type: "Hamkor muassasa", students: "80 ta talaba" }
      ]
    },
    hamkorlar: {
      title: "Hamkor Tashkilotlar",
      partners: [
        { name: "Surxondaryo viloyat SSV boshqarmasi", type: "Davlat muassasasi" },
        { name: "Termiz davlat universiteti", type: "Ta'lim muassasasi" },
        { name: "Ajiniyoz nomidagi Nukus davlat pedagogika instituti", type: "Ta'lim muassasasi" },
        { name: "MEDLINE Diagnostika Markazi", type: "Xususiy klinika" },
        { name: "FARMAMED dorixona tarmog'i", type: "Xususiy kompaniya" }
      ]
    },
    malaka: {
      title: "Bitiruvchilar Malakasi va Darajasi",
      qualifications: [
        { direction: "Hamshiralik ishi", degree: "Hamshira", level: "O'rta maxsus" },
        { direction: "Laboratoriya diagnostikasi", degree: "Laborant", level: "O'rta maxsus" },
        { direction: "Stomatologiya", degree: "Stomatologik hamshira", level: "O'rta maxsus" },
        { direction: "Dorivor vositalar", degree: "Farmatsevt", level: "O'rta maxsus" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Universitet rasmi va ma'lumotlari */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-68 h-68 bg-white rounded-2xl shadow-2xl overflow-hidden flex-shrink-0 border-4 border-white/30">
              <img 
                src="https://kasbiy.edu.uz/api/public/download/xwWzM196531262.png" 
                alt="MEDSTART Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">MEDSTART TIBBIYOT TEXNIKUMI</h1>
              <p className="text-blue-100 text-lg">Nodavlat ta'lim muassasasi</p>
              <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5" />
                <p className="text-base text-blue-100">Sho'rchi tumani, Surxondaryo viloyati</p>
              </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <p className="text-sm text-blue-100 mb-1">Umumiy sig'im</p>
              <p className="text-3xl font-bold">9,999</p>
              <p className="text-xs text-blue-100 mt-1">talaba</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <TrendingUp className="w-8 h-8 mx-auto mb-3" />
              <p className="text-sm text-blue-100 mb-1">Ish bilan ta'minlanish</p>
              <p className="text-3xl font-bold">90%</p>
              <p className="text-xs text-blue-100 mt-1">bandlik darajasi</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <GraduationCap className="w-8 h-8 mx-auto mb-3" />
              <p className="text-sm text-blue-100 mb-1">Bitiruvchilar</p>
              <p className="text-3xl font-bold">967</p>
              <p className="text-xs text-blue-100 mt-1">mutaxassis</p>
            </div>
          </div>
          </div>
          
          {/* 3 ta ko'rsatkich bitta qatorda */}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Xarita bo'limi - Kattaroq */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 h-96">
          <div className="relative w-full h-full">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=67.7%2C37.8%2C67.9%2C38.0&layer=mapnik&marker=37.9,67.8"
              className="w-full h-full border-0"
              title="Texnikum joylashuvi"
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-bold text-gray-800">Joylashuv</p>
                  <p className="text-sm text-gray-600">Sho'rchi tumani, Surxondaryo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Menu */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 flex items-center justify-between lg:justify-center">
                <h3 className="font-bold text-lg">Bo'limlar</h3>
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden"
                >
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
              <div className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
                {sections.map(section => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        setMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-4 transition-all border-l-4 ${
                        activeSection === section.id
                          ? 'bg-blue-50 border-blue-600 text-blue-600 font-semibold'
                          : 'border-transparent text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
            {activeSection === 'yutuqlar' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.yutuqlar.title}</h2>
                <div className="space-y-4">
                  {sectionContent.yutuqlar.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg hover:shadow-md transition-shadow">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">{item.year}</div>
                      <p className="text-gray-700 flex-1 pt-2">{item.achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'ijara' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.ijara.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {sectionContent.ijara.data.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md">
                      <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                      <p className="text-xl font-bold text-purple-600">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'mablaglar' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.mablaglar.title}</h2>
                <div className="space-y-4">
                  {sectionContent.mablaglar.budget.map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-gray-800">{item.category}</h3>
                        <span className="text-lg font-bold text-green-600">{item.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{item.percent}% umumiy byudjetdan</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'dasturlar' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.dasturlar.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {sectionContent.dasturlar.programs.map((program, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                        {program.code}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'kvota' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.kvota.title}</h2>
                <div className="space-y-6">
                  {sectionContent.kvota.quotas.map((quota, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border-l-4 border-indigo-600">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-indigo-600" />
                        {quota.program}
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4 text-center shadow-md">
                          <p className="text-sm opacity-90 mb-1">Davlat grant</p>
                          <p className="text-3xl font-bold">{quota.davlat}</p>
                          <p className="text-xs opacity-75 mt-1">o'rin</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 text-center shadow-md">
                          <p className="text-sm opacity-90 mb-1">Kontrakt</p>
                          <p className="text-3xl font-bold">{quota.kontrakt}</p>
                          <p className="text-xs opacity-75 mt-1">o'rin</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4 text-center shadow-md">
                          <p className="text-sm opacity-90 mb-1">Jami</p>
                          <p className="text-3xl font-bold">{quota.davlat + quota.kontrakt}</p>
                          <p className="text-xs opacity-75 mt-1">o'rin</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'muddat' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.muddat.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {sectionContent.muddat.durations.map((dur, idx) => (
                    <div key={idx} className="bg-white border-2 border-pink-200 rounded-xl p-6 hover:border-pink-400 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-pink-100 p-2 rounded-lg">
                          <Calendar className="w-6 h-6 text-pink-600" />
                        </div>
                        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {dur.form}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{dur.base}</p>
                      <p className="text-2xl font-bold text-pink-600">{dur.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'tolov' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.tolov.title}</h2>
                <div className="space-y-6">
                  {sectionContent.tolov.payments.map((pay, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                          <DollarSign className="w-6 h-6" />
                          {pay.program}
                        </h3>
                      </div>
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-green-600 p-2 rounded-lg">
                                <Calendar className="w-5 h-5 text-white" />
                              </div>
                              <p className="text-gray-600 font-medium">Yillik to'lov</p>
                            </div>
                            <p className="text-3xl font-bold text-green-700">{pay.year}</p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-blue-600 p-2 rounded-lg">
                                <Calendar className="w-5 h-5 text-white" />
                              </div>
                              <p className="text-gray-600 font-medium">Oylik to'lov</p>
                            </div>
                            <p className="text-3xl font-bold text-blue-700">{pay.month}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'amaliyot' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.amaliyot.title}</h2>
                <div className="space-y-4">
                  {sectionContent.amaliyot.locations.map((loc, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                          <Briefcase className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-1">{loc.name}</h3>
                          <div className="flex flex-wrap gap-3 mt-2">
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                              {loc.type}
                            </span>
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                              {loc.students}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'hamkorlar' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.hamkorlar.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {sectionContent.hamkorlar.partners.map((partner, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-violet-600">
                      <div className="flex items-start gap-3">
                        <Handshake className="w-6 h-6 text-violet-600 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">{partner.name}</h3>
                          <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">
                            {partner.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'malaka' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{sectionContent.malaka.title}</h2>
                <div className="space-y-4">
                  {sectionContent.malaka.qualifications.map((qual, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-amber-600 to-yellow-600 p-3 rounded-lg">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800">{qual.direction}</h3>
                          <div className="flex gap-3 mt-2">
                            <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                              {qual.degree}
                            </span>
                            <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                              {qual.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemisDashboard;