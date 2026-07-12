function getWhatsAppUrl() {
  const text = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

function applySiteConfig() {
  document.querySelectorAll('[data-link="whatsapp"]').forEach((link) => {
    link.href = getWhatsAppUrl();
  });

  document.querySelectorAll('[data-link="waitlist"]').forEach((link) => {
    link.href = SITE_CONFIG.googleFormUrl;
  });

  document.querySelectorAll('[data-config="copyright-year"]').forEach((el) => {
    el.textContent = SITE_CONFIG.copyrightYear;
  });

  document.querySelectorAll('[data-config="cta-text"]').forEach((el) => {
    el.textContent = SITE_CONFIG.ctaText;
  });

  document.querySelectorAll('[data-config="privacy-email"]').forEach((el) => {
    el.textContent = SITE_CONFIG.privacyEmail;
    if (el.tagName === 'A') {
      el.href = `mailto:${SITE_CONFIG.privacyEmail}`;
    }
  });
}

applySiteConfig();

// Animate demo chat on scroll
const resultBubble = document.getElementById('result-bubble');

if (resultBubble) {
  const chatObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          chatObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  chatObserver.observe(resultBubble);
}

// Scroll reveal animations
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Track WhatsApp CTA clicks
document.querySelectorAll('[data-link="whatsapp"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (typeof window.cfBeacon !== 'undefined') {
      window.cfBeacon('whatsapp_cta_click');
    }
  });
});
