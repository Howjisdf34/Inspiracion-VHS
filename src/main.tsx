import { initVasari } from './vasari.ts';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initVasari());
} else {
  initVasari();
}
