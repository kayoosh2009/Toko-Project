(function () {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.right = '20px';
  container.style.width = '250px';
  container.style.height = '250px';
  container.style.borderRadius = '15px';
  container.style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
  container.style.overflow = 'hidden';
  container.style.zIndex = '2147483647';
  container.style.opacity = '0';
  container.style.transition = 'opacity 0.5s ease';

  const frame = document.createElement('iframe');
  frame.src = 'https://kayoosh2009.github.io/AD-Page/';
  frame.style.border = 'none';
  frame.style.width = '100%';
  frame.style.height = '100%';
  frame.style.display = 'block';

  container.appendChild(frame);
  document.body.appendChild(container);

  // Плавное появление
  requestAnimationFrame(() => {
    container.style.opacity = '1';
  });

  // Скрыть через 5 секунд
  setTimeout(() => {
    container.style.opacity = '0';
    container.addEventListener('transitionend', () => {
      container.remove();
    }, { once: true });
  }, 5000);
})();
