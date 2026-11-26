export default function decorate(block) {
  block.classList.add('session-two', 'session-practice');

  [...block.children].forEach((row) => {
    row.classList.add('eds-enablement-block-row');
    [...row.children].forEach((col) => {
      const isImage = col.querySelector('picture') && !col.textContent.trim();
      col.classList.add(isImage ? 'eds-enablement-block-image' : 'eds-enablement-block-text');
    });

    const text = row.querySelector('.eds-enablement-block-text');
    if (!text) return;
    const badge = document.createElement('span');
    badge.className = 'eds-enablement-block-badge';
    badge.textContent = 'Session 2 · Practice';
    text.prepend(badge);
    text.querySelectorAll('a').forEach((a) => a.classList.add('button'));
    if (!row.querySelector('.eds-enablement-block-image')) row.classList.add('text-only');
  });
}
