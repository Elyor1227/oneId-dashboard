// import React, { useEffect, useRef, useState } from 'react';
// const HemisDashboard = () => {
//   const [activeLang, setActiveLang] = useState('UZ');
//   const canvasRef = useRef(null);
//   const animationRef = useRef(null);
  
//   const languages = ['UZ', 'РУ', 'EN'];
  
//   // Canvas animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     let ripples = [];
//     let waves = [];
//     let time = 0;
    
//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initWaves();
//     };
    
//     const initWaves = () => {
//       waves = [];
//       for (let i = 0; i < 5; i++) {
//         waves.push({
//           y: canvas.height * (0.5 + i * 0.1),
//           amplitude: 20 + i * 10,
//           frequency: 0.02 - i * 0.003,
//           speed: 0.02 + i * 0.005,
//           offset: i * 50,
//           alpha: 0.08 - i * 0.012
//         });
//       }
//     };
    
//     const handleCanvasClick = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       ripples.push({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//         radius: 0,
//         maxRadius: 400,
//         strength: 1
//       });
//     };
    
//     const handleCanvasMouseMove = (e) => {
//       if (Math.random() < 0.05) {
//         const rect = canvas.getBoundingClientRect();
//         ripples.push({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//           radius: 0,
//           maxRadius: 150,
//           strength: 0.3
//         });
//       }
//     };
    
//     const animate = () => {
//       if (!ctx) return;
      
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw gradient background
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       gradient.addColorStop(0, '#0a1628');
//       gradient.addColorStop(0.4, '#1a365d');
//       gradient.addColorStop(0.7, '#1e4976');
//       gradient.addColorStop(1, '#0c4a6e');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // Draw stars
//       for (let i = 0; i < 50; i++) {
//         const x = (i * 137.5) % canvas.width;
//         const y = (i * 73.3) % (canvas.height * 0.4);
//         const twinkle = 0.3 + Math.sin(time * 0.05 + i) * 0.2;
//         ctx.beginPath();
//         ctx.arc(x, y, 1, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
//         ctx.fill();
//       }
      
//       // Draw moon glow
//       const moonX = canvas.width * 0.85;
//       const moonY = canvas.height * 0.15;
//       const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 150);
//       moonGlow.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
//       moonGlow.addColorStop(0.5, 'rgba(147, 197, 253, 0.05)');
//       moonGlow.addColorStop(1, 'transparent');
//       ctx.fillStyle = moonGlow;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // Draw moon
//       ctx.beginPath();
//       ctx.arc(moonX, moonY, 40, 0, Math.PI * 2);
//       ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
//       ctx.fill();
      
//       // Draw calm ocean waves
//       waves.forEach((wave, index) => {
//         ctx.beginPath();
//         ctx.moveTo(0, canvas.height);
        
//         for (let x = 0; x <= canvas.width; x += 3) {
//           let y = wave.y + Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
          
//           // Add ripple effect
//           ripples.forEach(ripple => {
//             const dx = x - ripple.x;
//             const dy = y - ripple.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
            
//             if (distance < ripple.maxRadius && distance > ripple.radius - 150) {
//               const waveEffect = Math.sin((distance - ripple.radius) * 0.03) * ripple.strength * 30;
//               y += waveEffect * (1 - distance / ripple.maxRadius);
//             }
//           });
          
//           ctx.lineTo(x, y);
//         }
        
//         ctx.lineTo(canvas.width, canvas.height);
//         ctx.closePath();
        
//         const waveGradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, canvas.height);
//         waveGradient.addColorStop(0, `rgba(59, 130, 246, ${wave.alpha})`);
//         waveGradient.addColorStop(0.5, `rgba(37, 99, 235, ${wave.alpha * 0.7})`);
//         waveGradient.addColorStop(1, `rgba(6, 182, 212, ${wave.alpha * 0.3})`);
//         ctx.fillStyle = waveGradient;
//         ctx.fill();
//       });
      
//       // Update and draw ripples
//       const activeRipples = [];
//       ripples.forEach(ripple => {
//         ripple.radius += 3;
//         ripple.strength *= 0.985;
        
//         if (ripple.radius < ripple.maxRadius && ripple.strength > 0.05) {
//           // Draw multiple ripple rings
//           for (let i = 0; i < 3; i++) {
//             const ringRadius = ripple.radius - i * 40;
//             if (ringRadius > 0) {
//               ctx.beginPath();
//               ctx.arc(ripple.x, ripple.y, ringRadius, 0, Math.PI * 2);
//               ctx.strokeStyle = `rgba(147, 197, 253, ${ripple.strength * 0.2 * (1 - i * 0.3)})`;
//               ctx.lineWidth = 2 - i * 0.5;
//               ctx.stroke();
//             }
//           }
          
//           // Add sparkle effect at ripple edge
//           const sparkleCount = 8;
//           for (let i = 0; i < sparkleCount; i++) {
//             const angle = (i / sparkleCount) * Math.PI * 2 + time * 0.02;
//             const sparkleX = ripple.x + Math.cos(angle) * ripple.radius;
//             const sparkleY = ripple.y + Math.sin(angle) * ripple.radius;
            
//             ctx.beginPath();
//             ctx.arc(sparkleX, sparkleY, 2 * ripple.strength, 0, Math.PI * 2);
//             ctx.fillStyle = `rgba(255, 255, 255, ${ripple.strength * 0.5})`;
//             ctx.fill();
//           }
          
//           activeRipples.push(ripple);
//         }
//       });
      
//       ripples = activeRipples;
//       time += 1;
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     // Initialize
//     resize();
//     initWaves();
    
//     // Event listeners
//     canvas.addEventListener('click', handleCanvasClick);
//     canvas.addEventListener('mousemove', handleCanvasMouseMove);
//     window.addEventListener('resize', resize);
    
//     // Start animation
//     animate();
    
//     // Cleanup
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       canvas.removeEventListener('click', handleCanvasClick);
//       canvas.removeEventListener('mousemove', handleCanvasMouseMove);
//       window.removeEventListener('resize', resize);
//     };
//   }, []);
  
//   const handleOneIDLogin = () => {
//     alert('ONE ID orqali kirish amalga oshirilmoqda...');
//     // Bu yerda haqiqiy ONE ID login logikasi bo'lishi kerak
//   };
  
//   return (
//     <div className="ocean-login">
//       <canvas 
//         ref={canvasRef} 
//         id="oceanCanvas"
//         className="ocean-canvas"
//       />
      
//       <header>
//         <div className="logo-section">
//           <div className="emblem">🏛️</div>
//           <div className="ministry-name">
//             O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//           </div>
//         </div>
//         <div className="lang-switch">
//           {languages.map(lang => (
//             <button
//               key={lang}
//               className={`lang-btn ${activeLang === lang ? 'active' : ''}`}
//               onClick={() => setActiveLang(lang)}
//             >
//               {lang}
//             </button>
//           ))}
//         </div>
//       </header>
      
//       <main>
//         <div className="login-container">
//           <div className="system-badge">
//             <div className="badge-dot"></div>
//             <span className="badge-text">Rasmiy tizim</span>
//           </div>
          
//           <h1 className="login-title">
//             <span>EMIS</span>
//           </h1>
//           <p className="login-subtitle">
//             Akademik litseylarda ta'lim jarayonlarini boshqarish tizimi
//           </p>
          
//           <div className="login-card">
//             <button className="oneid-btn" onClick={handleOneIDLogin}>
//               <div className="oneid-logo">ONE ID</div>
//               <div className="oneid-content">
//                 <div className="oneid-title">ONE ID orqali kirish</div>
//                 <div className="oneid-desc">Yagona identifikatsiya tizimi</div>
//               </div>
//               <div className="oneid-arrow">→</div>
//             </button>
            
//             <div className="divider">
//               <div className="divider-line"></div>
//               <span className="divider-text">Yordam</span>
//               <div className="divider-line"></div>
//             </div>
            
//             <div className="help-links">
//               <a href="#" className="help-link">❓ Qo'llanma</a>
//               <a href="#" className="help-link">📞 Qo'llab-quvvatlash</a>
//             </div>
            
//             <div className="features">
//               <div className="feature">
//                 <div className="feature-icon">🔒</div>
//                 <span>Xavfsiz</span>
//               </div>
//               <div className="feature">
//                 <div className="feature-icon">⚡</div>
//                 <span>Tezkor</span>
//               </div>
//               <div className="feature">
//                 <div className="feature-icon">🛡️</div>
//                 <span>Himoyalangan</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
      
//       <div className="hint">
//         👆 Ekranga bosing — to'lqinlar paydo bo'ladi
//       </div>
      
//       <footer>
//         © 2024 O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//       </footer>
//     </div>
//   );
// };

// export default HemisDashboard;

// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================

// import React, { useEffect, useRef, useState } from 'react';

// const HemisDashboard = () => {
//   const [activeLang, setActiveLang] = useState('UZ');
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const ripplesRef = useRef([]);
  
//   const languages = ['UZ', 'РУ', 'EN'];
  
//   // Canvas animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     let waves = [];
//     let time = 0;
    
//     // Canvas o'lchamlarini sozlash
//     const setCanvasSize = () => {
//       const dpr = window.devicePixelRatio || 1;
//       const rect = canvas.getBoundingClientRect();
      
//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
      
//       canvas.style.width = `${rect.width}px`;
//       canvas.style.height = `${rect.height}px`;
      
//       ctx.scale(dpr, dpr);
      
//       initWaves();
//     };
    
//     const initWaves = () => {
//       const rect = canvas.getBoundingClientRect();
//       waves = [];
//       for (let i = 0; i < 5; i++) {
//         waves.push({
//           y: rect.height * (0.5 + i * 0.1),
//           amplitude: 20 + i * 10,
//           frequency: 0.02 - i * 0.003,
//           speed: 0.02 + i * 0.005,
//           offset: i * 50,
//           alpha: 0.08 - i * 0.012
//         });
//       }
//     };
    
//     // Koordinatalarni to'g'ri olish
//     const getCanvasCoordinates = (clientX, clientY) => {
//       const rect = canvas.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
      
//       return {
//         x: (clientX - rect.left) * dpr,
//         y: (clientY - rect.top) * dpr
//       };
//     };
    
//     const handleClick = (e) => {
//       const coords = getCanvasCoordinates(e.clientX, e.clientY);
      
//       console.log('Click at canvas:', coords.x, coords.y);
//       console.log('Canvas rect:', canvas.getBoundingClientRect());
      
//       ripplesRef.current.push({
//         x: coords.x,
//         y: coords.y,
//         radius: 0,
//         maxRadius: 400,
//         strength: 1
//       });
//     };
    
//     const handleMouseMove = (e) => {
//       if (Math.random() < 0.05) {
//         const coords = getCanvasCoordinates(e.clientX, e.clientY);
        
//         ripplesRef.current.push({
//           x: coords.x,
//           y: coords.y,
//           radius: 0,
//           maxRadius: 150,
//           strength: 0.3
//         });
//       }
//     };
    
//     // Touch event uchun
//     const handleTouchStart = (e) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
      
//       ripplesRef.current.push({
//         x: coords.x,
//         y: coords.y,
//         radius: 0,
//         maxRadius: 400,
//         strength: 1
//       });
//     };
    
//     const handleTouchMove = (e) => {
//       e.preventDefault();
//       if (Math.random() < 0.1) {
//         const touch = e.touches[0];
//         const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
        
//         ripplesRef.current.push({
//           x: coords.x,
//           y: coords.y,
//           radius: 0,
//           maxRadius: 150,
//           strength: 0.3
//         });
//       }
//     };
    
//     const animate = () => {
//       if (!ctx || !canvas) return;
      
//       const rect = canvas.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
//       const width = rect.width;
//       const height = rect.height;
      
//       // Clear canvas
//       ctx.clearRect(0, 0, width * dpr, height * dpr);
      
//       // Draw gradient background
//       const gradient = ctx.createLinearGradient(0, 0, 0, height);
//       gradient.addColorStop(0, '#0a1628');
//       gradient.addColorStop(0.4, '#1a365d');
//       gradient.addColorStop(0.7, '#1e4976');
//       gradient.addColorStop(1, '#0c4a6e');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);
      
//       // Draw stars
//       for (let i = 0; i < 50; i++) {
//         const x = (i * 137.5) % width;
//         const y = (i * 73.3) % (height * 0.4);
//         const twinkle = 0.3 + Math.sin(time * 0.05 + i) * 0.2;
//         ctx.beginPath();
//         ctx.arc(x, y, 1, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
//         ctx.fill();
//       }
      
//       // Draw moon glow
//       const moonX = width * 0.85;
//       const moonY = height * 0.15;
//       const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 150);
//       moonGlow.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
//       moonGlow.addColorStop(0.5, 'rgba(147, 197, 253, 0.05)');
//       moonGlow.addColorStop(1, 'transparent');
//       ctx.fillStyle = moonGlow;
//       ctx.fillRect(0, 0, width, height);
      
//       // Draw moon
//       ctx.beginPath();
//       ctx.arc(moonX, moonY, 40, 0, Math.PI * 2);
//       ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
//       ctx.fill();
      
//       // Draw calm ocean waves
//       waves.forEach((wave) => {
//         ctx.beginPath();
//         ctx.moveTo(0, height);
        
//         for (let x = 0; x <= width; x += 3) {
//           let y = wave.y + Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
          
//           // Add ripple effect
//           ripplesRef.current.forEach(ripple => {
//             const dx = x - ripple.x / dpr;
//             const dy = y - ripple.y / dpr;
//             const distance = Math.sqrt(dx * dx + dy * dy);
            
//             if (distance < ripple.maxRadius && distance > ripple.radius - 150) {
//               const waveEffect = Math.sin((distance - ripple.radius) * 0.03) * ripple.strength * 30;
//               y += waveEffect * (1 - distance / ripple.maxRadius);
//             }
//           });
          
//           ctx.lineTo(x, y);
//         }
        
//         ctx.lineTo(width, height);
//         ctx.closePath();
        
//         const waveGradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, height);
//         waveGradient.addColorStop(0, `rgba(59, 130, 246, ${wave.alpha})`);
//         waveGradient.addColorStop(0.5, `rgba(37, 99, 235, ${wave.alpha * 0.7})`);
//         waveGradient.addColorStop(1, `rgba(6, 182, 212, ${wave.alpha * 0.3})`);
//         ctx.fillStyle = waveGradient;
//         ctx.fill();
//       });
      
//       // Update and draw ripples
//       const activeRipples = [];
//       ripplesRef.current.forEach(ripple => {
//         ripple.radius += 3;
//         ripple.strength *= 0.985;
        
//         if (ripple.radius < ripple.maxRadius && ripple.strength > 0.05) {
//           // Draw multiple ripple rings
//           for (let i = 0; i < 3; i++) {
//             const ringRadius = ripple.radius - i * 40;
//             if (ringRadius > 0) {
//               ctx.beginPath();
//               ctx.arc(ripple.x / dpr, ripple.y / dpr, ringRadius, 0, Math.PI * 2);
//               ctx.strokeStyle = `rgba(147, 197, 253, ${ripple.strength * 0.2 * (1 - i * 0.3)})`;
//               ctx.lineWidth = 2 - i * 0.5;
//               ctx.stroke();
//             }
//           }
          
//           // Add sparkle effect at ripple edge
//           const sparkleCount = 8;
//           for (let i = 0; i < sparkleCount; i++) {
//             const angle = (i / sparkleCount) * Math.PI * 2 + time * 0.02;
//             const sparkleX = (ripple.x / dpr) + Math.cos(angle) * ripple.radius;
//             const sparkleY = (ripple.y / dpr) + Math.sin(angle) * ripple.radius;
            
//             ctx.beginPath();
//             ctx.arc(sparkleX, sparkleY, 2 * ripple.strength, 0, Math.PI * 2);
//             ctx.fillStyle = `rgba(255, 255, 255, ${ripple.strength * 0.5})`;
//             ctx.fill();
//           }
          
//           activeRipples.push(ripple);
//         }
//       });
      
//       ripplesRef.current = activeRipples;
//       time += 1;
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     // Initialize
//     setCanvasSize();
    
//     // Event listeners
//     canvas.addEventListener('click', handleClick);
//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
//     canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
//     window.addEventListener('resize', setCanvasSize);
    
//     // Start animation
//     animate();
    
//     // Cleanup
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       canvas.removeEventListener('click', handleClick);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('touchstart', handleTouchStart);
//       canvas.removeEventListener('touchmove', handleTouchMove);
//       window.removeEventListener('resize', setCanvasSize);
//     };
//   }, []);
  
//   // Hover effektini tekshirish uchun test funksiyasi
//   const addRippleAtCenter = () => {
//     if (canvasRef.current) {
//       const rect = canvasRef.current.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
      
//       ripplesRef.current.push({
//         x: (rect.width / 2) * dpr,
//         y: (rect.height / 2) * dpr,
//         radius: 0,
//         maxRadius: 400,
//         strength: 1
//       });
//     }
//   };
  
//   const handleOneIDLogin = () => {
//     alert('ONE ID orqali kirish amalga oshirilmoqda...');
//   };
  
//   return (
//     <div className="ocean-login" ref={containerRef}>
//       <canvas 
//         ref={canvasRef} 
//         className="ocean-canvas"
//       />
      
//       <header>
//         <div className="logo-section">
//           <div className="emblem">🏛️</div>
//           <div className="ministry-name">
//             O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//           </div>
//         </div>
//         <div className="lang-switch">
//           {/* {languages.map(lang => (
//             <button
//               key={lang}
//               className={`lang-btn ${activeLang === lang ? 'active' : ''}`}
//               onClick={() => setActiveLang(lang)}
//             >
//               {lang}
//             </button>
//           ))} */}
//         </div>
//       </header>
      
//       <main>
//         <div className="login-container">
//           <h1 className="login-title">
//             <span>EMIS</span>
//           </h1>
//           <p className="login-subtitle">
//             Akademik litseylarda ta'lim jarayonlarini boshqarish tizimi
//           </p>
          
//           <div className="login-card">
//             <button className="oneid-btn" onClick={handleOneIDLogin}>
//               <div className="oneid-logo">ONE ID</div>
//               <div className="oneid-content">
//                 <div className="oneid-title">ONE ID orqali kirish</div>
//                 <div className="oneid-desc">Yagona identifikatsiya tizimi</div>
//               </div>
//               <div className="oneid-arrow">→</div>
//             </button>
            
//             <div className="divider">
//               <div className="divider-line"></div>
//               <span className="divider-text">Yordam</span>
//               <div className="divider-line"></div>
//             </div>
            
//             <div className="help-links">
//               <a href="#" className="help-link">❓ Qo'llanma</a>
//               <a href="#" className="help-link">📞 Qo'llab-quvvatlash</a>
//             </div>
            
//             <div className="features">
//               <div className="feature">
//                 <div className="feature-icon">🔒</div>
//                 <span>Xavfsiz</span>
//               </div>
//               <div className="feature">
//                 <div className="feature-icon">⚡</div>
//                 <span>Tezkor</span>
//               </div>
//               <div className="feature">
//                 <div className="feature-icon">🛡️</div>
//                 <span>Himoyalangan</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>      
//       <footer>
//         © 2024 O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//       </footer>     
//     </div>
//   );
// };

// export default HemisDashboard;

// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================

// import React, { useEffect, useRef, useState } from 'react';

// const HemisDashboard = () => {
//   const [activeLang, setActiveLang] = useState('UZ');
//   const [isNightMode, setIsNightMode] = useState(true); // true = tungi, false = kunduz
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const ripplesRef = useRef([]);
  
//   const languages = ['UZ', 'РУ', 'EN'];
  
//   // Canvas animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     let waves = [];
//     let time = 0;
//     let sunPosition = 0;
    
//     // Canvas o'lchamlarini sozlash
//     const setCanvasSize = () => {
//       const dpr = window.devicePixelRatio || 1;
//       const rect = canvas.getBoundingClientRect();
      
//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
      
//       canvas.style.width = `${rect.width}px`;
//       canvas.style.height = `${rect.height}px`;
      
//       ctx.scale(dpr, dpr);
      
//       initWaves();
//     };
    
//     const initWaves = () => {
//       const rect = canvas.getBoundingClientRect();
//       waves = [];
//       for (let i = 0; i < 5; i++) {
//         waves.push({
//           y: rect.height * (0.5 + i * 0.1),
//           amplitude: 20 + i * 10,
//           frequency: 0.02 - i * 0.003,
//           speed: 0.02 + i * 0.005,
//           offset: i * 50,
//           alpha: 0.08 - i * 0.012
//         });
//       }
//     };
    
//     // Koordinatalarni to'g'ri olish
//     const getCanvasCoordinates = (clientX, clientY) => {
//       const rect = canvas.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
      
//       return {
//         x: (clientX - rect.left) * dpr,
//         y: (clientY - rect.top) * dpr
//       };
//     };
    
//     const handleClick = (e) => {
//       const coords = getCanvasCoordinates(e.clientX, e.clientY);
      
//       ripplesRef.current.push({
//         x: coords.x,
//         y: coords.y,
//         radius: 0,
//         maxRadius: 400,
//         strength: 1
//       });
//     };
    
//     const handleMouseMove = (e) => {
//       if (Math.random() < 0.05) {
//         const coords = getCanvasCoordinates(e.clientX, e.clientY);
        
//         ripplesRef.current.push({
//           x: coords.x,
//           y: coords.y,
//           radius: 0,
//           maxRadius: 150,
//           strength: 0.3
//         });
//       }
//     };
    
//     // Touch event uchun
//     const handleTouchStart = (e) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
      
//       ripplesRef.current.push({
//         x: coords.x,
//         y: coords.y,
//         radius: 0,
//         maxRadius: 400,
//         strength: 1
//       });
//     };
    
//     const handleTouchMove = (e) => {
//       e.preventDefault();
//       if (Math.random() < 0.1) {
//         const touch = e.touches[0];
//         const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
        
//         ripplesRef.current.push({
//           x: coords.x,
//           y: coords.y,
//           radius: 0,
//           maxRadius: 150,
//           strength: 0.3
//         });
//       }
//     };
    
//     const animate = () => {
//       if (!ctx || !canvas) return;
      
//       const rect = canvas.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
//       const width = rect.width;
//       const height = rect.height;
      
//       // Clear canvas
//       ctx.clearRect(0, 0, width * dpr, height * dpr);
      
//       // Fon ranglarini tanlash
//       let gradient;
//       if (isNightMode) {
//         // Tungi fon
//         gradient = ctx.createLinearGradient(0, 0, 0, height);
//         gradient.addColorStop(0, '#0a1628');
//         gradient.addColorStop(0.4, '#1a365d');
//         gradient.addColorStop(0.7, '#1e4976');
//         gradient.addColorStop(1, '#0c4a6e');
//       } else {
//         // Kunduzgi fon
//         gradient = ctx.createLinearGradient(0, 0, 0, height);
//         gradient.addColorStop(0, '#4facfe');
//         gradient.addColorStop(0.4, '#00c6fb');
//         gradient.addColorStop(0.7, '#1e90ff');
//         gradient.addColorStop(1, '#1e3a8a');
//       }
      
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);
      
//       if (isNightMode) {
//         // Tungi rejim - yulduzlar va oy
//         for (let i = 0; i < 50; i++) {
//           const x = (i * 137.5) % width;
//           const y = (i * 73.3) % (height * 0.4);
//           const twinkle = 0.3 + Math.sin(time * 0.05 + i) * 0.2;
//           ctx.beginPath();
//           ctx.arc(x, y, 1, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
//           ctx.fill();
//         }
        
//         // Oy uchun nur
//         const moonX = width * 0.85;
//         const moonY = height * 0.15;
//         const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 150);
//         moonGlow.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
//         moonGlow.addColorStop(0.5, 'rgba(147, 197, 253, 0.05)');
//         moonGlow.addColorStop(1, 'transparent');
//         ctx.fillStyle = moonGlow;
//         ctx.fillRect(0, 0, width, height);
        
//         // Oy
//         ctx.beginPath();
//         ctx.arc(moonX, moonY, 40, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
//         ctx.fill();
//       } else {
//         // Kunduzgi rejim - quyosh
//         sunPosition = (sunPosition + 0.00000000002) % (Math.PI * 2);
//         const sunX = width * 0.5 + Math.cos(sunPosition) * width * 0.35;
//         const sunY = height * 0.25 + Math.sin(sunPosition) * height * 0.1;
        
//         // Quyosh nuri
//         const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 200);
//         sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
//         sunGlow.addColorStop(0.3, 'rgba(255, 215, 0, 0.4)');
//         sunGlow.addColorStop(0.6, 'rgba(255, 165, 0, 0.2)');
//         sunGlow.addColorStop(1, 'transparent');
//         ctx.fillStyle = sunGlow;
//         ctx.fillRect(0, 0, width, height);
        
//         // Quyosh
//         ctx.beginPath();
//         ctx.arc(sunX, sunY, 50, 0, Math.PI * 2);
//         const sunGradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 50);
//         sunGradient.addColorStop(0, '#FFD700');
//         sunGradient.addColorStop(0.7, '#FFA500');
//         sunGradient.addColorStop(1, '#FF4500');
//         ctx.fillStyle = sunGradient;
//         ctx.fill();
        
//         // Quyosh nurlari
//         ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
//         ctx.lineWidth = 3;
//         for (let i = 0; i < 12; i++) {
//           const angle = (i / 12) * Math.PI * 2;
//           ctx.beginPath();
//           ctx.moveTo(sunX + Math.cos(angle) * 50, sunY + Math.sin(angle) * 50);
//           ctx.lineTo(sunX + Math.cos(angle) * 80, sunY + Math.sin(angle) * 80);
//           ctx.stroke();
//         }
        
//         // Bulutlar (kunduzgi rejim uchun)
//         for (let i = 0; i < 5; i++) {
//           const cloudX = (time * 0.5 + i * 150) % (width + 200) - 100;
//           const cloudY = height * 0.2 + Math.sin(time * 0.02 + i) * 20;
          
//           ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + Math.sin(time * 0.03 + i) * 0.2})`;
          
//           // Bulut chizish
//           ctx.beginPath();
//           ctx.arc(cloudX, cloudY, 20, 0, Math.PI * 2);
//           ctx.arc(cloudX + 25, cloudY - 10, 25, 0, Math.PI * 2);
//           ctx.arc(cloudX + 50, cloudY, 20, 0, Math.PI * 2);
//           ctx.arc(cloudX + 25, cloudY + 10, 20, 0, Math.PI * 2);
//           ctx.fill();
//         }
//       }
      
//       // To'lqinlarni chizish
//       waves.forEach((wave) => {
//         ctx.beginPath();
//         ctx.moveTo(0, height);
        
//         for (let x = 0; x <= width; x += 3) {
//           let y = wave.y + Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;
          
//           // Ripple effekti
//           ripplesRef.current.forEach(ripple => {
//             const dx = x - ripple.x / dpr;
//             const dy = y - ripple.y / dpr;
//             const distance = Math.sqrt(dx * dx + dy * dy);
            
//             if (distance < ripple.maxRadius && distance > ripple.radius - 150) {
//               const waveEffect = Math.sin((distance - ripple.radius) * 0.03) * ripple.strength * 30;
//               y += waveEffect * (1 - distance / ripple.maxRadius);
//             }
//           });
          
//           ctx.lineTo(x, y);
//         }
        
//         ctx.lineTo(width, height);
//         ctx.closePath();
        
//         // To'lqin ranglari
//         let waveGradient;
//         if (isNightMode) {
//           waveGradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, height);
//           waveGradient.addColorStop(0, `rgba(59, 130, 246, ${wave.alpha})`);
//           waveGradient.addColorStop(0.5, `rgba(37, 99, 235, ${wave.alpha * 0.7})`);
//           waveGradient.addColorStop(1, `rgba(6, 182, 212, ${wave.alpha * 0.3})`);
//         } else {
//           waveGradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, height);
//           waveGradient.addColorStop(0, `rgba(30, 144, 255, ${wave.alpha * 1.2})`);
//           waveGradient.addColorStop(0.5, `rgba(0, 191, 255, ${wave.alpha * 0.9})`);
//           waveGradient.addColorStop(1, `rgba(135, 206, 250, ${wave.alpha * 0.5})`);
//         }
        
//         ctx.fillStyle = waveGradient;
//         ctx.fill();
//       });
      
//       // Ripple effektlari
//       const activeRipples = [];
//       ripplesRef.current.forEach(ripple => {
//         ripple.radius += 3;
//         ripple.strength *= 0.985;
        
//         if (ripple.radius < ripple.maxRadius && ripple.strength > 0.05) {
//           // Ripple halqalari
//           for (let i = 0; i < 3; i++) {
//             const ringRadius = ripple.radius - i * 40;
//             if (ringRadius > 0) {
//               ctx.beginPath();
//               ctx.arc(ripple.x / dpr, ripple.y / dpr, ringRadius, 0, Math.PI * 2);
//               ctx.strokeStyle = isNightMode 
//                 ? `rgba(147, 197, 253, ${ripple.strength * 0.2 * (1 - i * 0.3)})`
//                 : `rgba(255, 255, 255, ${ripple.strength * 0.3 * (1 - i * 0.3)})`;
//               ctx.lineWidth = 2 - i * 0.5;
//               ctx.stroke();
//             }
//           }
          
//           // Yorqin nuqtalar
//           const sparkleCount = 8;
//           for (let i = 0; i < sparkleCount; i++) {
//             const angle = (i / sparkleCount) * Math.PI * 2 + time * 0.02;
//             const sparkleX = (ripple.x / dpr) + Math.cos(angle) * ripple.radius;
//             const sparkleY = (ripple.y / dpr) + Math.sin(angle) * ripple.radius;
            
//             ctx.beginPath();
//             ctx.arc(sparkleX, sparkleY, 2 * ripple.strength, 0, Math.PI * 2);
//             ctx.fillStyle = isNightMode
//               ? `rgba(255, 255, 255, ${ripple.strength * 0.5})`
//               : `rgba(255, 255, 255, ${ripple.strength * 0.7})`;
//             ctx.fill();
//           }
          
//           activeRipples.push(ripple);
//         }
//       });
      
//       ripplesRef.current = activeRipples;
//       time += 1;
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     // Initialize
//     setCanvasSize();
    
//     // Event listeners
//     canvas.addEventListener('click', handleClick);
//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
//     canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
//     window.addEventListener('resize', setCanvasSize);
    
//     // Start animation
//     animate();
    
//     // Cleanup
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       canvas.removeEventListener('click', handleClick);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('touchstart', handleTouchStart);
//       canvas.removeEventListener('touchmove', handleTouchMove);
//       window.removeEventListener('resize', setCanvasSize);
//     };
//   }, [isNightMode]); // isNightMode o'zgarganda animatsiya qayta ishga tushadi
  
//   // Rejimni o'zgartirish
//   const toggleDayNightMode = () => {
//     setIsNightMode(!isNightMode);
//   };
  
//   // Markazda ripple qo'shish
//   const addRippleAtCenter = () => {
//     if (canvasRef.current) {
//       const rect = canvasRef.current.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
      
//       ripplesRef.current.push({
//         x: (rect.width / 2) * dpr,
//         y: (rect.height / 2) * dpr,
//         radius: 0,
//         maxRadius: 400,
//         strength: 1
//       });
//     }
//   };
  
//   const handleOneIDLogin = () => {
//     alert('ONE ID orqali kirish amalga oshirilmoqda...');
//   };
  
//   return (
//     <div className="ocean-login" ref={containerRef}>
//       <canvas 
//         ref={canvasRef} 
//         className="ocean-canvas"
//       />
      
//       <header>
//         <div className="logo-section">
//           <div className="emblem">🏛️</div>
//           <div className="ministry-name">
//             O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//           </div>
//         </div>
        
//         <div className="header-controls">
//           {/* <div className="lang-switch">
//             {languages.map(lang => (
//               <button
//                 key={lang}
//                 className={`lang-btn ${activeLang === lang ? 'active' : ''}`}
//                 onClick={() => setActiveLang(lang)}
//               >
//                 {lang}
//               </button>
//             ))}
//           </div> */}
          
//           <button 
//             className="theme-toggle-btn"
//             onClick={toggleDayNightMode}
//             title={isNightMode ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
//           >
//             {isNightMode ? '☀️' : '🌙'}
//           </button>
//         </div>
//       </header>
      
//       <main>
//         <div className="login-container">
//           <h1 className="login-title">
//             <span>EMIS</span>
//           </h1>
//           <p className="login-subtitle">
//             Akademik litseylarda ta'lim jarayonlarini boshqarish tizimi
//           </p>
          
//           <div className="login-card">
//             <button className="oneid-btn" onClick={handleOneIDLogin}>
//               <div className="oneid-logo">ONE ID</div>
//               <div className="oneid-content">
//                 <div className="oneid-title">ONE ID orqali kirish</div>
//                 <div className="oneid-desc">Yagona identifikatsiya tizimi</div>
//               </div>
//               <div className="oneid-arrow">→</div>
//             </button>
            
//             <div className="divider">
//               <div className="divider-line"></div>
//               <span className="divider-text">Yordam</span>
//               <div className="divider-line"></div>
//             </div>
            
//             <div className="help-links">
//               <a href="#" className="help-link">❓ Qo'llanma</a>
//               <a href="#" className="help-link">📞 Qo'llab-quvvatlash</a>
//             </div>
            
//             <div className="features">
//               <div className="feature">
//                 <div className="feature-icon">🔒</div>
//                 <span>Xavfsiz</span>
//               </div>
//               <div className="feature">
//                 <div className="feature-icon">⚡</div>
//                 <span>Tezkor</span>
//               </div>
//               <div className="feature">
//                 <div className="feature-icon">🛡️</div>
//                 <span>Himoyalangan</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>      
//       <footer>
//         © 2024 O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//       </footer>
      

//     </div>
//   );
// };

// export default HemisDashboard;
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================



// import React, { useEffect, useRef, useCallback } from 'react';

// export default function HemisDashboard() {
//   const canvasRef = useRef(null);
//   const ripplesRef = useRef([]);
//   const timeRef = useRef(0);
//   const animationIdRef = useRef(null);

//   const waterHeight = 0.55;
//   const waveAmplitude = 8;
//   const waveFrequency = 0.008;
//   const waveSpeed = 0.03;

//   const addRipple = useCallback((x, y, strength) => {
//     ripplesRef.current.push({
//       x,
//       y,
//       radius: 0,
//       maxRadius: 200 + strength * 200,
//       strength,
//       life: 1.0
//     });
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     const handleClick = (e) => {
//       addRipple(e.clientX, e.clientY, 1.0);
//     };

//     const handleMouseMove = (e) => {
//       if (e.clientY > height * waterHeight - 50) {
//         if (Math.random() < 0.15) {
//           addRipple(e.clientX, e.clientY, 0.2);
//         }
//       }
//     };

//     const handleTouchStart = (e) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       addRipple(touch.clientX, touch.clientY, 1.0);
//     };

//     const handleTouchMove = (e) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       if (Math.random() < 0.3) {
//         addRipple(touch.clientX, touch.clientY, 0.3);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     canvas.addEventListener('click', handleClick);
//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
//     canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

//     const getWaveY = (x, baseY) => {
//       let y = baseY;
//       const time = timeRef.current;
      
//       y += Math.sin(x * waveFrequency + time * waveSpeed) * waveAmplitude;
//       y += Math.sin(x * waveFrequency * 2.3 + time * waveSpeed * 1.5 + 1) * waveAmplitude * 0.5;
//       y += Math.sin(x * waveFrequency * 0.5 + time * waveSpeed * 0.7 + 2) * waveAmplitude * 1.5;
      
//       ripplesRef.current.forEach(ripple => {
//         const dx = x - ripple.x;
//         const dy = baseY - ripple.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
        
//         if (distance < ripple.maxRadius) {
//           const wavePhase = (distance - ripple.radius) * 0.05;
//           const amplitude = ripple.strength * 25 * ripple.life;
//           const falloff = 1 - (distance / ripple.maxRadius);
//           const wave = Math.sin(wavePhase) * amplitude * falloff;
          
//           if (Math.abs(distance - ripple.radius) < 80) {
//             y += wave * (1 - Math.abs(distance - ripple.radius) / 80);
//           }
//         }
//       });
      
//       return y;
//     };

//     const drawSky = () => {
//       const skyGradient = ctx.createLinearGradient(0, 0, 0, height * waterHeight);
//       skyGradient.addColorStop(0, '#0a0a1a');
//       skyGradient.addColorStop(0.3, '#0f1629');
//       skyGradient.addColorStop(0.6, '#1a2744');
//       skyGradient.addColorStop(1, '#2d4a6f');
//       ctx.fillStyle = skyGradient;
//       ctx.fillRect(0, 0, width, height * waterHeight + 50);

//       const time = timeRef.current;
//       for (let i = 0; i < 120; i++) {
//         const x = (i * 173.7 + i * i * 0.3) % width;
//         const y = (i * 91.3 + i * 0.7) % (height * waterHeight * 0.7);
//         const twinkle = 0.3 + Math.sin(time * 0.03 + i * 0.5) * 0.3;
//         const size = 0.5 + (i % 3) * 0.5;
        
//         ctx.beginPath();
//         ctx.arc(x, y, size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
//         ctx.fill();
//       }

//       const moonX = width * 0.82;
//       const moonY = height * 0.12;
//       const moonRadius = 35;

//       const moonGlow = ctx.createRadialGradient(moonX, moonY, moonRadius * 0.5, moonX, moonY, moonRadius * 5);
//       moonGlow.addColorStop(0, 'rgba(255, 255, 230, 0.3)');
//       moonGlow.addColorStop(0.3, 'rgba(200, 220, 255, 0.1)');
//       moonGlow.addColorStop(1, 'transparent');
//       ctx.fillStyle = moonGlow;
//       ctx.fillRect(0, 0, width, height * waterHeight);

//       ctx.beginPath();
//       ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
//       const moonGradient = ctx.createRadialGradient(moonX - 10, moonY - 10, 0, moonX, moonY, moonRadius);
//       moonGradient.addColorStop(0, '#fffef0');
//       moonGradient.addColorStop(0.5, '#f0f0e0');
//       moonGradient.addColorStop(1, '#d0d0c0');
//       ctx.fillStyle = moonGradient;
//       ctx.fill();
//     };

//     const drawWater = () => {
//       const waterStartY = height * waterHeight;
//       const time = timeRef.current;
      
//       for (let layer = 0; layer < 4; layer++) {
//         const layerOffset = layer * 30;
//         const layerAlpha = 0.15 - layer * 0.03;
        
//         ctx.beginPath();
//         ctx.moveTo(0, height);
        
//         for (let x = 0; x <= width; x += 3) {
//           const y = getWaveY(x, waterStartY + layerOffset);
//           ctx.lineTo(x, y);
//         }
        
//         ctx.lineTo(width, height);
//         ctx.closePath();
        
//         const waterGradient = ctx.createLinearGradient(0, waterStartY, 0, height);
//         if (layer === 0) {
//           waterGradient.addColorStop(0, 'rgba(30, 80, 130, 0.9)');
//           waterGradient.addColorStop(0.3, 'rgba(20, 60, 110, 0.95)');
//           waterGradient.addColorStop(0.7, 'rgba(10, 40, 80, 0.98)');
//           waterGradient.addColorStop(1, 'rgba(5, 20, 50, 1)');
//         } else {
//           waterGradient.addColorStop(0, `rgba(40, 100, 160, ${layerAlpha})`);
//           waterGradient.addColorStop(1, `rgba(20, 60, 100, ${layerAlpha * 0.5})`);
//         }
        
//         ctx.fillStyle = waterGradient;
//         ctx.fill();
//       }

//       const moonX = width * 0.82;
//       const reflectionWidth = 60;
//       const reflectionGradient = ctx.createLinearGradient(0, waterStartY, 0, height);
//       reflectionGradient.addColorStop(0, 'rgba(255, 255, 200, 0.3)');
//       reflectionGradient.addColorStop(0.3, 'rgba(255, 255, 200, 0.1)');
//       reflectionGradient.addColorStop(1, 'transparent');
      
//       ctx.beginPath();
//       for (let y = waterStartY; y < height; y += 4) {
//         const shimmer = Math.sin(y * 0.05 + time * 0.1) * 20;
//         const reflWidth = reflectionWidth * (1 - (y - waterStartY) / (height - waterStartY) * 0.5);
//         ctx.moveTo(moonX - reflWidth + shimmer, y);
//         ctx.lineTo(moonX + reflWidth + shimmer, y);
//       }
//       ctx.strokeStyle = reflectionGradient;
//       ctx.lineWidth = 3;
//       ctx.stroke();

//       ctx.beginPath();
//       for (let x = 0; x <= width; x += 3) {
//         const y = getWaveY(x, waterStartY);
//         ctx.lineTo(x, y);
//       }
//       ctx.strokeStyle = 'rgba(150, 200, 255, 0.15)';
//       ctx.lineWidth = 2;
//       ctx.stroke();
//     };

//     const drawRipples = () => {
//       const waterStartY = height * waterHeight;
      
//       ripplesRef.current.forEach(ripple => {
//         if (ripple.life <= 0) return;
        
//         for (let i = 0; i < 3; i++) {
//           const ringRadius = ripple.radius - i * 25;
//           if (ringRadius > 0) {
//             ctx.beginPath();
//             ctx.arc(ripple.x, Math.max(ripple.y, waterStartY), ringRadius, 0, Math.PI * 2);
//             ctx.strokeStyle = `rgba(150, 200, 255, ${ripple.life * 0.4 * (1 - i * 0.3)})`;
//             ctx.lineWidth = 2 - i * 0.5;
//             ctx.stroke();
//           }
//         }

//         if (ripple.strength > 0.3) {
//           const time = timeRef.current;
//           for (let i = 0; i < 12; i++) {
//             const angle = (i / 12) * Math.PI * 2 + time * 0.02;
//             const sparkleX = ripple.x + Math.cos(angle) * ripple.radius;
//             const sparkleY = Math.max(ripple.y, waterStartY) + Math.sin(angle) * ripple.radius * 0.3;
            
//             ctx.beginPath();
//             ctx.arc(sparkleX, sparkleY, 1.5 * ripple.life, 0, Math.PI * 2);
//             ctx.fillStyle = `rgba(255, 255, 255, ${ripple.life * 0.6})`;
//             ctx.fill();
//           }
//         }
//       });
//     };

//     const updateRipples = () => {
//       ripplesRef.current = ripplesRef.current.filter(ripple => {
//         ripple.radius += 2.5;
//         ripple.life -= 0.008;
//         return ripple.life > 0 && ripple.radius < ripple.maxRadius;
//       });
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);
      
//       drawSky();
//       drawWater();
//       drawRipples();
//       updateRipples();
      
//       timeRef.current++;
//       animationIdRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     setTimeout(() => addRipple(width * 0.3, height * 0.7, 0.3), 1000);
//     setTimeout(() => addRipple(width * 0.7, height * 0.65, 0.25), 2500);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       canvas.removeEventListener('click', handleClick);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('touchstart', handleTouchStart);
//       canvas.removeEventListener('touchmove', handleTouchMove);
//       cancelAnimationFrame(animationIdRef.current);
//     };
//   }, [addRipple]);

//   return (
//     <div className="min-h-screen flex flex-col overflow-hidden relative bg-gray-950">
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full z-0 cursor-pointer"
//       />

//       {/* Header */}
//       <header className="relative z-10 p-5 flex items-center justify-between animate-fade-down">
//         <div className="flex items-center gap-4">
//           <div className="w-11 h-11 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-amber-500/30">
//             🏛️
//           </div>
//           <div className="text-white/80 text-sm max-w-xs leading-tight">
//             O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <button className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm">UZ</button>
//           <button className="px-4 py-2 bg-white/5 border border-white/10 text-white/60 rounded-lg text-sm hover:bg-white/10">РУ</button>
//           <button className="px-4 py-2 bg-white/5 border border-white/10 text-white/60 rounded-lg text-sm hover:bg-white/10">EN</button>
//         </div>
//       </header>

//       {/* Main */}
//       <main className="flex-1 flex items-center justify-center p-10 relative z-10">
//         <div className="w-full max-w-md animate-fade-up">
//           <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
//             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500" />
//             <span className="text-blue-300 text-sm font-medium">Rasmiy tizim</span>
//           </div>

//           <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">EMIS</span>
//           </h1>
//           <p className="text-lg text-white/50 mb-12">
//             Akademik litseylarda ta'lim jarayonlarini boshqarish tizimi
//           </p>

//           <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
//             <button className="w-full flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 p-5 rounded-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-indigo-600/40 hover:shadow-2xl hover:shadow-purple-600/50 group">
//               <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center text-white text-xs font-bold">
//                 ONE ID
//               </div>
//               <div className="flex-1 text-left">
//                 <div className="text-white font-semibold text-lg">ONE ID orqali kirish</div>
//                 <div className="text-white/70 text-sm">Yagona identifikatsiya tizimi</div>
//               </div>
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
//                 →
//               </div>
//             </button>

//             <div className="flex items-center gap-5 my-8">
//               <div className="flex-1 h-px bg-white/10" />
//               <span className="text-white/30 text-xs uppercase tracking-wider">Yordam</span>
//               <div className="flex-1 h-px bg-white/10" />
//             </div>

//             <div className="flex justify-center gap-8">
//               <a href="#" className="text-white/50 text-sm hover:text-blue-300 transition-colors flex items-center gap-2">
//                 ❓ Qo'llanma
//               </a>
//               <a href="#" className="text-white/50 text-sm hover:text-blue-300 transition-colors flex items-center gap-2">
//                 📞 Qo'llab-quvvatlash
//               </a>
//             </div>

//             <div className="flex justify-center gap-10 mt-10 pt-8 border-t border-white/5">
//               <div className="flex items-center gap-2 text-white/40 text-xs">
//                 <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">🔒</div>
//                 Xavfsiz
//               </div>
//               <div className="flex items-center gap-2 text-white/40 text-xs">
//                 <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">⚡</div>
//                 Tezkor
//               </div>
//               <div className="flex items-center gap-2 text-white/40 text-xs">
//                 <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">🛡️</div>
//                 Himoyalangan
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Hint */}
//       <div className="fixed bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-sm z-10 flex items-center gap-2 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm animate-bounce">
//         👆 Suvga teging — to'lqinlar paydo bo'ladi
//       </div>

//       {/* Footer */}
//       <footer className="relative z-10 text-center p-8 text-white/30 text-xs">
//         © 2024 O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//       </footer>
//     </div>
//   );
// }


// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================


// import React, { useEffect, useRef, useCallback } from 'react';

// export default function HemisDashboard() {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const connectionsRef = useRef([]);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const clickEffectsRef = useRef([]);
//   const timeRef = useRef(0);
//   const animationIdRef = useRef(null);

//   // Ta'lim ikonkalari va belgilari
//   const educationSymbols = ['📚', '✏️', '🎓','🔬', '📐', '🧮', '📖', '🌟', '⚛️', '💡',];

//   const createParticle = useCallback((width, height, isNew = false) => {
//     const symbol = educationSymbols[Math.floor(Math.random() * educationSymbols.length)];
//     return {
//       x: isNew ? mouseRef.current.x : Math.random() * width,
//       y: isNew ? mouseRef.current.y : Math.random() * height,
//       vx: (Math.random() - 0.5) * (isNew ? 3 : 0.5),
//       vy: (Math.random() - 0.5) * (isNew ? 3 : 0.5),
//       size: Math.random() * 20 + 15,
//       symbol: symbol,
//       opacity: isNew ? 1 : Math.random() * 0.5 + 0.3,
//       rotation: Math.random() * 360,
//       rotationSpeed: (Math.random() - 0.5) * 2,
//       life: isNew ? 1 : null,
//       pulse: Math.random() * Math.PI * 20
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     // Zarrachalarni yaratish
//     const particleCount = 25;
//     for (let i = 0; i < particleCount; i++) {
//       particlesRef.current.push(createParticle(width, height));
//     }

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     const handleClick = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
      
//       // Click effekti - bilim tarqalishi
//       clickEffectsRef.current.push({
//         x, y,
//         radius: 0,
//         maxRadius: 200,
//         opacity: 1
//       });

//       // Yangi zarrachalar qo'shish
//       for (let i = 0; i < 5; i++) {
//         mouseRef.current = { x, y };
//         particlesRef.current.push(createParticle(width, height, true));
//       }
//     };

//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       mouseRef.current = {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       };
//     };

//     window.addEventListener('resize', handleResize);
//     canvas.addEventListener('click', handleClick);
//     canvas.addEventListener('mousemove', handleMouseMove);

//     const drawBackground = () => {
//       // Gradient fon
//       const gradient = ctx.createRadialGradient(
//         width / 2, height / 2, 0,
//         width / 2, height / 2, Math.max(width, height)
//       );
//       gradient.addColorStop(0, '#1a1a2e');
//       gradient.addColorStop(0.5, '#16213e');
//       gradient.addColorStop(1, '#0f0f23');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       // Grid pattern (daftar chiziqlari)
//       ctx.strokeStyle = 'rgba(99, 102, 241, 0.03)';
//       ctx.lineWidth = 1;
//       const gridSize = 40;
      
//       for (let x = 0; x < width; x += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, height);
//         ctx.stroke();
//       }
      
//       for (let y = 0; y < height; y += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(width, y);
//         ctx.stroke();
//       }
//     };

//     const drawConnections = () => {
//       const particles = particlesRef.current;
//       const mouse = mouseRef.current;
      
//       particles.forEach((p1, i) => {
//         // Zarrachalar orasidagi bog'lanish
//         particles.slice(i + 1).forEach(p2 => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             const opacity = (1 - distance / 150) * 0.2;
//             ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
//             ctx.lineWidth = 1;
//             ctx.stroke();
//           }
//         });

//         // Sichqoncha bilan bog'lanish
//         const dxMouse = p1.x - mouse.x;
//         const dyMouse = p1.y - mouse.y;
//         const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
//         if (distMouse < 200) {
//           ctx.beginPath();
//           ctx.moveTo(p1.x, p1.y);
//           ctx.lineTo(mouse.x, mouse.y);
//           const opacity = (1 - distMouse / 200) * 0.4;
//           ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
//           ctx.lineWidth = 2;
//           ctx.stroke();
//         }
//       });
//     };

//     const drawParticles = () => {
//       const time = timeRef.current;
      
//       particlesRef.current = particlesRef.current.filter(p => {
//         // Yangi zarrachalar hayoti
//         if (p.life !== null) {
//           p.life -= 0.01;
//           if (p.life <= 0) return false;
//           p.opacity = p.life;
//         }

//         // Harakat
//         p.x += p.vx;
//         p.y += p.vy;
//         p.rotation += p.rotationSpeed;
//         p.pulse += 0.05;

//         // Chegaralardan qaytish
//         if (p.x < 0 || p.x > width) p.vx *= -1;
//         if (p.y < 0 || p.y > height) p.vy *= -1;

//         // Sichqonchaga tortilish
//         const dx = mouseRef.current.x - p.x;
//         const dy = mouseRef.current.y - p.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
        
//         if (dist < 200 && dist > 0) {
//           p.vx += (dx / dist) * 0.02;
//           p.vy += (dy / dist) * 0.02;
//         }

//         // Tezlikni cheklash
//         const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
//         if (speed > 0) {
//           p.vx = (p.vx / speed) * 2;
//           p.vy = (p.vy / speed) * 2;
//         }

//         // Glow effekt
//         const glowSize = p.size + Math.sin(p.pulse) * 5;
//         const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
//         gradient.addColorStop(0, `rgba(99, 102, 241, ${p.opacity * 0.3})`);
//         gradient.addColorStop(1, 'transparent');
//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
//         ctx.fill();

//         // Symbolni chizish
//         ctx.save();
//         ctx.translate(p.x, p.y);
//         ctx.rotate(p.rotation * Math.PI / 180);
//         ctx.font = `${p.size}px Arial`;
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
//         ctx.fillText(p.symbol, 0, 0);
//         ctx.restore();

//         return true;
//       });

//       // Zarrachalar soni kamaysa qo'shish
//       while (particlesRef.current.length < particleCount) {
//         particlesRef.current.push(createParticle(width, height));
//       }
//     };

//     const drawClickEffects = () => {
//       clickEffectsRef.current = clickEffectsRef.current.filter(effect => {
//         effect.radius += 4;
//         effect.opacity -= 0.02;

//         if (effect.opacity <= 0) return false;

//         // Asosiy aylana
//         ctx.beginPath();
//         ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(168, 85, 247, ${effect.opacity})`;
//         ctx.lineWidth = 3;
//         ctx.stroke();

//         // Ichki aylana
//         ctx.beginPath();
//         ctx.arc(effect.x, effect.y, effect.radius * 0.7, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(99, 102, 241, ${effect.opacity * 0.7})`;
//         ctx.lineWidth = 2;
//         ctx.stroke();

//         // Uchqunlar
//         for (let i = 0; i < 8; i++) {
//           const angle = (i / 8) * Math.PI * 2 + timeRef.current * 0.02;
//           const sparkX = effect.x + Math.cos(angle) * effect.radius;
//           const sparkY = effect.y + Math.sin(angle) * effect.radius;
          
//           ctx.beginPath();
//           ctx.arc(sparkX, sparkY, 3, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(255, 255, 255, ${effect.opacity})`;
//           ctx.fill();
//         }

//         return true;
//       });
//     };

//     const drawFloatingFormulas = () => {
//       const time = timeRef.current;
//       const formulas = ['E=mc²', 'a²+b²=c²', 'F=ma', '∫dx', 'Σn', 'λ=h/p'];
      
//       formulas.forEach((formula, i) => {
//         const x = (width * (i + 1)) / (formulas.length + 1);
//         const y = height * 0.15 + Math.sin(time * 0.02 + i) * 20;
//         const opacity = 0.1 + Math.sin(time * 0.03 + i * 0.5) * 0.05;
        
//         ctx.font = '24px Georgia, serif';
//         ctx.textAlign = 'center';
//         ctx.fillStyle = `rgba(147, 197, 253, ${opacity})`;
//         ctx.fillText(formula, x, y);
//       });
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);
      
//       drawBackground();
//       drawFloatingFormulas();
//       drawConnections();
//       drawParticles();
//       drawClickEffects();
      
//       timeRef.current++;
//       animationIdRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       canvas.removeEventListener('click', handleClick);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(animationIdRef.current);
//     };
//   }, [createParticle]);

//   return (
//     <div style={styles.container}>
//       <canvas ref={canvasRef} style={styles.canvas} />

//       {/* Header */}
//       <header style={styles.header}>
//         <div style={styles.logoSection}>
//           <div style={styles.emblem}>🏛️</div>
//           <div style={styles.ministryName}>
//             O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//           </div>
//         </div>
//         <div style={styles.langSwitch}>
//           <button style={{...styles.langBtn, ...styles.langBtnActive}}>UZ</button>
//           <button style={styles.langBtn}>РУ</button>
//           <button style={styles.langBtn}>EN</button>
//         </div>
//       </header>

//       {/* Main */}
//       <main style={styles.main}>
//         <div style={styles.loginContainer}>
//           <div style={styles.systemBadge}>
//             <div style={styles.badgeDot} />
//             <span style={styles.badgeText}>Rasmiy tizim</span>
//           </div>

//           <h1 style={styles.loginTitle}>
//             <span style={styles.titleGradient}>EMIS</span>
//           </h1>
//           <p style={styles.loginSubtitle}>
//             Akademik litseylarda ta'lim jarayonlarini boshqarish tizimi
//           </p>

//           <div style={styles.loginCard}>
//             <button style={styles.oneidBtn}>
//               <div style={styles.oneidLogo}>ONE ID</div>
//               <div style={styles.oneidContent}>
//                 <div style={styles.oneidTitle}>ONE ID orqali kirish</div>
//                 <div style={styles.oneidDesc}>Yagona identifikatsiya tizimi</div>
//               </div>
//               <div style={styles.oneidArrow}>→</div>
//             </button>

//             <div style={styles.divider}>
//               <div style={styles.dividerLine} />
//               <span style={styles.dividerText}>Yordam</span>
//               <div style={styles.dividerLine} />
//             </div>

//             <div style={styles.helpLinks}>
//               <a href="#" style={styles.helpLink}>❓ Qo'llanma</a>
//               <a href="#" style={styles.helpLink}>📞 Qo'llab-quvvatlash</a>
//             </div>

//             <div style={styles.features}>
//               <div style={styles.feature}>
//                 <div style={styles.featureIcon}>🔒</div>
//                 <span>Xavfsiz</span>
//               </div>
//               <div style={styles.feature}>
//                 <div style={styles.featureIcon}>⚡</div>
//                 <span>Tezkor</span>
//               </div>
//               <div style={styles.feature}>
//                 <div style={styles.featureIcon}>🛡️</div>
//                 <span>Himoyalangan</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Hint */}
//       <div style={styles.hint}>
//         ✨ Ekranga bosing — bilim zarrachalari tarqaladi
//       </div>

//       {/* Footer */}
//       <footer style={styles.footer}>
//         © 2024 O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi
//       </footer>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     overflow: 'hidden',
//     position: 'relative',
//     background: '#0f0f23',
//   },
//   canvas: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     cursor: 'pointer',
//   },
//   header: {
//     position: 'relative',
//     zIndex: 10,
//     padding: '20px 40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   logoSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//   },
//   emblem: {
//     width: '45px',
//     height: '45px',
//     background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
//     borderRadius: '12px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '20px',
//     boxShadow: '0 4px 20px rgba(251, 191, 36, 0.3)',
//   },
//   ministryName: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     fontSize: '13px',
//     fontWeight: '400',
//     maxWidth: '300px',
//     lineHeight: '1.4',
//   },
//   langSwitch: {
//     display: 'flex',
//     gap: '8px',
//   },
//   langBtn: {
//     background: 'rgba(255, 255, 255, 0.05)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     color: 'rgba(255, 255, 255, 0.6)',
//     padding: '8px 14px',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '12px',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//   },
//   langBtnActive: {
//     background: 'rgba(99, 102, 241, 0.2)',
//     color: 'white',
//     borderColor: 'rgba(99, 102, 241, 0.4)',
//   },
//   main: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '40px',
//     position: 'relative',
//     zIndex: 10,
//   },
//   loginContainer: {
//     width: '100%',
//     maxWidth: '480px',
//   },
//   systemBadge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '10px',
//     background: 'rgba(99, 102, 241, 0.15)',
//     border: '1px solid rgba(99, 102, 241, 0.3)',
//     padding: '8px 16px',
//     borderRadius: '100px',
//     marginBottom: '30px',
//     backdropFilter: 'blur(10px)',
//   },
//   badgeDot: {
//     width: '8px',
//     height: '8px',
//     background: '#6366f1',
//     borderRadius: '50%',
//     boxShadow: '0 0 10px #6366f1',
//     animation: 'pulse 2s ease-in-out infinite',
//   },
//   badgeText: {
//     color: '#a5b4fc',
//     fontSize: '13px',
//     fontWeight: '500',
//   },
//   loginTitle: {
//     fontSize: '52px',
//     fontWeight: '700',
//     color: 'white',
//     marginBottom: '12px',
//     letterSpacing: '-1px',
//   },
//   titleGradient: {
//     background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #6366f1 100%)',
//     backgroundSize: '200% 200%',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     animation: 'gradient 3s ease infinite',
//   },
//   loginSubtitle: {
//     fontSize: '18px',
//     color: 'rgba(255, 255, 255, 0.5)',
//     marginBottom: '50px',
//     lineHeight: '1.5',
//   },
//   loginCard: {
//     background: 'rgba(15, 15, 35, 0.8)',
//     backdropFilter: 'blur(30px)',
//     border: '1px solid rgba(99, 102, 241, 0.2)',
//     borderRadius: '24px',
//     padding: '40px',
//     position: 'relative',
//     overflow: 'hidden',
//     boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(99, 102, 241, 0.1)',
//   },
//   oneidBtn: {
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '16px',
//     background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
//     border: 'none',
//     padding: '20px 32px',
//     borderRadius: '16px',
//     cursor: 'pointer',
//     transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//     boxShadow: '0 10px 30px rgba(79, 70, 229, 0.4)',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   oneidLogo: {
//     width: '44px',
//     height: '44px',
//     background: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: '10px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: '700',
//     color: 'white',
//     fontSize: '10px',
//     letterSpacing: '0.5px',
//   },
//   oneidContent: {
//     textAlign: 'left',
//     flex: 1,
//   },
//   oneidTitle: {
//     fontSize: '17px',
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: '3px',
//   },
//   oneidDesc: {
//     fontSize: '13px',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   oneidArrow: {
//     width: '40px',
//     height: '40px',
//     background: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontSize: '18px',
//     transition: 'transform 0.3s ease',
//   },
//   divider: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     margin: '30px 0',
//   },
//   dividerLine: {
//     flex: 1,
//     height: '1px',
//     background: 'rgba(99, 102, 241, 0.2)',
//   },
//   dividerText: {
//     color: 'rgba(255, 255, 255, 0.3)',
//     fontSize: '12px',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//   },
//   helpLinks: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '30px',
//   },
//   helpLink: {
//     color: 'rgba(255, 255, 255, 0.5)',
//     textDecoration: 'none',
//     fontSize: '13px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     transition: 'color 0.3s ease',
//   },
//   features: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '40px',
//     marginTop: '40px',
//     paddingTop: '30px',
//     borderTop: '1px solid rgba(99, 102, 241, 0.1)',
//   },
//   feature: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     color: 'rgba(255, 255, 255, 0.4)',
//     fontSize: '12px',
//   },
//   featureIcon: {
//     width: '32px',
//     height: '32px',
//     background: 'rgba(99, 102, 241, 0.1)',
//     borderRadius: '8px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '14px',
//   },
//   hint: {
//     position: 'fixed',
//     bottom: '80px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     color: 'rgba(255, 255, 255, 0.5)',
//     fontSize: '14px',
//     zIndex: 5,
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     pointerEvents: 'none',
//     background: 'rgba(99, 102, 241, 0.1)',
//     padding: '12px 24px',
//     borderRadius: '100px',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(99, 102, 241, 0.2)',
//   },
//   footer: {
//     position: 'relative',
//     zIndex: 10,
//     textAlign: 'center',
//     padding: '30px',
//     color: 'rgba(255, 255, 255, 0.3)',
//     fontSize: '12px',
//   },
// };


// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================



// import React, { useState } from 'react';
// import { 
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   PieChart, Pie, Cell, LineChart, Line, Area, AreaChart
// } from 'recharts';
// import { 
//   Building2, Users, GraduationCap, Award, Menu, Home, 
//   BarChart3, Settings, Bell, Search, TrendingUp, TrendingDown,
//   BookOpen, School, Calendar, ChevronDown, MoreHorizontal
// } from 'lucide-react';

// // Mock data
// const studentsData = { male: 12847, female: 11253, total: 24100 };
// const teachersData = { male: 342, female: 1158, total: 1500 };

// const studentsBySexData = [
//   { name: 'Male', value: 12847, color: '#6366f1' },
//   { name: 'Female', value: 11253, color: '#ec4899' }
// ];

// const teachersBySexData = [
//   { name: 'Male', value: 342, color: '#6366f1' },
//   { name: 'Female', value: 1158, color: '#ec4899' }
// ];

// const monthlyTrendData = [
//   { month: 'Jan', students: 21500, teachers: 1420 },
//   { month: 'Feb', students: 22100, teachers: 1435 },
//   { month: 'Mar', students: 22400, teachers: 1450 },
//   { month: 'Apr', students: 22900, teachers: 1460 },
//   { month: 'May', students: 23200, teachers: 1475 },
//   { month: 'Jun', students: 23600, teachers: 1485 },
//   { month: 'Jul', students: 23800, teachers: 1490 },
//   { month: 'Aug', students: 24100, teachers: 1500 }
// ];

// const topLyceumsData = [
//   { name: 'Academic Lyceum #1', students: 2847, city: 'Tashkent' },
//   { name: 'Presidential School', students: 2654, city: 'Tashkent' },
//   { name: 'IT Lyceum', students: 2341, city: 'Samarkand' },
//   { name: 'Science Lyceum', students: 2187, city: 'Bukhara' },
//   { name: 'Technical Lyceum', students: 1956, city: 'Fergana' }
// ];

// const lyceumRankingData = [
//   { name: 'Presidential School', avgGrade: 94.7, trend: '+2.3' },
//   { name: 'IT Lyceum', avgGrade: 92.4, trend: '+1.8' },
//   { name: 'Academic Lyceum #1', avgGrade: 91.2, trend: '+0.9' },
//   { name: 'Science Lyceum', avgGrade: 89.8, trend: '+1.2' },
//   { name: 'Technical Lyceum', avgGrade: 88.5, trend: '-0.4' },
//   { name: 'Medical Lyceum', avgGrade: 87.9, trend: '+0.7' },
//   { name: 'Economics Lyceum', avgGrade: 86.4, trend: '+1.1' },
//   { name: 'Language Lyceum', avgGrade: 85.7, trend: '+0.5' }
// ];

// const specialitiesData = [
//   { name: 'Natural Sciences', students: 5840, percent: 85 },
//   { name: 'Mathematics & IT', students: 5120, percent: 75 },
//   { name: 'Humanities', students: 4280, percent: 62 },
//   { name: 'Medicine & Biology', students: 3650, percent: 53 },
//   { name: 'Economics', students: 2890, percent: 42 },
//   { name: 'Languages', students: 2320, percent: 34 }
// ];

// const enrollmentByMonth = [
//   { month: '1', value: 320 },
//   { month: '2', value: 480 },
//   { month: '3', value: 650 },
//   { month: '4', value: 720 },
//   { month: '5', value: 890 },
//   { month: '6', value: 950 },
//   { month: '7', value: 1100 },
//   { month: '8', value: 980 }
// ];

// // Circular Progress Component
// const CircularProgress = ({ value, size = 120, strokeWidth = 8, label, sublabel }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = radius * 2 * Math.PI;
//   const offset = circumference - (value / 100) * circumference;
  
//   return (
//     <div className="relative" style={{ width: size, height: size }}>
//       <svg width={size} height={size} className="transform -rotate-90">
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="none"
//           stroke="rgba(255,255,255,0.1)"
//           strokeWidth={strokeWidth}
//         />
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="none"
//           stroke="url(#gradient)"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           strokeLinecap="round"
//         />
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#06b6d4" />
//             <stop offset="100%" stopColor="#8b5cf6" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         <span className="text-3xl font-bold text-white">{value}</span>
//         <span className="text-xs text-cyan-400">{sublabel}</span>
//       </div>
//     </div>
//   );
// };

// // Stat Card Component
// const StatCard = ({ title, value, subvalue, subtitle, icon: Icon, trend, trendValue, trendLabel }) => {
//   const isPositive = trend === 'up';
  
//   return (
//     <div className="bg-[#1e2642] rounded-2xl p-5 border border-white/5">
//       <div className="flex items-center justify-between mb-3">
//         <span className="text-slate-400 text-sm font-medium">{title}</span>
//         <button className="text-slate-500 hover:text-slate-300 transition-colors">
//           <MoreHorizontal size={16} />
//         </button>
//       </div>
//       <div className="flex items-end gap-2">
//         <span className="text-4xl font-bold text-white tracking-tight">{value}</span>
//         {subvalue && <span className="text-lg text-slate-500 mb-1">{subvalue}</span>}
//       </div>
//       {trendValue && (
//         <div className="flex items-center gap-2 mt-3">
//           <div className={`flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
//             {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
//             <span className="text-sm font-semibold">{trendValue}</span>
//           </div>
//           <span className="text-slate-500 text-xs">{trendLabel}</span>
//         </div>
//       )}
//       {subtitle && <p className="text-slate-500 text-xs mt-2">{subtitle}</p>}
//     </div>
//   );
// };

// // Funnel Chart Component
// const FunnelChart = ({ data, title }) => {
//   const maxValue = Math.max(...data.map(d => d.students));
  
//   return (
//     <div className="bg-[#1e2642] rounded-2xl p-5 border border-white/5">
//       <div className="flex items-center justify-between mb-5">
//         <h3 className="text-white font-semibold">{title}</h3>
//         <button className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full">
//           2024
//         </button>
//       </div>
//       <div className="space-y-4">
//         {data.map((item, index) => (
//           <div key={index} className="flex items-center gap-4">
//             <span className="text-slate-400 text-sm w-32 truncate">{item.name}</span>
//             <div className="flex-1 h-8 bg-[#151a30] rounded-lg overflow-hidden relative">
//               <div 
//                 className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center transition-all duration-500"
//                 style={{ width: `${(item.students / maxValue) * 100}%` }}
//               >
//                 <span className="text-slate-900 text-sm font-bold">{item.students.toLocaleString()}</span>
//               </div>
//             </div>
//             <span className="text-slate-400 text-sm w-12 text-right">{item.percent}%</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Bar Chart Component for Enrollment
// const EnrollmentChart = ({ data }) => {
//   return (
//     <div className="bg-[#1e2642] rounded-2xl p-5 border border-white/5">
//       <div className="flex items-center justify-between mb-5">
//         <div>
//           <h3 className="text-white font-semibold">Enrollment Over Time</h3>
//           <p className="text-slate-500 text-xs">Monthly new students</p>
//         </div>
//         <button className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
//           2024
//         </button>
//       </div>
//       <div className="h-48">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
//             <XAxis 
//               dataKey="month" 
//               axisLine={false} 
//               tickLine={false} 
//               tick={{ fill: '#64748b', fontSize: 12 }}
//             />
//             <YAxis 
//               axisLine={false} 
//               tickLine={false} 
//               tick={{ fill: '#64748b', fontSize: 12 }}
//               tickFormatter={(v) => v >= 1000 ? `${v/1000}K` : v}
//             />
//             <Tooltip 
//               contentStyle={{ 
//                 background: '#1e2642', 
//                 border: '1px solid rgba(255,255,255,0.1)', 
//                 borderRadius: '12px',
//                 boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
//               }}
//               labelStyle={{ color: '#fff' }}
//               itemStyle={{ color: '#06b6d4' }}
//             />
//             <Bar 
//               dataKey="value" 
//               fill="url(#barGradient)" 
//               radius={[6, 6, 0, 0]}
//               maxBarSize={40}
//             />
//             <defs>
//               <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#06b6d4" />
//                 <stop offset="100%" stopColor="#0891b2" />
//               </linearGradient>
//             </defs>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// // Leaderboard Component
// const Leaderboard = ({ data }) => {
//   return (
//     <div className="bg-[#1e2642] rounded-2xl border border-white/5 overflow-hidden">
//       <div className="p-5 border-b border-white/5">
//         <h3 className="text-white font-semibold">Lyceum Ranking by Average Grade</h3>
//       </div>
//       <div className="divide-y divide-white/5">
//         {data.map((item, index) => (
//           <div key={index} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
//             <div className="flex items-center gap-4">
//               <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
//                 index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-900' :
//                 index === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-900' :
//                 index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-slate-900' :
//                 'bg-slate-700/50 text-slate-400'
//               }`}>
//                 {index + 1}
//               </div>
//               <span className="text-slate-300 text-sm font-medium">{item.name}</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-24 h-2 bg-[#151a30] rounded-full overflow-hidden">
//                 <div 
//                   className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
//                   style={{ width: `${item.avgGrade}%` }}
//                 />
//               </div>
//               <span className="text-white font-bold w-12 text-right">{item.avgGrade}</span>
//               <span className={`text-xs font-semibold px-2 py-1 rounded ${
//                 item.trend.startsWith('+') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
//               }`}>
//                 {item.trend}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Donut Chart Component
// const DonutChartWidget = ({ data, title, total }) => {
//   return (
//     <div className="bg-[#1e2642] rounded-2xl p-5 border border-white/5">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-white font-semibold">{title}</h3>
//         <button className="text-slate-500 hover:text-slate-300">
//           <MoreHorizontal size={16} />
//         </button>
//       </div>
//       <div className="flex items-center gap-6">
//         <div className="relative w-32 h-32">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={38}
//                 outerRadius={55}
//                 paddingAngle={4}
//                 dataKey="value"
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <span className="text-xl font-bold text-white">{total}</span>
//             <span className="text-[10px] text-slate-500">TOTAL</span>
//           </div>
//         </div>
//         <div className="flex-1 space-y-3">
//           {data.map((item, index) => (
//             <div key={index} className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
//                 <span className="text-slate-400 text-sm">{item.name}</span>
//               </div>
//               <span className="text-white font-semibold">{item.value.toLocaleString()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Sidebar Component
// const Sidebar = () => {
//   const navItems = [
//     { icon: Home, active: true },
//     { icon: BarChart3 },
//     { icon: Building2 },
//     { icon: Users },
//     { icon: GraduationCap },
//     { icon: Award },
//     { icon: BookOpen },
//     { icon: Calendar },
//     { icon: Settings },
//   ];

//   return (
//     <aside className="fixed left-0 top-0 h-screen w-16 bg-[#151a30] flex flex-col items-center py-6 z-50">
//       <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-8">
//         <School size={20} className="text-white" />
//       </div>
//       <nav className="flex-1 flex flex-col items-center gap-2">
//         {navItems.map((item, index) => (
//           <button
//             key={index}
//             className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
//               item.active 
//                 ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400' 
//                 : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
//             }`}
//           >
//             <item.icon size={20} />
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// // Main Dashboard Component
// export default function HemisDashboard() {
//   const [activeTab, setActiveTab] = useState('OVERVIEW');
//   const tabs = ['OVERVIEW', 'MONTHLY', 'REGIONS', 'TEACHERS', 'STUDENTS', 'REPORTS'];

//   return (
//     <div className="min-h-screen bg-[#0f1629]" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
//       <Sidebar />
      
//       <main className="ml-16">
//         {/* Header */}
//         <header className="sticky top-0 z-40 bg-[#0f1629]/90 backdrop-blur-xl border-b border-white/5">
//           <div className="flex items-center justify-between px-6 py-4">
//             <div className="flex items-center gap-6">
//               <h1 className="text-white font-bold text-lg">DASHBOARD</h1>
//               <div className="flex items-center gap-1 bg-[#1e2642] rounded-xl p-1">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
//                       activeTab === tab
//                         ? 'bg-cyan-500 text-white'
//                         : 'text-slate-400 hover:text-white'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
//                 <input 
//                   type="text"
//                   placeholder="Type here to find..."
//                   className="pl-9 pr-4 py-2 bg-[#1e2642] rounded-xl text-sm text-white placeholder-slate-500 w-56 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 border border-white/5"
//                 />
//               </div>
//               <button className="relative p-2 bg-[#1e2642] rounded-xl text-slate-400 hover:text-white transition-colors border border-white/5">
//                 <Bell size={18} />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
//               </button>
//               <div className="flex items-center gap-3 pl-4 border-l border-white/10">
//                 <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-white text-sm font-medium">Admin User</p>
//                 </div>
//                 <ChevronDown size={16} className="text-slate-500" />
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-6">
//           {/* Main Chart + Event Card */}
//           <div className="grid grid-cols-12 gap-6 mb-6">
//             {/* Main Area Chart */}
//             <div className="col-span-8 bg-[#1e2642] rounded-2xl p-5 border border-white/5">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-white font-semibold">Student Growth Chart</h3>
//                 <div className="flex items-center gap-2">
//                   <button className="px-3 py-1.5 bg-cyan-500 text-white text-xs font-semibold rounded-lg">DETAILS</button>
//                   <button className="px-3 py-1.5 bg-[#151a30] text-slate-400 text-xs font-semibold rounded-lg hover:text-white">MONTHLY</button>
//                   <button className="px-3 py-1.5 bg-[#151a30] text-slate-400 text-xs font-semibold rounded-lg hover:text-white">YEARLY</button>
//                 </div>
//               </div>
//               <div className="flex items-center gap-8">
//                 <div className="flex-1 h-56">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={monthlyTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//                       <defs>
//                         <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
//                           <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
//                           <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
//                         </linearGradient>
//                         <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
//                           <stop offset="0%" stopColor="#8b5cf6" />
//                           <stop offset="100%" stopColor="#06b6d4" />
//                         </linearGradient>
//                       </defs>
//                       <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
//                       <XAxis 
//                         dataKey="month" 
//                         axisLine={false} 
//                         tickLine={false}
//                         tick={{ fill: '#64748b', fontSize: 12 }}
//                       />
//                       <YAxis 
//                         axisLine={false} 
//                         tickLine={false}
//                         tick={{ fill: '#64748b', fontSize: 12 }}
//                         tickFormatter={(v) => `${v/1000}K`}
//                       />
//                       <Tooltip 
//                         contentStyle={{ 
//                           background: '#1e2642', 
//                           border: '1px solid rgba(255,255,255,0.1)', 
//                           borderRadius: '12px',
//                           boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
//                         }}
//                         labelStyle={{ color: '#fff' }}
//                       />
//                       <Area
//                         type="monotone"
//                         dataKey="students"
//                         stroke="url(#lineGradient)"
//                         strokeWidth={3}
//                         fill="url(#areaGradient)"
//                       />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>
//                 <div className="flex flex-col items-center gap-4">
//                   <CircularProgress value={68} size={120} label="68.27" sublabel="PERCENT AVG" />
//                   <button className="px-6 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-xl hover:bg-cyan-400 transition-colors">
//                     DETAILS
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Event/Info Card */}
//             <div className="col-span-4 bg-gradient-to-br from-[#1e2642] to-[#252d4a] rounded-2xl overflow-hidden border border-white/5">
//               <div className="p-5">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-slate-500 text-xs font-medium tracking-wider">ACADEMIC YEAR</span>
//                   <div className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
//                     <span className="text-emerald-400 text-xs">Active</span>
//                   </div>
//                 </div>
//                 <p className="text-slate-400 text-xs mb-2">DECEMBER 09, 2024</p>
//                 <h2 className="text-white text-2xl font-bold leading-tight mb-3">
//                   2024-2025<br />
//                   <span className="text-cyan-400">ACADEMIC YEAR</span>
//                 </h2>
//                 <p className="text-slate-400 text-sm mb-4">
//                   Ministry of Higher Education,<br />Science and Innovation
//                 </p>
//               </div>
//               <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
//                 <div className="text-center">
//                   <GraduationCap size={48} className="text-cyan-400 mx-auto mb-2" />
//                   <span className="text-white text-sm font-medium">EduAnalytics Platform</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Stats Row */}
//           <div className="grid grid-cols-4 gap-6 mb-6">
//             <StatCard 
//               title="Total Organizations"
//               value="156"
//               subvalue=""
//               trend="up"
//               trendValue="+12"
//               trendLabel="new this year"
//             />
//             <StatCard 
//               title="Total Teachers"
//               value="1,500"
//               subvalue=""
//               trend="up"
//               trendValue="+48"
//               trendLabel="vs last month"
//             />
//             <StatCard 
//               title="Total Students"
//               value="24,100"
//               subvalue=""
//               trend="up"
//               trendValue="+5.2%"
//               trendLabel="growth rate"
//             />
//             <StatCard 
//               title="Diplomas Issued"
//               value="8,456"
//               subvalue=""
//               trend="up"
//               trendValue="+324"
//               trendLabel="this semester"
//             />
//           </div>

//           {/* Charts Row */}
//           <div className="grid grid-cols-2 gap-6 mb-6">
//             <FunnelChart data={specialitiesData} title="Students by Speciality" />
//             <EnrollmentChart data={enrollmentByMonth} />
//           </div>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-12 gap-6 mb-6">
//             <div className="col-span-4">
//               <DonutChartWidget 
//                 data={studentsBySexData} 
//                 title="Students by Sex" 
//                 total="24.1K"
//               />
//             </div>
//             <div className="col-span-4">
//               <DonutChartWidget 
//                 data={teachersBySexData} 
//                 title="Teachers by Sex" 
//                 total="1.5K"
//               />
//             </div>
//             <div className="col-span-4 bg-[#1e2642] rounded-2xl p-5 border border-white/5">
//               <h3 className="text-white font-semibold mb-4">Top Lyceums</h3>
//               <div className="space-y-3">
//                 {topLyceumsData.slice(0, 4).map((item, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
//                         index === 0 ? 'bg-yellow-500 text-slate-900' :
//                         index === 1 ? 'bg-slate-400 text-slate-900' :
//                         index === 2 ? 'bg-orange-500 text-slate-900' :
//                         'bg-slate-700 text-slate-400'
//                       }`}>
//                         {index + 1}
//                       </span>
//                       <span className="text-slate-300 text-sm">{item.name}</span>
//                     </div>
//                     <span className="text-white font-semibold">{item.students.toLocaleString()}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Leaderboard */}
//           <Leaderboard data={lyceumRankingData} />

//           {/* Footer */}
//           <footer className="text-center py-6 mt-8">
//             <p className="text-slate-600 text-sm">
//               © 2024 Ministry of Higher Education, Science and Innovation • EduAnalytics Platform v2.4
//             </p>
//           </footer>
//         </div>
//       </main>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Area, AreaChart
} from 'recharts';
import { 
  Building2, Users, GraduationCap, Award, Home, 
  BarChart3, Settings, Bell, Search, TrendingUp, TrendingDown,
  BookOpen, School, Calendar, ChevronDown, MoreHorizontal,
  Sun, Moon
} from 'lucide-react';

// Mock data
const studentsData = { male: 12847, female: 11253, total: 24100 };
const teachersData = { male: 342, female: 1158, total: 1500 };

const studentsBySexData = [
  { name: 'Male', value: 12847, color: '#6366f1' },
  { name: 'Female', value: 11253, color: '#ec4899' }
];

const teachersBySexData = [
  { name: 'Male', value: 342, color: '#6366f1' },
  { name: 'Female', value: 1158, color: '#ec4899' }
];

const monthlyTrendData = [
  { month: 'Jan', students: 21500, teachers: 1420 },
  { month: 'Feb', students: 22100, teachers: 1435 },
  { month: 'Mar', students: 22400, teachers: 1450 },
  { month: 'Apr', students: 22900, teachers: 1460 },
  { month: 'May', students: 23200, teachers: 1475 },
  { month: 'Jun', students: 23600, teachers: 1485 },
  { month: 'Jul', students: 23800, teachers: 1490 },
  { month: 'Aug', students: 24100, teachers: 1500 }
];

const topLyceumsData = [
  { name: 'Academic Lyceum #1', students: 2847, city: 'Tashkent' },
  { name: 'Presidential School', students: 2654, city: 'Tashkent' },
  { name: 'IT Lyceum', students: 2341, city: 'Samarkand' },
  { name: 'Science Lyceum', students: 2187, city: 'Bukhara' },
  { name: 'Technical Lyceum', students: 1956, city: 'Fergana' }
];

const lyceumRankingData = [
  { name: 'Presidential School', avgGrade: 94.7, trend: '+2.3' },
  { name: 'IT Lyceum', avgGrade: 92.4, trend: '+1.8' },
  { name: 'Academic Lyceum #1', avgGrade: 91.2, trend: '+0.9' },
  { name: 'Science Lyceum', avgGrade: 89.8, trend: '+1.2' },
  { name: 'Technical Lyceum', avgGrade: 88.5, trend: '-0.4' },
  { name: 'Medical Lyceum', avgGrade: 87.9, trend: '+0.7' },
  { name: 'Economics Lyceum', avgGrade: 86.4, trend: '+1.1' },
  { name: 'Language Lyceum', avgGrade: 85.7, trend: '+0.5' }
];

const specialitiesData = [
  { name: 'Natural Sciences', students: 5840, percent: 85 },
  { name: 'Mathematics & IT', students: 5120, percent: 75 },
  { name: 'Humanities', students: 4280, percent: 62 },
  { name: 'Medicine & Biology', students: 3650, percent: 53 },
  { name: 'Economics', students: 2890, percent: 42 },
  { name: 'Languages', students: 2320, percent: 34 }
];

const enrollmentByMonth = [
  { month: '1', value: 320 },
  { month: '2', value: 480 },
  { month: '3', value: 650 },
  { month: '4', value: 720 },
  { month: '5', value: 890 },
  { month: '6', value: 950 },
  { month: '7', value: 1100 },
  { month: '8', value: 980 }
];

// Theme configurations
const themes = {
  dark: {
    bg: 'bg-[#0f1629]',
    bgSecondary: 'bg-[#1e2642]',
    bgTertiary: 'bg-[#151a30]',
    text: 'text-white',
    textSecondary: 'text-slate-400',
    textMuted: 'text-slate-500',
    border: 'border-white/5',
    cardBg: '#1e2642',
    chartBg: '#151a30',
    gridStroke: 'rgba(255,255,255,0.05)',
    tickColor: '#64748b',
    hoverBg: 'hover:bg-white/5',
    inputBg: 'bg-[#1e2642]',
    sidebarBg: 'bg-[#151a30]',
  },
  light: {
    bg: 'bg-slate-50',
    bgSecondary: 'bg-white',
    bgTertiary: 'bg-slate-100',
    text: 'text-slate-800',
    textSecondary: 'text-slate-600',
    textMuted: 'text-slate-400',
    border: 'border-slate-200',
    cardBg: '#ffffff',
    chartBg: '#f1f5f9',
    gridStroke: 'rgba(0,0,0,0.06)',
    tickColor: '#64748b',
    hoverBg: 'hover:bg-slate-50',
    inputBg: 'bg-slate-100',
    sidebarBg: 'bg-slate-900',
  }
};

// Theme Toggle Component
const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`flex w-16 h-8 rounded-full p-1 transition-all duration-300 ${
        isDark ? 'bg-slate-700' : 'bg-cyan-100'
      }`}
    >
      <div
        className={`absolute w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
          isDark 
            ? 'translate-x-8 bg-slate-900' 
            : 'translate-x-0 bg-white shadow-md'
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-cyan-400" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </div>
    </button>
  );
};

// Circular Progress Component
const CircularProgress = ({ value, size = 120, strokeWidth = 8, isDark }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#circleGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{value}</span>
        <span className="text-xs text-cyan-500">PERCENT</span>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, trend, trendValue, trendLabel, theme, isDark }) => {
  const isPositive = trend === 'up';
  
  return (
    <div className={`${theme.bgSecondary} rounded-2xl p-5 border ${theme.border} shadow-sm`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`${theme.textSecondary} text-sm font-medium`}>{title}</span>
        <button className={`${theme.textMuted} hover:${theme.textSecondary} transition-colors`}>
          <MoreHorizontal size={16} />
        </button>
      </div>
      <div className="flex items-end gap-2">
        <span className={`text-4xl font-bold ${theme.text} tracking-tight`}>{value}</span>
      </div>
      {trendValue && (
        <div className="flex items-center gap-2 mt-3">
          <div className={`flex items-center gap-1 ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span className="text-sm font-semibold">{trendValue}</span>
          </div>
          <span className={`${theme.textMuted} text-xs`}>{trendLabel}</span>
        </div>
      )}
    </div>
  );
};

// Funnel Chart Component
const FunnelChart = ({ data, title, theme, isDark }) => {
  const maxValue = Math.max(...data.map(d => d.students));
  
  return (
    <div className={`${theme.bgSecondary} rounded-2xl p-5 border ${theme.border} shadow-sm`}>
      <div className="flex items-center justify-between mb-5">
        <h3 className={`${theme.text} font-semibold`}>{title}</h3>
        <button className="px-3 py-1 bg-amber-500/20 text-amber-500 text-xs font-semibold rounded-full">
          2024
        </button>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className={`${theme.textSecondary} text-sm w-32 truncate`}>{item.name}</span>
            <div className={`flex-1 h-8 ${theme.bgTertiary} rounded-lg overflow-hidden relative`}>
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-lg flex items-center justify-center transition-all duration-500"
                style={{ width: `${(item.students / maxValue) * 100}%` }}
              >
                <span className="text-slate-900 text-sm font-bold">{item.students.toLocaleString()}</span>
              </div>
            </div>
            <span className={`${theme.textSecondary} text-sm w-12 text-right`}>{item.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bar Chart Component for Enrollment
const EnrollmentChart = ({ data, theme, isDark }) => {
  return (
    <div className={`${theme.bgSecondary} rounded-2xl p-5 border ${theme.border} shadow-sm`}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className={`${theme.text} font-semibold`}>Enrollment Over Time</h3>
          <p className={`${theme.textMuted} text-xs`}>Monthly new students</p>
        </div>
        <button className="px-3 py-1 bg-cyan-500/20 text-cyan-500 text-xs font-semibold rounded-full">
          2024
        </button>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.gridStroke} vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: theme.tickColor, fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: theme.tickColor, fontSize: 12 }}
              tickFormatter={(v) => v >= 1000 ? `${v/1000}K` : v}
            />
            <Tooltip 
              contentStyle={{ 
                background: theme.cardBg, 
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, 
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
              labelStyle={{ color: isDark ? '#fff' : '#1e293b' }}
              itemStyle={{ color: '#06b6d4' }}
            />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Leaderboard Component
const Leaderboard = ({ data, theme, isDark }) => {
  return (
    <div className={`${theme.bgSecondary} rounded-2xl border ${theme.border} overflow-hidden shadow-sm`}>
      <div className={`p-5 border-b ${theme.border}`}>
        <h3 className={`${theme.text} font-semibold`}>Lyceum Ranking by Average Grade</h3>
      </div>
      <div className={`divide-y ${isDark ? 'divide-white/5' : 'divide-slate-100'}`}>
        {data.map((item, index) => (
          <div key={index} className={`flex items-center justify-between p-4 ${theme.hoverBg} transition-colors`}>
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-900' :
                index === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-900' :
                index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-slate-900' :
                isDark ? 'bg-slate-700/50 text-slate-400' : 'bg-slate-100 text-slate-500'
              }`}>
                {index + 1}
              </div>
              <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-sm font-medium`}>{item.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-24 h-2 ${theme.bgTertiary} rounded-full overflow-hidden`}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  style={{ width: `${item.avgGrade}%` }}
                />
              </div>
              <span className={`${theme.text} font-bold w-12 text-right`}>{item.avgGrade}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                item.trend.startsWith('+') ? 'bg-emerald-500/20 text-emerald-500' : 'bg-rose-500/20 text-rose-500'
              }`}>
                {item.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Donut Chart Component
const DonutChartWidget = ({ data, title, total, theme, isDark }) => {
  return (
    <div className={`${theme.bgSecondary} rounded-2xl p-5 border ${theme.border} shadow-sm`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`${theme.text} font-semibold`}>{title}</h3>
        <button className={`${theme.textMuted}`}>
          <MoreHorizontal size={16} />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={55}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-xl font-bold ${theme.text}`}>{total}</span>
            <span className={`text-[10px] ${theme.textMuted}`}>TOTAL</span>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className={`${theme.textSecondary} text-sm`}>{item.name}</span>
              </div>
              <span className={`${theme.text} font-semibold`}>{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ isDark, setIsDark  }) => {
  const navItems = [
    { icon: Home, active: true },
    { icon: BarChart3 },
    { icon: Building2 },
    { icon: Users },
    { icon: GraduationCap },
    { icon: Award },
    { icon: BookOpen },
    { icon: Calendar },
    { icon: Settings },
    { icon: isDark ? Sun : Moon, onClick: () => setIsDark(!isDark) }
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen w-16 ${isDark ? 'bg-[#151a30]' : 'bg-slate-900'} flex flex-col items-center py-6 z-50`}>
      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20">
        <School size={20} className="text-white" />
      </div>
      <nav className="flex-1 flex flex-col items-center gap-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              item.active 
                ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400' 
                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
            }`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </nav>
    </aside>
  );
};

// Main Dashboard Component
export default function HemisDashboard() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const tabs = ['OVERVIEW', 'MONTHLY', 'REGIONS', 'TEACHERS', 'STUDENTS', 'REPORTS'];
  
  const theme = isDark ? themes.dark : themes.light;

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-300`} style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <Sidebar isDark={isDark} />
      
      <main className="ml-16">
        {/* Header */}
        <header className={`sticky top-0 z-40 ${isDark ? 'bg-[#0f1629]/90' : 'bg-white/90'} backdrop-blur-xl border-b ${theme.border}`}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6">
              <h1 className={`${theme.text} font-bold text-lg`}>DASHBOARD</h1>
              <div className={`flex items-center gap-1 ${theme.bgSecondary} rounded-xl p-1 border ${theme.border}`}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === tab
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                        : `${theme.textSecondary} hover:${theme.text}`
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
              
              <div className="relative">
                <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.textMuted}`} />
                <input 
                  type="text"
                  placeholder="Type here to find..."
                  className={`pl-9 pr-4 py-2 ${theme.inputBg} rounded-xl text-sm ${theme.text} placeholder-slate-500 w-56 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 border ${theme.border} transition-colors`}
                />
              </div>
              <button className={`relative p-2 ${theme.bgSecondary} rounded-xl ${theme.textSecondary} hover:${theme.text} transition-colors border ${theme.border}`}>
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
              </button>
              <div className={`flex items-center gap-3 pl-4 border-l ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/20">
                  A
                </div>
                <div>
                  <p className={`${theme.text} text-sm font-medium`}>Admin User</p>
                </div>
                <ChevronDown size={16} className={theme.textMuted} />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Main Chart + Event Card */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            {/* Main Area Chart */}
            <div className={`col-span-8 ${theme.bgSecondary} rounded-2xl p-5 border ${theme.border} shadow-sm`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`${theme.text} font-semibold`}>Student Growth Chart</h3>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-cyan-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-cyan-500/20">DETAILS</button>
                  <button className={`px-3 py-1.5 ${theme.bgTertiary} ${theme.textSecondary} text-xs font-semibold rounded-lg hover:${theme.text}`}>MONTHLY</button>
                  <button className={`px-3 py-1.5 ${theme.bgTertiary} ${theme.textSecondary} text-xs font-semibold rounded-lg hover:${theme.text}`}>YEARLY</button>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex-1 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={theme.gridStroke} vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fill: theme.tickColor, fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fill: theme.tickColor, fontSize: 12 }}
                        tickFormatter={(v) => `${v/1000}K`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          background: theme.cardBg, 
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, 
                          borderRadius: '12px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                        }}
                        labelStyle={{ color: isDark ? '#fff' : '#1e293b' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="students"
                        stroke="url(#lineGradient)"
                        strokeWidth={3}
                        fill="url(#areaGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <CircularProgress value={68} size={120} isDark={isDark} />
                  <button className="px-6 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                    DETAILS
                  </button>
                </div>
              </div>
            </div>

            {/* Event/Info Card */}
            <div className={`col-span-4 ${isDark ? 'bg-gradient-to-br from-[#1e2642] to-[#252d4a]' : 'bg-gradient-to-br from-slate-800 to-slate-900'} rounded-2xl overflow-hidden border ${theme.border}`}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-xs font-medium tracking-wider">ACADEMIC YEAR</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-xs">Active</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs mb-2">DECEMBER 09, 2024</p>
                <h2 className="text-white text-2xl font-bold leading-tight mb-3">
                  2024-2025<br />
                  <span className="text-cyan-400">ACADEMIC YEAR</span>
                </h2>
                <p className="text-slate-400 text-sm mb-4">
                  Ministry of Higher Education,<br />Science and Innovation
                </p>
              </div>
              <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <GraduationCap size={48} className="text-cyan-400 mx-auto mb-2" />
                  <span className="text-white text-sm font-medium">EduAnalytics Platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <StatCard 
              title="Total Organizations"
              value="156"
              trend="up"
              trendValue="+12"
              trendLabel="new this year"
              theme={theme}
              isDark={isDark}
            />
            <StatCard 
              title="Total Teachers"
              value="1,500"
              trend="up"
              trendValue="+48"
              trendLabel="vs last month"
              theme={theme}
              isDark={isDark}
            />
            <StatCard 
              title="Total Students"
              value="24,100"
              trend="up"
              trendValue="+5.2%"
              trendLabel="growth rate"
              theme={theme}
              isDark={isDark}
            />
            <StatCard 
              title="Diplomas Issued"
              value="8,456"
              trend="up"
              trendValue="+324"
              trendLabel="this semester"
              theme={theme}
              isDark={isDark}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <FunnelChart data={specialitiesData} title="Students by Speciality" theme={theme} isDark={isDark} />
            <EnrollmentChart data={enrollmentByMonth} theme={theme} isDark={isDark} />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-4">
              <DonutChartWidget 
                data={studentsBySexData} 
                title="Students by Sex" 
                total="24.1K"
                theme={theme}
                isDark={isDark}
              />
            </div>
            <div className="col-span-4">
              <DonutChartWidget 
                data={teachersBySexData} 
                title="Teachers by Sex" 
                total="1.5K"
                theme={theme}
                isDark={isDark}
              />
            </div>
            <div className={`col-span-4 ${theme.bgSecondary} rounded-2xl p-5 border ${theme.border} shadow-sm`}>
              <h3 className={`${theme.text} font-semibold mb-4`}>Top Lyceums</h3>
              <div className="space-y-3">
                {topLyceumsData.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-yellow-500 text-slate-900' :
                        index === 1 ? 'bg-slate-400 text-slate-900' :
                        index === 2 ? 'bg-orange-500 text-slate-900' :
                        isDark ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {index + 1}
                      </span>
                      <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-sm`}>{item.name}</span>
                    </div>
                    <span className={`${theme.text} font-semibold`}>{item.students.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <Leaderboard data={lyceumRankingData} theme={theme} isDark={isDark} />

          {/* Footer */}
          <footer className="text-center py-6 mt-8">
            <p className={`${theme.textMuted} text-sm`}>
              © 2024 Ministry of Higher Education, Science and Innovation • EduAnalytics Platform v2.4
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}