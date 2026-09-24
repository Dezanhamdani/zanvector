/* ZanVector — placeholder portfolio data.
   Ganti "svg" di tiap item dengan ilustrasi asli kamu (atau <img src="...">)
   dan ganti title/tag sesuai karya sebenarnya. Susun 6–12 karya terbaik saja. */

var ZANVECTOR_WORKS = [
  {
    title: 'Portrait Line Study',
    tag: 'Line Art',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"><path d="M50 12c16 0 26 12 26 28 0 20-12 34-26 34S24 60 24 40c0-16 10-28 26-28Z"/><path d="M32 42c2-4 6-6 10-6M58 42c2-4 6-6 10-6" stroke="var(--accent)"/><path d="M40 62c4 4 16 4 20 0"/></svg>'
  },
  {
    title: 'Runner 02',
    tag: 'Product Illustration',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 62c6-10 14-14 24-14 8 0 12 4 20 4 8 0 12-6 20-6l6 14c-6 6-14 10-24 10H26c-6 0-9-4-12-8Z"/><path d="M38 48l6-14 14 4-4 12" stroke="var(--accent)"/></svg>'
  },
  {
    title: 'Studio Plant',
    tag: 'Custom Vector Illustration',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"><path d="M50 80V40"/><path d="M50 46c-14 0-22-10-22-24 14 0 22 10 22 24Z" stroke="var(--accent)"/><path d="M50 54c14 0 22-8 22-20-14 0-22 8-22 20Z"/><path d="M32 80h36" /></svg>'
  },
  {
    title: 'Pour Over',
    tag: 'Product Illustration',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 40h40l-6 34a6 6 0 0 1-6 5H42a6 6 0 0 1-6-5L30 40Z"/><path d="M70 46c8 0 12 4 12 10s-4 10-12 10" stroke="var(--accent)"/><path d="M38 30c2-4 2-6 0-9M50 30c2-4 2-6 0-9M62 30c2-4 2-6 0-9"/></svg>'
  },
  {
    title: 'Rowhouse',
    tag: 'Line Art',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 82V46l22-16 22 16v36"/><path d="M62 82V38l20-12 20 12v0" stroke="var(--accent)"/><path d="M18 82h44M34 82V60h12v22"/></svg>'
  },
  {
    title: 'Two Wheels',
    tag: 'Custom Vector Illustration',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="68" r="14"/><circle cx="72" cy="68" r="14"/><path d="M28 68 44 38h20l8 12M44 38l14 30h14" stroke="var(--accent)"/><path d="M44 38h-8"/></svg>'
  },
  {
    title: 'Headphone Mark',
    tag: 'Product Illustration',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 58v-8a28 28 0 0 1 56 0v8"/><rect x="16" y="56" width="14" height="20" rx="4" stroke="var(--accent)"/><rect x="70" y="56" width="14" height="20" rx="4"/></svg>'
  },
  {
    title: 'House Cat',
    tag: 'Line Art',
    svg: '<svg viewBox="0 0 100 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 42 22 22l16 10M70 42l8-20-16 10"/><path d="M30 42a20 20 0 0 1 40 0v14c0 14-9 22-20 22s-20-8-20-22Z"/><circle cx="42" cy="50" r="2" fill="var(--ink)"/><circle cx="58" cy="50" r="2" fill="var(--ink)" stroke="none"/><path d="M46 58h8" stroke="var(--accent)"/></svg>'
  }
];

function renderCard(item) {
  var root = (typeof window.ZV_ROOT === 'string') ? window.ZV_ROOT : '';
  return (
    '<a class="card" href="' + root + 'portfolio/">' +
      '<div class="frame">' + item.svg + '</div>' +
      '<div class="meta"><span class="tag">' + item.tag + '</span><h3>' + item.title + '</h3></div>' +
    '</a>'
  );
}
