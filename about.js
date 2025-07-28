
 // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
                        behavior: 'smooth'
                    });
                
                }
            });
        }
    );
 
// Create solar panel effect
        function createSolarCells() {
            const solarPanel = document.querySelector('.solar-panel');
            const panelWidth = solarPanel.offsetWidth;
            const panelHeight = solarPanel.offsetHeight;
            
            // Clear existing cells
            solarPanel.innerHTML = '';
            
            // Calculate number of cells based on panel size
            const cols = Math.floor(panelWidth / 15);
            const rows = Math.floor(panelHeight / 15);
            
            // Create cells
            for (let i = 0; i < cols * rows; i++) {
                const cell = document.createElement('div');
                cell.classList.add('solar-cell');
                
                // Random position
                const left = Math.random() * panelWidth;
                const top = Math.random() * panelHeight;
                
                // Random delay for animation
                const delay = Math.random() * 2;
                
                cell.style.left = `${left}px`;
                cell.style.top = `${top}px`;
                cell.style.animationDelay = `${delay}s`;
                
                solarPanel.appendChild(cell);
            }
        }
        
        // Scroll animation for elements
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('active');
                }
            });
        }
        
        // Counter animation for stats
        function animateCounters() {
            const projects = document.getElementById('projects-count');
            const capacity = document.getElementById('capacity-count');
            const homes = document.getElementById('homes-count');
            const co2 = document.getElementById('co2-count');
            
            const targetValues = {
                projects: 850,
                capacity: 42,
                homes: 12500,
                co2: 28000
            };
            
            const duration = 2000; // 2 seconds
            const interval = 20; // update every 20ms
            const steps = duration / interval;
            
            let currentStep = 0;
            
            const counterInterval = setInterval(() => {
                currentStep++;
                
                if (currentStep >= steps) {
                    clearInterval(counterInterval);
                }
                
                // Ease out function for smoother animation
                const progress = currentStep / steps;
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                projects.textContent = Math.floor(targetValues.projects * easeProgress).toLocaleString();
                capacity.textContent = Math.floor(targetValues.capacity * easeProgress).toLocaleString();
                homes.textContent = Math.floor(targetValues.homes * easeProgress).toLocaleString();
                co2.textContent = Math.floor(targetValues.co2 * easeProgress).toLocaleString();
            }, interval);
        }
        
        // Initialize
        window.addEventListener('load', () => {
            createSolarCells();
            animateOnScroll();
            
            // Check if stats section is in view
            const statsSection = document.querySelector('section.bg-gradient-to-r');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(statsSection);
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('resize', createSolarCells);