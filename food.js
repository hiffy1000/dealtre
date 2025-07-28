 let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;

  // This function creates the player
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'K6sgvvGso8M', // your video ID
      playerVars: {
        mute: 1,
        autoplay: 1,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // Start checking the video time once it's playing
  function onPlayerReady(event) {
    checkTime();
  }

  function checkTime() {
    setInterval(function () {
      if (player && player.getCurrentTime() >= 20) {
        player.pauseVideo(); // or player.stopVideo();
      }
    }, 500); // check every 0.5s
  }

  function onPlayerStateChange(event) {
    // Optional: add more controls if needed
  }

  const items = document.querySelectorAll(".food-list li");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  items.forEach(item => {
    observer.observe(item);
  });


