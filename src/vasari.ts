export interface Film {
  id: string;
  title: string;
  romaji: string;
  kanji: string;
  year: number;
  genre: string;
  minutes: number;
  synopsis: string;
}

export const SHEET: Record<string, [string, number, number]> = {
  covers: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010644_837e04ca-2418-45c1-b8e0-0233265c4cd5.png&w=1744&q=85',
    1744,
    2336,
  ],
  spines: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010738_a3e47ead-18f2-4974-9468-06d16a25edc5.png&w=2688&q=85',
    2688,
    1152,
  ],
  fix: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010831_3ebb874b-93dc-433e-87ed-6299aba720f0.png&w=1520&q=85',
    1520,
    2688,
  ],
  fix2: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_092020_f96bc094-db7b-46de-9298-074a24e0a3b8.png&w=1520&q=85',
    1520,
    2688,
  ],
};

export const CROP: Record<string, [string, number, number, number, number]> = {
  'spine-valley': ['spines', 266, 31, 189, 1089],
  'cover-valley': ['covers', 497, 72, 344, 659],
  'spine-bluehour': ['spines', 492, 31, 189, 1089],
  'cover-bluehour': ['covers', 914, 72, 342, 659],
  'spine-river': ['fix', 197, 54, 324, 2566],
  'cover-river': ['covers', 1332, 72, 344, 659],
  'spine-summer': ['spines', 937, 31, 188, 1089],
  'cover-summer': ['covers', 74, 813, 344, 676],
  'spine-green': ['spines', 1157, 31, 185, 1090],
  'cover-green': ['covers', 497, 815, 344, 674],
  'spine-noon': ['spines', 44, 32, 184, 1088],
  'cover-noon': ['covers', 74, 72, 347, 659],
  'spine-observer': ['fix2', 371, 15, 349, 2655],
  'cover-observer': ['covers', 915, 815, 342, 675],
  'spine-birds': ['spines', 1573, 31, 183, 1089],
  'cover-birds': ['covers', 1331, 815, 345, 675],
  'spine-storm': ['fix2', 808, 15, 347, 2656],
  'cover-storm': ['covers', 74, 1571, 345, 681],
  'spine-tide': ['spines', 2012, 31, 188, 1089],
  'cover-tide': ['covers', 496, 1577, 343, 678],
  'spine-war': ['spines', 2236, 31, 189, 1089],
  'cover-war': ['covers', 913, 1579, 343, 676],
  'spine-door': ['spines', 2462, 31, 188, 1089],
  'cover-door': ['covers', 1331, 1579, 344, 677],
};

export const FILMS: Film[] = [
  {
    id: 'valley',
    title: 'The Silent Valley',
    romaji: 'SHIZUKANA TANI',
    kanji: '静かな谷',
    year: 1958,
    genre: 'Drama',
    minutes: 104,
    synopsis:
      'A schoolteacher returns to the mountain village that exiled her father, and finds the valley has kept every one of its secrets.',
  },
  {
    id: 'bluehour',
    title: 'The Blue Hour',
    romaji: 'AO NO TOKI',
    kanji: '青の刻',
    year: 1962,
    genre: 'Romance',
    minutes: 97,
    synopsis:
      'Over one long evening in a harbour town, a widow and a stranger trade small lies until the light runs out.',
  },
  {
    id: 'river',
    title: 'River of Salt',
    romaji: 'SHIO NO KAWA',
    kanji: '塩の川',
    year: 1964,
    genre: 'Drama',
    minutes: 121,
    synopsis:
      'Two brothers drag a salt barge downriver to a city that no longer wants anything they carry.',
  },
  {
    id: 'summer',
    title: 'The Last Summer',
    romaji: 'SAIGO NO NATSU',
    kanji: '最後の夏',
    year: 1966,
    genre: 'Drama',
    minutes: 109,
    synopsis:
      'The summer before the dam floods their village, three friends set fire to everything they cannot take with them.',
  },
  {
    id: 'green',
    title: 'The Green Road',
    romaji: 'MIDORI NO MICHI',
    kanji: '緑の道',
    year: 1969,
    genre: 'Mystery',
    minutes: 101,
    synopsis:
      'A surveyor mapping a forest road keeps finding the same footprints, always one day ahead of him.',
  },
  {
    id: 'noon',
    title: 'Noon in Ashes',
    romaji: 'HAI NO SHOGO',
    kanji: '灰の正午',
    year: 1971,
    genre: 'Western',
    minutes: 112,
    synopsis:
      'A rider crosses a white desert to settle an old debt, and learns too late who sent him.',
  },
  {
    id: 'observer',
    title: 'The Observer',
    romaji: 'KANSATSUSHA',
    kanji: '観察者',
    year: 1973,
    genre: 'Thriller',
    minutes: 96,
    synopsis:
      'A night watchman begins to suspect that the building he guards has started watching him back.',
  },
  {
    id: 'birds',
    title: 'The Fallen Birds',
    romaji: 'OCHITA TORI',
    kanji: '落ちた鳥',
    year: 1975,
    genre: 'Drama',
    minutes: 118,
    synopsis:
      "When the birds stop singing over a frontier town, the mayor's daughter is the only one who goes looking for the reason.",
  },
  {
    id: 'storm',
    title: 'Light in the Storm',
    romaji: 'ARASHI NO HI',
    kanji: '嵐の灯',
    year: 1978,
    genre: 'Drama',
    minutes: 127,
    synopsis:
      'A lighthouse keeper and his son wait out a three-day storm with a shipwrecked sailor who will not give his name.',
  },
  {
    id: 'tide',
    title: 'The Long Tide',
    romaji: 'NAGAI SHIO',
    kanji: '長い潮',
    year: 1981,
    genre: 'Drama',
    minutes: 99,
    synopsis:
      "A fisherman's wife counts the tides on the harbour wall while her husband's boat fails to come home.",
  },
  {
    id: 'war',
    title: 'A Quiet War',
    romaji: 'SHIZUKANA SENSO',
    kanji: '静かな戦争',
    year: 1985,
    genre: 'Comedy',
    minutes: 103,
    synopsis:
      'Two neighbours fight a silent war over a garden wall for thirty years, and neither will say how it began.',
  },
  {
    id: 'door',
    title: 'Red Door',
    romaji: 'AKAI TOBIRA',
    kanji: '赤い扉',
    year: 1989,
    genre: 'Thriller',
    minutes: 114,
    synopsis:
      'A projectionist follows a reel of unknown film through the corridors of a cinema on its final night.',
  },
];

const BLOB_DELAYS = [0, 120, 220, 300, 360, 420, 180];

export function initVasari() {
  if ((window as unknown as Record<string, boolean>).__VASARI_INIT__) return;
  (window as unknown as Record<string, boolean>).__VASARI_INIT__ = true;

  // Preload all 4 sheets
  Object.values(SHEET).forEach(([url]) => {
    const img = new Image();
    img.src = url;
  });

  const probe = document.querySelector<HTMLElement>('.probe')!;
  const stage = document.getElementById('stage')!;
  const shelf = document.getElementById('shelf')!;
  const playRing = document.getElementById('play-ring')!;
  const caption = document.getElementById('caption')!;
  const masks = Array.from(caption.querySelectorAll<HTMLElement>('.cap-mask'));
  const tabNav = document.getElementById('tabs-nav')!;
  const tabInd = document.getElementById('tab-ind')!;
  const tabButtons = Array.from(tabNav.querySelectorAll<HTMLButtonElement>('.tab'));
  const prevBtn = document.getElementById('arrow-prev')!;
  const nextBtn = document.getElementById('arrow-next')!;
  const backLink = document.getElementById('back-link')!;
  const detail = document.getElementById('detail')!;
  const detailClose = document.getElementById('detail-close')!;
  const dSub = document.getElementById('d-sub')!;
  const dTitle = document.getElementById('d-title')!;
  const dMeta = document.getElementById('d-meta')!;
  const dSyn = document.getElementById('d-syn')!;
  const dWatch = document.getElementById('d-watch')!;
  const dLines = Array.from(detail.querySelectorAll<HTMLElement>('.d-line'));
  const posterImg = document.getElementById('poster-img') as unknown as SVGImageElement;
  const inkBlobs = Array.from(document.querySelectorAll<SVGCircleElement>('#ink-blobs circle'));
  const cursor = document.getElementById('cursor')!;

  const mqlReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reducedMotion = mqlReduced.matches;
  mqlReduced.addEventListener('change', (e) => {
    reducedMotion = e.matches;
  });

  function applyCrop(el: HTMLElement, key: string) {
    const [sid, x, y, w, h] = CROP[key];
    const [url, W, H] = SHEET[sid];
    el.style.backgroundImage = `url("${url}")`;
    el.style.backgroundSize = `${(W / w) * 100}% ${(H / h) * 100}%`;
    el.style.backgroundPosition = `${(x / (W - w)) * 100}% ${(y / (H - h)) * 100}%`;
  }

  // State
  let s = 17; // Noon in Ashes (5 + 12)
  let T = 17;
  let hover = -1;
  let active = 5;
  let W = window.innerWidth;
  let H_vp = window.innerHeight;
  let H = 400;
  let ws = 68;
  let d = 210;
  let gap = 12;

  let mx = W / 2;
  let my = H_vp / 2;
  let cx = W / 2;
  let cy = H_vp / 2;
  let tiltX = 0;
  let tiltY = 0;
  let onCover = false;
  let overBtn = false;
  let overPlayRing = false;
  let isOpen = false;
  let isDragging = false;
  let pointerDown = false;
  let dragStartX = 0;
  let dragStartT = 17;
  let suppressClick = false;
  let wheelTimer: number | null = null;
  let inkRaf = 0;
  let sheetAnim: Animation | null = null;
  let lineAnims: Animation[] = [];

  // Build 36 tapes
  interface TapeItem {
    v: number;
    i: number;
    el: HTMLElement;
    sp: HTMLElement;
    cv: HTMLElement;
    lift: number;
  }

  const tapes: TapeItem[] = [];
  stage.innerHTML = '';

  for (let v = 0; v < 36; v++) {
    const i = v % 12;
    const film = FILMS[i];
    const el = document.createElement('div');
    el.className = 'tape';
    el.dataset.v = String(v);

    const sp = document.createElement('div');
    sp.className = 'face sp';
    applyCrop(sp, `spine-${film.id}`);

    const cv = document.createElement('div');
    cv.className = 'face cv';
    applyCrop(cv, `cover-${film.id}`);

    el.appendChild(sp);
    el.appendChild(cv);
    stage.appendChild(el);

    el.addEventListener('pointerenter', () => {
      hover = v;
    });
    el.addEventListener('pointerleave', () => {
      if (hover === v) hover = -1;
    });
    el.addEventListener('click', () => {
      if (suppressClick || isOpen) return;
      const r = relIndex(v, s);
      if (Math.abs(r) < 0.5) {
        openDetail();
      } else {
        T = Math.round(T + r);
      }
    });

    tapes.push({ v, i, el, sp, cv, lift: 0 });
  }

  function relIndex(v: number, scroll: number): number {
    let r = (v - scroll) % 36;
    if (r > 18) r -= 36;
    if (r < -18) r += 36;
    return r;
  }

  function smoothstep(x: number): number {
    return x * x * (3 - 2 * x);
  }

  function B(r: number): number {
    if (r <= -1) return -0.5;
    if (r >= 1) return 0.5;
    return (r + Math.sin(Math.PI * r) / Math.PI) / 2;
  }

  function measure() {
    W = window.innerWidth;
    H_vp = window.innerHeight;
    const rect = probe.getBoundingClientRect();
    H = rect.height || Math.min(H_vp * 0.46, W * 0.31);
    ws = (H * 142) / 840;
    d = (H * 474) / 900;
    gap = H * 0.03;
    stage.style.setProperty('--ws', `${ws}px`);
    stage.style.setProperty('--d', `${d}px`);
    updateDecadeIndicator(active);
  }

  function updateDecadeIndicator(filmIdx: number) {
    const film = FILMS[filmIdx];
    const decade = `${Math.floor(film.year / 10) * 10}s`;
    let activeBtn: HTMLButtonElement | null = null;
    for (const btn of tabButtons) {
      const isMatch = btn.dataset.decade === decade;
      btn.classList.toggle('is-active', isMatch);
      if (isMatch) activeBtn = btn;
    }
    if (activeBtn) {
      tabInd.style.width = `${activeBtn.offsetWidth}px`;
      tabInd.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    }
  }

  function setActive(nextIdx: number, dir: number) {
    if (nextIdx === active) return;
    active = nextIdx;
    updateDecadeIndicator(active);
    const film = FILMS[active];
    const values = [
      { text: film.title, cls: 'cap-title' },
      { text: `${film.romaji} / ${film.kanji}`, cls: 'lbl cap-sub' },
      { text: String(film.year), cls: 'cap-year' },
    ];

    const stepDir = dir >= 0 ? 1 : -1;

    masks.forEach((mask, idx) => {
      const { text, cls } = values[idx];
      if (reducedMotion) {
        mask.innerHTML = '';
        const span = document.createElement('span');
        span.className = cls;
        span.textContent = text;
        mask.appendChild(span);
        return;
      }

      const oldSpans = Array.from(mask.querySelectorAll<HTMLElement>('span'));
      for (const old of oldSpans) {
        if (old.dataset.leaving === '1') continue;
        old.dataset.leaving = '1';
        const computed = getComputedStyle(old).transform;
        const fromTransform = computed && computed !== 'none' ? computed : 'translateY(0%)';
        const leaveAnim = old.animate(
          [{ transform: fromTransform }, { transform: `translateY(${-stepDir * 105}%)` }],
          {
            duration: 650,
            easing: 'cubic-bezier(.2,.8,.2,1)',
            fill: 'both',
          }
        );
        leaveAnim.onfinish = () => {
          old.remove();
        };
      }

      const nextSpan = document.createElement('span');
      nextSpan.className = cls;
      nextSpan.textContent = text;
      mask.appendChild(nextSpan);

      nextSpan.animate(
        [{ transform: `translateY(${stepDir * 105}%)` }, { transform: 'translateY(0%)' }],
        {
          duration: 650,
          easing: 'cubic-bezier(.2,.8,.2,1)',
          fill: 'both',
        }
      );
    });
  }

  function getActiveTape(): TapeItem {
    let best = tapes[0];
    let bestDist = Infinity;
    for (const t of tapes) {
      const dist = Math.abs(relIndex(t.v, s));
      if (dist < bestDist) {
        bestDist = dist;
        best = t;
      }
    }
    return best;
  }

  function openDetail() {
    if (isOpen) return;
    isOpen = true;
    T = Math.round(s);
    const filmIdx = ((Math.round(s) % 12) + 12) % 12;
    if (filmIdx !== active) {
      setActive(filmIdx, 1);
    }
    const film = FILMS[active];

    // Fill detail texts
    dSub.textContent = `${film.romaji} / ${film.kanji}`;
    dTitle.textContent = film.title;
    dMeta.textContent = `${film.year} / ${film.genre.toUpperCase()} / ${film.minutes} MIN`;
    dSyn.textContent = film.synopsis;

    // Point poster <image> at cover's sheet crop
    const [sid, x, y, w, h] = CROP[`cover-${film.id}`];
    const [url, SW, SH] = SHEET[sid];
    posterImg.setAttribute('href', url);
    posterImg.setAttribute('x', String((-x * 474) / w));
    posterImg.setAttribute('y', String((-y * 900) / h));
    posterImg.setAttribute('width', String((SW * 474) / w));
    posterImg.setAttribute('height', String((SH * 900) / h));

    // Reset all blob radii to 0
    for (const c of inkBlobs) {
      c.setAttribute('r', '0');
    }

    // Read screen rect of active tape's cover face
    const activeTape = getActiveTape();
    const rect = activeTape.cv.getBoundingClientRect();
    const top = Math.max(0, rect.top);
    const right = Math.max(0, W - rect.right);
    const bottom = Math.max(0, H_vp - rect.bottom);
    const left = Math.max(0, rect.left);
    const ox = rect.left + rect.width / 2;
    const oy = rect.top + rect.height / 2;

    if (sheetAnim) sheetAnim.cancel();
    lineAnims.forEach((a) => a.cancel());
    lineAnims = [];
    if (inkRaf) cancelAnimationFrame(inkRaf);

    detail.style.visibility = 'visible';
    detail.style.pointerEvents = 'auto';
    detail.style.transformOrigin = `${ox}px ${oy}px`;

    // 2. The sheet grows out of the cover
    sheetAnim = detail.animate(
      [
        {
          clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round 3px)`,
          transform: 'rotate(-4.5deg)',
        },
        {
          clipPath: 'inset(0px 0px 0px 0px round 0px)',
          transform: 'rotate(0deg)',
        },
      ],
      {
        duration: reducedMotion ? 1 : 1050,
        easing: 'cubic-bezier(.76,0,.18,1)',
        fill: 'both',
      }
    );

    // 3. Text rises
    dLines.forEach((line, index) => {
      const anim = line.animate(
        [{ transform: 'translateY(110%)' }, { transform: 'translateY(0%)' }],
        {
          duration: reducedMotion ? 1 : 900,
          delay: reducedMotion ? 0 : 620 + index * 75,
          easing: 'cubic-bezier(.2,.8,.2,1)',
          fill: 'both',
        }
      );
      lineAnims.push(anim);
    });

    // 4. The poster bleeds in
    const tStart = reducedMotion ? performance.now() - 5000 : performance.now() + 520;
    function tickInk(now: number) {
      const elapsed = now - tStart;
      for (let i = 0; i < inkBlobs.length; i++) {
        const local = elapsed - BLOB_DELAYS[i];
        const p = Math.max(0, Math.min(1, local / 1250));
        const eased = 1 - Math.pow(1 - p, 3);
        inkBlobs[i].setAttribute('r', (eased * 720).toFixed(1));
      }
      if (elapsed < 2400 && isOpen) {
        inkRaf = requestAnimationFrame(tickInk);
      }
    }
    inkRaf = requestAnimationFrame(tickInk);
  }

  function closeDetail() {
    if (!isOpen) return;
    isOpen = false;
    if (inkRaf) {
      cancelAnimationFrame(inkRaf);
      inkRaf = 0;
    }

    const activeTape = getActiveTape();
    const rect = activeTape.cv.getBoundingClientRect();
    const top = Math.max(0, rect.top);
    const right = Math.max(0, W - rect.right);
    const bottom = Math.max(0, H_vp - rect.bottom);
    const left = Math.max(0, rect.left);
    const ox = rect.left + rect.width / 2;
    const oy = rect.top + rect.height / 2;

    detail.style.transformOrigin = `${ox}px ${oy}px`;

    if (sheetAnim) sheetAnim.cancel();
    sheetAnim = detail.animate(
      [
        {
          clipPath: 'inset(0px 0px 0px 0px round 0px)',
          transform: 'rotate(0deg)',
        },
        {
          clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round 3px)`,
          transform: 'rotate(-4.5deg)',
        },
      ],
      {
        duration: reducedMotion ? 1 : 850,
        easing: 'cubic-bezier(.76,0,.18,1)',
        fill: 'both',
      }
    );

    sheetAnim.onfinish = () => {
      if (!isOpen) {
        detail.style.visibility = 'hidden';
        detail.style.pointerEvents = 'none';
        if (sheetAnim) {
          sheetAnim.cancel();
          sheetAnim = null;
        }
        lineAnims.forEach((a) => a.cancel());
        lineAnims = [];
      }
    };
  }

  // Controls & Inputs
  playRing.addEventListener('click', () => {
    openDetail();
  });
  playRing.addEventListener('pointerenter', () => {
    overPlayRing = true;
  });
  playRing.addEventListener('pointerleave', () => {
    overPlayRing = false;
  });

  detailClose.addEventListener('click', () => {
    closeDetail();
  });

  dWatch.addEventListener('click', () => {
    const origText = 'WATCH THE FILM / 映画を見る';
    dWatch.textContent = `PLAYING REEL — ${FILMS[active].title.toUpperCase()}`;
    window.setTimeout(() => {
      dWatch.textContent = origText;
    }, 2000);
  });

  backLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpen) {
      closeDetail();
    } else {
      // Jump to Noon in Ashes (index 5) by shortest way
      const cur = ((Math.round(T) % 12) + 12) % 12;
      let diff = (5 - cur) % 12;
      if (diff > 6) diff -= 12;
      if (diff < -6) diff += 12;
      T = Math.round(T) + diff;
    }
  });

  document.querySelectorAll<HTMLAnchorElement>('.social-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

  prevBtn.addEventListener('click', () => {
    if (isOpen) return;
    T = Math.round(T) - 1;
  });

  nextBtn.addEventListener('click', () => {
    if (isOpen) return;
    T = Math.round(T) + 1;
  });

  // Decade tabs click
  const DECADE_FIRST: Record<string, number> = {
    all: 0,
    '1950s': 0,
    '1960s': 1,
    '1970s': 5,
    '1980s': 9,
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (isOpen) return;
      const key = btn.dataset.decade || 'all';
      const targetIdx = DECADE_FIRST[key] ?? 0;
      const cur = ((Math.round(T) % 12) + 12) % 12;
      let diff = (targetIdx - cur) % 12;
      if (diff > 6) diff -= 12;
      if (diff < -6) diff += 12;
      T = Math.round(T) + diff;
    });
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isOpen) {
        e.preventDefault();
        closeDetail();
      }
      return;
    }
    if (isOpen) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      T = Math.round(T) - 1;
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      T = Math.round(T) + 1;
    } else if (e.key === 'Enter' && (document.activeElement === document.body || document.activeElement === document.documentElement)) {
      e.preventDefault();
      openDetail();
    }
  });

  // Wheel input
  window.addEventListener(
    'wheel',
    (e) => {
      if (isOpen) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      T += (delta / (ws + gap)) * 0.5;
      if (wheelTimer !== null) window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        T = Math.round(T);
      }, 160);
    },
    { passive: true }
  );

  // Drag on shelf
  shelf.addEventListener('pointerdown', (e) => {
    if (isOpen || e.button !== 0) return;
    pointerDown = true;
    isDragging = false;
    suppressClick = false;
    dragStartX = e.clientX;
    dragStartT = T;
  });

  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;

    const target = e.target as HTMLElement | null;
    if (target) {
      const btnOrLink = target.closest('button, a');
      overBtn = Boolean(btnOrLink && btnOrLink !== playRing);
    } else {
      overBtn = false;
    }

    if (pointerDown && !isOpen) {
      const dx = e.clientX - dragStartX;
      if (!isDragging && Math.abs(dx) > 5) {
        isDragging = true;
        suppressClick = true;
      }
      if (isDragging) {
        T = dragStartT - dx / (ws + gap);
      }
    }
  });

  function endDrag() {
    if (!pointerDown) return;
    pointerDown = false;
    if (isDragging) {
      isDragging = false;
      T = Math.round(T);
      window.setTimeout(() => {
        suppressClick = false;
      }, 50);
    }
  }

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  window.addEventListener('resize', measure);
  measure();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      measure();
    });
  }

  // Main animation loop
  let lastTime = performance.now();

  function frame(now: number) {
    const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
    lastTime = now;

    // Spring
    if (reducedMotion) {
      s = T;
    } else {
      const k = isDragging ? 18 : 5.2;
      s += (T - s) * (1 - Math.exp(-k * dt));
      if (Math.abs(T - s) < 1e-4) {
        s = T;
      }
    }

    // Normalising if s drifts beyond +-4 full loops (48)
    if (Math.abs(s) > 48) {
      const shift = Math.trunc(s / 12) * 12;
      s -= shift;
      T -= shift;
      dragStartT -= shift;
    }

    // Caption active film check
    const curFilm = ((Math.round(s) % 12) + 12) % 12;
    if (curFilm !== active) {
      const dir = Math.sign(T - s) || 1;
      setActive(curFilm, dir);
    }

    // Tilt test
    const shelfCy = H_vp / 2;
    onCover =
      !isOpen &&
      Math.abs(T - s) < 0.3 &&
      Math.abs(mx - W / 2) < 0.55 * d &&
      Math.abs(my - shelfCy) < 0.55 * H;

    let targetTiltY = 0;
    let targetTiltX = 0;
    if (onCover) {
      targetTiltY = ((mx - W / 2) / (0.55 * d)) * 9;
      targetTiltX = -((my - shelfCy) / (H / 2)) * 6;
    } else {
      targetTiltY = ((mx - W / 2) / W) * 5;
      targetTiltX = 0;
    }

    if (reducedMotion) {
      tiltY = targetTiltY;
      tiltX = targetTiltX;
    } else {
      const tiltEase = 1 - Math.exp(-7 * dt);
      tiltY += (targetTiltY - tiltY) * tiltEase;
      tiltX += (targetTiltX - tiltX) * tiltEase;
    }

    // Update all 36 tapes
    const cullLimit = W / 2 + 1.5 * d;
    const liftEase = reducedMotion ? 1 : 1 - Math.exp(-12 * dt);

    for (let idx = 0; idx < 36; idx++) {
      const t = tapes[idx];
      const r = relIndex(t.v, s);
      const x = r * (ws + gap) + (d - ws + 1.6 * gap) * B(r);

      if (Math.abs(x) > cullLimit) {
        if (t.el.style.visibility !== 'hidden') {
          t.el.style.visibility = 'hidden';
        }
        continue;
      }

      if (t.el.style.visibility !== 'visible') {
        t.el.style.visibility = 'visible';
      }

      const liftTarget = hover === t.v && Math.abs(r) > 0.5 && !isOpen ? 1 : 0;
      t.lift += (liftTarget - t.lift) * liftEase;

      const u = Math.max(0, 1 - Math.abs(r));
      const o = smoothstep(u);

      const rotY = -90 * o + tiltY * o;
      const rotX = tiltX * o;
      const rotZ = -4.5 * o;
      const tz = o * 0.2 * H;
      const ty = -o * 0.025 * H - t.lift * 0.045 * H;

      t.el.style.transform = `translate3d(${x.toFixed(2)}px, ${ty.toFixed(2)}px, ${tz.toFixed(2)}px) rotateZ(${rotZ.toFixed(3)}deg) rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg)`;
      t.el.style.zIndex = String(Math.round(100 - Math.abs(r) * 4));
      t.sp.style.setProperty('--shade', (o * 0.55).toFixed(3));
      t.cv.style.setProperty('--shade', ((1 - o) * 0.5).toFixed(3));
    }

    // Play ring position and scale
    const playLeft = W / 2 - 0.5 * d - 6;
    const playTop = shelfCy + 0.36 * H;
    const playScale = isOpen ? 0 : smoothstep(Math.max(0, 1 - Math.abs(T - s) * 3));
    playRing.style.left = `${playLeft.toFixed(1)}px`;
    playRing.style.top = `${playTop.toFixed(1)}px`;
    playRing.style.transform = `scale(${playScale.toFixed(3)})`;

    // Custom cursor smoothing and state
    const curEase = reducedMotion ? 1 : 1 - Math.exp(-16 * dt);
    cx += (mx - cx) * curEase;
    cy += (my - cy) * curEase;
    cursor.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;

    let curState = 'cursor';
    if (isOpen) {
      if (overBtn) curState = 'cursor btn';
    } else if (overBtn) {
      curState = 'cursor btn';
    } else if (onCover || overPlayRing) {
      curState = 'cursor open';
    } else if (hover !== -1 && Math.abs(relIndex(hover, s)) > 0.5) {
      curState = 'cursor spine';
    }
    if (cursor.className !== curState) {
      cursor.className = curState;
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
