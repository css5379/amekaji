(() => {
  const OUTFITS = {
    kimchikaji: {
      title: '김치카지 데일리',
      items: [
        { slot: '상의', name: 'Uniform Bridge 헤비웨이트 포켓 티', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'Espionage 퍼티그 팬츠 (올리브)', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: 'Converse Chuck 70 / Red Wing 875', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=480&h=600&fit=crop&q=80' },
      ],
    },
    'fatigue-core': {
      title: '퍼티그 코어 룩',
      items: [
        { slot: '상의', name: "orSlow 2-Pack 포켓 티 (화이트)", image: 'https://images.unsplash.com/photo-1583743814966-6a8c6a994298?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'Uniform Bridge US Army 퍼티그', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: 'Red Wing 875 Moc Toe', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=480&h=600&fit=crop&q=80' },
      ],
    },
    'denim-workwear': {
      title: '데님 워크웨어',
      items: [
        { slot: '상의', name: 'Warehouse Lot 4601 포켓 티', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'orSlow 107 Ivy Fit 데님', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: 'Red Wing 8111 / Paraboot Michael', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=480&h=600&fit=crop&q=80' },
      ],
    },
    'ivy-clean': {
      title: '클린 아이비룩',
      items: [
        { slot: '상의', name: 'BEAMS PLUS 루프휠 포켓 티', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'BEAMS PLUS 레귤러 치노 (베이지)', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: 'Paraboot Michael / 로퍼', image: 'https://images.unsplash.com/photo-1533860877043-99f83c0139ca?w=480&h=600&fit=crop&q=80' },
      ],
    },
    'vintage-denim': {
      title: '빈티지 데님 룩',
      items: [
        { slot: '상의', name: "The Real McCoy's 루프휠 포켓 티", image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'Warehouse DD-1001XX (인디고)', image: 'https://images.unsplash.com/photo-1604172384002-4b6b0a5f2a8b?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: "Red Wing 9011 / White's Boots", image: 'https://images.unsplash.com/photo-1638247025962-f4e9f956b6e0?w=480&h=600&fit=crop&q=80' },
      ],
    },
    'summer-military': {
      title: '서머 밀리터리',
      items: [
        { slot: '상의', name: 'Espionage 루프휠 포켓 티', image: 'https://images.unsplash.com/photo-1581655353567-df495f94b3ff?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'orSlow OG-107 퍼티그 (라이트 워시)', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: 'Birkenstock / New Balance 990', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=480&h=600&fit=crop&q=80' },
      ],
    },
    'chino-casual': {
      title: '치노 캐주얼',
      items: [
        { slot: '상의', name: 'Stüssy 베이직 로고 티', image: 'https://images.unsplash.com/photo-1583743814966-6a8c6a994298?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'Uniform Bridge 치노 팬츠 (카키)', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: 'Vans Old Skool / Nike Dunk', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=480&h=600&fit=crop&q=80' },
      ],
    },
    'wide-denim': {
      title: '와이드 데님 룩',
      items: [
        { slot: '상의', name: 'Uniform Bridge 오버핏 포켓 티', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=480&h=600&fit=crop&q=80' },
        { slot: '하의', name: 'orSlow Wide Denim (라이트 워시)', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=480&h=600&fit=crop&q=80' },
        { slot: '신발', name: 'Salomon XT-6 / New Balance 2002R', image: 'https://images.unsplash.com/photo-1600185365926-3a8ce9cdb7db?w=480&h=600&fit=crop&q=80' },
      ],
    },
  };

  const modal = document.createElement('div');
  modal.className = 'outfit-modal';
  modal.id = 'outfitModal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="outfit-modal__backdrop" data-close></div>
    <div class="outfit-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="outfitModalTitle">
      <button type="button" class="outfit-modal__close" data-close aria-label="닫기">&times;</button>
      <p class="outfit-modal__label">OUTFIT PREVIEW</p>
      <h3 class="outfit-modal__title" id="outfitModalTitle"></h3>
      <p class="outfit-modal__note">참고용 스타일 이미지입니다. 실제 상품과 다를 수 있습니다.</p>
      <div class="outfit-modal__grid"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const titleEl = modal.querySelector('.outfit-modal__title');
  const gridEl = modal.querySelector('.outfit-modal__grid');
  let lastFocus = null;

  function openModal(outfitId) {
    const outfit = OUTFITS[outfitId];
    if (!outfit) return;

    lastFocus = document.activeElement;
    titleEl.textContent = outfit.title;
    gridEl.innerHTML = outfit.items.map(item => `
      <figure class="outfit-modal__item">
        <div class="outfit-modal__thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="240" height="300">
        </div>
        <figcaption>
          <span class="outfit-modal__slot">${item.slot}</span>
          <span class="outfit-modal__name">${item.name}</span>
        </figcaption>
      </figure>
    `).join('');

    modal.hidden = false;
    document.body.classList.add('outfit-modal-open');
    modal.querySelector('.outfit-modal__close').focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('outfit-modal-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  document.querySelectorAll('.outfit-card__visual[data-outfit]').forEach(trigger => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.outfit));
  });

  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', e => {
    if (!modal.hidden && e.key === 'Escape') closeModal();
  });
})();
