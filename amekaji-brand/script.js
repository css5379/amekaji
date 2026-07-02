(() => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinksLeft = document.getElementById('navLinks');
  const levelTabs = document.getElementById('levelTabs');
  const brandGrid = document.getElementById('brandGrid');
  const productTabs = document.getElementById('productTabs');
  const productCategories = document.getElementById('productCategories');

  // Nav scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu
  function closeMenu() {
    navLinksLeft.classList.remove('nav__links--open');
    navToggle.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '1';
    });
  }

  navToggle.addEventListener('click', () => {
    const open = !navLinksLeft.classList.contains('nav__links--open');
    navLinksLeft.classList.toggle('nav__links--open', open);
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  navLinksLeft.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Hero background video — skip intro/outro logo title cards
  const heroVideo = document.querySelector('.hero__video');
  const heroVideoWrap = document.querySelector('.hero__video-wrap');
  if (heroVideo && heroVideoWrap) {
    const LOGO_SEGMENT_RATIO = 0.14;

    const getContentRange = () => {
      const duration = heroVideo.duration;
      if (!Number.isFinite(duration) || duration <= 0) return null;
      return {
        start: duration * LOGO_SEGMENT_RATIO,
        end: duration * (1 - LOGO_SEGMENT_RATIO),
      };
    };

    const revealVideo = () => {
      heroVideoWrap.classList.add('hero__video-wrap--ready');
    };

    const jumpToContent = () => {
      const range = getContentRange();
      if (!range) return;
      if (heroVideo.currentTime < range.start || heroVideo.currentTime >= range.end) {
        heroVideo.currentTime = range.start;
        return;
      }
      revealVideo();
    };

    heroVideo.addEventListener('loadedmetadata', () => {
      jumpToContent();
      heroVideo.play().catch(() => heroVideo.removeAttribute('autoplay'));
    });

    heroVideo.addEventListener('seeked', jumpToContent);

    heroVideo.addEventListener('timeupdate', () => {
      const range = getContentRange();
      if (!range) return;
      if (heroVideo.currentTime >= range.start && heroVideo.currentTime < range.end) {
        revealVideo();
      }
      if (heroVideo.currentTime >= range.end - 0.04) {
        heroVideo.currentTime = range.start;
      }
    });

    heroVideo.play().catch(() => heroVideo.removeAttribute('autoplay'));
  }

  // Ranking tabs (visual toggle)
  document.querySelectorAll('.ranking-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ranking-tab').forEach(t => t.classList.remove('ranking-tab--active'));
      tab.classList.add('ranking-tab--active');
    });
  });

  // Brand level filter
  levelTabs.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (!tab) return;

    levelTabs.querySelectorAll('.tab').forEach(t => t.classList.remove('tab--active'));
    tab.classList.add('tab--active');

    const level = tab.dataset.level;
    brandGrid.querySelectorAll('.brand-card').forEach(card => {
      const show = level === 'all' || card.dataset.level === level;
      card.classList.toggle('brand-card--hidden', !show);
    });
  });

  // Product category filter
  productTabs.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (!tab) return;

    productTabs.querySelectorAll('.tab').forEach(t => t.classList.remove('tab--active'));
    tab.classList.add('tab--active');

    const cat = tab.dataset.cat;
    productCategories.querySelectorAll('.product-category').forEach(group => {
      const show = cat === 'all' || group.dataset.cat === cat;
      group.classList.toggle('product-category--hidden', !show);
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll(
    '.trend-card, .brand-card, .card-link, .style-card, .step, .intro__card, .compare, .essentials, .section__header, .product-category, .product-card, .outfit-card, .editorial, .membership'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();
