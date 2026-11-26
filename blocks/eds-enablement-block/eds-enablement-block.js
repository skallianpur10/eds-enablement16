export default function decorate(block) {
  block.classList.add('session-two', 'session-practice');

  [...block.children].forEach((row) => {
    row.classList.add('eds-enablement-block-row');
    [...row.children].forEach((col) => {
      if (col.querySelector('picture')) col.classList.add('eds-enablement-block-image');
      else col.classList.add('eds-enablement-block-text');
    });
  });
}
