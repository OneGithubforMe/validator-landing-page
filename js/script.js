function deletionMailto() {
  const email = SITE_CONFIG.privacyEmail;
  const subject = encodeURIComponent(SITE_CONFIG.deletionEmailSubject);
  const body = encodeURIComponent(SITE_CONFIG.deletionEmailBody);
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function applySiteConfig() {
  document.querySelectorAll('[data-link="play-store"]').forEach((link) => {
    link.href = SITE_CONFIG.playStoreUrl;
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

  document.querySelectorAll('[data-link="deletion-email"]').forEach((link) => {
    link.href = deletionMailto();
  });
}

try {
  applySiteConfig();
} catch (_error) {
  // Leave the HTML hrefs and visible copy in place if config is missing.
}

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
