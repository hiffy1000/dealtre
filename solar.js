
  const ctaItems = document.querySelectorAll('.cta-list li');
  const btn = document.getElementById('.btns');
  const hero = document.querySelector('.hero');
  const container = document.querySelector('.hero-container');
const content = document.querySelector('.hero-content');
let toggle = false;

btns.addEventListener('click', function(){
   const hero = document.querySelector('.hero');
  
   
   if(!toggle){
hero.style.backgroundImage = "url('https://joint-research-centre.ec.europa.eu/sites/default/files/styles/ewcms_metatag_image/public/2023-06/Solar_Page_web_banner.jpg?itok=m7AkRVwl')" 
hero.style.color = "white";
   }else {
hero.style.backgroundImage = "url('images\house-with-large-solar-panel-roof1270664-27345.webp')"
   }
   toggle = !toggle;
});
  
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.2
  });

  ctaItems.forEach(item => {
    observer.observe(item);
  });

