// ============================================
//  CUSTOM CURSOR — Arrow + Glow + Trail
//  Import and call initCursor() in main.jsx
// ============================================

export function initCursor() {

  // ── Create arrow element ──
  const arrow = document.createElement('div');
  arrow.className = 'cursor-arrow';
  arrow.innerHTML = `
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 2L24 12L14.5 14.5L12 24L4 2Z"
        stroke="white"
        stroke-width="1.8"
        stroke-linejoin="round"
        fill="rgba(0,0,0,0.01)"
      />
    </svg>
  `;

  // ── Create glow dot at tip ──
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';

  document.body.appendChild(arrow);
  document.body.appendChild(glow);

  let mouseX = -100, mouseY = -100;

  // ── Move arrow + glow ──
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Arrow positioned so tip aligns with cursor
    arrow.style.left = mouseX + 'px';
    arrow.style.top  = mouseY + 'px';

    // Glow dot sits exactly at the arrow tip
    glow.style.left = mouseX + 'px';
    glow.style.top  = mouseY + 'px';

    // Spawn trail particle
    spawnTrail(mouseX, mouseY);
  });

  // ── Hover effect on interactive elements ──
  document.addEventListener('mouseover', (e) => {
    const tag = e.target.tagName.toLowerCase();
    const isInteractive = ['a', 'button', 'input', 'textarea', 'select'].includes(tag)
      || e.target.closest('a, button');
    if (isInteractive) {
      arrow.classList.add('hovered');
      glow.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const tag = e.target.tagName.toLowerCase();
    const isInteractive = ['a', 'button', 'input', 'textarea', 'select'].includes(tag)
      || e.target.closest('a, button');
    if (isInteractive) {
      arrow.classList.remove('hovered');
      glow.classList.remove('hovered');
    }
  });

  // ── Trail particle spawner ──
  let lastTrail = 0;
  function spawnTrail(x, y) {
    const now = Date.now();
    if (now - lastTrail < 30) return; // throttle: 1 particle per 30ms
    lastTrail = now;

    const size = Math.random() * 5 + 2; // 2–7px
    const opacity = Math.random() * 0.5 + 0.2;

    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: rgba(247, 37, 133, ${opacity});
      box-shadow: 0 0 ${size * 2}px rgba(247, 37, 133, 0.6);
    `;

    document.body.appendChild(dot);

    // Remove after animation completes
    setTimeout(() => dot.remove(), 500);
  }

  // ── Hide when cursor leaves window ──
  document.addEventListener('mouseleave', () => {
    arrow.style.opacity = '0';
    glow.style.opacity  = '0';
  });
  document.addEventListener('mouseenter', () => {
    arrow.style.opacity = '1';
    glow.style.opacity  = '1';
  });
}