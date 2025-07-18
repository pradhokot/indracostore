// animasi marquee
document.addEventListener("DOMContentLoaded", function () {
   const marquee = document.querySelector('.marquee');
   const text = document.getElementById('marqueeText');
   const speed = 50; // px per second

   function animateMarquee() {
      const marqueeWidth = marquee.offsetWidth;
      const textWidth = text.offsetWidth;
      const distance = marqueeWidth + textWidth;
      const duration = distance / speed;

      text.style.transition = 'none';
      text.style.transform = `translate(${marqueeWidth}px, -50%)`;

      setTimeout(() => {
         text.style.transition = `transform ${duration}s linear`;
         text.style.transform = `translate(-${textWidth}px, -50%)`;
      }, 50);

      text.addEventListener('transitionend', animateMarquee, { once: true });
   }

   animateMarquee();
   window.addEventListener('resize', () => {
      text.style.transition = 'none';
      text.style.transform = 'none';
      setTimeout(animateMarquee, 100);
   });
});