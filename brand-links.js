(() => {
  // 공식 홈페이지·스토어 (404·접속 불가 URL 제외, 검증된 대표 URL만 사용)
  const BRAND_LINKS = {
    levis: 'https://levi.co.kr',
    orslow: 'https://www.orslow.jp',
    warehouse: 'https://ware-house.co.kr',
    fullcount: 'https://fullcount-online.com',
    ironheart: 'https://www.ironheartamerica.com',
    uniformbridge: 'https://uniformbridge.co.kr',
    samurai: 'https://www.samurai-jeans.com',
    realmccoys: 'https://www.therealmccoys.com',
    espionage: 'https://www.espionage.co.kr',
    beamsplus: 'https://www.beams.co.jp',
    engineeredgarments: 'https://engineeredgarments.com',
    outstanding: 'https://www.musinsa.com/brands/outstanding',
    carhartt: 'https://www.carhartt-wip.co.kr',
    frizmworks: 'https://www.musinsa.com/brands/frizmworks',
    stussy: 'https://www.stussy.com',
    needles: 'https://www.musinsa.com/brands/needles',
    buzzricksons: 'https://www.buzzricksons.jp',
    visvim: 'https://www.visvim.com',
    kapital: 'https://kapital.jp',
  };

  const BRAND_KEYWORDS = [
    ['더 리얼 맥코이', 'realmccoys'],
    ['엔지니어드 가먼츠', 'engineeredgarments'],
    ['사무라이 진즈', 'samurai'],
    ['유니폼브릿지', 'uniformbridge'],
    ['에스피오나지', 'espionage'],
    ['빔즈 플러스', 'beamsplus'],
    ['아이언하트', 'ironheart'],
    ['아웃스탠딩', 'outstanding'],
    ['오어슬로우', 'orslow'],
    ['웨어하우스', 'warehouse'],
    ['풀카운트', 'fullcount'],
    ['칼하트 WIP', 'carhartt'],
    ['리바이스', 'levis'],
  ];

  const EN_BRAND_MAP = {
    'Uniform Bridge': 'uniformbridge',
    'Espionage': 'espionage',
    'Frizmworks': 'frizmworks',
    'Outstanding': 'outstanding',
    'Carhartt WIP': 'carhartt',
    'Stüssy': 'stussy',
    'BEAMS PLUS': 'beamsplus',
    'orSlow': 'orslow',
    'Engineered Garments': 'engineeredgarments',
    'Warehouse & Co.': 'warehouse',
    'Fullcount': 'fullcount',
    'Needles': 'needles',
    "The Real McCoy's": 'realmccoys',
    "Buzz Rickson's": 'buzzricksons',
    'Iron Heart': 'ironheart',
    'Visvim': 'visvim',
    'Kapital': 'kapital',
    'Samurai Jeans': 'samurai',
  };

  function slugFromProductCard(card) {
    const brandText = card.querySelector('.product-card__brand')?.textContent || '';
    for (const [keyword, slug] of BRAND_KEYWORDS) {
      if (brandText.includes(keyword)) return slug;
    }
    return null;
  }

  function slugFromBrandCard(card) {
    const en = card.querySelector('.brand-card__en')?.textContent.trim();
    return EN_BRAND_MAP[en] || null;
  }

  function makeCardLink(card, url, type) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = `${card.className} card-link card-link--${type}`;
    link.setAttribute('aria-label', `${card.querySelector('h3')?.textContent || '브랜드'} 공식 스토어로 이동`);

    [...card.attributes].forEach(({ name, value }) => {
      if (name !== 'class') link.setAttribute(name, value);
    });

    link.innerHTML = card.innerHTML;

    const cta = document.createElement('span');
    cta.className = 'card-link__cta';
    cta.textContent = type === 'product' ? '구매하러 가기 →' : '공식 스토어 →';

    if (type === 'product') {
      link.querySelector('.product-card__body')?.appendChild(cta);
    } else {
      link.appendChild(cta);
    }

    card.replaceWith(link);
  }

  document.querySelectorAll('.product-card').forEach(card => {
    const slug = slugFromProductCard(card);
    const url = slug ? BRAND_LINKS[slug] : null;
    if (url) makeCardLink(card, url, 'product');
  });

  document.querySelectorAll('.brand-card').forEach(card => {
    const slug = slugFromBrandCard(card);
    const url = slug ? BRAND_LINKS[slug] : null;
    if (url) makeCardLink(card, url, 'brand');
  });
})();
