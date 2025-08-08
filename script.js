// Mobile menu toggle functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const navMenu = document.querySelector('.nav-menu');
    
//     if (mobileMenuToggle && navMenu) {
//         mobileMenuToggle.addEventListener('click', function() {
//             navMenu.classList.toggle('active');
//             mobileMenuToggle.classList.toggle('active');
//         });
        
//         // Close menu when clicking on a link
//         const navLinks = document.querySelectorAll('.nav-menu a');
//         navLinks.forEach(link => {
//             link.addEventListener('click', function() {
//                 navMenu.classList.remove('active');
//                 mobileMenuToggle.classList.remove('active');
//             });
//         });
        
//         // Close menu when clicking outside
//         document.addEventListener('click', function(event) {
//             if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
//                 navMenu.classList.remove('active');
//                 mobileMenuToggle.classList.remove('active');
//             }
//         });
//     }
// });

// // Calculator functionality for new layout
// document.addEventListener('DOMContentLoaded', function() {
//     // Get all slider inputs and their corresponding display values
//     const sliders = document.querySelectorAll('.slider');
//     const sliderInputs = document.querySelectorAll('.slider-input');
//     const inputValues = document.querySelectorAll('.input-value');
    
//     // Update calculator when sliders change
//     sliders.forEach((slider, index) => {
//         const input = sliderInputs[index];
//         const displayValue = inputValues[index];
        
//         // Update input and display when slider changes
//         slider.addEventListener('input', function() {
//             input.value = this.value;
//             updateDisplayValue(index, this.value);
//             updateCalculator();
//         });
        
//         // Update slider and display when input changes
//         input.addEventListener('input', function() {
//             slider.value = this.value;
//             updateDisplayValue(index, this.value);
//             updateCalculator();
//         });
//     });
    
//     // Update display values with proper formatting
//     function updateDisplayValue(index, value) {
//         const displayValue = inputValues[index];
//         if (displayValue) {
//             switch(index) {
//                 case 0: // Team members
//                     displayValue.textContent = value;
//                     break;
//                 case 1: // Hourly rate
//                     displayValue.textContent = `$${value}`;
//                     break;
//                 case 2: // Manual hours
//                     displayValue.textContent = `${value} hrs/week`;
//                     break;
//                 case 3: // AI efficiency
//                     displayValue.textContent = `${value}%`;
//                     break;
//             }
//         }
//     }
    
//     // Calculate and update results
//     function updateCalculator() {
//         const teamMembers = parseInt(sliderInputs[0].value) || 5;
//         const hourlyRate = parseInt(sliderInputs[1].value) || 25;
//         const manualHours = parseInt(sliderInputs[2].value) || 5;
//         const aiEfficiency = parseInt(sliderInputs[3].value) || 30;
        
//         // Calculate monthly cost savings
//         const weeklyCostPerPerson = manualHours * hourlyRate;
//         const monthlyCostPerPerson = weeklyCostPerPerson * 4;
//         const totalMonthlyCost = monthlyCostPerPerson * teamMembers;
//         const monthlySavings = totalMonthlyCost * (aiEfficiency / 100);
        
//         // Calculate hours saved per month
//         const hoursSavedPerPerson = manualHours * (aiEfficiency / 100);
//         const totalHoursSaved = hoursSavedPerPerson * teamMembers * 4; // 4 weeks per month
        
//         // Calculate annual ROI (simplified calculation)
//         const annualSavings = monthlySavings * 12;
//         const annualROI = -35; // Fixed for demo, could be calculated based on implementation cost
        
//         // Calculate productivity increase
//         const productivityIncrease = aiEfficiency;
        
//         // Update display
//         const monthlySavingsElement = document.getElementById('monthly-savings');
//         const annualROIElement = document.getElementById('annual-roi');
//         const hoursSavedElement = document.getElementById('hours-saved');
//         const productivityElement = document.getElementById('productivity-increase');
        
//         if (monthlySavingsElement) {
//             monthlySavingsElement.textContent = `+$${monthlySavings.toFixed(3)}`;
//         }
//         if (annualROIElement) {
//             annualROIElement.textContent = `${annualROI}%`;
//         }
//         if (hoursSavedElement) {
//             hoursSavedElement.textContent = `${Math.round(totalHoursSaved)} hrs/mo`;
//         }
//         if (productivityElement) {
//             productivityElement.textContent = `${productivityIncrease}%`;
//         }
        
//         // Update reality check items
//         updateRealityCheck(teamMembers, monthlySavings, annualROI, totalHoursSaved, hourlyRate);
//     }
    
//     // Update reality check section
//     function updateRealityCheck(teamMembers, monthlySavings, annualROI, hoursSaved, hourlyRate) {
//         const reality1 = document.getElementById('reality-1');
//         const reality2 = document.getElementById('reality-2');
//         const reality3 = document.getElementById('reality-3');
//         const reality4 = document.getElementById('reality-4');
//         const reality5 = document.getElementById('reality-5');
        
//         if (reality1) {
//             reality1.textContent = `With ${teamMembers} team members, you could save $${monthlySavings.toFixed(3)} monthly through AI automation`;
//         }
//         if (reality2) {
//             reality2.textContent = `Your projected ROI is ${annualROI}% annually`;
//         }
//         if (reality3) {
//             reality3.textContent = `Your team will save approximately ${Math.round(hoursSaved)} hours per month with AI workflows`;
//         }
//         if (reality4) {
//             reality4.textContent = `That's $${hourlyRate} in value per hour saved`;
//         }
//         if (reality5) {
//             reality5.textContent = `Most companies see payback within 2-3 months of implementation`;
//         }
//     }
    
//     // Initialize calculator
//     updateCalculator();
    
//     // Get Started button functionality
//     const getStartedBtn = document.querySelector('.get-started-btn');
//     if (getStartedBtn) {
//         getStartedBtn.addEventListener('click', function() {
//             // Animate the button
//             this.style.transform = 'scale(0.95)';
//             setTimeout(() => {
//                 this.style.transform = 'scale(1)';
//             }, 150);
            
//             // Show success message
//             alert('Thank you! We will contact you soon to get started with Prime AI.');
//         });
//     }
// });

// // Smooth scrolling for navigation
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('a[href^="#"]');
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             const targetSection = document.querySelector(targetId);
            
//             if (targetSection) {
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });
// });

// // Header scroll effect
// document.addEventListener('DOMContentLoaded', function() {
//     const header = document.querySelector('.header');
//     let lastScrollTop = 0;
    
//     window.addEventListener('scroll', function() {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//         if (scrollTop > 100) {
//             header.style.background = 'rgba(255, 255, 255, 0.98)';
//             header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//         } else {
//             header.style.background = 'rgba(255, 255, 255, 0.95)';
//             header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//         }
        
//         lastScrollTop = scrollTop;
//     });
// });

// // Intersection Observer for animations
// document.addEventListener('DOMContentLoaded', function() {
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };
    
//     const observer = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, observerOptions);
    
//     // Observe elements for animation
//     const animatedElements = document.querySelectorAll('.testimonial-card, .service-card, .step, .feature-card, .workflow-item, .benefit');
//     animatedElements.forEach((el, index) => {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(30px)';
//         el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
//         el.style.transitionDelay = `${index * 0.1}s`;
//         observer.observe(el);
//     });
// });

// // Button hover effects
// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('button');
    
//     buttons.forEach(button => {
//         button.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-3px) scale(1.02)';
//         });
        
//         button.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0) scale(1)';
//         });
//     });
// });

// // Card hover effects
// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.testimonial-card, .service-card, .step, .feature-card');
    
//     cards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-5px)';
//             this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//             this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
//         });
//     });
// });

// // Video play button functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const playButton = document.querySelector('.play-button');
//     const watchVideoBtn = document.querySelector('.watch-video-btn');
    
//     if (playButton) {
//         playButton.addEventListener('click', function() {
//             alert('Video player would open here. This is a demo.');
//         });
//     }
    
//     if (watchVideoBtn) {
//         watchVideoBtn.addEventListener('click', function() {
//             alert('Video player would open here. This is a demo.');
//         });
//     }
// });

// // Form submission
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.querySelector('.contact-form');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const emailInput = this.querySelector('.email-input');
//             const email = emailInput.value;
            
//             if (!email) {
//                 alert('Please enter your email address.');
//                 return;
//             }
            
//             // Email validation
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(email)) {
//                 alert('Please enter a valid email address.');
//                 return;
//             }
            
//             // Simulate form submission
//             alert('Thank you! We will contact you soon to schedule your call.');
//             emailInput.value = '';
//         });
//     }
// });

// // Typing animation for hero title
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero-title');
    
//     if (heroTitle) {
//         const text = heroTitle.innerHTML;
//         heroTitle.innerHTML = '';
        
//         let i = 0;
//         const typeWriter = () => {
//             if (i < text.length) {
//                 heroTitle.innerHTML += text.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, 50);
//             }
//         };
        
//         // Start typing animation after a delay
//         setTimeout(typeWriter, 500);
//     }
// });

// // Parallax effect for hero section
// document.addEventListener('DOMContentLoaded', function() {
//     const heroSection = document.querySelector('.hero');
//     const heroContent = document.querySelector('.hero-content');
//     const heroVideo = document.querySelector('.hero-video');
    
//     window.addEventListener('scroll', function() {
//         const scrolled = window.pageYOffset;
//         const rate = scrolled * -0.5;
        
//         if (heroContent && heroVideo) {
//             heroContent.style.transform = `translateY(${rate * 0.3}px)`;
//             heroVideo.style.transform = `translateY(${rate * 0.1}px)`;
//         }
//     });
// });

// // Performance optimization
// document.addEventListener('DOMContentLoaded', function() {
//     // Lazy loading for images
//     const images = document.querySelectorAll('img[data-src]');
//     const imageObserver = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });
    
//     images.forEach(img => imageObserver.observe(img));
// });

// // Preloader (optional)
// window.addEventListener('load', function() {
//     const preloader = document.querySelector('.preloader');
//     if (preloader) {
//         preloader.style.opacity = '0';
//         setTimeout(() => {
//             preloader.style.display = 'none';
//         }, 500);
//     }
// }); 