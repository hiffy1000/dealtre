
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Optional: unobserve if you want it to animate only once
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // adjust when the animation should trigger
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });

